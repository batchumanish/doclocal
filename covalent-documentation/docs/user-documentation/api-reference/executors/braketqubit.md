---
title: AWS Braket Qubit Executor
displayed_sidebar: tutorialSidebar
---


import Noindentation from '/src/components/Noindentation';
import ReactMarkdown from 'react-markdown';
import data from "/src/components/basics.json";


<img src={data.awsbraket}/>

This quantum executor accesses quantum resources operating under the qubit model as made available through AWS (`"braket.aws.qubit"`).

It utilizes the Pennylane plugin found [here](https://amazon-braket-pennylane-plugin-python.readthedocs.io/en/latest/). `BraketQubitExecutor` introduces thread-based parallelism for circuit execution on the `"braket.aws.qubit"` device.

## 1. Installation
`BraketQubitExecutor` is included in Covalent. To use it, however, you will need to install the [amazon-braket-pennylane-plugin](https://github.com/aws/amazon-braket-pennylane-plugin-python): 

```bash
pip install amazon-braket-pennylane-plugin
```
and have valid AWS credentials as specified [here](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html).

## 2. Usage Example

Using `BraketQubitExecutor` requires specifying an AWS Quantum backend through the `device_arn` argument.


```py
# Statevector simulator
sv1 = ct.executor.BraketQubitExecutor(
    device_arn="arn:aws:braket:::device/quantum-simulator/amazon/sv1",
    shots=1024,
    s3_destination_folder=(),
)
# Tensor network simulator
tn1 = ct.executor.BraketQubitExecutor(
    device_arn="arn:aws:braket:::device/quantum-simulator/amazon/tn1",
    shots=1024,
    s3_destination_folder=(),
)

@ct.qelectron(executors=[sv1, tn1])
@qml.qnode(qml.device("default.qubit", wires=2, shots=1000))
def circuit(x):
    qml.IQPEmbedding(features=x, wires=[0, 1])
    qml.Hadamard(wires=1)
    return [qml.expval(qml.PauliZ(0)), qml.expval(qml.PauliZ(1))]
```

As a QElectron, the circuit can be called either normally or asynchronously using `circuit.run_later()`. With the default `"cyclic"` selector, circuit calls will alternate between the executors, `[sv1, tn1]`.

Synchronous example output is below

```py
>>> print(circuit([0.5, 0.1]))  # alternate between sv1 and tn1

[array(0.008), array(0.996)]
```

and asynchronously:

```py
>>> x = [0.6, -1.57]

>>> # Queue jobs for all three circuit calls simultaneously on AWS Braket.
>>> # Uses same executor order as above (sv1, tn1, ...).
>>> futs = [circuit.run_later(x) for _ in range(3)]

>>> # Wait for all circuits to finish.
>>> [fut.result() for fut in futs]

[[array(-0.02), array(0.01)],
 [array(0.014), array(-0.022)],
 [array(-0.074), array(0.05)]]
```

## 3. Overview of Configuration

The `BraketQubitExecutor` configuration is found under `[qelectron.BraketQubitExecutor]` in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).

<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| s3_destination_folder | No         | () an empty tuple   | The location of the s3 bucket that simulation data will be stored in. I.e, you can set `s3 = ("my-bucket", "my-prefix")`. |


</div>

## 4. Required Cloud Resources
Users must acquire AWS credentials and make them discoverable following the instructions [here](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html). 

---

#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.BraketQubitExecutor</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)</span> 

The remote Braket executor based on the existing Pennylane Braket qubit device. Usage of this device requires valid AWS credentials as set up following the instructions at [https://github.com/aws/amazon-braket-sdk-python#prerequisites](https://github.com/aws/amazon-braket-sdk-python#prerequisites).


<div class="eighteen bold space">max_jobs</div>
<div class=" fourteen space1"><Noindentation md='maximum number of parallel jobs sent by threads on `batch_submit`.'/></div>

<div class="eighteen bold space">shots</div>
<div class=" fourteen space1"><Noindentation md='number of shots used to estimate quantum observables.'/></div>

<div class="eighteen bold space">device_arn</div>
<div class=" fourteen space1"><Noindentation md='an alpha-numeric code (arn=Amazon Resource Name) specifying a quantum device.'/></div>

<div class="eighteen bold space">poll_timeout_seconds</div>
<div class=" fourteen space1"><Noindentation md='number of seconds before a poll to remote device is considered timed-out.'/></div>


<div class="eighteen bold space">poll_interval_seconds</div>
<div class=" fourteen space1"><Noindentation md='number of seconds before a poll to remote device is considered timed-out.'/></div>

<div class="eighteen bold space">aws_session</div>
<div class=" fourteen space1"><Noindentation md='An `AwsSession` object created to manage interactions with AWS services, to be supplied if extra control is desired.'/></div>


<div class="eighteen bold space">parallel</div>
<div class=" fourteen space1"><Noindentation md='turn parallel execution on or off.'/></div>

<div class="eighteen bold space">max_parallel</div>
<div class=" fourteen space1"><Noindentation md='the maximum number of circuits to be executed in parallel.'/></div>

<div class="eighteen bold space">max_connections</div>
<div class=" fourteen space1"><Noindentation md='the maximum number of connections in the `Boto3` connection pool.'/></div>

<div class="eighteen bold space">max_retries</div>
<div class=" fourteen space1"><Noindentation md='the maximum number of time a job will be re-sent if it failed.'/></div>

<div class="eighteen bold space">s3_destination_folder</div>
<div class=" fourteen space1"><Noindentation md='Name of the S3 bucket and folder, specified as a tuple.'/></div>

<div class="eighteen bold space">run_kwargs</div>
<div class=" fourteen space1"><Noindentation md='Variable length keyword arguments for `braket.devices.Device.run()`'/></div>


<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "BraketQubitExecutor",
   "description": "The remote Braket executor based on the existing Pennylane Braket\nqubit device. Usage of this device requires valid AWS credentials as\nset up following the instructions at\nhttps://github.com/aws/amazon-braket-sdk-python#prerequisites.\n\nAttributes:\n    max_jobs:\n        maximum number of parallel jobs sent by threads on :code:`batch_submit`.\n    shots: number of shots used to estimate quantum observables.\n    device_arn:\n        an alpha-numeric code (arn=Amazon Resource Name) specifying a quantum device.\n    poll_timeout_seconds:\n        number of seconds before a poll to remote device is considered timed-out.\n    poll_interval_seconds:\n        number of seconds between polling of a remote device's status.\n    aws_session:\n        An :code:`AwsSession` object created to manage interactions with AWS services,\n        to be supplied if extra control is desired.\n    parallel: turn parallel execution on or off.\n    max_parallel: the maximum number of circuits to be executed in parallel.\n    max_connections: the maximum number of connections in the :code:`Boto3` connection pool.\n    max_retries: the maximum number of time a job will be re-sent if it failed\n    s3_destination_folder: Name of the S3 bucket and folder, specified as a tuple.\n    run_kwargs: Variable length keyword arguments for :code:`braket.devices.Device.run()`",
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
         "default": [
            null
         ],
         "type": "integer"
      },
      "device_arn": {
         "title": "Device Arn",
         "type": "string"
      },
      "poll_timeout_seconds": {
         "title": "Poll Timeout Seconds",
         "default": 432000,
         "type": "number"
      },
      "poll_interval_seconds": {
         "title": "Poll Interval Seconds",
         "default": 1,
         "type": "number"
      },
      "aws_session": {
         "title": "Aws Session",
         "type": "string"
      },
      "parallel": {
         "title": "Parallel",
         "default": false,
         "type": "boolean"
      },
      "max_parallel": {
         "title": "Max Parallel",
         "type": "integer"
      },
      "max_connections": {
         "title": "Max Connections",
         "default": 100,
         "type": "integer"
      },
      "max_retries": {
         "title": "Max Retries",
         "default": 3,
         "type": "integer"
      },
      "s3_destination_folder": {
         "title": "S3 Destination Folder",
         "type": "array",
         "items": {}
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

#### <span class="eighteen">field <span class="bold">aws_session</span>: Optional[str] = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">device_arn</span>: str = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">max_connections</span>: int = 100</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">max_jobs</span>: int = 20</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">max_parallel</span>: Optional[int] = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">max_retries</span>: int = 3</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">parallel</span>: bool = False</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">poll_interval_seconds</span>: float = 1</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">poll_timeout_seconds</span>: float = 432000</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">run_kwargs</span>: [dict](#dictargs-kwargs-source) = {}</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">s3_destination_folder</span>: tuple [Optional]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>

#### <span class="eighteen">field <span class="bold">shots</span>: int = (None,)</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)

<div class="up fourteen space"><ReactMarkdown children='Submit qscripts for execution using `max_jobs`-many threads.'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='PARAMETERS'/></div>

<div class="up fourteen space1 "><ReactMarkdown children='**qscripts_list** – a list of Pennylane style `QuantumScripts`'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='RETURNS'/></div>

<div class="up fourteen space1"><ReactMarkdown children='a `list` of tasks subitted by threads.'/></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='RETURN TYPE'/></div>

<div class="up fourteen space1"><ReactMarkdown children='jobs'/></div>


#### <span class="eighteen"><span class="bold">dict</span>(*args, **kwargs)</span> [[source]](/docs/user-documentation/api-reference/executors/scode-awsplugin)

<div class="up fourteen space"><ReactMarkdown children='Generate a dictionary representation of the model, optionally specifying which fields to include or exclude.'/></div>