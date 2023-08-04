---
title: Asynchronous Base Executor Class
displayed_sidebar: tutorialSidebar
---
import Ind from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import ReactMarkdown from 'react-markdown';

#### class <span class="highlight">covalent.executor.base.</span><span class="bold">AsyncBaseExecutor</span>(*args, **kwargs)[[source]](./scode-executor-base)  

<Ind md='Async base executor class to be used for defining any executor plugin. Subclassing this class will allow you to define your own executor plugin which can be used in covalent.'/>

<Ind md='This is analogous to *BaseExecutor* except the *run()* method, together with the optional *setup()* and *teardown()* methods, are coroutines.'/>

#### <span class="bold">log_stdout</span> 
<Doubleind md='The path to the file to be used for redirecting stdout.'/>

#### <span class="bold">log_stderr</span> 
<Doubleind md='The path to the file to be used for redirecting stderr.'/>

#### <span class="bold">cache_dir</span> 
<Doubleind md='The location used for cached files in the executor.'/>

#### <span class="bold">time_limit</span> 
<Doubleind md='time limit for the task'/>

#### <span class="bold">retries</span>
<Doubleind md='Number of times to retry execution upon failure'/>

<Ind md='**Methods:**'/>


<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [`cancel`](#async-canceltask_metadata-job_handlesource)(task_metadata, job_handle)'/></div></td>
    <td>Executor specific task cancelation method</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`from_dict`](#from_dictobject_dict) (object_dict)'/></div></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`get_cancel_requested`](#async-get_cancel_requestedsource)() '/></div></td>
    <td>Get if the task was requested to be canceled </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`get_dispatch_context`](#get_dispatch_contextdispatch_info)(dispatch_info)  '/></div></td>
    <td> Start a context manager that will be used to access the dispatch info for the executor.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`run`](#abstract-runfunction-args-kwargs-task_metadatasource)(function, args, kwargs, task_metadata) '/></div></td>
    <td>Abstract method to run a function in the executor.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`set_job_handle`](#async-set_job_handlehandlesource)(handle)'/></div></td>
    <td>Save the job handle to database</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`setup`](#async-setuptask_metadatasource)(task_metadata) '/></div></td>
    <td>Executor specific setup method </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`teardown`](#async-teardowntask_metadatasource)(task_metadata) '/></div></td>
    <td>Executor specific teardown method </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`to_dict`](#to_dict)()'/></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`write_streams_to_file`](#async-write_streams_to_filestream_strings-filepaths-dispatch_id-results_dirsource)(stream_strings, …) '/></div></td>
    <td>Write the contents of stdout and stderr to respective files.</td>
  </tr>
</table>

#### async <span class="bold">cancel</span>(task_metadata, job_handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base)
<Doubleind md='Executor specific task cancelation method'/>

<Doubleind md='**Arg(s)**'/>
<Tripleind md='task_metadata: Metadata of the task to be canceled job_handle: Unique ID of the job assigned by the backend'/>

<Doubleind md='**Return(s)**'/>
<Tripleind md='False by default'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`Literal`[False]'/>


#### <span class="bold">from_dict</span>(object_dict)
<Doubleind md='Rehydrate a dictionary representation'/>

<Doubleind md='**PARAMETERS**'/>
<Tripleind md=' **object_dict** (`dict`) – a dictionary representation returned by *to_dict*'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='[`BaseExecutor`](./scode-executor-base)'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='self'/>

<Doubleind md='Instance attributes will be overwritten.'/>


#### async <span class="bold">get_cancel_requested</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base) 
<Doubleind md='Get if the task was requested to be canceled'/>

<Doubleind md='**Arg(s)**'/>
<Tripleind md=' None'/>

<Doubleind md='**Return(s)**'/>
<Tripleind md='Whether the task has been requested to be canceled'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`Any`'/>


#### <span class="bold">get_dispatch_context</span>(dispatch_info) 
<Doubleind md='Start a context manager that will be used to access the dispatch info for the executor.'/>
<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**dispatch_info** (`DispatchInfo`) – The dispatch info to be used inside current context.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`AbstractContextManager`[`DispatchInfo`]'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='A context manager object that handles the dispatch info.'/>


#### abstract <span class="bold">run</span>(function, args, kwargs, task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base) 
<Doubleind md='Abstract method to run a function in the executor.'/>

<Doubleind md='PARAMETERS'/>
<Doubleind md='* **function** (`Callable`) – The function to run in the executor'/>


<Doubleind md='* **args** (`List`) – List of positional arguments to be used by the function.'/>
<Doubleind md='* **kwargs** (`Dict`) – Dictionary of keyword arguments to be used by the function.'/>

<Doubleind md='* **task_metadata**(`Dict`) – Dictionary of metadata for the task. Current keys are *dispatch_id* and *node_id*'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='A context manager object that handles the dispatch info'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='output'/>


#### async <span class="bold">set_job_handle</span>(handle)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base) 
<Doubleind md='Save the job_id/handle returned by the backend executing the task'/>

<Doubleind md='**Arg(s)**'/>
<Tripleind md='handle: Any JSONable type to identifying the task being executed by the backend'/>

<Doubleind md='**Return(s)**'/>
<Tripleind md='Response from saving the job handle to database'/>


<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`Any`'/>

#### async <span class="bold">setup</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base) 
<Doubleind md='Executor specific setup method'/>

#### async <span class="bold">teardown</span>(task_metadata)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base) 
<Doubleind md='Executor specific teardown method'/>

#### <span class="bold">to_dict</span>() 
<Doubleind md='Return a JSON-serializable dictionary representation of self'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`dict`'/>



#### async <span class="bold">write_streams_to_file</span>(stream_strings, filepaths, dispatch_id, results_dir)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-executor-base)
<Doubleind md='Write the contents of stdout and stderr to respective files.'/>

<Doubleind md='PARAMETERS'/>
<Doubleind md='* **stream_strings** (`Iterable`[`str`]) – The stream_strings to be written to files.'/>


<Doubleind md='* **filepaths** (`Iterable`[`str`]) – The filepaths to be used for writing the streams.'/>
<Doubleind md='* **dispatch_id** (`str`) – The ID of the dispatch which initiated the request.'/>

<Doubleind md='* **results_dir** (`str`) – The location of the results directory.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`None`'/>