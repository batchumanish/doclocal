---
title: Qiskit Executor
displayed_sidebar: tutorialSidebar
---


import Noindentation from '/src/components/Noindentation';
import ReactMarkdown from 'react-markdown';

import Qiskit from '@site/static/img/QElectronAssets/qiskit.svg';

<Qiskit/>


This quantum executor provides efficient access to IBM Quantum backends by using runtime sessions for submitting jobs. `QiskitExecutor` uses asyncio for scalable parallelization.

## 1. Installation

The Qiskit Runtime executor is included with Covalent. No additional installation is required.

## 2.  Usage Example

Typical usage involves specifying a runtime primitive via the device argument and specifying an IBM backend via the backend argument. An access token from IBM Quantum can be provided explicitly as ibmqx_token or in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).

The following example shows several QiskitExecutor instances being utilized as a Quantum Cluster.

```py
import covalent as ct
import pennylane as qml

# Default local qiskit executor.
qiskit_local = ct.executor.QiskitExecutor()

# Runtime qiskit executor that uses the "ibmq_qasm_simulator" backend.
qiskit_qasm = ct.executor.QiskitExecutor(
    device="sampler",
    backend="ibmq_qasm_simulator",
    ibmqx_token="<token>",  # required if not in config file
)

# Runtime qiskit executor that uses the "ibmq_lima" QPU.
qiskit_lima = ct.executor.QiskitExecutor(
    device="sampler",
    backend="ibmq_lima",
    ibmqx_token="<token>",
    instance="my-hub/my-group/my-project",

    # Backend settings (optional)
    options={
        "optimization_level": 2,
        "resilience_level": 1,
        # ...
    }
)

# Create quantum electron that uses a cluster of 3 qiskit executors.
@ct.qelectron(executors=[qiskit_local, qiskit_qasm, qiskit_lima])
@qml.qnode(qml.device("default.qubit", wires=2, shots=1024), interface="tf")
def circuit(x):
    qml.IQPEmbedding(features=x, wires=[0, 1])
    qml.Hadamard(wires=1)
    return qml.probs(wires=range(2))
```

Once converted to a QElectron, the circuit can be called normally or asynchronously via `circuit.run_later()`. Since the example uses a quantum cluster with the default `"cyclic"` selector, circuit calls will repeatedly cycle through `executors` in order.

A synchronous example is shown below.

```py
>>> circuit([0.6, -1.57])  # local

tf.Tensor([0.0546875  0.42773438 0.46777344 0.04980469], shape=(4,), dtype=float64)

>>> circuit([0.6, -1.57])  # ibmq_qasm_simulator

tf.Tensor([0.04589844 0.45507812 0.45898438 0.04003906], shape=(4,), dtype=float64)

>>> circuit([0.6, -1.57])  # ibmq_lima

tf.Tensor([0.04199219 0.44628906 0.46679688 0.04492188], shape=(4,), dtype=float64)

>>> circuit([0.6, -1.57])  # local (again)

tf.Tensor([0.04394531 0.4609375  0.43945312 0.05566406], shape=(4,), dtype=float64)
```

If instead doing this asynchronously:

```py
>>> x = [0.6, -1.57]

>>> # Queue jobs for all four circuit calls simultaneously on IBM Quantum.
>>> # Uses same executor order as above (local, qasm, lima, local, ...).
>>> futs = [circuit.run_later(x) for _ in range(4)]

>>> # Wait for all circuits to finish.
>>> [fut.result() for fut in futs]

[tf.Tensor([0.0546875  0.42773438 0.46777344 0.04980469], shape=(4,), dtype=float64),
 tf.Tensor([0.04589844 0.45507812 0.45898438 0.04003906], shape=(4,), dtype=float64),
 tf.Tensor([0.04199219 0.44628906 0.46679688 0.04492188], shape=(4,), dtype=float64),
 tf.Tensor([0.04394531 0.4609375  0.43945312 0.05566406], shape=(4,), dtype=float64)]
```

## 3. Overview of Configuration

The `QiskitExecutor` configuration is found under `[qelectron.QiskitExecutor]` in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).


<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| device | Yes         | local_sampler   | 	The qiskit (e.g. `"local_sampler"`) or qiskit runtime (e.g. `"sampler"`) primitive used for running circuits on an IBM backend.  |
| backend | Yes         | ibm_qasm_simulator       |  	The name of an IBM Quantum system or simulator. |
| ibmqx_token | Yes/No         |    | An access token obtained from IBM Quantum. Required for non-local execution. |
| hub | No         | ibm-q    | Hub name for IBM Quantum. |
| group | No          | open      | Group name for IBM Quantum. |
| project | No         | main    | Project name for IBM Quantum. |

</div>


The following backend settings are also set by default under `[qelectron.QiskitExecutor.options]`. These represent maximum optimization/resilience levels for the `Sampler` primitive. Users can append additional settings to this configuration or specify them directly when instantiating a `QiskitExecutor`. See the [Qiskit Runtime Options](https://qiskit.org/ecosystem/ibm-runtime/stubs/qiskit_ibm_runtime.options.Options.html) page for a complete list of valid fields.


<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| optimization_level | No         | 3   | 	How much optimization to perform on the circuits.  |
| resilience_level  | No         | 1       |  	How much resilience to build against errors. |

</div>


## 4. Required Cloud Resources

In order to access IBM backends, users must acquire an access token from IBM Quantum. This can be done by creating a free account on the [IBM Quantum Experience](https://quantum-computing.ibm.com/).

---

#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.QiskitExecutor</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)</span> 

<div class="up fourteen space"><Noindentation md='A quantum executor that lets the user run circuits on IBM Quantum backends, using runtime sessions and Qiskit primitives. The attributes `device`, `backend`, `ibmqx_token`, `hub`, `group`, and `project` are taken from the Covalent configuration file by default, if available.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Keyword Arguments:'/></div>

<div class="up  fourteen space"><Noindentation md= '- device - The Qiskit primitive used to execute circuits. Valid values are `"sampler"` and `"local_sampler"`. The value `"sampler"` corresponds to the Qiskit Runtime Sampler primitive. The value `"local_sampler"` corresponds to the Qiskit Sampler primitive, which is entirely local.'/></div>

<div class=" up fourteen space down"><Noindentation md='- backend - The name of the IBM Quantum backend device. Defaults to "`ibmq_qasm_simulator`".'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- ibmqx_token- The IBM Quantum API token.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- hub - An IBM Quantum hub name. Defaults to `"ibm-q"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- group - An IBM Quantum group name. Defaults to `"open"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- project - An IBM Quantum project name. Defaults to `"main"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- shots - The number of shots to run per circuit. Defaults to 1024.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- single_job - Indicates whether or not all circuits are submitted to a single job or as separate jobs. Defaults to `True`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- max_time -  An optional time limit for circuit execution on the IBM Quantum backend. Defaults to `None`, i.e. no time limit.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- local_transpile - Indicates whether or not to transpile circuits before submitting to IBM Quantum. Defaults to `False`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- ibmqx_url - An optional URL for the Qiskit Runtime API.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- channel -An optional channel for the Qiskit Runtime API. Defaults to `"ibm_quantum"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- instance - An alternate means to specify `hub`, `group`, and `project`, formatted as `"my-hub/my-group/my-project"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- cloud_instance- Same as `instance` but for the case `channel="ibm_cloud"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- options- A dictionary of options to pass to Qiskit Runtime. See `qiskit_ibm_runtime.options.Options` for valid fields.'/></div>


<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "QiskitExecutor",
   "description": "A quantum executor that lets the user run circuits on IBM Quantum backends,\nusing runtime sessions and Qiskit primitives. The attributes :code:`device`,\n:code:`backend`, :code:`ibmqx_token`, :code:`hub`, :code:`group`, and\n:code:`project` are taken from the Covalent configuration file by default, if\navailable.\n\nKeyword Args:\n    device: The Qiskit primitive used to execute circuits. Valid values are\n        :code:`\"sampler\"` and :code:`\"local_sampler\"`. The value :code:`\"sampler\"`\n        corresponds to the Qiskit Runtime :code:`Sampler` primitive. The value\n        :code:`\"local_sampler\"` corresponds to the Qiskit :code:`Sampler` primitive,\n        which is entirely local.\n    backend: The name of the IBM Quantum backend device. Defaults to\n        :code:`\"ibmq_qasm_simulator\"`.\n    ibmqx_token: The IBM Quantum API token.\n    hub: An IBM Quantum hub name. Defaults to :code:`\"ibm-q\"`.\n    group: An IBM Quantum group name. Defaults to :code:`\"open\"`.\n    project: An IBM Quantum project name. Defaults to :code:`\"main\"`.\n    shots: The number of shots to run per circuit. Defaults to 1024.\n    single_job: Indicates whether or not all circuits are submitted\n        to a single job or as separate jobs. Defaults to :code:`True`.\n    max_time: An optional time limit for circuit execution on the IBM Quantum\n        backend. Defaults to :code:`None`, i.e. no time limit.\n    local_transpile: Indicates whether or not to transpile circuits before\n        submitting to IBM Quantum. Defaults to :code:`False`.\n    ibmqx_url: An optional URL for the Qiskit Runtime API.\n    channel: An optional channel for the Qiskit Runtime API. Defaults to\n        :code:`\"ibm_quantum\"`.\n    instance: An alternate means to specify :code:`hub`, :code:`group`, and\n        :code:`project`, formatted as :code:`\"my-hub/my-group/my-project\"`.\n    cloud_instance: Same as :code:`instance` but for the case :code:`channel=\"ibm_cloud\"`.\n    options: A dictionary of options to pass to Qiskit Runtime. See\n        :code:`qiskit_ibm_runtime.options.Options` for valid fields.",
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
         "type": "string"
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
      },
      "shots": {
         "title": "Shots",
         "default": 1024,
         "type": "integer"
      },
      "single_job": {
         "title": "Single Job",
         "default": false,
         "type": "boolean"
      },
      "local_transpile": {
         "title": "Local Transpile",
         "default": false,
         "type": "boolean"
      },
      "max_time": {
         "title": "Max Time",
         "anyOf": [
            {
               "type": "integer"
            },
            {
               "type": "string"
            }
         ]
      },
      "ibmqx_url": {
         "title": "Ibmqx Url",
         "type": "string"
      },
      "channel": {
         "title": "Channel",
         "default": "ibm_quantum",
         "type": "string"
      },
      "instance": {
         "title": "Instance",
         "default": "",
         "type": "string"
      },
      "cloud_instance": {
         "title": "Cloud Instance",
         "default": "",
         "type": "string"
      },
      "options": {
         "title": "Options"
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



#### <span class="eighteen">field <span class="bold">channel</span>: str = ' ibm_quantum '</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">cloud_instance</span>: str = ' '</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">device</span>: str [Optional]</span>

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


#### <span class="eighteen">field <span class="bold">ibmqx_url</span>: str = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">instance</span>: str = ' '</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">local_transpile</span>: bool = False</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">max_time</span>: Union[int, str] = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">options</span>: </span>


<div class="up" style={{paddingBottom:'4px'}}><span clas="doubleup">

#### <span class="eighteen space">covalent.experimental.covalent_qelectron.executors.plugins.qiskit_plugin.utils.RuntimeOptions [Optional]</span>

</span></div>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">project</span>: str [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">shots</span>: Optional[int] = 1024</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">single_job</span>: bool = False</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)


#### <span class="eighteen"><span class="bold">execution_device</span>()</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)

<div class="up fourteen space"><ReactMarkdown children='Create a subclasses execution device that ensure correct output typing.
'/></div>

<div class="up fourteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `QubitDevice`'/></div>

#### <span class="eighteen">async <span class="bold">run_all_circuits</span>(tapes, device, result_obj)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)

<div class="up fourteen space"><ReactMarkdown children='Allows multiple circuits to be submitted asynchronously into a single IBM Qiskit Runtime Job.'/></div>

#### <span class="eighteen">async <span class="bold">run_circuit</span>(tapes, device, result_obj)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)

<div class="up fourteen space"><ReactMarkdown children='Allows a circuit to be submitted asynchronously.'/></div>


#### <span class="eighteen">property <span class="bold">device_init_kwargs</span>(tapes, device, result_obj)</span>
<div class="up fourteen space"><ReactMarkdown children='Keyword arguments to pass to the device constructor.'/></div>