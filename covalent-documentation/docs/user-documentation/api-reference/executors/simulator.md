---
title: Simulator
displayed_sidebar: tutorialSidebar
---

import Noindentation from '/src/components/Noindentation';

import ReactMarkdown from 'react-markdown';

import Simulator from '@site/static/img/QElectronAssets/simulator.svg';

<Simulator/>


This quantum executor introduces thread- or process-based parallelism to Pennylane circuits that utilize simulation-based devices (like `"default.qubit"` or `"lightning.qubit"`).

## 1. Installation

No additional installation is required.

## 2. Usage Example

A thread-based `Simulator` is the default quantum executor for QElectrons.

```py
import covalent as ct
import pennylane as qml

@ct.qelectron
@qml.qnode(qml.device("lightning.qubit", wires=2), interface="torch")
def circuit(x):
    qml.IQPEmbedding(features=x, wires=[0, 1])
    qml.Hadamard(wires=1)
    return qml.probs(wires=range(2))
```


Once converted to a QElectron, the circuit can be called either normally or asynchronously via `circuit.run_later()`.

A synchronous example is show below.

```py
>>> circuit([1.3, -0.7]), circuit([1.3, -0.7])

(tensor([0.3169, 0.3169, 0.1831, 0.1831], dtype=torch.float64),
 tensor([0.3169, 0.3169, 0.1831, 0.1831], dtype=torch.float64))
```

Alternatively, doing this asynchronously:

```py
>>> # Use separate threads to run two circuits simultaneously.
>>> futs = [circuit.run_later([1.3, -0.7]) for _ in range(2)]

# Wait for all circuits to finish.
>>> [fut.result() for fut in futs]

[tensor([0.3169, 0.3169, 0.1831, 0.1831], dtype=torch.float64),
 tensor([0.3169, 0.3169, 0.1831, 0.1831], dtype=torch.float64)]
```

---

#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.Simulator</span> [[source]](/docs/user-documentation/api-reference/scode-simulator)</span> 

<div class="up fourteen space"><Noindentation md='A quantum executor that uses the specified Pennylane device to execute circuits. Parallelizes circuit execution on the specified device using either threads or processes.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Keyword Arguments:'/></div>

<div class="up  fourteen space"><Noindentation md= '- device - A valid string corresponding to a Pennylane device. Simulation-based devices (e.g. “default.qubit” and “lightning.qubit”) are recommended. Defaults to “default.qubit”.'/></div>

<div class=" up fourteen space down"><Noindentation md='- parallel - The type of parallelism to use. Valid values are “thread” and “process”. Passing any other value will result in synchronous execution. Defaults to “thread”.'/></div>

<div class=" up fourteen space down"><Noindentation md='- workers - The number of threads or processes to use. Defaults to 10.'/></div>

<div class=" up fourteen space down"><Noindentation md='- shots - The number of shots to use for the execution device. Overrides the `shots` value from the original device if set to `None` or a positive `int`. The shots setting from the original device is is used by default, when this argument is 0.'/></div>

<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "Simulator",
   "description": "A quantum executor that uses the specified Pennylane device to execute circuits.\nParallelizes circuit execution on the specified `device` using either threads\nor processes.\n\nKeyword Args:\n    device: A valid string corresponding to a Pennylane device. Simulation-based \n        devices (e.g. \"default.qubit\" and \"lightning.qubit\") are recommended.\n        Defaults to \"default.qubit\".\n    parallel: The type of parallelism to use. Valid values are \"thread\" and\n        \"process\". Passing any other value will result in synchronous execution.\n        Defaults to \"thread\".\n    workers: The number of threads or processes to use. Defaults to 10.\n    shots: The number of shots to use for the execution device. Overrides the\n        :code:`shots` value from the original device if set to :code:`None` or\n        a positive :code:`int`. The shots setting from the original device is\n        is used by default, when this argument is 0.",
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
      "parallel": {
         "title": "Parallel",
         "default": "thread",
         "anyOf": [
            {
               "type": "boolean"
            },
            {
               "type": "string"
            }
         ]
      },
      "workers": {
         "title": "Workers",
         "default": 10,
         "type": "integer"
      },
      "shots": {
         "title": "Shots",
         "default": 0,
         "type": "integer"
      }
   }
}
```

</div>
</details>

#### <span class="fourteen">CONFIG</span>

<div class="up space"><ReactMarkdown children='**extra**: *EXTRA* = *allow*'/></div>


#### <span class="eighteen">field <span class="bold">device</span>: str = 'default.qubit'</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">parallel</span>: Union[bool, str] = 'thread'</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">shots</span>: int = 0</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">workers</span>: int = 10</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen"><span class="bold">batch_get_results</span>(futures_list)</span> [[source]](/docs/user-documentation/api-reference/scode-simulator)

#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/scode-simulator)