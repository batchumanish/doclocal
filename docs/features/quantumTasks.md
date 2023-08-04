---
displayed_sidebar: tutorialSidebar
title: Distributed Quantum Circuits with Quantum Electrons
---

import ReactMarkdown from 'react-markdown';
import quantamtaskshero from '@site/static/img/QElectronAssets/qelectron for docs2.png';
import settingsui from '@site/static/img/QElectronAssets/settings_ui.png';



Covalent Quantum Electrons (QElectrons) mark a unique development in the quantum computing software stack. QElectrons facilitate scalable, concurrent, and distributed execution of circuit calculations. As an extension of Covalent's orchestration capabilities, QElectrons provide granular control over quantum resources within standard workflow Electrons, mirroring the functionality provided for classical resources. This system brings observability, caching, monitoring, and other useful features from scalable classical machine learning stacks into the quantum context.

Designed to ease the integration of quantum tasks into production-level workflows, QElectrons provide a robust framework for efficiently building, managing, and scaling quantum workflows. Whether orchestrating a large-scale quantum computation or running hybrid quantum-classical algorithms, [QElectrons](#qelectron-basics) equip users with the tools necessary to optimize quantum tasks. This intuitive approach simplifies workflow management, letting users to concentrate on the details of their quantum algorithms, while easing the process of quantum resource management.

<img src={quantamtaskshero}/>

### Benefits

Before diving into the details, let’s summarize some key features.

- **Flexible Hybrid Computation:** By using [QElectrons](/docs/user-documentation/api-reference/workflow-components#qelectron) inside Electrons, users can easily execute quantum and classical sub-tasks on arbitrary backends. This flexibility enables efficient and effective hybrid algorithms by allowing for seamless integration of different classical compute resources; including AWS, GCP, Azure, and even on-premise systems like high-performance computing (HPC) clusters.
- **Quantum Resource Clustering:** Users can leverage the power of multiple quantum computers by forming Quantum Clusters across different resource providers. This lets users distribute their quantum tasks over a range of vendor machines for faster and more efficient execution.
- **Custom Quantum Scheduling:** Using [Quantum Clusters](/docs/user-documentation/api-reference/workflow-components#quantum-clusters) also let users write their own scheduling or selector algorithms for QElectrons. This means users can dynamically choose which circuits go where, just in time. A [user-friendly UX](/docs/user-documentation/how-to/how-to-define#circuit-specific-selector-example) allows for optimal allocation of resources on a circuit-by-circuit basis.
- **Asynchronous Circuit Execution:** QElectrons introduces non-blocking calls to [Pennylane quantum circuits](https://docs.pennylane.ai/en/stable/introduction/circuits.html). This enables the initiation of multiple circuit executions without the need to wait for results, streamlining the process and improving overall computational efficiency.
- **Caching and Reproducibility:** QElectrons expand Covalent’s data caching to include quantum resources. This means that results and metadata from costly QPU calls can be stored for re-use or detailed analysis at a later time. This feature not only enhances reproducibility but also optimizes resource utilization.
- **UI Integration:** Seamless integration with the Covalent UI brings task monitoring and data inspection to quantum resources.
- **Unified Token Management:** Covalent simplifies the task of token management by providing a single, user-friendly interface. This feature allows users to effortlessly maintain all their vendor specific tokens in one place.

### QElectron Basics

QElectrons are accessed through the `@ct.qelectron` decorator, which functions like a wrapper for Pennylane’s `QNode`. For example, the following code uses a `QiskitExecutor` instance to execute a QElectron on *Qiskit Runtime*. See the [Quantum Executors](/docs/features/quantumTasks#quantum-executors) section for more information.

```python
import random
import covalent as ct
import pennylane as qml

# Define a Qiskit Runtime executor.
qiskit_sampler = ct.executor.QiskitExecutor(
		device="sampler",
		backend="ibmq_qasm_simulator",
		single_job=False,
)

# Create a QElectron that executes on Qiskit Runtime.
@ct.qelectron(executors=qiskit_sampler)
@qml.qnode(qml.device("default.qubit", wires=2, shots=1024))
def circuit(x):
    qml.RX(x, wires=0)
    qml.Hadamard(wires=1)
    qml.CNOT(wires=[0, 1])
    return qml.expval(qml.PauliY(0))
```

Despite the familiar interface, two important points distinguish a [QElectron](/docs/user-documentation/concepts/covalent-basics#quantum-electron) from a workflow [Electron](/docs/user-documentation/concepts/covalent-basics/#electron).

1. QElectrons, for now, always decorate a Pennylane `QNode`.

:::info Note
Using Pennylane is not a prerequisite for all quantum workflows in Covalent. However, to utilize QElectron features such as Quantum Clusters, Pennylane is required. Traditional Qiskit and other circuits can still be used as simple classical tasks inside Electrons as [demonstrated here](/docs/user-documentation/tutorials/qpuaccessibm).
:::

2. [QElectrons](/docs/user-documentation/api-reference/workflow-components#qelectron) can be used inside Electrons, but they are not workflow tasks themselves.

### Workflow Example

The minimal Covalent workflow below uses the QElectron `circuit()` (declared above) inside the task `run_qiskit_experiment()`. Using the `qiskit_sampler` Quantum Executor, this workflow runs six random circuits concurrently on the `"ibmq_qasm_simulator"`.

```python
# Create Electrons for a simple workflow.
@ct.electron
def generate_rand_input():
    return random.uniform(0, 3.14159)

@ct.electron
def run_qiskit_experiment(x):
    # Workflow task that uses the `circuit` QElectron.
    return circuit(x)

@ct.lattice
def workflow():
    results = []
		
	# Six independent experiments.
    for _ in range(6):
        x = generate_rand_input()
        results.append(run_qiskit_experiment(x))

    return results

# Dispatch workflow.
dispatch_id = ct.dispatch(workflow)()
print(dispatch_id)
results = ct.get_result(dispatch_id, wait=True).result
```

[QElectrons](/docs/user-documentation/api-reference/workflow-components#qelectron) themselves can also handle a simpler use case than one above. For example, the QElectron’s `run_later()` method can be used to asynchronously evaluate multiple circuits.

```python
# Immediately submit 6 circuits for concurrent execution.
futures = [circuit.run_later(generate_rand_input()) for _ in range(6)]

# Retrieve results as required.
results = [future.result() for future in futures]

# NOTE: Users can multiply this by using the patten inside multiple Electron.
```

### Quantum Executors

One or more Quantum Executors can be passed to the `@ct.qelectron` decorator via the `executors` argument. Multiple executors are specified by using [Quantum Clusters](/docs/features/quantumTasks#quantum-clusters).

If no executors are specified, the thread-based local [`Simulator`](/docs/user-documentation/api-reference/executors/simulator) is used by default. This means that the following cases are equivalent:

```python
# Case 1 - default local QElectron.
@ct.qelectron
@qml.qnode(dev)
def circuit(x):
    ...

# Case 2 - equivalent local QElectron.
simulator_exec = ct.executors.Simulator(parallel="thread", workers=10)

@ct.qelectron(executors=simulator_exec)
@qml.qnode(dev)
def circuit(x):
    ...
```

Using a [`QiskitExecutor`](/docs/user-documentation/api-reference/executors/qiskit) lets the QElectron send circuits to *Qiskit Runtime*, to be executed on IBM Quantum systems and simulators. The `QiskitExecutor` also supports a local mode of operation.

```python
# Execute on "ibmq_quito" using Qiskit Runtime's `Sampler` primitive.
qiskit_exec_quito = ct.executor.QiskitExecutor(
    device="sampler",
    shots=1024,
		backend="ibmq_quito",
		ibmqx_token="<token>",  # can be omitted if declared in covalent config.
)

# Execute on "ibmq_manila" ...
qiskit_exec_manila = ct.executor.QiskitExecutor(
    device="sampler",
    shots=1024,
		backend="ibmq_manila",
		ibmqx_token="<token>",  # can be omitted ...
)

# Execute locally using Qiskit's `Sampler` primitive.
qiskit_exec_local = ct.executor.QiskitExecutor(
    device="local_sampler",
    shsots=1024,
)
```

Unlike the thread-based `Simulator`, the `QiskitExecutor` relies on `asyncio` for concurrency, giving us extreme scalability. Defaults for some of the settings above can also be specified using the Covalent UI.

<img src={settingsui}/>

### Quantum Clusters

Multiple Quantum Executors can be specified for a QElectron by using a [`ct.executor.QCluster`](/docs/user-documentation/api-reference/workflow-components#quantum-clusters) instance as the executor. A default `QCluster` is implicitly created if a *list* of [executors](/docs/user-documentation/api-reference/executors-api#quantum-executors) is passed to the `ct.qelectron`. Such a cluster will utilize the `"cyclic"` selector by default.

```python
# Create a QElectron with a `QCluster` executor.
@ct.qelectron(executors=[qiskit_exec_quito, qiskit_exec_manila])
@qml.qnode(dev)
def circuit(x):
    ...
```

More explicitly, the previous code snippet is equivalent to the following.

```python
# Define a `QCluster` over the "ibmq_quito" and "ibmq_manila" backends.
qiskit_cluster = ct.executors.QCluster(
    executors=[qiskit_exec_quito, qiskit_exec_manila],
    selector="cyclic",
)

# Create a QElectron with a `QCluster` executor.
@ct.qelectron(executors=qiskit_cluster)
@qml.qnode(dev)
def circuit(x):
    ...
```

When using the QElectron, the selector is applied on both normal and asynchronous calls. For example, the behaviour of the `"cyclic"` selector on a list of two executors is shown below.

```python
>>> # normal
>>> result_1 = circuit(x1)  # circuit(s) submitted to "ibmq_quito"
                            # waiting for `result_1` ...

>>> # asynchronous
>>> future_1 = circuit.run_later(x1)  # circuit(s) submitted to "ibmq_manila"
>>> future_2 = circuit.run_later(x2)  # circuit(s) submitted to "ibmq_quito"

>>> result_1 = future_1.result()  # waiting for `result_1` ...
```

Valid string values correspond to *built-in* [`QCluster`](/docs/user-documentation/api-reference/workflow-components#quantum-clusters) selectors:


<table className="tables">
  <tr>
  </tr>
    <tr>
    <td><ReactMarkdown children='`“cyclic”`'/></td>
    <td><ReactMarkdown children='(default) a selector that cycles through the list of executors'/></td>
  </tr>
  <tr>
    <td><ReactMarkdown children='`“random”`'/></td>
    <td><ReactMarkdown children='a selector that randomly chooses an executor for each circuit'/></td>
  </tr>
</table>

Users can also apply *custom* selector logic to pick from a list of executors, on a per-circuit basis. A valid *callable* selector must accept two positional arguments (below) and return only one executor.

<table className="tables">
  <tr>
  </tr>
    <tr>
    <td><ReactMarkdown children='`qscript`'/></td>
    <td><ReactMarkdown children='a Pennylane `QuantumScript` that represent a single executable circuit.'/></td>
  </tr>
  <tr>
    <td><ReactMarkdown children='`executors`'/></td>
    <td><ReactMarkdown children='the list of Quantum Executors associated with the `QCluster` instance'/></td>
  </tr>
</table>

### Further Reading

- [Defining a Custom Selector for a Quantum Cluster](/docs/user-documentation/how-to/how-to-define)
- Tutorial on [Violating the CHSH Inequality on IBM Quantum Backends](/docs/user-documentation/tutorials/violating_the_chsh)