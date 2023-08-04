---
title: Dask Executor
---

import Ind from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';

# Dask Executor

Executing tasks (electrons) in a Dask cluster. This is the default executor when covalent is started without the `--no-cluster` flag.

```bash
from dask.distributed import LocalCluster

cluster = LocalCluster()
print(cluster.scheduler_address)
```

The address will look like `tcp://127.0.0.1:55564` when running locally. Note that the Dask cluster does not persist when the process terminates.

This cluster can be used with Covalent by providing the scheduler address:

```py
import covalent as ct

dask_executor = ct.executor.DaskExecutor(
                    scheduler_address="tcp://127.0.0.1:55564"
                )

@ct.electron(executor=dask_executor)
def my_custom_task(x, y):
    return x + y

...
```

#### class covalent.executor.executor_plugins.dask.DaskExecutor(scheduler_address='', log_stdout='stdout.log', log_stderr='stderr.log', conda_env='', cache_dir='', current_env_on_conda_fail=False)[[source]](./source-code-dask)

<!-- this code part needed to be aligned properly I added a link to it but I couldnt figure out how to hide the page from sidebar.  -->

Dask executor class that submits the input function to a running dask cluster.

#### Methods:

| Methods                                                                                                                                | Description                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`cancel`](./dask#async-canceltask_metadata-job_handle-source)(task_metadata, job_handle)                                              | Cancel the task being executed by the dask executor currently                           |
| [`from_dict`](./dask#from_dictobject_dict) (object_dict)                                                                               | Rehydrate a dictionary representation                                                   |
| [`get_cancel_requested`](./dask#async-get_cancel_requested-perma)                                                                      | Get if the task was requested to be canceled                                            |
| [`get_dispatch_context`](./dask#get_dispatch_contextdispatch_info-perma)(dispatch_info)                                                | Start a context manager that will be used to access the dispatch info for the executor. |
| [`run`](./dask#async-runfunction-args-kwargs-task_metadata-source-perma)(function, args, kwargs, task_metadata)                        | Submit the function and inputs to the dask cluster                                      |
| [`set_job_handle`](./dask#async-set_job_handlehandle-perma)(handle)                                                                    | Save the job handle to database                                                         |
| [`setup`](./dask#async-setuptask_metadata-perma)(task_metadata)                                                                        | Executor specific setup method                                                          |
| [`teardown`](./dask#async-teardowntask_metadata-perma)(task_metadata)                                                                  | Executor specific teardown method                                                       |
| [`to_dict`](./dask#to_dict-perma)()                                                                                                    | Return a JSON-serializable dictionary representation of self                            |
| [`write_streams_to_file`](./dask#async-write_streams_to_filestream_strings-filepaths-dispatch_id-results_dir-perma)(stream_strings, …) | Write the contents of stdout and stderr to respective files.                            |

<!-- Added the heading to the table  -->

##### async cancel(task_metadata, job_handle) [source](./source-code-dask)

<Ind md='Cancel the task being executed by the dask executor currently'/>

<Ind md='**Arg(s)**'/>
<Doubleind md='task_metadata: Metadata associated with the task job_handle: Key assigned to the job by Dask'/>

<Ind md='**Return(s)**'/>
<Doubleind md='True by default'/>

<Ind md='**RETURN TYPE**'/>
<Doubleind md='`Literal`[True]'/>

##### from_dict(object_dict)

<Ind md='Rehydrate a dictionary representation'/>

<Ind md='**PARAMETERS**'/>
<Doubleind md='object_dict (dict) – a dictionary representation returned by to_dict'/>

<Ind md='**RETURN TYPE**'/>
<Doubleind md='BaseExecutor'/>

<Ind md='**Returns**'/>
<Doubleind md='self'/>

<Ind md='**Instance attributes will be overwritten.**'/>

##### async get_cancel_requested() {#perma}

<Ind md='**Get if the task was requested to be canceled**'/>

<Ind md='**Arg(s)**'/>
<Doubleind md='None'/>

<Ind md='**Return(s)**'/>
<Doubleind md='Whether the task has been requested to be canceled'/>

<Ind md='**RETURN TYPE**'/>
<Doubleind md='`Any`'/>

##### get_dispatch_context(dispatch_info) {#perma}

<Ind md='Start a context manager that will be used to access the dispatch info for the executor.'/>

<Ind md='**PARAMETERS**'/>
<Doubleind md='**dispatch_info** (`DispatchInfo`) – The dispatch info to be used inside current context.'/>

<Ind md='**RETURN TYPE**'/>
<Doubleind md='`AbstractContextManager`[`DispatchInfo`]'/>

<Ind md='**Returns**'/>
<Doubleind md='A context manager object that handles the dispatch info.'/>

##### async run(function, args, kwargs, task_metadata) [source](./source-code-dask) {#perma}

<Ind md='Submit the function and inputs to the dask cluster'/>

##### async set_job_handle(handle) {#perma}

<Ind md='Save the job handle to database'/>

<Ind md='**Arg(s)**'/>
<Doubleind md='handle: JSONable type identifying the job being executed by the backend'/>

<Ind md='**Return(s)**'/>
<Doubleind md='Response from the listener that handles inserting the job handle to database'/>

<Ind md='**RETURN TYPE**'/>
<Doubleind md='`Any`'/>

##### async setup(task_metadata) {#perma}

<Ind md='Executor specific setup method'/>

##### async teardown(task_metadata) {#perma}

<Ind md='Executor specific teardown method'/>

##### to_dict() {#perma}

<Ind md='Return a JSON-serializable dictionary representation of self'/>
<Ind md='**RETURN TYPE**'/>
<Doubleind md='`dict`'/>

##### async write_streams_to_file(stream_strings, filepaths, dispatch_id, results_dir) {#perma}

<Ind md='Write the contents of stdout and stderr to respective files.'/>

<Ind md='**PARAMETERS**'/>

<Ind md='* **stream_strings** (`Iterable`[`str`]) – The stream_strings to be written to files.'/>
<Ind md='* **filepaths** (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/>
<Ind md='* **dispatch_id** (`str`) – The ID of the dispatch which initiated the request.'/>
<Ind md='* **results_dir** (`str`) – The location of the results directory.'/>

This uses aiofiles to avoid blocking the event loop.

** RETURN TYPE **

<Ind md='`None`'/>

<!-- All this has to be aligned properly like in the portal -->
