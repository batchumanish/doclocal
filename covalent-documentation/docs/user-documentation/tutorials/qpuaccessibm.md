---
displayed_sidebar: tutorialSidebar
title: Accessing IBM Quantum
---

import Goto from '/src/components/Goto.js';

# Accessing IBM Quantum <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/tutorials/5_QPUAccessIBM/source.ipynb"/>

Register for a free account at https://quantum-computing.ibm.com/ and copy your API token from the IBM Quantum Dashboard (first page on login).

Set an environment variable by pasting your token, for example:

```
    export IBM_QUANTUM_TOKEN="123456789qwertyuiopzxcvbnmasdfghjkl"
```

We also need to install and import `covalent`, along with the other requirements below

```python
with open("./requirements.txt", "r") as file:
    for line in file:
        print(line.rstrip())
```

    covalent
    qiskit==0.40.0
    qiskit-ibm-runtime==0.8.0

# Evaluating a circuit inside an Electron

```python
import os

import covalent as ct
from qiskit import QuantumCircuit
from qiskit.compiler import transpile
from qiskit.quantum_info import SparsePauliOp
from qiskit_ibm_runtime import Estimator, QiskitRuntimeService, Session
```

Define a simple circuit and use it inside a task.

```python
def _circuit(phi_z: float, phi_y: float):
    """create and return a basic qiskit circuit"""
    qc = QuantumCircuit(2)
    qc.rz(phi_z, 0)
    qc.cnot(0, 1)
    qc.ry(phi_y, 1)
    return qc


@ct.electron(deps_pip=ct.DepsPip(["qiskit==0.40.0"]))
def evaluate_circuit(phi_z: float, phi_y: float, token: str, shots=100):
    QiskitRuntimeService.save_account(channel="ibm_quantum",
                                      token=token,
                                      instance="hub/group/project",
                                      overwrite=True)

    with Session(service=QiskitRuntimeService(), backend="ibm_nairobi"):
        estimator = Estimator()
        return estimator.run(circuits=_circuit(phi_z, phi_y),
                             observables=[SparsePauliOp("IZ")],
                             shots=shots).result()
```

Next, define a workflow that uses this task. A minimal example is shown below.

```python
@ct.lattice
def test(token: str):
    """a very basic, single-electron workflow"""
    return evaluate_circuit(0.1, 0.2, token)
```

Finally, dispatch the workflow using `ct.dispatch` and pass the IBM Quantum token from our local environment.

```python
# run this cell to dispatch the workflow

token = os.environ["IBM_QUANTUM_TOKEN"]  # get token from local environment

dispatch_id = ct.dispatch(test)(token)
print(f"\n{dispatch_id}")

workflow_result = ct.get_result(dispatch_id, wait=True)
print(workflow_result.result)
```
