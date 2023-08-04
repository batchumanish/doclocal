---
title: IBMQ Executor
displayed_sidebar: tutorialSidebar
---

import Noindentation from '/src/components/Noindentation';

import ReactMarkdown from 'react-markdown';


import Quantum from '@site/static/img/QElectronAssets/quantum.svg';

<Quantum/>


This quantum executor accesses IBM Quantum backends through Pennylane's `"qiskit.ibmq"` [device](https://docs.pennylane.ai/projects/qiskit/en/latest/devices/ibmq.html). `IBMQExecutor` introduces thread-based parallelism for circuit execution on the "qiskit.ibmq" device. Note that the more efficient `QiskitExecutor` is recommended over `IBMQExecutor` for production use.

## 1. Installation

The IBMQ executor is included with Covalent. No additional installation is required.

## 2. Usage Example

Using IBMQExecutor requires specifying an IBM Quantum backend through the `backend` argument. The `ibmqx_token` is required if not specified in the configuration (see next section).

```py
import covalent as ct
import pennylane as qml

# IBMQ executor that uses "ibmq_qasm_simulator" (default).
ibmq_qasm = ct.executor.IBMQExecutor()

# IBMQ executor that uses the "ibmq_lima" QPU.
ibmq_lima = ct.executor.IBMQExecutor(
    backend="ibmq_lima",
    ibmqx_token="<token>",
)

@ct.qelectron(executors=[ibmq_qasm, ibmq_lima])
@qml.qnode(qml.device("default.qubit", wires=2, shots=1024), interface="jax")
def circuit(x):
    qml.IQPEmbedding(features=x, wires=[0, 1])
    qml.Hadamard(wires=1)
    return qml.probs(wires=range(2))
```

As a QElectron, the circuit can be called either normally or asynchronously using `circuit.run_later()`. With the default `"cyclic"` selector, circuit calls will alternate between the executors, `[ibmq_qasm, ibmq_lima]`.

A synchronous example is shown below.

```py
>>> print(circuit([0.5, 0.1]))  # ibmq_qasm_simulator

DeviceArray([0.51660156, 0.00097656, 0.4814453 , 0.00097656], dtype=float32)

>>> print(circuit([0.5, 0.1]))  # ibmq_lima

DeviceArray([0.5048828 , 0.00195312, 0.49316406, 0.        ], dtype=float32)

>>> print(circuit([0.5, 0.1]))  # ibmq_qasm_simulator (again)

DeviceArray([0.5097656 , 0.00292969, 0.4873047 , 0.        ], dtype=float32)
```

Doing this asynchronously:

```py
>>> x = [0.6, -1.57]

>>> # Queue jobs for all three circuit calls simultaneously on IBM Quantum.
>>> # Uses same executor order as above (qasm, lima, qasm, ...).
>>> futs = [circuit.run_later(x) for _ in range(3)]

>>> # Wait for all circuits to finish.
>>> [fut.result() for fut in futs]

[DeviceArray([0.51660156, 0.00097656, 0.4814453 , 0.00097656], dtype=float32),
 DeviceArray([0.5048828 , 0.00195312, 0.49316406, 0.        ], dtype=float32),
 DeviceArray([0.5097656 , 0.00292969, 0.4873047 , 0.        ], dtype=float32)]
```

## 3. Overview of Configuration
The `IBMQExecutor` configuration is found under `[qelectron.IBMQExecutor]` in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).

<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| backend | Yes         | ibm_qasm_simulator   | 	The name of an IBM Quantum system or simulator.  |
| ibmqx_token | Yes/No         |    | An access token obtained from IBM Quantum. Required for non-local execution. |
| hub | No         | ibm-q    | Hub name for IBM Quantum. |
| group | No          | open      | Group name for IBM Quantum. |
| project | No         | main    | Project name for IBM Quantum. |

</div>

## 4. Required Cloud Resources

In order to access IBM backends, users must acquire an access token from IBM Quantum. This can be done by creating a free account on the [IBM Quantum Experience](https://quantum-computing.ibm.com/).

----

#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.IBMQExecutor</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)</span> 

<div class="up fourteen space"><Noindentation md='A quantum executor that uses the Pennylane native `"qiskit.ibmq"` device to run circuits on IBM Quantum backends. The attributes `backend`, `ibmqx_token`, `hub`, `group`, and `project` are taken from the Covalent configuration file by default, if available.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Keyword Arguments:'/></div>

<div class="up  fourteen space"><Noindentation md= '- max_jobs - The maximum number of jobs that can be submitted to the backend concurrently. This number corresponds to the number of threads utilized by this executor. Defaults to 20.'/></div>

<div class="up  fourteen space"><Noindentation md= '- shots - The number of shots to use for the execution device. Overrides the `shots` value from the original device if set to `None` or a positive `int`. The shots setting from the original device is used by default, when this argument is 0.'/></div>

<div class=" up fourteen space down"><Noindentation md='- backend - The name of the IBM Quantum backend device. Defaults to "`ibmq_qasm_simulator`".'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- ibmqx_token - The IBM Quantum API token.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- hub: An IBM Quantum hub name. Defaults to `"ibm-q"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md=' - group: An IBM Quantum group name. Defaults to `"open"`.'/></div>
<div class=" doubleup fourteen space down"><Noindentation md=' - project: An IBM Quantum project name. Defaults to `"main"`.'/></div>

<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "IBMQExecutor",
   "description": "A quantum executor that uses the Pennylane native :code:`\"qiskit.ibmq\"` device to run\ncircuits on IBM Quantum backends. The attributes :code:`backend`, :code:`ibmqx_token`,\n:code:`hub`, :code:`group`, and :code:`project` are taken from the Covalent\nconfiguration file by default, if available.\n\nKeyword Args:\n    max_jobs: The maximum number of jobs that can be submitted to the backend\n        concurrently. This number corresponds to the number of threads utilized\n        by this executor. Defaults to 20.\n   shots: The number of shots to use for the execution device. Overrides the\n        :code:`shots` value from the original device if set to :code:`None` or\n        a positive :code:`int`. The shots setting from the original device is\n        is used by default, when this argument is 0.\n    backend: The name of the IBM Quantum backend device. Defaults to\n        :code:`\"ibmq_qasm_simulator\"`.\n    ibmqx_token: The IBM Quantum API token.\n    hub: An IBM Quantum hub name. Defaults to :code:`\"ibm-q\"`.\n    group: An IBM Quantum group name. Defaults to :code:`\"open\"`.\n    project: An IBM Quantum project name. Defaults to :code:`\"main\"`.",
   "type": "object",
   "properties": {
      "persist_data": {
         "title": "Persist Data",
         "default": true,
         "type": "boolean"
      },
      "qnode_device_import_path": {
         "title": "Qnode Device Import Path",
         "type": "array",
         "minItems": 2,
         "maxItems": 2,
         "items": [
            {
               "type": "string"
            },
            {
               "type": "string"
            }
         ]
      },
      "qnode_device_shots": {
         "title": "Qnode Device Shots",
         "type": "integer"
      },
      "qnode_device_wires": {
         "title": "Qnode Device Wires",
         "type": "integer"
      },
      "pennylane_active_return": {
         "title": "Pennylane Active Return",
         "type": "boolean"
      },
      "device": {
         "title": "Device",
         "default": "default.qubit",
         "type": "string"
      },
      "num_threads": {
         "title": "Num Threads",
         "default": 10,
         "type": "integer"
      },
      "max_jobs": {
         "title": "Max Jobs",
         "default": 20,
         "type": "integer"
      },
      "shots": {
         "title": "Shots",
         "default": 0,
         "type": "integer"
      },
      "backend": {
         "title": "Backend",
         "type": "string"
      },
      "ibmqx_token": {
         "title": "Ibmqx Token",
         "type": "string"
      },
      "hub": {
         "title": "Hub",
         "type": "string"
      },
      "group": {
         "title": "Group",
         "type": "string"
      },
      "project": {
         "title": "Project",
         "type": "string"
      }
   }
}
```

</div>
</details>


#### <span class="fourteen">CONFIG</span>

<div class="up space"><ReactMarkdown children='**extra**: *EXTRA* = *allow*'/></div>

#### <span class="eighteen">field <span class="bold">backend</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">group</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">hub</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">ibmqx_token</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">max_jobs</span>: int = 20</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">project</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">shots</span>: int = 20</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)