import Noindentation from '/src/components/Noindentation';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import AWS_Batch from '@site/static/img/executorAssets/AWS_Batch.jpg';
import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import aws from '@site/static/img/executorAssets/AWS_Braket.jpg';

import AWS_EC2 from '@site/static/img/executorAssets/AWS_EC2.jpg';
import AWS_EC2_Infra from '@site/static/img/executorAssets/AWS_EC2_Infra.png';

import AWS_ECS from '@site/static/img/executorAssets/AWS_ECS.jpg';

import AWS_Lambda from '@site/static/img/executorAssets/AWS_Lambda.jpg';

import cov from '@site/static/img/assets/covalent_readme_banner.png';

import data from "/src/components/basics.json";

import Back from '@site/static/img/executorAssets/AWS_Plugins.png';
import code from '@site/static/img/executorAssets/covalent-ec2-code-example.png';
import batch from '@site/static/img/executorAssets/Batch.png';
import braket from '@site/static/img/executorAssets/Braket.png';
import ec2 from '@site/static/img/executorAssets/EC2.png';
import ecs from '@site/static/img/executorAssets/ECS.png';
import lambda from '@site/static/img/executorAssets/Lambda.png';
import Plugingrid from '/src/components/Plugingrid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Executors

## Synchronous Base Executor Class

#### <span class="eighteen">class <span class="highlight">covalent.executor.base.</span><span class="bold">BaseExecutor</span>(\*args, \*\*kwargs)[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Base executor class to be used for defining any executor plugin. Subclassing this class will allow you to define your own executor plugin which can be used in covalent.'/></div>

#### <span class="bold space">log_stdout</span>

<div class="up fourteen space1"><Noindentation md='The path to the file to be used for redirecting stdout.'/></div>

#### <span class="bold space">log_stderr</span>

<div class="space1 up fourteen"><Noindentation md='The path to the file to be used for redirecting stderr.'/></div>

#### <span class="bold space">cache_dir</span>

<div class="space1 up fourteen"><Noindentation md='The location used for cached files in the executor.'/></div>

#### <span class="bold space">time_limit</span>

<div class="space1 up fourteen"><Noindentation md='time limit for the task'/></div>

#### <span class="bold space">retries</span>

<div class="space1 up fourteen"><Noindentation md='Number of times to retry execution upon failure'/></div>

**Methods:**

<table class="tables">
  <tr>
    <td><ReactMarkdown children='[`cancel`](/docs/user-documentation/api-reference/executors-api#canceltask_metadata-job_handlesource-)(task_metadata, job_handle)'/></td>
    <td> Method to cancel the job identified uniquely by the <i>job_handle</i> (base class)</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`execute`](/docs/user-documentation/api-reference/executors-api#executefunction-args-kwargs-dispatch_id-results_dir-node_id--1source)(function, args, kwargs, dispatch_id, …)'/></td>
    <td> Execute the function with the given arguments.</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/executors-api#from_dictobject_dict) (object_dict) '/></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`get_cancel_requested`](/docs/user-documentation/api-reference/executors-api#get_cancel_requestedsource)()'/></td>
    <td>Check if the task was requested to be canceled</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`get_dispatch_context`](/docs/user-documentation/api-reference/executors-api#get_dispatch_contextdispatch_info)(dispatch_info)'/></td>
    <td>Start a context manager that will be used to access the dispatch info for the executor. </td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`run`](/docs/user-documentation/api-reference/executors-api#abstract-runfunction-args-kwargs-task_metadatasource)(function, args, kwargs, task_metadata)'/></td>
    <td>Abstract method to run a function in the executor.</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`set_job_handle`](/docs/user-documentation/api-reference/executors-api#set_job_handlehandlesource)(handle)'/></td>
    <td>Save the job_id/handle returned by the backend executing the task</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`setup`](/docs/user-documentation/api-reference/executors-api#setuptask_metadatasource)(task_metadata) '/></td>
    <td> Placeholder to run any executor specific tasks</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`teardown`](/docs/user-documentation/api-reference/executors-api#teardowntask_metadatasource)(task_metadata)'/></td>
    <td>Placeholder to run nay executor specific cleanup/teardown actions</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/executors-api#to_dict)()'/></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`write_streams_to_file`](/docs/user-documentation/api-reference/executors-api#write_streams_to_filestream_strings-filepaths-dispatch_id-results_dirsource-)(stream_strings, …)'/></td>
    <td>Executor specific teardown method</td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">cancel</span>(task_metadata, job_handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Method to cancel the job identified uniquely by the job_handle (base class)'/></div>

<div class="space eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='task_metadata: Metadata of the task to be canceled job_handle: Unique ID of the job assigned by the backend'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='False by default'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Literal`[False]'/></div>

#### <span class="eighteen"><span class="bold">execute</span>(function, args, kwargs, dispatch_id, results_dir, node_id=- 1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Execute the function with the given arguments.'/></div>
<div class="up fourteen space"><ReactMarkdown children='This calls the executor-specific *run*() method.'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><ReactMarkdown children='* function (`Callable`) – The input python function which will be executed and whose result is ultimately returned by this function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* args (`List`) – List of positional arguments to be used by the function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* kwargs (`Dict`) – Dictionary of keyword arguments to be used by the function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* dispatch_id (`str`) – The unique identifier of the external lattice process which is calling this function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* results_dir (`str`) – The location of the results directory.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* node_id (`int`) – ID of the node in the transport graph which is using this executor'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='The result of the function execution.'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='output'/></div>

#### <span class="eighteen"><span class="bold">from_dict</span>(object_dict)</span>

<div class="up fourteen space"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 space space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children=' **object_dict** (`dict`) – a dictionary representation returned by *to_dict*'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`BaseExecutor`](/docs/user-documentation/api-reference/executors-api#class-covalentexecutorbasebaseexecutorargs-kwargssource-)'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='self'/></div>
<div class="up fourteen down space"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="eighteen"><span class="bold">get_cancel_requested</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Check if the task was requested to be canceled by the user'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='None'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='True/False whether task cancelation was requested'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><Noindentation md='`bool`'/></div>

#### <span class="eighteen"><span class="bold">get_dispatch_context</span>(dispatch_info)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Start a context manager that will be used to access the dispatch info for the executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='dispatch_info (`DispatchInfo`) – The dispatch info to be used inside current context.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><Noindentation md='`AbstractContextManager`[`DispatchInfo`]'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='A context manager object that handles the dispatch info.'/></div>

#### <span class="eighteen">abstract <span class="bold">run</span>(function, args, kwargs, task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Abstract method to run a function in the executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* function (`Callable`) – The function to run in the executor'/></div>
<div class="up fourteen space"><Noindentation md='* args (`List`) – List of positional arguments to be used by the function.'/></div>
<div class="up fourteen space"><Noindentation md='* kwargs (`Dict`) – Dictionary of keyword arguments to be used by the function.'/></div>
<div class="fourteen  up"><Noindentation md='* task_metadata(`Dict`) – Dictionary of metadata for the task. Current keys are *dispatch_id* and *node_id*'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='A context manager object that handles the dispatch info'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='output'/></div>

#### <span class="eighteen"><span class="bold">set_job_handle</span>(handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Save the job_id/handle returned by the backend executing the task'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='handle: Any JSONable type to identifying the task being executed by the backend'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Response from saving the job handle to database'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><Noindentation md='`Any`'/></div>

#### <span class="eighteen"><span class="bold">setup</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Placeholder to run any executor specific tasks'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">teardown</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Placeholder to run any executor specific tasks'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">to_dict</span>()</span>

<div class="up fourteen space"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>

#### <span class="eighteen"><span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Write the contents of stdout and stderr to respective files.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="up fourteen space"><ReactMarkdown children='* stream_strings (`Iterable`[`str`]) – The stream_strings to be written to files.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* filepaths (`Iterable`[`str`]) – The location of the results directory.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* dispatch_id (`str`) – The ID of the dispatch which initiated the request.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* results_dir (`str`) – The location of the results directory.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`None`'/></div>

## Asynchronous Base Executor Class

#### <span class="eighteen">class <span class="highlight">covalent.executor.base.</span><span class="bold">AsyncBaseExecutor</span>(\*args, \*\*kwargs)[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Async base executor class to be used for defining any executor plugin. Subclassing this class will allow you to define your own executor plugin which can be used in covalent.'/></div>
<div class="up fourteen space"><ReactMarkdown children='This is analogous to *BaseExecutor* except the *run()* method, together with the optional *setup()* and *teardown()* methods, are coroutines.'/></div>

#### <span class="bold space">log_stdout</span>

<div class="space1 up fourteen"><Noindentation md='The path to the file to be used for redirecting stdout.'/></div>

#### <span class="bold space">log_stderr</span>

<div class="space1 up fourteen"><Noindentation md='The path to the file to be used for redirecting stderr.'/></div>

#### <span class="bold space">cache_dir</span>

<div class="space1 up fourteen"><Noindentation md='The location used for cached files in the executor.'/></div>

#### <span class="bold space">time_limit</span>

<div class="space1 up fourteen"><Noindentation md='time limit for the task'/></div>

#### <span class="bold space">retries</span>

<div class="space1 up fourteen"><Noindentation md='Number of times to retry execution upon failure'/></div>

**Methods:**

<table class="tables">
  <tr>
    <td><div><ReactMarkdown children=' [`cancel`](/docs/user-documentation/api-reference/executors-api#async-canceltask_metadata-job_handlesource)(task_metadata, job_handle)'/></div></td>
    <td>Executor specific task cancelation method</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/executors-api#from_dictobject_dict-1) (object_dict)'/></div></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_cancel_requested`](/docs/user-documentation/api-reference/executors-api#async-get_cancel_requestedsource-)() '/></div></td>
    <td>Get if the task was requested to be canceled </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_dispatch_context`](/docs/user-documentation/api-reference/executors-api#get_dispatch_contextdispatch_info-)(dispatch_info)  '/></div></td>
    <td> Start a context manager that will be used to access the dispatch info for the executor.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`run`](/docs/user-documentation/api-reference/executors-api#abstract-runfunction-args-kwargs-task_metadatasource)(function, args, kwargs, task_metadata) '/></div></td>
    <td>Abstract method to run a function in the executor.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`set_job_handle`](/docs/user-documentation/api-reference/executors-api#async-set_job_handlehandlesource-)(handle)'/></div></td>
    <td>Save the job handle to database</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`setup`](/docs/user-documentation/api-reference/executors-api#async-setuptask_metadatasource-)(task_metadata) '/></div></td>
    <td>Executor specific setup method </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`teardown`](/docs/user-documentation/api-reference/executors-api#async-teardowntask_metadatasource-)(task_metadata) '/></div></td>
    <td>Executor specific teardown method </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/executors-api#to_dict-1)()'/></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`write_streams_to_file`](/docs/user-documentation/api-reference/executors-api#async-write_streams_to_filestream_strings-filepaths-dispatch_id-results_dirsource)(stream_strings, …) '/></div></td>
    <td>Write the contents of stdout and stderr to respective files.</td>
  </tr>
</table>

#### <span class="eighteen">async <span class="bold">cancel</span>(task_metadata, job_handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Executor specific task cancelation method'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='task_metadata: Metadata of the task to be canceled job_handle: Unique ID of the job assigned by the backend'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='False by default'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Literal`[False]'/></div>

#### <span class="eighteen"><span class="eighteen"><span class="bold">from_dict</span>(object_dict)</span></span>

<div class="up fourteen space"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children=' object_dict (`dict`) – a dictionary representation returned by *to_dict*'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`BaseExecutor`](/docs/user-documentation/api-reference/executors/scode-executor-base)'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='self'/></div>

<div class="space up fourteen down"><ReactMarkdown children='Instance attributes will be overwritten.'/></div>

#### <span class="eighteen">async <span class="bold">get_cancel_requested</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Get if the task was requested to be canceled'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='None'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Whether the task has been requested to be canceled'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><Noindentation md='`Any`'/></div>

#### <span class="eighteen"><span class="bold">get_dispatch_context</span>(dispatch_info) </span>

<div class="up fourteen space"><ReactMarkdown children='Start a context manager that will be used to access the dispatch info for the executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='dispatch_info (`DispatchInfo`) – The dispatch info to be used inside current context.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`AbstractContextManager`[`DispatchInfo`]'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down"><Noindentation md='A context manager object that handles the dispatch info.'/></div>

#### <span class="eighteen">abstract <span class="bold">run</span>(function, args, kwargs, task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Abstract method to run a function in the executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><ReactMarkdown children='* function (`Callable`) – The function to run in the executor'/></div>
<div class="up fourteen space"><ReactMarkdown children='* args (`List`) – List of positional arguments to be used by the function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* kwargs (`Dict`) – Dictionary of keyword arguments to be used by the function.'/></div>

<div class="up fourteen space"><ReactMarkdown children='* task_metadata(`Dict`) – Dictionary of metadata for the task. Current keys are *dispatch_id* and *node_id*'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='A context manager object that handles the dispatch info'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='output'/></div>

#### <span class="eighteen">async <span class="bold">set_job_handle</span>(handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="up fourteen space"><ReactMarkdown children='Save the job_id/handle returned by the backend executing the task'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='handle: Any JSONable type to identifying the task being executed by the backend'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Response from saving the job handle to database'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><Noindentation md='`Any`'/></div>

#### <span class="eighteen">async <span class="bold">setup</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="space up fourteen down"><ReactMarkdown children='Executor specific setup method'/></div>

#### <span class="eighteen">async <span class="bold">teardown</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base) </span>

<div class="space up fourteen down"><ReactMarkdown children='Executor specific teardown method'/></div>

#### <span class="eighteen"><span class="bold">to_dict</span>()</span>

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>

#### <span class="eighteen">async <span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode-executor-base)</span>

<div class="up fourteen space"><ReactMarkdown children='Write the contents of stdout and stderr to respective files.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>

<div class="up fourteen space"><ReactMarkdown children='* stream_strings (`Iterable`[`str`]) – The stream_strings to be written to files.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* filepaths (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* dispatch_id (`str`) – The ID of the dispatch which initiated the request.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* results_dir (`str`) – The location of the results directory.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`None`'/></div>

## Dask Executor

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

#### <span class="eighteen">class <span class="highlight">covalent.executor.executor_plugins.dask.</span><span class="bold">DaskExecutor</span>(scheduler_address='', log_stdout='stdout.log', log_stderr='stderr.log', conda_env='', cache_dir='', current_env_on_conda_fail=False)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode)</span>

<div class="up fourteen space"><ReactMarkdown children='Dask executor class that submits the input function to a running dask cluster.'/></div>

#### Methods:

<table className="tables">
  <tr>
    <td> <ReactMarkdown children=' [`cancel`](/docs/user-documentation/api-reference/executors-api#async-canceltask_metadata-job_handle-source)(task_metadata, job_handle) '/></td>
    <td>Cancel the task being executed by the dask executor currently</td>
  </tr>
  <tr>
    <td> <ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/executors-api#from_dictobject_dict-2) (object_dict)'/></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
  <tr>
    <td> <ReactMarkdown children='[`get_cancel_requested`](/docs/user-documentation/api-reference/executors-api#async-get_cancel_requested)()'/></td>
    <td>Get if the task was requested to be canceled</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`get_dispatch_context`](/docs/user-documentation/api-reference/executors-api#get_dispatch_contextdispatch_info)(dispatch_info)'/></td>
    <td>Start a context manager that will be used to access the dispatch info for the executor.</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`run`](/docs/user-documentation/api-reference/executors-api#async-runfunction-args-kwargs-task_metadata-source)(function, args, kwargs, task_metadata)'/></td>
    <td>Submit the function and inputs to the dask cluster</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`set_job_handle`](/docs/user-documentation/api-reference/executors-api#async-set_job_handlehandle)(handle)'/></td>
    <td>Save the job handle to database</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`setup`](/docs/user-documentation/api-reference/executors-api#async-setuptask_metadata)(task_metadata)'/></td>
    <td>Executor specific setup method</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`teardown`](/docs/user-documentation/api-reference/executors-api#async-teardowntask_metadata)(task_metadata)'/></td>
    <td>Executor specific teardown method</td>
  </tr>
      <tr>
    <td> <ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/executors-api#to_dict-2)()'/></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td> <ReactMarkdown children='[`write_streams_to_file`](/docs/user-documentation/api-reference/executors-api#async-write_streams_to_filestream_strings-filepaths-dispatch_id-results_dir)(stream_strings, …)'/></td>
    <td>Write the contents of stdout and stderr to respective files.</td>
  </tr>
</table>

#### <span class="eighteen"><span class="eighteen">async <span class="bold">cancel</span>(task_metadata, job_handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/executors/scode)</span></span>

<div class="up fourteen space"><ReactMarkdown children='Cancel the task being executed by the dask executor currently'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Arg(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='task_metadata: Metadata associated with the task job_handle: Key assigned to the job by Dask'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Return(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='True by default'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Return Type**'/></div>

<div class="space1 up fourteen down"><ReactMarkdown children='`Literal`[True]'/></div>

##### <span class="eighteen"><span class="bold">from_dict</span>(object_dict)</span>

<div class="space fourteen up"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Parameters**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='object_dict (`dict`) – a dictionary representation returned by to_dict'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Return Type**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='[`BaseExecutor`](/docs/user-documentation/api-reference/executors-api#class-covalentexecutorbasebaseexecutorargs-kwargssource-)'/></div>
<div class="highlight2 space up eighteen" ><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='self'/></div>

<div class="doubleup space fourteen"><Noindentation md='Instance attributes will be overwritten.'/></div>

##### <span class="eighteen">async <span class="bold">get_cancel_requested</span>()</span>

<div class="up fourteen space"><Noindentation md='Get if the task was requested to be canceled'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Arg(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='None'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Return(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='Whether the task has been requested to be canceled'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Return Type**'/></div>

<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

##### <span class="eighteen"><span class="bold">get_dispatch_context</span>(dispatch_info)</span>

<div class="space up fourteen"><Noindentation md='Start a context manager that will be used to access the dispatch info for the executor.'/></div>

<div class="highlight2 space up"><Noindentation md='**Parameters**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='dispatch_info (`DispatchInfo`) – The dispatch info to be used inside current context.'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='`AbstractContextManager`[`DispatchInfo`]'/></div>

<div class="highlight2 space up"><Noindentation md='**Returns**'/></div>

<div class="space1 up fourteen down"><ReactMarkdown children='A context manager object that handles the dispatch info.'/></div>

#### async <span class="eighteen"><span class="bold">run</span>(function, args, kwargs, task_metadata) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode)</span>

<div class="down fourteen up space">Submit the function and inputs to the dask cluster</div>

##### async <span class="bold">set_job_handle</span>(handle)

<div class="space fourteen up"><Noindentation md='Save the job handle to database'/></div>

<div class="highlight2 space up"><Noindentation md='**Arg(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='handle: JSONable type identifying the job being executed by the backend'/></div>

<div class="highlight2 space up"><Noindentation md='**Return(s)**'/></div>

<div class="space1 up fourteen"><ReactMarkdown children='Response from the listener that handles inserting the job handle to database'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>

<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

##### <span class="eighteen">async <span class="bold">setup</span>(task_metadata)</span>

<div class="space up fourteen down"><ReactMarkdown children='Executor specific setup method'/></div>

##### <span class="eighteen">async <span class="bold">teardown</span>(task_metadata)</span>

<div class="space up fourteen down"><ReactMarkdown children='Executor specific teardown method'/></div>

##### <span class="eighteen"><span class="bold">to_dict</span>()</span>

<div class="space up fourteen down"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="doubleup highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>

##### <span class="eighteen">async <span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)</span>

<div class="fourteen space up"><Noindentation md='Write the contents of stdout and stderr to respective files.'/></div>

<div class="highlight2 space eighteen"><Noindentation md='**Parameters**'/></div>
<div class= "up fourteen space"><Noindentation md='* stream_strings (`Iterable`[`str`]) – The stream_strings to be written to files.'/></div>
<div class= "up fourteen space"><Noindentation md='* filepaths (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/></div>
<div class= "up fourteen space"><Noindentation md='* dispatch_id (`str`) – The ID of the dispatch which initiated the request.'/></div>
<div class= "up fourteen space"><Noindentation md='* results_dir (`str`) – The location of the results directory.'/></div>

<div class="space fourteen"><Noindentation md=' This uses aiofiles to avoid blocking the event loop.'/></div>

<div class="highlight2 space up"><Noindentation md='**Return Type**'/></div>

<div class= "up fourteen space"><Noindentation md='`None`'/></div>

## Local Executor

<div class="up fourteen"><ReactMarkdown children='Executing tasks (electrons) directly on the local machine'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.executor.executor_plugins.local.</span><span class="bold">LocalExecutor</span>(\*args, \*\*kwargs)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode)</span>

<div class="up fourteen space"><ReactMarkdown children='Local executor class that directly invokes the input function.'/></div>

#### Methods:

<table class="tables">
  <tr>
    <td><div><ReactMarkdown children='[`cancel`](/docs/user-documentation/api-reference/executors-api#canceltask_metadata-job_handle-)(task_metadata, job_handle)'/></div></td>
    <td>Method to cancel the job identified uniquely by the job_handle (base class)</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`execute`](/docs/user-documentation/api-reference/executors-api#executefunction-args-kwargs-dispatch_id-results_dir-node_id--1-)(function, args, kwargs, dispatch_id, …)'/></div></td>
    <td>Execute the function with the given arguments.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`from_dict`](/docs/user-documentation/api-reference/executors-api#from_dictobject_dict-3) (object_dict)'/></div></td>
    <td> Rehydrate a dictionary representation</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_cancel_requested`](/docs/user-documentation/api-reference/executors-api#get_cancel_requested-)()'/></div></td>
    <td>Check if the task was requested to be canceled by the user  </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`get_dispatch_context`](/docs/user-documentation/api-reference/executors-api#get_dispatch_contextdispatch_info--1)(dispatch_info)'/></div></td>
    <td>Start a context manager that will be used to access the dispatch info for the executor. </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`run`](/docs/user-documentation/api-reference/executors-api#runfunction-args-kwargs-task_metadatasource-)(function, args, kwargs, task_metadata)'/></div></td>
    <td>Execute the function locally  </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`set_job_handle`](/docs/user-documentation/api-reference/executors-api#set_job_handlehandle)(handle)'/></div></td>
    <td> Save the job_id/handle returned by the backend executing the task </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`setup`](/docs/user-documentation/api-reference/executors-api#setuptask_metadata-)(task_metadata)'/></div></td>
    <td>Placeholder to run any executor specific tasks</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`teardown`](/docs/user-documentation/api-reference/executors-api#teardowntask_metadata)(task_metadata) '/></div></td>
    <td>Placeholder to run nay executor specific cleanup/teardown actions </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/executors-api#to_dict-3)()'/></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`write_streams_to_file`](/docs/user-documentation/api-reference/executors-api#write_streams_to_filestream_strings-filepaths-dispatch_id-results_dir)(stream_strings, …)'/></div></td>
    <td>Write the contents of stdout and stderr to respective files.</td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">cancel</span>(task_metadata, job_handle) </span>

<div class="up fourteen space"><ReactMarkdown children='Method to cancel the job identified uniquely by the job_handle (base class)'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='task_metadata: Metadata of the task to be canceled job_handle: Unique ID of the job assigned by the backend'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='False by default'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><Noindentation md='`Literal`[False]'/></div>

#### <span class="eighteen"><span class="bold">execute</span>(function, args, kwargs, dispatch_id, results_dir, node_id=- 1) </span>

<div class="up fourteen space"><ReactMarkdown children='Execute the function with the given arguments.'/></div>
<div class="up fourteen space"><ReactMarkdown children='This calls the executor-specific *run()* method.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space up fourteen"><ReactMarkdown children='* function (`Callable`) – The input python function which will be executed and whose result is ultimately returned by this function.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* args (`List`) – List of positional arguments to be used by the function.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* kwargs (`Dict`) – Dictionary of keyword arguments to be used by the function.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* dispatch_id (`str`) – The unique identifier of the external lattice process which is calling this function.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* results_dir (`str`) – The location of the results directory.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* node_id (`int`) – ID of the node in the transport graph which is using this executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='The result of the function execution.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='output'/></div>

#### <span class="eighteen"><span class="bold">from_dict</span>(object_dict)</span>

<div class="up fourteen space"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict (dict) – a dictionary representation returned by to_dict'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`BaseExecutor`](/docs/user-documentation/api-reference/executors-api#class-covalentexecutorbasebaseexecutorargs-kwargssource-)'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='self'/></div>

<div class="space up fourteen down"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="eighteen"><span class="bold">get_cancel_requested</span>() </span>

<div class="up fourteen space"><ReactMarkdown children='Check if the task was requested to be canceled by the user'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='None'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='True/False whether task cancelation was requested'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`bool`'/></div>

#### <span class="eighteen"><span class="bold">get_dispatch_context</span>(dispatch_info) </span>

<div class="up fourteen space"><ReactMarkdown children='Start a context manager that will be used to access the dispatch info for the executor.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='**dispatch_info** (`DispatchInfo`) – The dispatch info to be used inside current context.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`AbstractContextManager`[`DispatchInfo`]'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down"><Noindentation md='A context manager object that handles the dispatch info.'/></div>

#### <span class="eighteen"><span class="bold">run</span>(function, args, kwargs, task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/executors/scode) </span>

<div class="up fourteen space"><ReactMarkdown children='Execute the function locally'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='function: Function to be executed args: Arguments passed to the function kwargs: Keyword arguments passed to the function task_metadata: Metadata of the task to be executed'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='Task output'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">set_job_handle</span>(handle)</span>

<div class="up fourteen space"><ReactMarkdown children='Save the job_id/handle returned by the backend executing the task'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Arg(s)**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='handle: JSONable type identifying the job being executed by the backend'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='Response from saving the job handle to database'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">setup</span>(task_metadata) </span>

<div class="up fourteen space"><ReactMarkdown children='Placeholder to run any executor specific tasks'/></div>
<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">teardown</span>(task_metadata)</span>

<div class="up fourteen space"><ReactMarkdown children='Placeholder to run nay executor specific cleanup/teardown actions'/></div>
<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`Any`'/></div>

#### <span class="eighteen"><span class="bold">to_dict</span>()</span>

<div class="up fourteen space"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>
<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>

#### <span class="eighteen"><span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)</span>

<div class="up fourteen space"><ReactMarkdown children='Write the contents of stdout and stderr to respective files.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><ReactMarkdown children='* stream_strings (`Iterable`[`str`]) – The stream_strings to be written to files.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* filepaths (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* dispatch_id (`str`) – The ID of the dispatch which initiated the request.'/></div>
<div class="up fourteen space"><ReactMarkdown children='* results_dir (`str`) – The location of the results directory.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`None`'/></div>

## AWS Plugins

<img src='/img/executorAssets/AWS_Plugins.png'/>

[Covalent](https://github.com/AgnostiqHQ/covalent) is a python based workflow orchestration tool used to execute HPC and quantum tasks in heterogenous environments.

By installing Covalent AWS Plugins users can leverage a broad plugin ecosystem to execute tasks using AWS resources best fit for each task.

<Plugingrid code={code}/>

If you’re new to covalent visit our [Getting Started Guide](/docs/get-started/quick-start).

### 1. Installation

To use the AWS plugin ecosystem with Covalent, simply install it with `pip`:

```bash
pip install "covalent-aws-plugins[all]"
```

This will ensure that all the AWS executor plugins listed below are installed.

:::info Note
Users will require [Terraform](https://www.terraform.io/downloads) to be installed in order to use the EC2 plugin.
:::

### 2. Included Plugins

While each plugin can be seperately installed installing the above pip package installs all of the below plugins.

<div className="tables down">

|       Plugins       | Plugin Name         | Use Case                                                                                                                                                                              |
| :-----------------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={batch}/>  | AWS Batch Executor  | ** Useful for heavy compute workloads (high CPU/memory). ** Tasks are queued to execute in the user defined Batch compute environment.                                                |
|  <img src={ec2}/>   | AWS EC2 Executor    | **General purpose compute workloads where users can select compute resources. ** An EC2 instance is auto-provisioned using terraform with selected compute settings to execute tasks. |
| <img src={braket}/> | AWS Braket Executor | **Suitable for Quantum/Classical hybrid workflows. ** Tasks are executed using a combination of classical and quantum devices.                                                        |
|  <img src={ecs}/>   | AWS ECS Executor    | ** Useful for moderate to heavy workloads (low memory requirements). ** Tasks are executed in an AWS ECS cluster as containers.                                                       |
| <img src={lambda}/> | AWS Lambda Executor | ** Suitable for short lived tasks that can be parallalized (low memory requirements). ** Tasks are executed in serverless AWS Lambda functions.                                       |

</div>

### 3. Usage Example

- Firstly, import covalent

```py
import covalent as ct
```

- Secondly, define your executor

<Tabs>
  <TabItem value="Batch" label="Batch" default>

```py
executor = ct.executor.AWSBatchExecutor(
    s3_bucket_name = "covalent-batch-qa-job-resources",
    batch_job_definition_name = "covalent-batch-qa-job-definition",
    batch_queue = "covalent-batch-qa-queue",
    batch_execution_role_name = "ecsTaskExecutionRole",
    batch_job_role_name = "covalent-batch-qa-job-role",
    batch_job_log_group_name = "covalent-batch-qa-log-group",
    vcpu = 2, # Number of vCPUs to allocate
    memory = 3.75, # Memory in GB to allocate
    time_limit = 300, # Time limit of job in seconds
)
```

  </TabItem>
  <TabItem value="EC2" label="EC2">

```py
executor = ct.executor.EC2Executor(
    instance_type="t2.micro",
    volume_size=8, #GiB
    ssh_key_file="~/.ssh/ec2_key"
)
```

  </TabItem>
  <TabItem value="Braket" label="Braket">

```py
executor = ct.executor.BraketExecutor(
    s3_bucket_name="braket_s3_bucket",
    ecr_repo_name="braket_ecr_repo",
    braket_job_execution_role_name="covalent-braket-iam-role",
    quantum_device="arn:aws:braket:::device/quantum-simulator/amazon/sv1",
    classical_device="ml.m5.large",
    storage=30,
)
```

  </TabItem>
  <TabItem value="ECS" label="ECS">

```py
executor = ct.executor.ECSExecutor(
    s3_bucket_name="covalent-fargate-task-resources",
    ecr_repo_name="covalent-fargate-task-images",
    ecs_cluster_name="covalent-fargate-cluster",
    ecs_task_family_name="covalent-fargate-tasks",
    ecs_task_execution_role_name="ecsTaskExecutionRole",
    ecs_task_role_name="CovalentFargateTaskRole",
    ecs_task_subnet_id="subnet-000000e0",
    ecs_task_security_group_id="sg-0000000a",
    ecs_task_log_group_name="covalent-fargate-task-logs",
    vcpu=1,
    memory=2
)
```

  </TabItem>
  <TabItem value="Lambda" label="Lambda">

```py
executor = ct.executor.AWSLambdaExecutor(
    lambda_role_name="CovalentLambdaExecutionRole",
    s3_bucket_name="covalent-lambda-job-resources",
    timeout=60,
    memory_size=512
)
```

  </TabItem>
</Tabs>

- Lastly, define a workflow to execute a particular task using one of the above executors

```py
@ct.electron(
    executor=executor
)
def compute_pi(n):
    # Leibniz formula for π
    return 4 * sum(1.0/(2*i + 1)*(-1)**i for i in range(n))

@ct.lattice
def workflow(n):
    return compute_pi(n)


dispatch_id = ct.dispatch(workflow)(100000000)
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
print(result.result)

```

Which should output

```py
3.141592643589326
```

## AWS Batch Executor

<img src={AWS_Batch}/>

Covalent is a Pythonic workflow tool used to execute tasks on advanced computing hardware.

This executor plugin interfaces Covalent with [AWS Batch](https://docs.aws.amazon.com/batch/) which allows tasks in a covalent workflow to be executed as AWS batch jobs.

Furthermore, this plugin is well suited for compute/memory intensive tasks such as training machine learning models, hyperparameter optimization, deep learning etc. With this executor, the compute backend is the Amazon EC2 service, with instances optimized for compute and memory intensive operations.

To use this plugin with Covalent, simply install it using `pip`:

```bash
pip install covalent-awsbatch-plugin
```

This is an example of how a workflow can be adapted to utilize the AWS Batch Executor. Here we train a simple Support Vector Machine (SVM) model and use an existing AWS Batch Compute environment to run the `train_svm` electron as a batch job. We also note we require [DepsPip](/docs/user-documentation/concepts/concepts-index) to install the dependencies when creating the batch job.

<!-- depspip connected doc is done by manish iys covalent concepts with cards in it attach the link there -->

```py
from numpy.random import permutation
from sklearn import svm, datasets
import covalent as ct

deps_pip = ct.DepsPip(
  packages=["numpy==1.23.2", "scikit-learn==1.1.2"]
)

executor = ct.executor.AWSBatchExecutor(
    s3_bucket_name = "covalent-batch-qa-job-resources",
    batch_job_definition_name = "covalent-batch-qa-job-definition",
    batch_queue = "covalent-batch-qa-queue",
    batch_execution_role_name = "ecsTaskExecutionRole",
    batch_job_role_name = "covalent-batch-qa-job-role",
    batch_job_log_group_name = "covalent-batch-qa-log-group",
    vcpu = 2, # Number of vCPUs to allocate
    memory = 3.75, # Memory in GB to allocate
    time_limit = 300, # Time limit of job in seconds
)

# Use executor plugin to train our SVM model.
@ct.electron(
    executor=executor,
    deps_pip=deps_pip
)
def train_svm(data, C, gamma):
    X, y = data
    clf = svm.SVC(C=C, gamma=gamma)
    clf.fit(X[90:], y[90:])
    return clf

@ct.electron
def load_data():
    iris = datasets.load_iris()
    perm = permutation(iris.target.size)
    iris.data = iris.data[perm]
    iris.target = iris.target[perm]
    return iris.data, iris.target

@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(
      X_test[:90],
    y_test[:90]
    )

@ct.lattice
def run_experiment(C=1.0, gamma=0.7):
    data = load_data()
    clf = train_svm(
      data=data,
      C=C,
      gamma=gamma
    )
    score = score_svm(
      data=data,
    clf=clf
    )
    return score

# Dispatch the workflow
dispatch_id = ct.dispatch(run_experiment)(
  C=1.0,
  gamma=0.7
)

# Wait for our result and get result value
result = ct.get_result(dispatch_id=dispatch_id, wait=True).result

print(result)
```

During the execution of the workflow one can navigate to the UI to see the status of the workflow, once completed however the above script should also output a value with the score of our model.

```py
0.8666666666666667
```

<div class="tables down">

| Config Key                | Is Required | Default                      | Description                                                                                    |
| ------------------------- | ----------- | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| profile                   | No          | default                      | Named AWS profile used for authentication                                                      |
| region                    | Yes         | us-east-1                    | AWS Region to use to for client calls                                                          |
| credentials               | No          | ~/.aws/credentials           | The path to the AWS credentials file                                                           |
| batch_queue               | Yes         | covalent-batch-queue         | Name of the Batch queue used for job management                                                |
| s3_bucket_name            | Yes         | covalent-batch-job-resources | Name of an S3 bucket where covalent artifacts are stored.                                      |
| batch_job_definition_name | Yes         | covalent-batch-jobs          | Name of the Batch job definition for a user, project, or experiment.                           |
| batch_execution_role_name | No          | ecsTaskExecutionRole         | Name of the IAM role used by the Batch ECS agent (the above role should already exist in AWS). |
| batch_job_role_name       | Yed         | CovalentBatchJobRole         | Name of the IAM role used within the container.                                                |
| batch_job_log_group_name  | Yes         | covalent-batch-job-logs      | Name of the CloudWatch log group where container logs are stored.                              |
| vcpu                      | No          | 2                            | The number of vCPUs available to a task                                                        |
| memory                    | No          | 3.75                         | Memory (in GB) available to a task                                                             |
| num_gpus                  | No          | 0                            | Number of GPUs available to a task.                                                            |
| retry_attempts            | No          | 3                            | Number of times a job is retried if it fails.                                                  |
| time_limit                | No          | 300                          | Time limit (in seconds) after which jobs are killed.                                           |
| poll_freq                 | No          | 10                           | Frequency (in seconds) with which to poll a submitted task.                                    |
| cache_dir                 | No          | /tmp/covalent                | Cache directory used by this executor for temporary files.                                     |

</div>

This plugin can be configured in one of two ways:

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.AWSBatchExecutor`
2. By modifying the [covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config) under the section `[executors.awsbatch]`

The following shows an example of how a user might modify their [covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config) to support this plugin:

<!-- there is acustomization file just like juoyter note book we need to make it and create it -->

```py
[executors.awsbatch]
s3_bucket_name = "covalent-batch-job-resources"
batch_queue = "covalent-batch-queue"
batch_job_definition_name = "covalent-batch-jobs"
batch_execution_role_name = "ecsTaskExecutionRole"
batch_job_role_name = "CovalentBatchJobRole"
batch_job_log_group_name = "covalent-batch-job-logs"
...
```

In order to run your workflows with covalent there are a few notable AWS resources that need to be provisioned first.

<div class="tables down">

| Config Value                  | Is Required | Default                        | Description                                                                                                                                                                |
| ----------------------------- | ----------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS S3 Bucket                 | Yes         | `covalent-batch-job-resources` | S3 bucket must be created for covalent to store essential files that are needed during execution.                                                                          |
| VPC & Subnet                  | Yes         | N/A                            | A VPC must be associated with the AWS Batch Compute Environment along with a public or private subnet (there needs to be additional resources created for private subnets) |
| AWS Batch Compute Environment | Yes         | N/A                            | An AWS Batch compute environment (EC2) that will provision EC2 instances as needed when jobs are submitted to the associated job queue.                                    |
| AWS Batch Queue               | Yes         | `batch_queue`                  | An AWS Batch Job Queue that will queue tasks for execution in it’s associated compute environment.                                                                         |
| AWS Batch Job Definition      | Yes         | `batch_job_role_name`          | An AWS Batch job definition that will be replaced by a new batch job definition when the workflow is executed.                                                             |
| AWS IAM Role (Job Role)       | Yes         | `batch_job_definition_name`    | The IAM role used within the container.                                                                                                                                    |
| AWS IAM Role (Execution Role) | No          | `batch_execution_role_name`    | The IAM role used by the Batch ECS agent (default role ecsTaskExecutionRole should already exist).                                                                         |
| Log Group                     | Yes         | `batch_job_log_group_name`     | An AWS CloudWatch log group where task logs are stored.                                                                                                                    |

</div>

1. To create an AWS S3 Bucket refer to the following [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).
2. To create a VPC & Subnet refer to the following [AWS documentation](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html).
3. To create an AWS Batch Queue refer to the following [AWS documentation](https://docs.aws.amazon.com/batch/latest/userguide/create-job-queue.html) it must be a compute environment configured in EC2 mode.
4. To create an AWS Batch Job Definition refer to the following [AWS documentation](https://docs.aws.amazon.com/batch/latest/userguide/create-job-definition-EC2.html) the configuration for this can be trivial as covalent will update the Job Definition prior to execution.
5. To create an AWS IAM Role for batch jobs (Job Role) one can provision a policy with the following permissions (below) then create a new role and attach with the created policy. Refer to the following [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html) for an example of creating a policy & role in IAM.

<details>
  <summary>AWS Batch IAM Job Policy</summary>
  <div>

```js

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "BatchJobMgmt",
            "Effect": "Allow",
            "Action": [
                "batch:TerminateJob",
                "batch:DescribeJobs",
                "batch:SubmitJob",
                "batch:RegisterJobDefinition"
            ],
            "Resource": "*"
        },
        {
            "Sid": "ECRAuth",
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken"
            ],
            "Resource": "*"
        },
        {
            "Sid": "ECRUpload",
            "Effect": "Allow",
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:PutImage"
            ],
            "Resource": [
                "arn:aws:ecr:<region>:<account>:repository/<ecr_repo_name>"
            ]
        },
        {
            "Sid": "IAMRoles",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:PassRole"
            ],
            "Resource": [
                "arn:aws:iam::<account>:role/CovalentBatchJobRole",
                "arn:aws:iam::<account>:role/ecsTaskExecutionRole"
            ]
        },
        {
            "Sid": "ObjectStore",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<s3_resource_bucket>/*",
                "arn:aws:s3:::<s3_resource_bucket>"
            ]
        },
        {
            "Sid": "LogRead",
            "Effect": "Allow",
            "Action": [
                "logs:GetLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:<region>:<account>:log-group:<cloudwatch_log_group_name>:log-stream:*"
            ]
        }
    ]
}

```

  </div>
</details>

## AWS Braket Executor

<img src={aws}/>

Covalent is a Pythonic workflow tool used to execute tasks on advanced computing hardware.

This plugin allows executing quantum circuits and quantum-classical hybrid jobs in Amazon Braket when you use Covalent.

To use this plugin with Covalent, simply install it using `pip`:

```bash
pip install covalent-braket-plugin
```

The following toy example executes a simple quantum circuit on one qubit that prepares a uniform superposition of the standard basis states and then measures the state. We use the [Pennylane](https://pennylane.ai/) framework.

```py
import covalent as ct
from covalent_braket_plugin.braket import BraketExecutor
import os

# AWS resources to pass to the executor
credentials = "~/.aws/credentials"
profile = "default"
    region = "us-east-1"
s3_bucket_name = "braket_s3_bucket"
ecr_repo_name = "braket_ecr_repo"
iam_role_name = "covalent-braket-iam-role"

# Instantiate the executor
ex = BraketExecutor(
            profile=profile,
            credentials=credentials_file,
            s3_bucket_name=s3_bucket_name,
            ecr_image_uri=ecr_image_uri,
            braket_job_execution_role_name=iam_role_name,
            quantum_device="arn:aws:braket:::device/quantum-simulator/amazon/sv1",
            classical_device="ml.m5.large",
            storage=30,
            time_limit=300,
    )


# Execute the following circuit:
# |0> - H - Measure
@ct.electron(executor=ex)
def simple_quantum_task(num_qubits: int):
    import pennylane as qml

    # These are passed to the Hybrid Jobs container at runtime
    device_arn = os.environ["AMZN_BRAKET_DEVICE_ARN"]
    s3_bucket = os.environ["AMZN_BRAKET_OUT_S3_BUCKET"]
    s3_task_dir = os.environ["AMZN_BRAKET_TASK_RESULTS_S3_URI"].split(s3_bucket)[1]

    device = qml.device(
        "braket.aws.qubit",
        device_arn=device_arn,
        s3_destination_folder=(s3_bucket, s3_task_dir),
        wires=num_qubits,
    )

    @qml.qnode(device=device)
    def simple_circuit():
        qml.Hadamard(wires=[0])
        return qml.expval(qml.PauliZ(wires=[0]))

    res = simple_circuit().numpy()
    return res


@ct.lattice
def simple_quantum_workflow(num_qubits: int):
    return simple_quantum_task(num_qubits=num_qubits)


dispatch_id = ct.dispatch(simple_quantum_workflow)(1)
result_object = ct.get_result(dispatch_id, wait=True)

# We expect 0 as the result
print("Result:", result_object.result)
```

During the execution of the workflow one can navigate to the UI to see the status of the workflow, once completed however the above script should also output a value with the output of the quantum measurement.

```py
>>> Result: 0
```

<div class="tables down">

| Config Value                   | Is Required | Default                                                | Description                                                                  |
| ------------------------------ | ----------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| credentials                    | No          | “~/.aws/credentials”                                   | The path to the AWS credentials file                                         |
| braket_job_execution_role_name | Yes         | “CovalentBraketJobsExecutionRole”                      | The name of the IAM role that Braket will assume during task execution.      |
| profile                        | No          | “default”                                              | Named AWS profile used for authentication                                    |
| region                         | Yes         | :code`AWS_DEFAULT_REGION` environment variable         | AWS Region to use to for client calls to AWS                                 |
| s3_bucket_name                 | Yes         | amazon-braket-covalent-job-resources                   | The S3 bucket where Covalent will store input and output files for the task. |
| ecr_image_uri                  | Yes         |                                                        | An ECR repository for storing container images to be run by Braket.          |
| quantum_device                 | No          | “arn:aws:braket:::device/quantum-simulator/amazon/sv1” | The ARN of the quantum device to use                                         |
| classical_device               | No          | “ml.m5.large”                                          | Instance type for the classical device to use                                |
| storage                        | No          | 30                                                     | Storage size in GB for the classical device                                  |
| time_limit                     | No          | 300                                                    | Max running time in seconds for the Braket job                               |
| poll_freq                      | No          | 30                                                     | How often (in seconds) to poll Braket for the job status                     |
| cache_dir                      | No          | “/tmp/covalent”                                        | Location for storing temporary files generated by the Covalent server        |

</div>

This plugin can be configured in one of two ways:

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.BraketExecutor`
2. By modifying the [covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config) under the section `[executors.braket]`

The following shows an example of how a user might modify their [covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config) to support this plugin:

```py
[executors.braket]
quantum_device = "arn:aws:braket:::device/qpu/ionq/ionQdevice"
time_limit = 3600
```

The Braket executor requires some resources to be provisioned on AWS. Precisely, users will need an S3 bucket, an ECR repo, and an IAM role with the appropriate permissions to be passed to Braket.

<div class="tables down">

| Resource       | Is Required | Config Key                       | Description                                                                             |
| -------------- | ----------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| IAM role       | Yes         | `braket_job_execution_role_name` | An IAM role granting permissions to Braket, S3, ECR, and a few other resources.         |
| ECR repository | Yes         | `ecr_image_uri`                  | An ECR repository for storing container images to be run by Braket.                     |
| S3 Bucket      | Yes         | `s3_bucket`                      | An S3 bucket for storing task-specific data, such as Braket outputs or function inputs. |

</div>

One can either follow the below instructions to manually create the resources or use the provided terraform script to auto-provision the resources needed.

1. The [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html) on S3 details how to configure an S3 bucket.
2. The permissions required for the the IAM role are documented in the article [“managing access to Amazon Braket”](https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html). The following policy is attached to the default role “CovalentBraketJobsExecutionRole”:
3. In order to use the Braket executor plugin one must create a private ECR registry with a container image that will be used to execute the Braket jobs using covalent. One can either create an ECR repository [manually](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html) or use the terraform script provided below. We host the image in our public repository at `public.ecr.aws/covalent/covalent-braket-executor:stable`

<Typography style={{fontSize:'14px'}}>

:::info Note
The container image can be uploaded to a private ECR as follows

<span style={{fontSize:'12px'}}>

```azurecli
docker pull public.ecr.aws/covalent/covalent-braket-executor:stable
```

</span>

Once the image has been obtained, user’s can tag it with their registry information and upload to ECR as follows

<span style={{fontSize:'12px'}}>

```azurecli
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
docker tag public.ecr.aws/covalent/covalent-braket-executor:stable <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<my-repository>:tag
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<my-repository>:tag
```

</span>
:::

</Typography>

<details>
  <summary>Sample IAM Policy for Braket's execution role</summary>
  <div>

{
“Version”: “2012-10-17”, “Statement”: [

> > {
> > “Sid”: “VisualEditor0”, “Effect”: “Allow”, “Action”: “cloudwatch:PutMetricData”, “Resource”: “\*”, “Condition”: {
> >
> > > “StringEquals”: { “cloudwatch:namespace”: “/aws/braket” }
> >
> > }
> >
> > }, {
> >
> > > “Sid”: “VisualEditor1”, “Effect”: “Allow”, “Action”: [
> > >
> > > > “logs:CreateLogStream”, “logs:DescribeLogStreams”, “ecr:GetDownloadUrlForLayer”, “ecr:BatchGetImage”, “logs:StartQuery”, “logs:GetLogEvents”, “logs:CreateLogGroup”, “logs:PutLogEvents”, “ecr:BatchCheckLayerAvailability”
> > > > ], “Resource”: [
> > > >
> > > > “arn:aws:ecr::348041629502:repository/”, “arn:aws:logs:::log-group:/aws/braket\*”
> > >
> > > ]
> > >
> > > }, {
> > >
> > > “Sid”: “VisualEditor2”, “Effect”: “Allow”, “Action”: “iam:PassRole”, “Resource”: “arn:aws:iam::348041629502:role/CovalentBraketJobsExecutionRole”, “Condition”: {
> > >
> > > > “StringLike”: { “iam:PassedToService”: “braket.amazonaws.com” }
> > >
> > > }
> >
> > }, {
> >
> > > “Sid”: “VisualEditor3”, “Effect”: “Allow”, “Action”: [
> > >
> > > > “braket:SearchDevices”, “s3:CreateBucket”, “ecr:BatchDeleteImage”, “ecr:BatchGetRepositoryScanningConfiguration”, “ecr:DeleteRepository”, “ecr:TagResource”, “ecr:BatchCheckLayerAvailability”, “ecr:GetLifecyclePolicy”, “braket:CreateJob”, “ecr:DescribeImageScanFindings”, “braket:GetJob”, “ecr:CreateRepository”, “ecr:PutImageScanningConfiguration”, “ecr:GetDownloadUrlForLayer”, “ecr:DescribePullThroughCacheRules”, “ecr:GetAuthorizationToken”, “ecr:DeleteLifecyclePolicy”, “braket:ListTagsForResource”, “ecr:PutImage”, “s3:PutObject”, “s3:GetObject”, “braket:GetDevice”, “ecr:UntagResource”, “ecr:BatchGetImage”, “ecr:DescribeImages”, “braket:CancelQuantumTask”, “ecr:StartLifecyclePolicyPreview”, “braket:CancelJob”, “ecr:InitiateLayerUpload”, “ecr:PutImageTagMutability”, “ecr:StartImageScan”, “ecr:DescribeImageReplicationStatus”, “ecr:ListTagsForResource”, “s3:ListBucket”, “ecr:UploadLayerPart”, “ecr:CreatePullThroughCacheRule”, “ecr:ListImages”, “ecr:GetRegistryScanningConfiguration”, “braket:TagResource”, “ecr:CompleteLayerUpload”, “ecr:DescribeRepositories”, “ecr:ReplicateImage”, “ecr:GetRegistryPolicy”, “ecr:PutLifecyclePolicy”, “s3:PutBucketPublicAccessBlock”, “ecr:GetLifecyclePolicyPreview”, “ecr:DescribeRegistry”, “braket:SearchJobs”, “braket:CreateQuantumTask”, “iam:ListRoles”, “ecr:PutRegistryScanningConfiguration”, “ecr:DeletePullThroughCacheRule”, “braket:UntagResource”, “ecr:BatchImportUpstreamImage”, “braket:GetQuantumTask”, “s3:PutBucketPolicy”, “braket:SearchQuantumTasks”, “ecr:GetRepositoryPolicy”, “ecr:PutReplicationConfiguration”
> >
> > > ], “Resource”: “\*”
> >
> > }, {
> >
> > “Sid”: “VisualEditor4”, “Effect”: “Allow”, “Action”: “logs:GetQueryResults”, “Resource”: “arn:aws:logs:::log-group:\*”
> >
> > }, {
> >
> > > “Sid”: “VisualEditor5”, “Effect”: “Allow”, “Action”: “logs:StopQuery”, “Resource”: “arn:aws:logs:::log-group:/aws/braket\*”
> >
> > }
> >
> > ]

}

  </div>
</details>

Users can use the following [Terraform](https://www.terraform.io/) snippet as a starting point to spin up the required resources

```py

provider "aws" {}

data "aws_caller_identity" "current" {}


resource "aws_s3_bucket" "braket_bucket" {
        bucket        = "my-s3-bucket-name"
        force_destroy = true
}

resource "aws_ecr_repository" "braket_ecr_repo" {
        name                 = "amazon-braket-base-executor-repo"
        image_tag_mutability = "MUTABLE"

        force_delete = true
        image_scanning_configuration {
                scan_on_push = false
        }

        provisioner "local-exec" {
                command = "docker pull public.ecr.aws/covalent/covalent-braket-executor:stable && aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin ${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com && docker tag public.ecr.aws/covalent/covalent-braket-executor:stable ${aws_ecr_repository.braket_ecr_repo.repository_url}:stable && docker push ${aws_ecr_repository.braket_ecr_repo.repository_url}:stable"
        }
}

resource "aws_iam_role" "braket_iam_role" {
        name = "amazon-braket-execution-role"
        assume_role_policy = jsonencode({
                Version = "2012-10-17"
                Statement = [
                {
                        Action = "sts:AssumeRole"
                        Effect = "Allow"
                        Sid    = ""
                        Principal = {
                        Service = "braket.amazonaws.com"
                        }
                },
                ]
        })
        managed_policy_arns = ["arn:aws:iam::aws:policy/AmazonBraketFullAccess"]
}

```

## AWS EC2 Executor

<img src={AWS_EC2}/>

Covalent is a Pythonic workflow tool used to execute tasks on advanced computing hardware.

This plugin allows tasks to be executed in an AWS EC2 instance (which is auto-created) when you execute your workflow with covalent.

To use this plugin with Covalent, simply install it using `pip`:

```bash
pip install covalent-ec2-plugin
```

<Typography style={{fontSize:'14px'}}>

:::info Note
Users will also need to have [Terraform](https://www.terraform.io/downloads) installed on their local machine in order to use this plugin.
:::

</Typography>

This is a toy example of how a workflow can be adapted to utilize the EC2 Executor. Here we train a Support Vector Machine (SVM) and spin up an EC2 automatically to execute the `train_svm` electron. We also note we require [DepsPip](/docs/user-documentation/concepts/concepts-index) to install the dependencies on the EC2 instance.

<!-- Manish page Concepts.html link to the above page -->

```py
from numpy.random import permutation
from sklearn import svm, datasets
import covalent as ct

deps_pip = ct.DepsPip(
    packages=["numpy==1.23.2", "scikit-learn==1.1.2"]
)

executor = ct.executor.EC2Executor(
    instance_type="t2.micro",
    volume_size=8, #GiB
    ssh_key_file="~/.ssh/ec2_key" # default key_name will be "ec2_key"
)

# Use executor plugin to train our SVM model.
@ct.electron(
    executor=executor,
    deps_pip=deps_pip
)
def train_svm(data, C, gamma):
    X, y = data
    clf = svm.SVC(C=C, gamma=gamma)
    clf.fit(X[90:], y[90:])
    return clf

@ct.electron
def load_data():
    iris = datasets.load_iris()
    perm = permutation(iris.target.size)
    iris.data = iris.data[perm]
    iris.target = iris.target[perm]
    return iris.data, iris.target

@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(
        X_test[:90],
        y_test[:90]
    )

@ct.lattice
def run_experiment(C=1.0, gamma=0.7):
    data = load_data()
    clf = train_svm(
        data=data,
        C=C,
        gamma=gamma
    )
    score = score_svm(
        data=data,
        clf=clf
    )
    return score

# Dispatch the workflow
dispatch_id = ct.dispatch(run_experiment)(
    C=1.0,
    gamma=0.7
)

# Wait for our result and get result value
result = ct.get_result(dispatch_id=dispatch_id, wait=True).result

print(result)

```

During the execution of the workflow one can navigate to the UI to see the status of the workflow, once completed however the above script should also output a value with the score of our model.

```py
0.8666666666666667
```

<div class="tables down">

| Config Key       | Is Required | Default                                  | Description                                                                                                    |
| ---------------- | ----------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| profile          | No          | default                                  | Named AWS profile used for authentication                                                                      |
| region           | No          | us-east-1                                | AWS Region to use to for client calls to AWS                                                                   |
| credentials_file | Yes         | ~/.aws/credentials                       | The path to the AWS credentials file                                                                           |
| ssh_key_file     | Yes         | ~/.ssh/id_rsa                            | The path to the private key that corresponds to the EC2 Key Pair                                               |
| instance_type    | Yes         | t2.micro                                 | The [EC2 instance type](https://aws.amazon.com/ec2/instance-types/) that will be spun up automatically.        |
| key_name         | Yes         | Name of key specified in `ssh_key_file`. | The name of the AWS EC2 Key Pair that will be used to SSH into EC2 instance                                    |
| volume_size      | No          | 8                                        | The size in GiB of the GP2 SSD disk to be provisioned with EC2 instance.                                       |
| vpc              | No          | (Auto created)                           | The VPC ID that will be associated with the EC2 instance, if not specified a VPC will be created.              |
| subnet           | No          | (Auto created)                           | The Subnet ID that will be associated with the EC2 instance, if not specified a public Subnet will be created. |
| remote_cache     | No          | ~/.cache/covalent                        | The location on the EC2 instance where covalent artifacts will be created.                                     |

</div>

This plugin can be configured in one of two ways:

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.EC2Executor`
2. By modifying the [covalent configuration](/docs/user-documentation/api-reference/executors/customizing-the-config) file under the section `[executors.ec2]`

The following shows an example of how a user might modify their [covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config) to support this plugin:

<!-- Also get the jupyter notebook kind of page done for the above links -->

```bash
[executors.ec2]
ssh_key_file = "/home/user/.ssh/ssh_key.pem"
key_name = "ssh_key"
```

This plugin requires users have an AWS account. New users can follow instructions [here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) to create a new account. In order to run workflows with Covalent and the AWS EC2 plugin, there are a few notable resources that need to be provisioned first. Whenever interacting with AWS resources, users strongly recommended to follow [best practices](/docs/user-documentation/credentials/) for managing cloud credentials. Users are recommended to follow the principle of least privilege. For this executor, users who wish to deploy required infrastructure may use the AWS Managed Policy [AmazonEC2FullAccess](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-iam-awsmanpol.html) although some administrators may wish to further restrict instance families, regions, or other options according to their organization’s cloud policies.

The required resources include an EC2 Key Pair, and optionally a VPC & Subnet that can be used instead of the EC2 executor automatically creating it.

<div class="tables down">

| Resource         | Is Required | Default        | Description                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ----------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS EC2 Key Pair | Yes         | `key_name`     | An EC2 Key Pair must be created and named corresponding to the `key_name` config value. This key pair is used by the executor to connect to the EC2 instance via SSH. This key must also be present in the user’s local machine that is dispatching the workflow and it’s filepath specified under the `ssh_key_file` config value. |
| VPC              | No          | `vpc`          | A VPC ID can be provided corresponding to the `vpc` config value. Otherwise a VPC will be auto-created for each electron.                                                                                                                                                                                                           |
| Subnet           | No          | `subnet`       | A Subnet ID can be provided corresponding to the `subnet` config value. Otherwise a public Subnet will be auto-created for each electron.                                                                                                                                                                                           |
| Security Group   | No          | (Auto created) | A security group will be auto created and attached to the VPC in order to give the local machine (dispatching workflow) SSH access to the EC2 instance.                                                                                                                                                                             |
| EC2 Instance     | No          | (Auto created) | An EC2 Instance will be automatically provisioned for each electron in the workflow that utilizes this executor.                                                                                                                                                                                                                    |

</div>

1. To create an AWS EC2 Key pair refer to the following [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html).
2. To create a VPC & Subnet refer to the following [AWS documentation](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html).

When tasks are run using this executor, the following infrastructure is ephemerally deployed.

<img src={AWS_EC2_Infra}/>

This includes the minimal infrastructure needed to deploy an EC2 instance in a public subnet connected to an internet gateway. Users can validate that resources are correctly provisioned by monitoring the EC2 dashboard in the AWS Management Console. The overhead added by using this executor is on the order of several minutes, depending on the complexity of any additional user-specified runtime dependencies. Users are advised not to use any sensitive data with this executor without careful consideration of security policies. By default, data in transit is cached on the EBS volume attached to the EC2 instance in an unencrypted format.

These resources are torn down upon task completion and not shared across tasks in a workflow. Deployment of these resources will incur charges for EC2 alone; refer to [AWS EC2 pricing](https://aws.amazon.com/ec2/pricing/) for details. Note that this can be deployed in any AWS region in which the user is otherwise able to deploy EC2 instances. Some users may encounter quota limits when using EC2; this can be addressed by opening a support ticket with AWS.

## AWS ECS Executor

<img src={AWS_ECS}/>

With this executor, users can execute tasks (electrons) or entire lattices using the AWS Elastic Container Service (ECS). This executor plugin is well suited for low to medium compute intensive electrons with modest memory requirements. Since AWS ECS offers very quick spin up times, this executor is a good fit for workflows with a large number of independent tasks that can be dispatched simultaneously.

### 1. Installation

To use this plugin with Covalent, simply install it using pip:

```bash
pip install covalent-ecs-plugin
```

### 2. Usage Example

This is an example of how a workflow can be constructed to use the AWS ECS executor. In the example, we join two words to form a phrase and return an excited phrase.

```py
import covalent as ct

executor = ct.executor.ECSExecutor(
    s3_bucket_name="covalent-fargate-task-resources",
    ecr_repo_name="covalent-fargate-task-images",
    ecs_cluster_name="covalent-fargate-cluster",
    ecs_task_family_name="covalent-fargate-tasks",
    ecs_task_execution_role_name="ecsTaskExecutionRole",
    ecs_task_role_name="CovalentFargateTaskRole",
    ecs_task_subnet_id="subnet-871545e1",
    ecs_task_security_group_id="sg-0043541a",
    ecs_task_log_group_name="covalent-fargate-task-logs",
    vcpu=1,
    memory=2,
    poll_freq=10,
)


@ct.electron(executor=executor)
def join_words(a, b):
    return ", ".join([a, b])


@ct.electron(executor=executor)
def excitement(a):
    return f"{a}!"


@ct.lattice
def simple_workflow(a, b):
    phrase = join_words(a, b)
    return excitement(phrase)


dispatch_id = ct.dispatch(simple_workflow)("Hello", "World")
result = ct.get_result(dispatch_id, wait=True)

print(result)
```

During the execution of the workflow, one can navigate to the UI to see the status of the workflow. Once completed, the above script should also output the result:

```bash
Hello, World
```

In order for the above workflow to run successfully, one has to provision the required AWS resources as mentioned in [4. Required AWS Resources](/docs/user-documentation/api-reference/executors/awslambda#4-required-aws-resources).

### 3. Overview of configuration

The following table shows a list of all input arguments including the required arguments to be supplied when instantiating the executor:

<div class="tables down">

| Config Value                 | Is Required | Default                         | Description                                                          |
| ---------------------------- | ----------- | ------------------------------- | -------------------------------------------------------------------- |
| credentials                  | No          | _ ~/.aws/credentials _          | The path to the AWS credentials file                                 |
| profile                      | No          | default                         | The AWS profile used for authentication                              |
| region                       | Yes         | us-east-1                       | AWS region to use for client calls to AWS                            |
| s3_bucket_name               | No          | covalent-fargate-task-resources | The name of the S3 bucket where objects are stored                   |
| ecr_repo_name                | No          | covalent-fargate-task-images    | The name of the ECR repository where task images are stored          |
| ecs_cluster_name             | No          | covalent-fargate-cluster        | The name of the ECS cluster on which tasks run                       |
| ecs_task_family_name         | No          | cocovalent-fargate-tasks        | The name of the ECS task family for a user, project, or experiment.  |
| ecs_task_execution_role_name | No          | CovalentFargateTaskRole         | The IAM role used by the ECS agent                                   |
| ecs_task_role_name           | No          | CovalentFargateTaskRole         | The IAM role used by the container during runtime                    |
| ecs_task_subnet_id           | Yes         |                                 | Valid subnet ID                                                      |
| ecs_task_security_group_id   | Yes         |                                 | Valid security group ID                                              |
| ecs_task_log_group_name      | No          | covalent-fargate-task-logs      | The name of the CloudWatch log group where container logs are stored |
| vcpu                         | No          | 0.25                            | The number of vCPUs available to a task                              |
| memory                       | No          | 0.5                             | The memory (in GB) available to a task                               |
| poll_freq                    | No          | 10                              | The frequency (in seconds) with which to poll a submitted task       |
| cache_dir                    | No          | _ /tmp/covalent _               | The cache directory used by the executor for storing temporary files |

</div>

The following snippet shows how users may modify their Covalent [configuration](/docs/user-documentation/api-reference/executors/customizing-the-config) to provide the necessary input arguments to the executor:

<!-- https://covalent.readthedocs.io/en/latest/how_to/config/customization.html create and add this page to the above link -->

```py
[executors.ecs]
credentials = "~/.aws/credentials"
profile = "default"
s3_bucket_name = "covalent-fargate-task-resources"
ecr_repo_name = "covalent-fargate-task-images"
ecs_cluster_name = "covalent-fargate-cluster"
ecs_task_family_name = "covalent-fargate-tasks"
ecs_task_execution_role_name = "ecsTaskExecutionRole"
ecs_task_role_name = "CovalentFargateTaskRole"
ecs_task_subnet_id = "<my-subnet-id>"
ecs_task_security_group_id = "<my-security-group-id>"
ecs_task_log_group_name = "covalent-fargate-task-logs"
vcpu = 0.25
memory = 0.5
cache_dir = "/tmp/covalent"
poll_freq = 10
```

Within a workflow, users can use this executor with the default values configured in the configuration file as follows:

```py
import covalent as ct

@ct.electron(executor="ecs")
def task(x, y):
    return x + y

```

Alternatively, users can customize this executor entirely by providing their own values to its constructor as follows:

```py
import covalent as ct
from covalent.executor import ECSExecutor

ecs_executor = ECSExecutor(
    credentials="my_custom_credentials",
    profile="my_custom_profile",
    s3_bucket_name="my_s3_bucket",
    ecr_repo_name="my_ecr_repo",
    ecs_cluster_name="my_ecs_cluster",
    ecs_task_family_name="my_custom_task_family",
    ecs_task_execution_role_name="myCustomTaskExecutionRole",
    ecs_task_role_name="myCustomTaskRole",
    ecs_task_subnet_id="my-subnet-id",
    ecs_task_security_group_id="my-security-group-id",
    ecs_task_log_group_name="my-task-log-group",
    vcpu=1,
    memory=2,
    cache_dir="/home/<user>/covalent/cache",
    poll_freq=10,
)

@ct.electron(executor=ecs_executor)
def task(x, y):
    return x + y
```

### 4. Required AWS Resources

This executor uses different AWS services ([S3](https://aws.amazon.com/s3/), [ECR](https://aws.amazon.com/ecr/), [ECS](https://aws.amazon.com/ecs/), and [Fargate](https://aws.amazon.com/fargate/)) to successfully run a task. In order for the executor to work end-to-end, the following resources need to be configured either with [Terraform](https://www.terraform.io/) or manually provisioned on the [AWS Dashboard](https://aws.amazon.com/)

<div class="tables down">

| Resource             | Config Name                  | Description                                                                                         |
| -------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| IAM Role             | ecs_task_execution_role_name | The IAM role used by the ECS agent                                                                  |
| IAM Role             | ecs_task_role_name           | The IAM role used by the container during runtime                                                   |
| S3 Bucket            | s3_bucket_name               | The name of the S3 bucket where objects are stored                                                  |
| ECR repository       | ecr_repo_name                | The name of the ECR repository where task images are stored                                         |
| ECS Cluster          | ecs_cluster_name             | The name of the ECS cluster on which tasks run                                                      |
| ECS Task Family      | ecs_task_family_name         | The name of the task family that specifies container information for a user, project, or experiment |
| VPC Subnet           | ecs_task_subnet_id           | The ID of the subnet where instances are created                                                    |
| Security group       | ecs_task_security_group_id   | The ID of the security group for task instances                                                     |
| Cloudwatch log group | ecs_task_log_group_name      | The name of the CloudWatch log group where container logs are stored                                |
| CPU                  | vCPU                         | The number of vCPUs available to a task                                                             |
| Memory               | memory                       | The memory (in GB) available to a task                                                              |

</div>

The following IAM roles and policies must be properly configured so that the executor has all the necessary permissions to interact with the different AWS services:

1. `ecs_task_execution_role_name` is the IAM role used by the ECS agent
2. `ecs_task_role_name` is the IAM role used by the container during runtime

If omitted, these IAM role names default to `ecsTaskExecutionRole` and `CovalentFargateTaskRole`, respectively. The IAM policy attached to the `ecsTaskExecutionRole` is the following:

<details>
  <summary>ECS Task Execution IAM Policy</summary>
  <div>

```js

    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken",
                "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": "*"
        }
        ]
    }

```

  </div>
</details>

These policies allow the service to download container images from ECR so that the tasks can be executed on an ECS cluster. The policy attached to the `CovalentFargateTaskRole` is as follows

<details>
  <summary>AWS Fargate Task Role IAM Policy</summary>
  <div>

```js

    {
"Version": "2012-10-17",
"Statement": [
    {
        "Sid": "VisualEditor0",
        "Effect": "Allow",
        "Action": "braket:*",
        "Resource": "*"
    },
    {
        "Sid": "VisualEditor1",
        "Effect": "Allow",
        "Action": [
            "s3:PutObject",
            "s3:GetObject",
            "s3:ListBucket"
        ],
        "Resource": [
            "arn:aws:s3:::covalent-fargate-task-resources/*",
            "arn:aws:s3:::covalent-fargate-task-resources"
        ]
    }
]

```

  </div>
</details>

Users can provide their custom IAM roles/policies as long as they respect the permissions listed in the above documents. For more information on how to create IAM roles and attach policies in AWS, refer to [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html).

The executor also requires a proper networking setup so that the containers can be properly launched into their respective subnets. The executor requires that the user provide a `subnet ID` and a `security group` ID prior to using the executor in a workflow.

The executor uses [Docker](https://www.docker.com/) to build container images with the task function code baked into the image. The resulting image is pushed into the elastic container registry provided by the user. Following this, an ECS task definition using the user provided arguments is registered and the corresponding task container is launched. The output from the task is uploaded to the S3 bucket provided by the user and parsed to obtain the result object. In order for the executor to properly run and build images, users must have [Docker installed](https://www.docker.com/get-started/) and properly configured on their machines.

## AWS Lambda Executor

<img src={AWS_Lambda}/>

With this executor, users can execute tasks (electrons) or entire lattices using the AWS Lambda serverless compute service. It is appropriate to use this plugin for electrons that are expected to be short lived, low in compute intensity. This plugin can also be used for workflows with a high number of electrons that are embarassingly parallel (fully independent of each other).

The following AWS resources are required by this executor

- Container based [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) function
- [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) bucket for caching objects
- [IAM](https://docs.aws.amazon.com/iam/index.html) role for Lambda
- [ECR](https://docs.aws.amazon.com/ecr/index.html) container registry for storing docker images

### 1. Installation

To use this plugin with Covalent, simply install it using _ pip _:

```bash
    pip install covalent-awslambda-plugin
```

:::info Note
Due to the isolated nature of AWS Lambda, the packages available on that environment are limited. This means that only the modules that come with python out-of-the-box are accessible to your function. `Deps` are also limited in a similar fashion. However, AWS does provide a workaround for pip package installations: [https://aws.amazon.com/premiumsupport/knowledge-center/lambda-python-package-compatible/](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-python-package-compatible/).
:::

### 2. Usage Example

This is an example of how a workflow can be constructed to use the AWS Lambda executor. In the example, we join two words to form a phrase and return an excited phrase.

```py
import covalent as ct
from covalent.executor import AWSLambdaExecutor

executor = AWSLambdaExecutor(
    function_name = "my-lambda-function"
    s3_bucket_name="covalent-lambda-job-resources"
)

@ct.electron(executor=executor)
def join_words(a, b):
    return ",".join([a, b])

@ct.electron(executor=executor)
def excitement(a):
    return f"{a}!"

@ct.lattice
def simple_workflow(a, b):
    phrase = join_words(a, b)
    return excitement(phrase)


dispatch_id = ct.dispatch(simple_workflow)("Hello", "World")
result = ct.get_result(dispatch_id, wait=True)

print(result)
```

During the execution of the workflow, one can navigate to the UI to see the status of the workflow. Once completed, the above script should also output the result:

```bash
    Hello, World!
```

In order for the above workflow to run successfully, one has to provision the required AWS resources as mentioned in [4. Required AWS Resources](#4-required-aws-resources).

:::info Note
Users may encounter failures with dispatching workflows on MacOS due to errors with importing the `psutil` module. This is a known issue and will be addressed in a future sprint.
:::

### 3. Overview of configuration

The following table shows a list of all input arguments including the required arguments to be supplied when instantiating the executor:

<div style={{textAlign:'center'}}>

</div>

<div class="tables down">

| Config Value     | Is Required | Default            | Description                                                                |
| ---------------- | ----------- | ------------------ | -------------------------------------------------------------------------- |
| function_name    | Yes         | `-`                | Name of the AWS lambda function to be used at runtime                      |
| s3_bucket_name   | Yes         | `-`                | Name of an AWS S3 bucket that the executor must use to cache object files  |
| credentials_file | No          | ~/.aws/credentials | The path to your AWS credentials file                                      |
| profile          | No          | default            | AWS profile used for authentication                                        |
| poll_freq        | No          | 5                  | Time interval between successive polls to the lambda function              |
| cache_dir        | No          | ~/.cache/covalent  | Path on the local file system to a cache                                   |
| timeout          | No          | `900`              | Duration in seconds to keep polling the task for results/exceptions raised |

</div>

The following snippet shows how users may modify their Covalent [configuration](/docs/user-documentation/api-reference/executors/customizing-the-config) to provide the necessary input arguments to the executor:

<!-- go to the following link for the above redirecting word https://covalent.readthedocs.io/en/latest/how_to/config/customization.html -->

```py
[executors.awslambda]
function_name = "my-lambda-function"
s3_bucket_name = "covalent-lambda-job-resources"
credentials_file = "/home/<user>/.aws/credentials"
profile = "default"
region = "us-east-1"
cache_dir = "/home/<user>/.cache/covalent"
poll_freq = 5
timeout = 60
```

Within a workflow, users can use this executor with the default values configured in the configuration file as follows:

```py
import covalent as ct

@ct.electron(executor="awslambda")
def task(x, y):
    return x + y
```

Alternatively, users can customize this executor entirely by providing their own values to its constructor as follows:

```bash
import covalent as ct
from covalent.executor import AWSLambdaExecutor

lambda_executor = AWSLambdaExecutor(
    function_name = "my-lambda-function"
    s3_bucket_name="my_s3_bucket",
    credentials_file="my_custom_credentials",
    profile="custom_profile",
    region="us-east-1",
    cache_dir="/home/<user>/covalent/cache",
    poll_freq=5,
    timeout=60
)

@ct.electron(executor=lambda_executor)
def task(x, y):
    return x + y

```

### 4. Required AWS Resources

In order for the executor to work end-to-end, the following resources need to be provisioned apriori.

<div style={{textAlign:'center'}}>

</div>

<div class="tables down">

| Resource                             | Config Name      | Description                                                                                         |
| ------------------------------------ | ---------------- | --------------------------------------------------------------------------------------------------- |
| IAM Role                             | lambda_role_name | The IAM role this lambda will assume during execution of your tasks                                 |
| S3 Bucket                            | s3_bucket_name   | Name of an AWS S3 bucket that the executor can use to store temporary files                         |
| AWS Lambda function                  | function_name    | Name of the AWS lambda function created in AWS                                                      |
| AWS Elastic Container Registry (ECR) | `-`              | The container registry that contains the docker images used by the lambda function to execute tasks |

The following JSON policy document shows the necessary IAM permissions required for the executor to properly run tasks using the AWS Lambda compute service:

</div>

<details>
  <summary>IAM Policy</summary>
  <div>

```js

    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "s3-object-lambda:*"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket-name>",
                "arn:aws:s3:::<bucket-name>/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:DescribeStacks",
                "cloudformation:ListStackResources",
                "cloudwatch:ListMetrics",
                "cloudwatch:GetMetricData",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcs",
                "kms:ListAliases",
                "iam:GetPolicy",
                "iam:GetPolicyVersion",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies",
                "iam:ListRoles",
                "lambda:*",
                "logs:DescribeLogGroups",
                "states:DescribeStateMachine",
                "states:ListStateMachines",
                "tag:GetResources",
                "xray:GetTraceSummaries",
                "xray:BatchGetTraces"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "iam:PassRole",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "iam:PassedToService": "lambda.amazonaws.com"
                }
            }
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:DescribeLogStreams",
                "logs:GetLogEvents",
                "logs:FilterLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*"
        }
    ]
    }

```

  </div>
</details>

where `<bucket-name>` is the name of an S3 bucket to be used by the executor to store temporary files generated during task execution. The lambda function interacts with the S3 bucket as well as with the AWS Cloudwatch service to route any log messages. Due to this, the lambda function must have the necessary IAM permissions in order to do so. Users must provision an IAM role that has the `AWSLambdaExecute` policy attached to it. The policy document is summarized here for convenience:

<details>
  <summary>Covalent Lamda Execution Role Policy</summary>
  <div>

```js

    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "logs:*"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::*"
        }
    ]
}

```

  </div>
</details>

Users can use the following [Terraform](https://www.terraform.io/) snippet as a starting point to spin up the required resources

```azurecli

provider aws {}

resource aws_s3_bucket bucket {
    bucket = "my-s3-bucket"
}

resource aws_iam_role lambda_iam {
    name = var.aws_lambda_iam_role_name
    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Action = "sts:AssumeRole"
                Effect = "Allow"
                Sid    = ""
                Principal = {
                    Service = "lambda.amazonaws.com"
            }
        },
    ]
    })
    managed_policy_arns = [ "arn:aws:iam::aws:policy/AWSLambdaExecute" ]
}

resource aws_ecr_repository lambda_ecr {
    name = "lambda_container_registry"
}

resource aws_lambda_function lambda {
    function_name = "my-lambda-function"
    role = aws_iam_role.lambda_iam.arn
    packge_type = "Image"
    timeout = <timeout value in seconds, max 900 (15 minutes), defaults to 3>
    memory_size = <Max memory in MB that the Lambda is expected to use, defaults to 128>
    image_uri = aws_ecr_repository.lambda_ecr.repository_url
}

```

For more information on how to create IAM roles and attach policies in AWS, refer to [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html). For more information on AWS S3, refer to [AWS S3](https://aws.amazon.com/s3/).

:::info Note
The lambda function created requires a docker image to execute the any tasks required by it. We distribute ready to use AWS Lambda executor docker images that user’s can pull and push to their private ECR registries before dispatching workflows.

The base docker image can be obtained as follows

<span style={{fontSize:'12px'}}>

```azurecli
docker pull public.ecr.aws/covalent/covalent-lambda-executor:stable
```

</span>

Once the image has been obtained, user’s can tag it with their registry information and upload to ECR as follows

<span style={{fontSize:'12px'}}>

```azurecli
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
docker tag public.ecr.aws/covalent/covalent-lambda-executor:stable <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<my-repository>:tag
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<my-repository>:tag
```

</span>
:::

### 5. Custom Docker images

As mentioned earlier, the AWS Lambda executor uses a `docker` image to execute an electron from a workflow. We distribute AWS Lambda executor base docker images that contain just the essential dependencies such as `covalent` and `covalent-aws-plugins`. However if the electron to be executed using the Lambda executor depends on Python packages that are not present in the base image by default, users will have to a build custom images prior to running their Covalent workflows using the AWS Lambda executor. In this section we cover the necessary steps required to extend the base executor image by installing additional Python packages and pushing the ** derived ** image to a private elastic container registry (ECR)

:::info Note
Using `PipDeps` as described in the [Dependencies](/docs/user-documentation/api-reference/taskhelpers#dependencies) section with the AWS Lambda executor is currently not supported as it modifies the execution environment of the lambda function at runtime. As per AWS best practices for Lambda it is recommended to ship the lambda function as a self-contained object that has all of its dependencies in a `deployment` package/container image as described in detail [here](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html)
:::

All of our base AWS executor images are available in the AWS public registries and can be downloaded locally for consumption as described [here](https://docs.aws.amazon.com/AmazonECR/latest/public/docker-pull-ecr-image.html). For instance the `stable` AWS Lambda executor image can be downloaded from public ECR as follows

```py
aws ecr-public get-login-password --region <aws-region> | docker login --username AWS --password-stdin public.ecr.aws
docker pull public.ecr.aws/covalent/covalent-lambda-executor:stable
```

:::info Note

Executor images with the `latest` tag are also routinely pushed to the same registry. However, we strongly recommended using the ** stable ** tag when running executing workflows usin the AWS Lambda executor. The `<aws-region>` is a placeholder for the actual AWS region to be used by the user

:::

Once the lambda base executor image has been downloaded, users can build upon that image by installing all the Python packages required by their tasks. The base executor uses a build time argument named `LAMBDA_TASK_ROOT` to set the install path of all python packages to `/var/task` inside the image. When extending the base image by installing additional python packages, it is ** recommended ** to install them to the same location so that they get resolved properly during runtime. Following is a simple example of how users can extend the AWS lambda base image by creating their own `Dockerfile` and installting additional packages such as `numpy`, `pandas` and `scipy`.

```sql

#Dockerfile

FROM public.ecr.aws/covalent/covalent-lambda-executor:stable as base

RUN pip install --target ${LAMBDA_TASK_ROOT} numpy pandas scipy

```

:::caution Warning
Do ** not ** override the entrypoint of the base image in the derived image when installing new packages. The docker `ENTRYPOINT` of the base image is what that gets trigged when AWS invokes your lambda function to execute the workflow electron
:::

Once the `Dockerfile` has been created the derived image can be built as follows

```
docker build -f Dockerfile -t my-custom-lambda-executor:latest
```

After a successful build of the derived image, it needs to be uploaded to ECR so that it can be consumed by a lambda function when triggered by Covalent. As as first step, it is required to create an elastic container registry to hold the dervied executor images. This can be easily done by using the AWS CLI tool as follows

```
aws ecr create-repository --region <aws-region> --repository-name covalent/my-custom-lambda-executor
```

To upload the derived image to this registry, we would need to tag our local image as per the AWS guide and push the image to the registry as described [here](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html). To push an image, first one needs to authenticate with AWS and login their docker client

```
aws ecr get-login-password --region <aws-region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.region.amazonaws.com
```

Once the login is successful, the local image needs to be re-tagged with the ECR repository information. If the image tag is omitted, `latest` is applied by default. In the following code block we show how to tag the derived image `my-custom-lambda-executor:latest` with the ECR information so that it can be uploaded successfully

```azurecli
docker tag my-custom-lambda-executor:latest <aws-account-id>.dkr.ecr.<aws-region>.amazonaws.com/my-custom-lambda-executor:latest
```

:::info Note
&lt;aws-account-id&gt; and &lt;aws-region&gt; are placeholders for the actual AWS account ID and region to be used by the users
:::

Once the derived image has been built and pushed to ECR, users need to create a Lambda function or update an existing one to use the new derived image instead of the base image executor image at runtime. A new AWS Lambda function can be quite easily created using the AWS Lambda CLI `create-function` command as follows

```py
    aws lambda create-function --function-name "my-covalent-lambda-function" --region <aws-region> \
     --package-type Image \
     --code ImageUri=<aws-account-id>.dkr.ecr.<aws-region>.amazonaws.com/my-custom-lambda-executor:latest \
     --role <Lambda executor role ARN> \
     --memory-size 512 \
     --timeout 900
```

The above CLI command will register a new AWS lambda function that will use the user’s custom derived image `my-custom-lambda-executor:latest` with a memory size of `512 MB` and a timeout values of `900` seconds. The `role` argument is used to specify the ARN of the IAM role the AWS Lambda can assume during execution. The necessary permissions for the IAM role have been provided in `Required AWS resources` section. More details about creating and updating AWS lambda functions can be found [here](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-images.html).

## Azure Batch executor

<img src={cov}/>

Covalent Azure Batch executor is an interface between Covalent and [Microsoft Azure Batch](https://azure.microsoft.com/en-us/products/batch/#overview). This executor allows execution of Covalent tasks on Azure’s Batch service.

The batch executor is well suited for compute/memory intensive tasks since the resource pool of compute virtual machines can be scaled accordingly. Furthermore, Azure Batch allows running tasks in parallel on multiple virtual machines and their scheduling engine manages execution of the tasks.

To use this plugin with Covalent, simply install it using `pip`:

```
pip install covalent-azurebatch-plugin
```

In this example, we train a Support Vector Machine (SVM) using an instance of the Azure Batch executor. The `train_svm` electron is submitted as a batch job in an existing Azure Batch Compute environment. Note that we also require [DepsPip](/docs/user-documentation/concepts/concepts-index) in order to install the python package dependencies before executing the electron in the batch environment.

```py
from numpy.random import permutation
from sklearn import svm, datasets
import covalent as ct

from covalent.executor import AzureBatchExecutor

deps_pip = ct.DepsPip(
    packages=["numpy==1.22.4", "scikit-learn==1.1.2"]
)

executor = AzureBatchExecutor(
    tenant_id="tenant-id",
    client_id="client-id",
    client_secret="client-secret",
    batch_account_url="https://covalent.eastus.batch.azure.com",
    batch_account_domain="batch.core.windows.net",
    storage_account_name="covalentbatch",
    storage_account_domain="blob.core.windows.net",
    pool_id="covalent-pool",
    retries=3,
    time_limit=300,
    cache_dir="/tmp/covalent",
    poll_freq=10
)

# Use executor plugin to train our SVM model
@ct.electron(
    executor=executor,
    deps_pip=deps_pip
)
def train_svm(data, C, gamma):
    X, y = data
    clf = svm.SVC(C=C, gamma=gamma)
    clf.fit(X[90:], y[90:])
    return clf

@ct.electron
def load_data():
    iris = datasets.load_iris()
    perm = permutation(iris.target.size)
    iris.data = iris.data[perm]
    iris.target = iris.target[perm]
    return iris.data, iris.target

@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(
        X_test[:90],y_test[:90]
    )

@ct.lattice
def run_experiment(C=1.0, gamma=0.7):
    data = load_data()
    clf = train_svm(
        data=data,
        C=C,
        gamma=gamma
    )
    score = score_svm(
        data=data,
        clf=clf
    )
    return score

# Dispatch the workflow.
dispatch_id = ct.dispatch(run_experiment)(
        C=1.0,
        gamma=0.7
)

# Wait for our result and get result value
result = ct.get_result(dispatch_id, wait=True).result

print(result)
```

During the execution of the workflow, one can navigate to the UI to see the status of the workflow. Once completed, the above script should also output a value with the score of our model.

```py
0.8666666666666667
```

<div class="tables down">

| Config Key             | Required | Default                | Description                           |
| ---------------------- | -------- | ---------------------- | ------------------------------------- |
| tenant_id              | Yes      | None                   | Azure tenant ID                       |
| client_id              | Yes      | None                   | Azure client IDcalls                  |
| client_secret          | Yes      | None                   | Azure client secret                   |
| batch_account_url      | Yes      | None                   | Azure Batch account URL               |
| batch_account_domain   | No       | batch.core.windows.net | Azure Batch account domain            |
| storage_account_name   | Yes      | None                   | Azure Storage account name            |
| storage_account_domain | No       | blob.core.windows.net  | Azure Storage account domain          |
| pool_id                | Yes      | None                   | Azure Batch pool ID                   |
| retries                | No       | 3                      | Number of retries for Azure Batch job |
| time_limit             | No       | 300                    | Time limit for Azure Batch job        |
| cache_dir              | No       | /tmp/covalent          | Directory to store cached files       |
| poll_freq              | No       | 10                     | Polling frequency for Azure Batch job |

</div>

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.AzureBatchExecutor`

2. By modifying the [covalent configuration file](/docs/user-documentation/how-to/customization) under the section `[executors.azurebatch]`

The following shows an example of how a user might modify their [covalent configuration file](/docs/user-documentation/how-to/customization) to support this plugin:

```py
[executors.azurebatch]
tenant_id="tenant-id",
client_id="client-id",
client_secret="client-secret",
batch_account_url="https://covalent.eastus.batch.azure.com",
batch_account_domain="batch.core.windows.net",
storage_account_name="covalentbatch",
storage_account_domain="blob.core.windows.net",
pool_id="covalent-pool",
retries=5,
time_limit=500,
...
```

In order to use this plugin, the following Azure resources need to be provisioned first. These resources can be created using the [Azure Portal](https://learn.microsoft.com/en-us/azure/batch/batch-account-create-portal) or the Azure CLI.

<div class="tables down">

| Resource           | Is Required | Config Key             | Description                                                                                                                                                                                                                                                       |
| ------------------ | ----------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Batch Account      | Yes         | `batch_account_url`    | A [batch account](https://learn.microsoft.com/en-us/azure/batch/accounts) is required to submit jobs to Azure Batch. The URL can be found under the _Account endpoint_ field in the Batch account. Furthermore, ensure that `https://` is prepended to the value. |
| Storage Account    | Yes         | `storage_account_name` | [Storage account](https://learn.microsoft.com/en-us/azure/batch/accounts) must be created with blob service enabled in order for covalent to store essential files that are needed during execution.                                                              |
| Resource Group     | Yes         | N/A                    | The resource group is a logical grouping of Azure resources that can be managed as one entity in terms of lifecycle and security.                                                                                                                                 |
| Container Registry | Yes         | N/A                    | Container registry is required to store the containers that are used to run Batch jobs.                                                                                                                                                                           |
| Virtual Network    | No          | N/A                    | [Azure Virtual Network](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) is used by resources to securely communicate with each other.                                                                                          |
| Pool ID            | Yes         | `pool_id`              | A [pool](https://docs.microsoft.com/en-us/azure/batch/batch-pool-vm-sizes) is a collection of compute nodes that are managed together. The pool ID is the name of the pool that will be used to execute the jobs.                                                                                                                     |

</div>

More information on authentication with service principals and necessary permissions for this executor can be found [here](https://learn.microsoft.com/en-us/azure/batch/batch-aad-auth#use-a-service-principal).

For more information on error handling and detection in Batch, refer to the [Microsoft Azure documentation](https://learn.microsoft.com/en-us/azure/batch/error-handling). Furthermore, information on best practices can be found [here](https://learn.microsoft.com/en-us/azure/batch/covalent-patterns/best-practices).

## Google Batch Executor

<img src={cov}/>

Covalent Google Batch executor is an interface between Covalent and [Google Cloud Platform’s Batch compute service](https://cloud.google.com/batch/docs/get-started). This executor allows execution of Covalent tasks on Google Batch compute service.

This batch executor is well suited for tasks with high compute/memory requirements. The compute resources required can be very easily configured/specified in the executor’s configuration. Google Batch scales really well thus allowing users to queue and execute multiple tasks concurrently on their resources efficiently. Google’s Batch job scheduler manages the complexity of allocating the resources needed by the task and de-allocating them once the job has finished.

To use this plugin with Covalent, simply install it using `pip`:

```
pip install covalent-gpcbatch-plugin
```

Here we present an example on how a user can use the GCP Batch executor plugin in their Covalent workflows. In this example we train a simple SVM (support vector machine) model using the Google Batch executor. This executor is quite minimal in terms of the required cloud resoures that need to be provisioned prior to first use. The Google Batch executor needs the following cloud resources pre-configured

- A Google storage bucket
- Cloud artifact registry for Docker images

- **A service account with the following permissions**
  - `roles/batch.agentReporter`
  - `roles/batch.agentReporter`
  - `roles/logging.viewer`
  - `roles/artifactregistry.reader`
  - `roles/storage.objectCreator`
  - `roles/storage.objectViewer`

<Typography style={{fontSize:'14px'}}>

:::info Note
Details about Google services accounts and how to use them properly can be found [here](https://cloud.google.com/iam/docs/service-account-overview)
:::

</Typography>

```py
from numpy.random import permutation
from sklearn import svm, datasets
import covalent as ct

deps_pip = ct.DepsPip(
  packages=["numpy==1.23.2", "scikit-learn==1.1.2"]
)

executor = ct.executor.GCPBatchExecutor(
    bucket_name = "my-gcp-bucket",
    project_id = "my-gcp-project-id",
    container_image_uri = "my-executor-container-image-uri",
    service_account_email = "my-service-account-email",
    vcpu = 2, # Number of vCPUs to allocate
    memory = 512, # Memory in MB to allocate
    time_limit = 300, # Time limit of job in seconds
    poll_freq = 3 # Number of seconds to pause before polling for the job's status
)

# Use executor plugin to train our SVM model.
@ct.electron(
    executor=executor,
    deps_pip=deps_pip
)
def train_svm(data, C, gamma):
    X, y = data
    clf = svm.SVC(C=C, gamma=gamma)
    clf.fit(X[90:], y[90:])
    return clf

@ct.electron
def load_data():
    iris = datasets.load_iris()
    perm = permutation(iris.target.size)
    iris.data = iris.data[perm]
    iris.target = iris.target[perm]
    return iris.data, iris.target

@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(
      X_test[:90],
    y_test[:90]
    )

@ct.lattice
def run_experiment(C=1.0, gamma=0.7):
    data = load_data()
    clf = train_svm(
      data=data,
      C=C,
      gamma=gamma
    )
    score = score_svm(
      data=data,
    clf=clf
    )
    return score

# Dispatch the workflow
dispatch_id = ct.dispatch(run_experiment)(
  C=1.0,
  gamma=0.7
)

# Wait for our result and get result value
result = ct.get_result(dispatch_id=dispatch_id, wait=True).result

print(result)
```

During the execution of the workflow one can navigate to the UI to see the status of the workflow, once completed however the above script should also output a value with the score of our model.

```py
0.8666666666666667
```

<div class="tables down">

| Config Key            | Is Required | Default       | Description                                                                                                  |
| --------------------- | ----------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| project_id            | Yes         | None          | Google cloud project ID                                                                                      |
| region                | No          | us-east1      | Google cloud region to use to for submitting batch jobs                                                      |
| bucket_name           | Yes         | None          | Name of the Google storage bucket to use for storing temporary objects                                       |
| container_image_uri   | Yes         | None          | GCP Batch executor base docker image uri                                                                     |
| service_account_email | Yes         | None          | Google service account email address that is to be used by the batch job when interacting with the resources |
| vcpus                 | No          | 2             | Number of vCPUs needed for the task.                                                                         |
| memory                | No          | 256           | Memory (in MB) needed by the task.                                                                           |
| retries               | No          | 3             | Number of times a job is retried if it fails.                                                                |
| time_limit            | No          | 300           | Time limit (in seconds) after which jobs are killed.                                                         |
| poll_freq             | No          | 5             | Frequency (in seconds) with which to poll a submitted task.                                                  |
| cache_dir             | No          | /tmp/covalent | Cache directory used by this executor for temporary files.                                                   |

</div>

This plugin can be configured in one of two ways:

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.GCPBatchExecutor`

2. By modifying the [covalent configuration file](/docs/user-documentation/how-to/customization) under the section `[executors.gcpbatch]`

```py
[executors.gcpbatch]
bucket_name = <my-gcp-bucket-name>
project_id = <my-gcp-project-id>
container_image_uri = <my-base-executor-image-uri>
service_account_email = <my-service-account-email>
region = <google region for batch>
vcpus = 2 # number of vcpus needed by the job
memory = 256 # memory in MB required by the job
retries = 3 # number of times to retry the job if it fails
time_limit = 300 # time limit in seconds after which the job is to be considered failed
poll_freq = 3 # Frequency in seconds with which to poll the job for the result
cache_dir = "/tmp" # Path on file system to store temporary objects
```

#### 4. Required Cloud Resources

In order to successfully execute tasks using the Google Batch executor, some cloud resources need to be provisioned apriori.

- Google storage bucket

  > The executor uses a storage bucket to store/cache exception/result objects that get generated during execution

- Google Docker artifact registry

  > The executor submits a container job whose image is pulled from the provided `container_image_uri` argument of the executor

- Service account
  > Keeping good security practices in mind, the jobs are executed using a service account that only has the necessary permissions attached to it that are required for the job to finish.

> Users can free to provision these resources as they see fit or they can use Covalent to provision these for them. Covalent CLI can be used to deploy the required cloud resources. Covalent behind the scenes uses Terraform to provision the cloud resources. The [terraform](https://www.terraform.io/) HCL scripts can be found in the plugin’s Github repository [here](https://github.com/AgnostiqHQ/covalent-gcpbatch-plugin/tree/develop/covalent_gcpbatch_plugin/assets/infra).
>
> To run the scripts manually, users must first authenticate with Google cloud via their CLI
>
> ```
>   gcloud auth login
> ```
> ````
> Once the user has authenticated, the infrastructure can be stood up by simply apply the Terraform scripts i.e.
> ```
  terraform plan -out tf.plan
  terrafrom apply tf.plan
> ````
>:::info Note
For first time deployment, the terraform provides must be initialized properly via `terraform init`
>:::

The HCL scripts also build the base executor docker image and upload it to the artficat registry after it gets created. This way the user need not build and push an image separately as the process is fully automated via Covalent.

## Slurm Executor

This executor plugin interfaces Covalent with HPC systems managed by Slurm. For workflows to be deployable, users must have SSH access to the Slurm login node, writable storage space on the remote filesystem, and permissions to submit jobs to Slurm.

To use this plugin with Covalent, simply install it using `pip`:

```
pip install covalent-slurm-plugin
```

The following shows an example of a Covalent [configuration](/docs/user-documentation/how-to/customization) that is modified to support Slurm:

```py
[executors.slurm]
username = "user"
address = "login.cluster.org"
ssh_key_file = "/home/user/.ssh/id_rsa"
remote_workdir = "/scratch/user"
cache_dir = "/tmp/covalent"

[executors.slurm.options]
nodes = 1
ntasks = 4
cpus-per-task = 8
constraint = "gpu"
gpus = 4
qos = "regular"

[executors.slurm.srun_options]
cpu_bind = "cores"
gpus = 4
gpu-bind = "single:1"
```

The first stanza describes default connection parameters for a user who can connect to the Slurm login node using, for example:

```
ssh -i /home/user/.ssh/id_rsa user@login.cluster.org
```

The second and third stanzas describe default parameters for `#SBATCH` directives and default parameters passed directly to `srun`, respectively.

This example generates a script containing the following preamble:

```py
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks=4
#SBATCH --cpus-per-task=8
#SBATCH --constraint=gpu
#SBATCH --gpus=4
#SBATCH --qos=regular
```

and subsequent workflow submission with:

```py
srun --cpu_bind=cores --gpus=4 --gpu-bind=single:1
```

To use the configuration settings, an electron’s executor must be specified with a string argument, in this case:

```py
import covalent as ct

@ct.electron(executor="slurm")
def my_task(x, y):
    return x + y
```

Alternatively, passing a `SlurmExecutor` instance enables custom behavior scoped to specific tasks. Here, the executor’s `prerun_commands` and `postrun_commands` parameters can be used to list shell commands to be executed before and after submitting the workflow. These may include any additional `srun` commands apart from workflow submission. Commands can also be nested inside the submission call to `srun` by using the `srun_append` parameter.

More complex jobs can be crafted by using these optional parameters. For example, the instance below runs a job that accesses CPU and GPU resources on a single node, while profiling GPU usage via `nsys` and issuing complementary commands that pause/resume the central hardware counter.

```py
executor = ct.executor.SlurmExecutor(
    remote_workdir="/scratch/user/experiment1",
    options={
        "qos": "regular",
        "time": "01:30:00",
        "nodes": 1,
        "constraint": "gpu",
    },
    prerun_commands=[
        "module load package/1.2.3",
        "srun --ntasks-per-node 1 dcgmi profile --pause"
    ],
    srun_options={
        "n": 4,
        "c": 8,
        "cpu-bind": "cores",
        "G": 4,
        "gpu-bind": "single:1"
    }
    srun_append="nsys profile --stats=true -t cuda --gpu-metrics-device=all",
    postrun_commands=[
        "srun --ntasks-per-node 1 dcgmi profile --resume",
    ]
)

@ct.electron(executor=executor)
def my_custom_task(x, y):
    return x + y
```

Here the corresponding submit script contains the following commands:

```py
module load package/1.2.3
srun --ntasks-per-node 1 dcgmi profile --pause

srun -n 4 -c 8 --cpu-bind=cores -G 4 --gpu-bind=single:1 \
nsys profile --stats=true -t cuda --gpu-metrics-device=all \
python /scratch/user/experiment1/workflow_script.py

srun --ntasks-per-node 1 dcgmi profile --resume
```

## SSH Executor

Executing tasks (electrons) via SSH in remote machine. This executor plugin interfaces Covalent with other machines accessible to the user over SSH. It is appropriate to use this plugin to distribute tasks to one or more compute backends which are not controlled by a cluster management system, such as computers on a LAN, or even a collection of small-form-factor Linux-based devices such as Raspberry Pis, NVIDIA Jetsons, or Xeon Phi co-processors.

To use this plugin with Covalent, simply install it using _pip_:

```
pip install covalent-ssh-plugin
```

The following shows an example of how a user might modify their Covalent [configuration](/docs/user-documentation/how-to/customization) to support this plugin:

```py
[executors.ssh]
username = "user"
hostname = "host.hostname.org"
remote_dir = "/home/user/.cache/covalent"
ssh_key_file = "/home/user/.ssh/id_rsa"
```

This setup assumes the user has the ability to connect to the remote machine using `ssh -i /home/user/.ssh/id_rsa user@host.hostname.org` and has write-permissions on the remote directory `/home/user/.cache/covalent` (if it exists) or the closest parent directory (if it does not).

Within a workflow, users can decorate electrons using the default settings:

```py
import covalent as ct

@ct.electron(executor="ssh")
def my_task():
    import socket
    return socket.gethostname()
```

or use a class object to customize behavior within particular tasks:

```py
executor = ct.executor.SSHExecutor(
    username="user",
    hostname="host2.hostname.org",
    remote_dir="/tmp/covalent",
    ssh_key_file="/home/user/.ssh/host2/id_rsa",
)

@ct.electron(executor=executor)
def my_custom_task(x, y):
    return x + y
```

## Quantum Executors

## Qiskit Runtime Executor

<img src={data.qiskit}/>

This quantum executor provides efficient access to IBM Quantum backends by using runtime sessions for submitting jobs. `QiskitExecutor` uses asyncio for scalable parallelization.

### 1. Installation

The Qiskit Runtime executor is included with Covalent. No additional installation is required.

### 2.  Usage Example

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

### 3. Overview of Configuration

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


### 4. Required Cloud Resources

In order to access IBM backends, users must acquire an access token from IBM Quantum. This can be done by creating a free account on the [IBM Quantum Experience](https://quantum-computing.ibm.com/).



#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.QiskitExecutor</span> [source](/docs/user-documentation/api-reference/executors/scode-qiskit)</span> 

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



#### <span class="eighteen">field <span class="bold">channel</span>: str = 'ibm_quantum'</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">cloud_instance</span>: str = ''</span>

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



#### <span class="eighteen">field <span class="bold">instance</span>: str = ''</span>

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

## IBMQ Executor

<img src={data.quantum}/>

This quantum executor accesses IBM Quantum backends through Pennylane's `"qiskit.ibmq"` [device](https://docs.pennylane.ai/projects/qiskit/en/latest/devices/ibmq.html). `IBMQExecutor` introduces thread-based parallelism for circuit execution on the "qiskit.ibmq" device. Note that the more efficient `QiskitExecutor` is recommended over `IBMQExecutor` for production use.

### 1. Installation

The IBMQ executor is included with Covalent. No additional installation is required.

### 2. Usage Example

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

### 3. Overview of Configuration
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

### 4. Required Cloud Resources

In order to access IBM backends, users must acquire an access token from IBM Quantum. This can be done by creating a free account on the [IBM Quantum Experience](https://quantum-computing.ibm.com/).



#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.IBMQExecutor</span> [[source]](/docs/user-documentation/api-reference/executors/scode-qiskit)</span> 

<div class="up fourteen space"><Noindentation md='A quantum executor that uses the Pennylane native `"qiskit.ibmq"` device to run circuits on IBM Quantum backends. The attributes `backend`, `ibmqx_token`, `hub`, `group`, and `project` are taken from the Covalent configuration file by default, if available.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Keyword Arguments:'/></div>

<div class="up  fourteen space"><Noindentation md= '- max_jobs - The maximum number of jobs that can be submitted to the backend concurrently. This number corresponds to the number of threads utilized by this executor. Defaults to 20.'/></div>

<div class="up  fourteen space"><Noindentation md= '- shots - The number of shots to use for the execution device. Overrides the `shots` value from the original device if set to `None` or a positive `int`. The shots setting from the original device is used by default, when this argument is 0.'/></div>

<div class=" up fourteen space down"><Noindentation md='- backend - The name of the IBM Quantum backend device. Defaults to "`ibmq_qasm_simulator`".'/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- ibmqx_token - The IBM Quantum API token.'/></div>

<div class=" doubleup fourteen space down"><Noindentation md=' - hub: An IBM Quantum hub name. Defaults to `"ibm-q"`'/></div>

<div class=" doubleup fourteen space down"><Noindentation md=' - group: An IBM Quantum group name. Defaults to `"open"`'/></div>
<div class=" doubleup fourteen space down"><Noindentation md=' - project: An IBM Quantum project name. Defaults to `"main"`'/></div>


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


## AWS Braket Qubit Executor

<img src={data.awsbraket}/>

This quantum executor accesses quantum resources operating under the qubit model as made available through AWS (`"braket.aws.qubit"`).

It utilizes the Pennylane plugin found [here](https://amazon-braket-pennylane-plugin-python.readthedocs.io/en/latest/). `BraketQubitExecutor` introduces thread-based parallelism for circuit execution on the `"braket.aws.qubit"` device.

### 1. Installation
`BraketQubitExecutor` is included in Covalent. To use it, however, you will need to install the [amazon-braket-pennylane-plugin](https://github.com/aws/amazon-braket-pennylane-plugin-python): 

```bash
pip install amazon-braket-pennylane-plugin
```
and have valid AWS credentials as specified [here](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html).

### 2. Usage Example

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

### 3. Overview of Configuration

The `BraketQubitExecutor` configuration is found under `[qelectron.BraketQubitExecutor]` in the [Covalent configuration file](/docs/user-documentation/api-reference/executors/customizing-the-config).

<div class="tables">

| Config | Is Required | Default | Description |
|--------|-------------|---------|-------------|
| s3_destination_folder | No         | () an empty tuple   | The location of the s3 bucket that simulation data will be stored in. I.e, you can set `s3 = ("my-bucket", "my-prefix")`. |

</div>

### 4. Required Cloud Resources
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



## Local Braket Qubit Executor


<img src={data.localbraket}/>


This quantum executor accesses the local Braket quantum circuit simulator (`"braket.local.qubit"`).

It utilizes the Pennylane plugin found [here](https://amazon-braket-pennylane-plugin-python.readthedocs.io/en/latest/). `LocalBraketQubitExecutor` introduces thread-based parallelism for circuit execution on the `"braket.local.qubit"` device.

### 1.Installation
`LocalBraketQubitExecutor` is included in Covalent. To use it, however, you will need to install the [amazon-braket-pennylane-plugin](https://github.com/aws/amazon-braket-pennylane-plugin-python):

```bash
pip install amazon-braket-pennylane-plugin
```


### 2. Usage Example
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


### 3. Overview of Configuration
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


#### <span class="eighteen">field <span class="bold">run_kwargs</span>: [dict](#dictargs-kwargs-source-1) = {}</span>

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

## Simulator

<img src={data.simulator}/>

This quantum executor introduces thread- or process-based parallelism to Pennylane circuits that utilize simulation-based devices (like `"default.qubit"` or `"lightning.qubit"`).

### 1. Installation

No additional installation is required.

### 2. Usage Example

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


#### <span class="eighteen">pydantic model covalent.executor<span class="bold">.Simulator</span> [[source]](/docs/user-documentation/api-reference/scode-simulator)</span> 

<div class="up fourteen space"><Noindentation md='A quantum executor that uses the specified Pennylane device to execute circuits. Parallelizes circuit execution on the specified device using either threads or processes.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Keyword Arguments:'/></div>

<div class="up  fourteen space"><Noindentation md= '- device - A valid string corresponding to a Pennylane device. Simulation-based devices (e.g. “default.qubit” and “lightning.qubit”) are recommended. Defaults to “default.qubit”.'/></div>

<div class=" up fourteen space down"><Noindentation md='- parallel - The type of parallelism to use. Valid values are “thread” and “process”. Passing any other value will result in synchronous execution. Defaults to “thread”.'/></div>

<div class=" up fourteen space down"><Noindentation md='- workers - The number of threads or processes to use. Defaults to 10.'/></div>

<div class=" up fourteen space down"><Noindentation md='- shots - The number of shots to use for the execution device. Overrides the `shots` value from the original device if set to `None` or a positive `int`. The shots setting from the original device is used by default, when this argument is 0.'/></div>

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