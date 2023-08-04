---
title: Dask Executor
displayed_sidebar: tutorialSidebar
---
import Ind from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import ReactMarkdown from 'react-markdown';
import Noindentation from '/src/components/Noindentation';

# Dask Executor


Executes tasks (electrons) in a Dask cluster. This is the default executor when covalent is started without the `--no-cluster` flag.

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

#### class <span class="highlight">covalent.executor.executor_plugins.dask.</span><span class="bold">DaskExecutor</span>(scheduler_address='', log_stdout='stdout.log', log_stderr='stderr.log', conda_env='', cache_dir='', current_env_on_conda_fail=False)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode)


Dask executor class that submits the input function to a running dask cluster.

#### Methods:


<table className="tables">
  <tr>
    <th>Method</th>
    <th style={{width:'30rem'}}>Description</th>
  </tr>
    <tr>
    <td> <ReactMarkdown children=' [`cancel`](#async-canceltask_metadata-job_handle-source)(task_metadata, job_handle) '/></td>
    <td>Cancel the task being executed by the dask executor currently</td>
  </tr>
  <tr>
    <td> <ReactMarkdown children='[`from_dict`](#from_dictobject_dict) (object_dict)'/></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
  <tr>
    <td> <ReactMarkdown children='[`get_cancel_requested`](#async-get_cancel_requested)()'/></td>
    <td>Get if the task was requested to be canceled</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`get_dispatch_context`](#get_dispatch_contextdispatch_info)(dispatch_info)'/></td>
    <td>Start a context manager that will be used to access the dispatch info for the executor.</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`run`](#async-runfunction-args-kwargs-task_metadata--source)(function, args, kwargs, task_metadata)'/></td>
    <td>Submit the function and inputs to the dask cluster</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`set_job_handle`](#async-set_job_handlehandle)(handle)'/></td>
    <td>Save the job handle to database</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`setup`](#async-setuptask_metadata)(task_metadata)'/></td>
    <td>Executor specific setup method</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`teardown`](#async-teardowntask_metadata)(task_metadata)'/></td>
    <td>Executor specific teardown method</td>
  </tr>
      <tr>
    <td> <ReactMarkdown children='[`to_dict`](#to_dict)()'/></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`write_streams_to_file`](#async-write_streams_to_filestream_strings-filepaths-dispatch_id-results_dir)(stream_strings, …)'/></td>
    <td>Write the contents of stdout and stderr to respective files.</td>
  </tr>
</table>


#### <span class="eighteen">async <span class="bold">cancel</span>(task_metadata, job_handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/executors/scode)</span>
<div class="space up fourteen"><Noindentation md='Cancel the task being executed by the dask executor currently'/></div>

<div class="highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='task_metadata: Metadata associated with the task job_handle: Key assigned to the job by Dask'/></div>

<div class="highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='True by default'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`Literal`[True]'/></div>



##### <span class="eighteen"><span class="bold">from_dict</span>(object_dict)</span>
<div class="space up fourteen"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='**object_dict** (`dict`) – a dictionary representation returned by to_dict'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`BaseExecutor`](/docs/user-documentation/api-reference/executors/synchronous-base-executor-class#class-covalentexecutorbasebaseexecutorargs-kwargs)'/></div>
<div class="highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="space up fourteen down"><Noindentation md='Instance attributes will be overwritten.'/></div>




##### <span class="eighteen">async <span class="bold">get_cancel_requested</span>()</span>   

<div class="space up fourteen"><Noindentation md='Get if the task was requested to be canceled'/></div>

<div class="highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='None'/></div>

<div class="highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Whether the task has been requested to be canceled'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>


##### <span class="eighteen"><span class="bold">get_dispatch_context</span>(dispatch_info)</span> 
<div class="space up fourteen"><Noindentation md='Start a context manager that will be used to access the dispatch info for the executor.'/></div>

<div class="highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='**dispatch_info** (`DispatchInfo`) – The dispatch info to be used inside current context.'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`AbstractContextManager`[`DispatchInfo`]'/></div>

<div class="highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='A context manager object that handles the dispatch info.'/></div>



#### async <span class="eighteen"><span class="bold">run</span>(function, args, kwargs, task_metadata)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode)</span> 
<div class="space up fourteen"><Noindentation md='Submit the function and inputs to the dask cluster'/></div>



##### async <span class="bold">set_job_handle</span>(handle) 
<div class="space up fourteen"><Noindentation md='Save the job handle to database'/></div>


<div class="highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='handle: JSONable type identifying the job being executed by the backend'/></div>

<div class="highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Response from the listener that handles inserting the job handle to database'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>



##### <span class="eighteen">async <span class="bold">setup</span>(task_metadata)</span> 
<div class="space up fourteen"><Noindentation md='Executor specific setup method'/></div>


##### <span class="eighteen">async <span class="bold">teardown</span>(task_metadata)</span> 
<div class="space up fourteen"><Noindentation md='Executor specific teardown method'/></div>





##### <span class="eighteen"><span class="bold">to_dict</span>()</span> 
<div class="space up fourteen"><Noindentation md='Return a JSON-serializable dictionary representation of self'/></div>
<div class="space up fourteen highlight2"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>





##### <span class="eighteen">async <span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)</span> 
<div class="space up fourteen"><Noindentation md='Write the contents of stdout and stderr to respective files.'/></div>

<div class="space up fourteen highlight2"><Noindentation md='**Parameters**'/></div>

<div class="space up fourteen"><Noindentation md='* stream_strings (`Iterable`[`str`]) – The stream_strings to be written to files.'/></div>
<div class="space up fourteen"><Noindentation md='* filepaths (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/></div>
<div class="space up fourteen"><Noindentation md='* dispatch_id (`str`) – The ID of the dispatch which initiated the request.'/></div>
<div class="space up fourteen"><Noindentation md='* results_dir (`str`) – The location of the results directory.'/></div>
<div class="fourteen space up"><Noindentation md=' This uses aiofiles to avoid blocking the event loop.'/></div>
 
<div class="space up fourteen highlight2"><Noindentation md='**Return Type**'/></div>

<div class="space up fourteen"><Noindentation md='`None`'/></div>
