---
displayed_sidebar: tutorialSidebar
title: Defining Custom Selector for a Quantum Cluster 
---
import selectorimg from '@site/static/img/QElectronAssets/selector_ui.png';
import selectorgif from '@site/static/img/QElectronAssets/selectors_ui.gif';


## Required Selector Interface

A purpose of a QCluster’s `selector` is to choose an executor (an instance of `BaseQExecutor`) for each submitted circuit (a Pennylane `QuantumScript`). 

Any valid selector function must accept two arguments and return a single executor.

```python
def custom_selector(
    qscript: QuantumScript,
    executors: List[BaseQExecutor]
) -> BaseQExecutor:

    # selection logic here
    ...
    # return executor
```

Furthermore, a valid selector function must be [picklable](https://docs.python.org/3/library/pickle.html).

It is also permissible to define a *stateful* selector class, so long as it implements a `__call__` method with the required signature.

```python
class MyStatefulSelector:
	"""A clone of the built-in `"cyclic"` selector"""

    def __init__(self, start: int):
		self.counter = start  # state variable

	# Implements the required interface.
	def __call__(self, qscript, executors):
		selection = executors[self.counter % len(executors)]
		self.counter += 1
		return selection
		
```

Statefulness can also be achieved by using [function attributes](https://peps.python.org/pep-0232/#examples) on a selector function.

## Circuit-Specific Selector Example

Note that `MyStatefulSelector` ignores the `qscript` argument of its `__call__` method. This is fine if cycling through executors for every submitted circuit is the desired behaviour. To achieve *circuit-specific* behaviour, however, the selection logic must depend on the `qscript` argument.

For example, the following code defines a selector (`custom_selector`) that chooses between two simulators based on the minimum number of qubits required to execute the `qscript`.

```python
import covalent as ct

DEVICE_WIRES = 10

# Initialize thread- and process-based simulators.
SIMULATORS = [
    ct.executor.Simulator(parallel="thread"),
    ct.executor.Simulator(parallel="process"),
]

def custom_selector(qscript, executors):
	"""
    Picks process-based executor iff more than half of the
    device's wires are used in the quantum script.
    """

    wire_limit = DEVICE_WIRES // 2

    # Choose based on minimum number of qubits.
    if qscript.specs["num_used_wires"] > wire_limit:
        parallel = "process"
    else:
        parallel = "thread"

    # Grab the first matching executor.
    selection = next(
        filter(lambda ex: ex.parallel == parallel, executors),
        executors[-1],  # default to avoid error
    )

    print(f"selected {selection.parallel}-based simulator")

    return selection
```

A QElectron (`circuit`) that uses the above is then defined in the usual way, by decorating a `QNode`.

```python
import pennylane as qml

dev = qml.device("default.qubit", wires=DEVICE_WIRES)

@ct.qelectron(executors=SIMULATORS, selector=custom_selector)
@qml.qnode(dev)
def circuit(features, weights, wires):
    qml.QAOAEmbedding(features, weights, wires)

	# Return probs of used wires only.
    return qml.probs(wires=range(weights.shape[1] // 2))
```

Here, calling `circuit` applies a variable-width embedding, depending on the `wires` argument, which is precisely the value of `"num_used_wires"` in the `qscript.specs` dictionary.

The QElectron therefore exhibits the following behaviour.

```python
from pennylane import numpy as np

def run_selector_test():
	"""Run the circuit with embedding width = 3, 4, 5, 6, 7, 8."""
    for embed_width in range(3, 9):

        shape = qml.QAOAEmbedding.shape(n_layers=1, n_wires=embed_width)
        weights = np.random.uniform(0, 2 * np.pi, size=shape)
				features = [.1, .2, .3]

        circuit(features, weights, wires=range(embed_width))
```

```python
>>> run_selector_test()
selected thread-based simulator
selected thread-based simulator
selected thread-based simulator
selected process-based simulator
selected process-based simulator
selected process-based simulator
```

With a quick modification, we can run the above inside a Covalent workflow to demonstrate QElectron integration with the Covalent UI. Classical electrons containing quantum electrons have a circular icon in their node indicating existence of **atleast** one quantum electron call inside of them.  

```python
# Covalent pattern for a minimal, one-node workflow.

@ct.lattice
@ct.electron
def run_selector_test():
	"""Run the circuit with embedding width = 3, 4, 5, 6, 7, 8."""
    for embed_width in range(3, 9):

        shape = qml.QAOAEmbedding.shape(n_layers=1, n_wires=embed_width)
        weights = np.random.uniform(0, 2 * np.pi, size=shape)
				features = [.1, .2, .3]

        circuit(features, weights, wires=range(embed_width))

# Dispatch the workflow.
dispatch_id = ct.dispatch(run_selector_test)()
```
<img src={selectorgif} style={{marginTop:'30px'}}/>

<img src={selectorimg} style={{marginTop:'30px'}}/>