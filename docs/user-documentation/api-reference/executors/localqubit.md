---
title: Local Braket Qubit Executor
displayed_sidebar: tutorialSidebar
---


import Noindentation from '/src/components/Noindentation';
import ReactMarkdown from 'react-markdown';
import data from "/src/components/basics.json";


<img src={data.localbraket}/>


This quantum executor accesses the local Braket quantum circuit simulator (`"braket.local.qubit"`).

It utilizes the Pennylane plugin found [here](https://amazon-braket-pennylane-plugin-python.readthedocs.io/en/latest/). `LocalBraketQubitExecutor` introduces thread-based parallelism for circuit execution on the `"braket.local.qubit"` device.

## 1. Installation
`LocalBraketQubitExecutor` is included in Covalent. To use it, however, you will need to install the [amazon-braket-pennylane-plugin](https://github.com/aws/amazon-braket-pennylane-plugin-python):

```bash
pip install amazon-braket-pennylane-plugin
```


## 2. Usage Example
Using `LocalBraketQubitExecutor` is simple:


```py
# Local simulator
executor = ct.executor.LocalBraketQubitExecutor(
    device="default",
    shots=1024,
    num_threads=2
)

@ct.qelectron(executors=executor)
@qml.qnode(qml.device("default.qubit", wires=2, shots=1024))
def circuit(x):
    qml.IQPEmbedding(features=x, wires=[0, 1])
    qml.Hadamard(wires=1)
    return [qml.expval(qml.PauliZ(0)), qml.expval(qml.PauliZ(1))]
```

As a QElectron, the circuit can be called either normally or asynchronously using `circuit.run_later()`.

Synchronous example output is below

```py
>>> print(circuit([0.5, 0.1]))

[array(0.008), array(0.996)]
```

and asynchronously:

```py
>>> x = [0.6, -1.57]

>>> # Queue jobs for all three circuit calls simultaneously on.
>>> futs = [circuit.run_later(x) for _ in range(3)]

>>> # Wait for all circuits to finish.
>>> [fut.result() for fut in futs]

[[array(-0.02), array(0.01)],
 [array(0.014), array(-0.022)],
 [array(-0.074), array(0.05)]]
```


## 3. Overview of Configuration
The `LocalBraketQubitExecutor` configuration is found under `[qelectron.LocalBraketQubitExecutor]` in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).

<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| backend | No         | "default"   | The type of simulator backend to be used. Choices are `"default"`, `"braket_sv"`, `"braket_dm"` and `"braket_ahs"`. |

</div>

---

#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.LocalBraketQubitExecutor</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)</span> 

The local Braket executor based on the existing Pennylane local Braket qubit device.

<div class="eighteen bold space">max_jobs</div>
<div class=" fourteen space1"><Noindentation md='maximum number of parallel jobs sent by threads on `batch_submit`.'/></div>

<div class="eighteen bold space">shots</div>
<div class=" fourteen space1"><Noindentation md='number of shots used to estimate quantum observables.'/></div>

<div class="eighteen bold space">backend</div>
<div class=" fourteen space1"><Noindentation md='The name of the simulator backend. Defaults to the `"default"` simulator backend name.'/></div>


<div class="eighteen bold space">run_kwargs</div>
<div class=" fourteen space1"><Noindentation md='Variable length keyword arguments for `braket.devices.Device.run().`'/></div>


<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "LocalBraketQubitExecutor",
   "description": "The local Braket executor based on the existing Pennylane local Braket qubit device.\n\nAttributes:\n    max_jobs: maximum number of parallel jobs sent by processes on :code:`batch_submit`.\n    shots: number of shots used to estimate quantum observables.\n    backend:\n        The name of the simulator backend. Defaults to the :code:`\"default\"`\n        simulator backend name.\n    run_kwargs: Variable length keyword arguments for :code:`braket.devices.Device.run()`.",
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
      "num_processes": {
         "title": "Num Processes",
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
         "type": "integer"
      },
      "backend": {
         "title": "Backend",
         "type": "string"
      },
      "run_kwargs": {
         "title": "Run Kwargs",
         "default": {},
         "type": "object"
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


#### <span class="eighteen">field <span class="bold">max_jobs</span>: int = 20</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">run_kwargs</span>: [dict](#dictargs-kwargs-source) = {}</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">shots</span>: int = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)

<div class="up fourteen space"><ReactMarkdown children='Submit qscripts for execution using `num_processes`-many processes.'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='PARAMETERS'/></div>

<div class="up fourteen space1 "><ReactMarkdown children='**qscripts_list** – a list of Pennylane style `QuantumScripts`'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='RETURNS'/></div>

<div class="up fourteen space1"><ReactMarkdown children='a `list` of `futures` subitted by processes.'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='RETURN TYPE'/></div>

<div class="up fourteen space1"><ReactMarkdown children='jobs'/></div>


#### <span class="eighteen"><span class="bold">dict</span>(*args, **kwargs)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)

<div class="up fourteen space"><ReactMarkdown children='Generate a dictionary representation of the model, optionally specifying which fields to include or exclude.'/></div>