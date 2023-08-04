---
title: Covalent
displayed_sidebar: tutorialSidebar
---

import Noindentation from '/src/components/Noindentation';
import Doubleind from '/src/components/Doubleind';
import Multiplecolors from '/src/components/Multiplecolors';
import ReactMarkdown from 'react-markdown';

Main Covalent public functionality.

**Classes**

<table class="tables up down">

  <tr>
    <td ><div><ReactMarkdown children='[`DepsBash`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepsbashcommands)([commands]) '></ReactMarkdown></div></td>
    <td>Shell commands to run before an electron</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children='[`DepsCall`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)([func, args, kwargs, …])'/></div></td>
    <td>Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path)([packages, reqs_path])   '/></div></td>
    <td>PyPI packages to be installed before executing an electron</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`Lepton`](/docs/user-documentation/api-reference/covalent#class-covalentleptonlanguagepython--library_name-function_name-argtypes-command-named_outputs-display_name-executordask-files-deps_bash-deps_pipnone-call_before-call_after)([language, library_name, …])'/></div></td>
    <td>A generalization of an Electron to languages other than Python.</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children=' [`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj)(obj)'/></div></td>
    <td>A function is converted to a transportable object by serializing it using cloudpickle and then whenever executing it, the transportable object is deserialized.</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children=' [`status`](/docs/user-documentation/api-reference/covalent#covalentstatus)'/></div></td>
    <td><ReactMarkdown children='alias of `covalent.RESULT_STATUS`'/></td>
  </tr>
  
</table>

**Functions**

<table class="tables up down">
  <tr>
    <td><div ><ReactMarkdown children='[`cancel`](/docs/user-documentation/api-reference/covalent#covalentcanceldispatch_id-task_idsnone-dispatcher_addrnone)(dispatch_id[, task_ids, dispatcher_addr])'></ReactMarkdown></div></td>
    <td>Cancel a running dispatch.</td>
  </tr>
  <tr>
    <td><div><ReactMarkdown children='[`dispatch`](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentdispatchorig_lattice-dispatcher_addrnone-disable_runfalse)(orig_lattice[, dispatcher_addr, …])'></ReactMarkdown></div></td>
    <td>Wrapping the dispatching functionality to allow input passing and server address specification. </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`dispatch_sync`](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentdispatch_synclattice-dispatcher_addrnone)(lattice[, dispatcher_addr])'></ReactMarkdown></div></td>
    <td>Wrapping the synchronous dispatching functionality to allow input passing and server address specification.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`electron`](/docs/user-documentation/api-reference/workflow-components#covalentelectron_funcnone--backendnone-executornone-files-deps_bashnone-deps_pipnone-call_before-call_after)([_func, backend, executor, files, …]) '></ReactMarkdown></div></td>
    <td>Electron decorator to be called upon a function.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`get_config`](/docs/user-documentation/api-reference/covalent#covalentget_configentriesnone)([entries]) '></ReactMarkdown></div></td>
    <td>Return a configuration setting.</td>
  </tr>
  <tr>
    <td><div><ReactMarkdown children='[`get_result`](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentget_resultdispatch_id-waitfalse-dispatcher_addrnone-status_onlyfalse)(dispatch_id[, wait, …])'></ReactMarkdown></div></td>
    <td>Lattice decorator to be called upon a function.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`lattice`](/docs/user-documentation/api-reference/workflow-components#covalentlattice_funcnone--backendnone-executornone-workflow_executornone-deps_bashnone-deps_pipnone-call_before-call_after-triggersnon)([_func, backend, executor, …])'></ReactMarkdown></div></td>
    <td>Wrapping the dispatching functionality to allow input passing and server address specification.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`redispatch`](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentredispatchdispatch_id-dispatcher_addrnone-replace_electronsnone-reuse_previous_resultsfalse-is_pendingfalse)(dispatch_id[, dispatcher_addr, …])'></ReactMarkdown></div></td>
    <td>Reload the configuration from the TOML file.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`reload_config`](/docs/user-documentation/api-reference/covalent#covalentreload_config)()  '></ReactMarkdown></div></td>
    <td>Reload the configuration from the TOML file.</td>
  </tr>
  <tr>
    <td><div><ReactMarkdown children=' [`set_config`](/docs/user-documentation/api-reference/covalent#covalentset_confignew_config-new_valuenone)(new_config[, new_value])'></ReactMarkdown></div></td>
    <td> Update the configuration.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`stop_triggers`](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentstop_triggersdispatch_ids-triggers_server_addrnone)(dispatch_ids[, …])'></ReactMarkdown></div></td>
    <td>Stop observing on all triggers of all given dispatch ids registered on the Triggers server.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`sync`](/docs/user-documentation/api-reference/covalent#covalentsyncdispatch_idnone)([dispatch_id])'></ReactMarkdown></div></td>
    <td> Synchronization call.</td>
  </tr>
      <tr>
    <td><div><ReactMarkdown children='[`wait`](/docs/user-documentation/api-reference/covalent#covalentwaitchild-parents)(child, parents)'></ReactMarkdown></div></td>
    <td>Instructs Covalent that an electron should wait for some other tasks to complete before it is dispatched. </td>
  </tr>
  
</table>



#### <span class="eighteen">class <span class="highlight">covalent.<span class="bold">DepsBash</span></span>(commands=[])</span>

<div class="up fourteen space"><Noindentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/></div>
<div class="up fourteen space"><Noindentation md='Shell commands to run before an electron'/></div>
<div class="up fourteen space"><Noindentation md='Deps class to encapsulate Bash dependencies for an electron.'/></div>
<div class="up fourteen space"><Noindentation md='The specified commands will be executed as subprocesses in the same environment as the electron.'/></div>
<div class="up highlight2"><Noindentation md='**Commands**'/></div>
<div class="up left down fourteen"><Noindentation md='A list of bash commands to execute before the electron runs.'/></div>
<Noindentation md='**Methods**'/>



<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source)(object_dict)'></ReactMarkdown></div></td>
    <td> Rehydrate a dictionary representation</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dict-source)()'></ReactMarkdown></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>

#### <span class="bold">from_dict</span>(object_dict) [[source]](/docs/user-documentation/api-reference/scode-depsbash)

<div class="up fourteen space"><Noindentation md='Rehydrate a dictionary representation'/></div>
<div class="up eighteen space highlight2"><Noindentation md='Parameters'/></div>
<div class="up left fourteen space1"><Noindentation md='**object_dict** – a dictionary representation returned by to_dict'/></div>
<div class="up eighteen space highlight2"><Noindentation md='Return Type'/></div>
<div class="up left fourteen space1"><Noindentation md='[`DepsBash`](/docs/user-documentation/api-reference/taskhelpers##class-covalentdepsbashcommands)'/></div>
<div class="up eighteen space highlight2"><Noindentation md='Returns'/></div>
<div class="up left fourteen space1"><Noindentation md='self'/></div>
<div class="up fourteen down space1"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict()</span> [[source]](/docs/user-documentation/api-reference/scode-depsbash)

<div class="up fourteen space"><Noindentation md='Return a JSON-serializable dictionary representation of self'/></div>
<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`dict`'/></div>

#### class <span class="highlight">covalent</span>.<span class="bold">DepsCall</span>(func=None, args=[], kwargs={}, \*, retval_keyword='', override_reserved_retval_keys=False)

<div class="up fourteen space"><Noindentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source).'/></div>
<div class="up fourteen space"><Noindentation md='Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment.'/></div>
<div class="up fourteen space"><Noindentation md='Deps class to encapsulate python functions to be called in the same execution environment as the electron.'/></div>

#### <span class="bold eighteen">func</span>

<div class="up left fourteen space"><Noindentation md='A callable'/></div>

#### <span class="bold eighteen">args</span>

<div class="up left fourteen space"><Noindentation md='args list'/></div>

#### <span class="bold eighteen">kwargs</span>

<div class="up left fourteen space"><Noindentation md='kwargs dict'/></div>

#### <span class="bold eighteen">retval_keyword</span>

<div class="up left fourteen down space"><Noindentation md='An optional string referencing the return value of func.'/></div>

<div class="up fourteen space"><Noindentation md='If retval_keyword is specified, the return value of func will be passed during workflow execution as an argument to the electron corresponding to the parameter of the same name.  '/></div>
<div class="up eighteen space"><Noindentation md='**NOTES**'/></div>

<div class="up fourteen space"><Noindentation md='Electron parameters to be injected during execution must have default parameter values.'/></div>

<div class="up down space"><Noindentation md='It is the user’s responsibility to ensure that `retval_keyword` is actually a parameter of the electron. Unexpected behavior may occur otherwise.'/></div>

<div class="up eighteen"><Noindentation md='**Methods:**'/></div>

<table class="tables up ">
  <tr>
    <td><div><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source)(object_dict)'></ReactMarkdown></div></td>
    <td> Rehydrate a dictionary representation</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dictsource)()'></ReactMarkdown></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>   

#### <span class="eighteen"><span class="bold">from_dict</span>(object_dict)[[source]](/docs/user-documentation/api-reference/scode-depscall)</span>

<div class="up fourteen space"><Noindentation md='Rehydrate a dictionary representation'/></div>
<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='**object_dict** – a dictionary representation returned by *to_dict*'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='[DepsCall](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='self'/></div>
<div class="up fourteen down space"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict()</span>[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="up fourteen space"><Noindentation md='Return a JSON-serializable dictionary representation of self'/></div>
<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`dict`'/></div>

#### class <span class="highlight">covalent.</span><span class="bold">DepsPip</span>(packages=[], reqs_path='')

<div class="up fourteen space"><Noindentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/></div>
<div class="up fourteen space"><Noindentation md='PyPI packages to be installed before executing an electron'/></div>
<div class="up fourteen space"><Noindentation md='A specification of Pip packages to be installed'/></div>

#### <span class="bold">packages</span>

<div class="up left fourteen space"><Noindentation md='A list of PyPI packages to install'/></div>

#### <span class="bold">reqs_path</span>

<div class="up left fourteen space"><Noindentation md='Path to requirements.txt (overrides *packages*)'/></div>
<div class="up fourteen space"><Noindentation md='These packages are installed in an electron’s execution environment just before the electron is run.'/></div>

<div class="eighteen"><Noindentation md='**Methods:**'/></div>

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source-1)(object_dict)'></ReactMarkdown></div></td>
    <td> Rehydrate a dictionary representation</td>
  </tr>

  <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dict-source-1)()'></ReactMarkdown></div></td>
    <td> Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>

#### <span class="bold eighteen">from_dict</span>(object_dict) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="up fourteen space"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div> 
<div class="up left fourteen space1" style={{marginTop:"-45px"}}><Noindentation md='object_dict – a dictionary representation returned by to_dict'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div> 
<div class="up left fourteen space1" style={{marginTop:"-45px"}}><Noindentation md='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path--)'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div> 
<div class="doubleup left fourteen space1"  style={{marginTop:"-45px"}}><Noindentation md='self'/></div>

<div class="up fourteen space"  style={{marginBottom:"-35px"}}><Noindentation md='Instance attributes will be overwritten.'/></div> 

#### <span class="bold eighteen">to_dict()</span>[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="up fourteen space"><Noindentation md='Return a JSON-serializable dictionary representation of self'/></div>   
<div class="doubleup eighteen highlight2" style={{marginTop:"-45px"}}><Noindentation md='**Return Type**'/></div> 
<div class="up left fourteen down space" style={{marginTop:"-45px"}}><Noindentation md='`dict`'/></div>

#### class <span class="highlight">covalent.</span><span class="bold">Lepton</span>(language='python', \*, library_name='', function_name='', argtypes=[], command='', named_outputs=[], display_name='', executor='dask', files=[], deps_bash=[], deps_pip=None, call_before=[], call_after=[]]

<div class="up fourteen space"><Noindentation md='Bases: [`covalent._workflow.electron.Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)'/></div> 
<div class="up fourteen space" style={{marginTop:"-45px"}}><Noindentation md='A generalization of an Electron to languages other than Python.'/></div> 
<div class="up fourteen space" style={{marginTop:"-45px"}}><Noindentation md='Leptons inherit from Electrons, overloading the *function* attribute with a wrapper function. Users specify the foreign function’s signature as well as its location by providing a library and entrypoint. When one of the executors invokes the task’s *function*, the foreign function is called by way of the wrapper function defined here. If compilation scripts are required, these must be separately copied to the backend.'/></div> 

#### <span class="bold">language</span>

<div class="up left fourteen space"><Noindentation md='Language in which the task specification is written.'/></div>

#### <span class="bold">library_name</span>

<div class="up left fourteen space"><Noindentation md='Name of the library or module which specifies the function.'/></div>

#### <span class="bold">function_name</span>

<div class="up left fourteen space"><Noindentation md='Name of the foreign function.'/></div>

#### <span class="bold">argtypes</span>

<div class="up left fourteen space"><Noindentation md='List of tuples specifying data types and input/output properties.'/></div>

#### <span class="bold">executor</span>

<div class="up left fourteen space"><Noindentation md='Alternative executor object to be used for lepton execution. If not passed, the dask executor is used by default '/></div>

#### <span class="bold">files</span>

<div class="up left fourteen down space"><Noindentation md='An optional list of FileTransfer objects which copy files to/from remote or local filesystems'/></div>

#### Attributes

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children=' [`INPUT`](/docs/user-documentation/api-reference/covalent#input--0)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`INPUT_OUTPUT`](/docs/user-documentation/api-reference/covalent#input_output--2)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`OUTPUT`](/docs/user-documentation/api-reference/covalent#output--1)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
</table>

#### Methods:

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='[`wrap_task`](/docs/user-documentation/api-reference/covalent#wrap_task-source)'></ReactMarkdown></div></td>
    <td>Return a lepton wrapper function.</td>
  </tr>
</table>

#### <span class="bold fourteen">INPUT</span> = 0

#### <span class="bold fourteen">INPUT_OUTPUT</span> = 2

#### <span class="bold fourteen">OUTPUT</span> = 1

#### <span class="bold">wrap_task()</span> [[source]](/docs/user-documentation/api-reference/scode-lepton.md)

<div class="up fourteen space"><Noindentation md='Return a lepton wrapper function.'/></div>
<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`Callable`'/></div>

#### class <span class="highlight">covalent.</span><span class="bold">TransportableObject</span>(obj)

<div class="up fourteen space"><Noindentation md='Bases: `object`'/></div>

<div class="up fourteen space"><Noindentation md='A function is converted to a transportable object by serializing it using cloudpickle and then whenever executing it, the transportable object is deserialized. The object will also contain additional info like the python version used to serialize it.'/></div>


#### Attributes

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children=' [`attrs`](/docs/user-documentation/api-reference/covalent#property-attrs)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`object_string`](/docs/user-documentation/api-reference/covalent#object_string)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`python_version`](/docs/user-documentation/api-reference/covalent#python_version)'></ReactMarkdown></div></td>
    <td></td>
  </tr>
</table>

#### Methods:

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='[`deserialize`](/docs/user-documentation/api-reference/covalent#static-deserializedata--source)(serialized, *[, header_only, …])'></ReactMarkdown></div></td>
    <td>Deserialize the transportable object from the archived transportable object. </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`deserialize_dict`](/docs/user-documentation/api-reference/covalent#static-deserialize_dictcollection--source)(collection)'></ReactMarkdown></div></td>
    <td>Recursively deserializes a dict of TransportableObjects. </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`deserialize_from_json`](/docs/user-documentation/api-reference/covalent#static-deserialize_from_jsonjson_string--source)(json_string)'></ReactMarkdown></div></td>
    <td>Reconstruct a transportable object from JSON</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`deserialize_list`](#static-deserialize_listcollection--source)(collection)'></ReactMarkdown></div></td>
    <td> Recursively deserializes a list of TransportableObjects.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/covalent#static-from_dictobject_dict--source)(object_dict)'></ReactMarkdown></div></td>
    <td>Rehydrate a dictionary representation</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_deserialized`](/docs/user-documentation/api-reference/covalent#get_deserialized--source)()'></ReactMarkdown></div></td>
    <td>Get the deserialized transportable object.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`get_serialized`](/docs/user-documentation/api-reference/covalent#get_serialized--source)() '></ReactMarkdown></div></td>
    <td>Get the deserialized transportable object.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`make_transportable`](/docs/user-documentation/api-reference/covalent#static-make_transportableobj--source)(obj)'></ReactMarkdown></div></td>
    <td><ReactMarkdown children='**RTYPE**'></ReactMarkdown> <div class="up left"><Noindentation md='[`TransportableObject`](#class-covalenttransportableobjectobj)'/></div></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`serialize`](/docs/user-documentation/api-reference/covalent#serialize--source)()'></ReactMarkdown></div></td>
    <td>Serialize the transportable object.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`serialize_to_json`](/docs/user-documentation/api-reference/covalent#serialize_to_json--source)()'></ReactMarkdown></div></td>
    <td>Serialize the transportable object to JSON.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/covalent#to_dict--source)()'></ReactMarkdown></div></td>
    <td>Return a JSON-serializable dictionary representation of self </td>
  </tr>
</table>


#### property <span class="bold eighteen">attrs</span>

#### static <span class="bold">deserialize</span>(data) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Deserialize the transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='**data** (`bytes`) – Cloudpickled function.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='The deserialized transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='object'/></div>

#### static <span class="bold">deserialize_dict</span>(collection) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Recursively deserializes a dict of TransportableObjects. More precisely, *collection* is a dict, each of whose entries is assumed to be either a *TransportableObject*, a list, or dict`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`dict`'/></div>

#### static <span class="bold">deserialize_from_json</span>(json_string) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Reconstruct a transportable object from JSON'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='json_string (`str`) – A JSON string representation of a TransportableObject'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='``str``'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='A TransportableObject instance'/></div>

#### static <span class="bold">deserialize_list</span>(collection) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Recursively deserializes a list of TransportableObjects. More precisely, collection is a list, each of whose entries is assumed to be either a TransportableObject, a list, or dict`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`list`'/></div>

#### static <span class="bold">from_dict</span>(object_dict) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='object_dict – a dictionary representation returned by *to_dict*'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='[`TransportableObject`](#class-covalenttransportableobjectobj)'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='A *TransportableObject* represented by *object_dict*'/></div>

#### <span class="bold">get_deserialized()</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Get the deserialized transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='None – '/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='The deserialized object/callable function.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='function'/></div>

#### <span class="bold">get_serialized()</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Get the deserialized transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='None – '/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='The serialized transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='object'/></div>

#### property <span class="bold down">json</span>

#### static <span class="bold">make_transportable</span>(obj) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='[`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj)'/></div>


#### <span class="bold">object_string</span>


#### <span class="bold">python_version</span>

#### <span class="bold">serialize()</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Serialize the transportable object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='None – '/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='The serialized object alongwith the python version.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='pickled_object'/></div>

#### <span class="bold">serialize_to_json()</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Serialize the transportable object to JSON.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='None – '/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='``str``'/></div>
<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='A JSON string representation of the transportable object'/></div>

#### <span class="bold">to_dict()</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-transport.md)

<div class="up fourteen space"><Noindentation md='Return a JSON-serializable dictionary representation of self'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='`dict`'/></div>

#### <span class="highlight">covalent.</span><span class="bold">cancel</span>(dispatch_id, task_ids=None, dispatcher_addr=None)

<div class="up fourteen space"><Noindentation md='Cancel a running dispatch.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* dispatch_id (`str`) – The dispatch id of the dispatch to be canceled. '/></div>
<div class="up fourteen space"><Noindentation md='* task_ids (`Optional`[`List`[`int`]]) – Optional, list of task ids to cancel within the workflow'/></div>
<div class="up fourteen space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – Dispatcher server address, if None then defaults to the address set in Covalent’s config. '/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='``str``'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='Cancelation response'/></div>

#### <span class="highlight">covalent.</span><span class="bold">dispatch</span>(orig_lattice, dispatcher_addr=None, disable_run=False)

<div class="up fourteen space"><Noindentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/></div>
<div class="up fourteen space"><Noindentation md='Afterwards, send the lattice to the dispatcher server and return the assigned dispatch id.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* orig_lattice ([`Lattice`](/docs/user-documentation/api-reference/workflow-components#covalentlattice_funcnone--backendnone-executornone-workflow_executornone-deps_bashnone-deps_pipnone-call_before-call_after-triggersnone) – The lattice/workflow to send to the dispatcher server. '/></div>
<div class="up fourteen space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>
<div class="up fourteen space"><Noindentation md='* disable_run (`bool`) – Whether to disable running the worklow and rather just save it on Covalent’s server for later execution'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='``Callable``'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='Wrapper function which takes the inputs of the workflow as arguments'/></div>

#### <span class="highlight">covalent.</span><span class="bold">dispatch_sync</span>(lattice, dispatcher_addr=None)

<div class="up fourteen space"><Noindentation md='Wrapping the synchronous dispatching functionality to allow input passing and server address specification.'/></div>
<div class="up fourteen space"><Noindentation md='Afterwards, sends the lattice to the dispatcher server and return the result of the executed workflow.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* orig_lattice – The lattice/workflow to send to the dispatcher server.'/></div>
<div class="up fourteen space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='``Callable``'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='Wrapper function which takes the inputs of the workflow as arguments'/></div>

#### <span class="highlight">covalent.</span><span class="bold">electron</span>(\_func=None, \*, backend=None, executor=None, files=[], deps_bash=None, deps_pip=None, call_before=[], call_after=[])

<div class="up fourteen space"><Noindentation md='Electron decorator to be called upon a function. Returns the wrapper function with the same functionality as _*func*.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='_**func** (`Optional`[`Callable`]) – function to be decorated'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Keyword Arguments**'/></div>
<div class="up fourteen space"><Noindentation md='* backend – DEPRECATED: Same as *executor*.'/></div>
<div class="up fourteen space"><Noindentation md='* executor – Alternative executor object to be used by the electron execution. If not passed, the dask executor is used by default.'/></div>
<div class="up fourteen space"><Noindentation md='* deps_bash – An optional DepsBash object specifying a list of shell commands to run before _*func*'/></div>
<div class="up fourteen space"><Noindentation md='* deps_pip – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*'/></div>
<div class="up fourteen space"><Noindentation md='* call_before – An optional list of DepsCall objects specifying python functions to invoke before the electron'/></div>
<div class="up fourteen space"><Noindentation md='* call_after – An optional list of DepsCall objects specifying python functions to invoke after the electron'/></div>
<div class="up fourteen space"><Noindentation md='* files – An optional list of FileTransfer objects which copy files to/from remote or local filesystems.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='Electron object inside which the decorated function exists.`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='[`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)'/></div>

#### <span class="highlight">covalent.</span><span class="bold">get_config</span>(entries=None)

<div class="up fourteen space"><Noindentation md='Return a configuration setting.'/></div>
<div class="up fourteen space"><Noindentation md='Invocation with no arguments returns the full configuration description; with a list of arguments returns a dictionary of configuration settings; with a string key name returns the corresponding value for a single setting.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='entries (`Union`[`str`, `List`, `None`]) – A string or list of strings specifying key names.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='A dictionary or string describing the corresponding configuration
settings.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='config'/></div>

#### <span class="highlight">covalent.</span><span class="bold">get_result</span>(dispatch_id, wait=False, dispatcher_addr=None, status_only=False)

<div class="up fourteen space"><Noindentation md='Get the results of a dispatch from the Covalent server.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* dispatch_id (`str`) – The dispatch id of the result.'/></div>
<div class="up fourteen space"><Noindentation md='* wait (`bool`) – Controls how long the method waits for the server to return a result. If False, the method will not wait and will return the current status of the workflow. If True, the method will wait for the result to finish and keep retrying for sys.maxsize.'/></div>
<div class="up fourteen space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – Dispatcher server address, if None then defaults to the address set in Covalent’s config.'/></div>
<div class="up fourteen space"><Noindentation md='* status_only (`bool`) – If true, only returns result status, not the full result object, default is False.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='[`Result`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalent_results_managerresultresultlattice-dispatch_idsource)'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='The Result object from the Covalent server'/></div>

#### <span class="highlight">covalent.</span><span class="bold">lattice</span>(\_func=None, \*, backend=None, executor=None, workflow_executor=None, deps_bash=None, deps_pip=None, call_before=[], call_after=[], triggers=None)

<div class="up fourteen space"><Noindentation md='Lattice decorator to be called upon a function. Returns a new Lattice <*covalent._workflow.lattice.Lattice*> object.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='_func (`Optional`[`Callable`]) – function to be decorated'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Keyword Arguments**'/></div>
<div class="up fourteen space"><Noindentation md='* backend – DEPRECATED: Same as *executor*.'/></div>
<div class="up fourteen space"><Noindentation md='* executor – Alternative executor object to be used by the electron execution. If not passed, the dask executor is used by default.'/></div>
<div class="up fourteen space"><Noindentation md='* workflow_executor – Executor for postprocessing the workflow. Defaults to the built-in dask executor or the local executor depending on whether Covalent is started with the –no-cluster option.'/></div>
<div class="up fourteen space"><Noindentation md='* deps_bash – An optional DepsBash object specifying a list of shell commands to run before _*func*'/></div>
<div class="up fourteen space"><Noindentation md='* deps_pip – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*'/></div>
<div class="up fourteen space"><Noindentation md='* call_before – An optional list of DepsCall objects specifying python functions to invoke before the electron'/></div>
<div class="up fourteen space"><Noindentation md='* call_after – An optional list of DepsCall objects specifying python functions to invoke after the electron'/></div>
<div class="up fourteen space"><Noindentation md='* triggers – Any triggers that need to be attached to this lattice, default is None'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='Lattice object inside which the decorated function exists.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen down space1"><Noindentation md='[`Lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-source)'/></div>

#### <span class="highlight">covalent.</span><span class="bold">redispatch</span>(dispatch_id, dispatcher_addr=None, replace_electrons=None, reuse_previous_results=False, is_pending=False)

<div class="up fourteen space"><Noindentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* dispatch_id (`str`) – The dispatch id of the workflow to re-dispatch.'/></div>
<div class="up fourteen space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – The address of the dispatcher server. If None then then defaults to the address set in Covalent’s config.'/></div>
<div class="up fourteen space"><Noindentation md='* replace_electrons (`Optional`[`Dict`[`str`, `Callable`]]) – A dictionary of electron names and the new electron to replace them with.'/></div>
<div class="up fourteen space"><Noindentation md='* reuse_previous_results (`bool`) – Boolean value whether to reuse the results from the previous dispatch.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='`Callable`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='Wrapper function which takes the inputs of the workflow as arguments.'/></div>

#### <span class="highlight">covalent.</span><span class="bold">reload_config</span>()

<div class="up fourteen space"><Noindentation md='Reload the configuration from the TOML file.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md='None-'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='`None`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='None'/></div>

#### <span class="highlight">covalent.</span><span class="bold">set_config</span>(new_config, new_value=None)

<div class="up fourteen space"><Noindentation md='Update the configuration.'/></div>
<div class="up fourteen space"><Noindentation md='Users may pass a dictionary of new settings, or a string key with a value to set a single configuration setting.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up space"><span class="fourteen"><Noindentation md='* new_config (`Union`[`Dic`t, `str`]) – The new configuration dictionary, or a string key name.'/></span></div>
<div class="up fourteen space"><Noindentation md='* new_value (`Optional`[`Any`]) – A new configuration value, if the first argument is a string.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='`None`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='None'/></div>

#### <span class="highlight">covalent.</span><span class="bold">status</span>

<div class="up fourteen space"><Noindentation md='alias of `covalent.RESULT_STATUS`'/></div>

**Attributes**:

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='`CANCELED` '></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`COMPLETED`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`FAILED`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`NEW_OBJECT`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`PENDING_POSTPROCESSING`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`POSTPROCESSING`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`POSTPROCESSING_FAILED`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='`RUNNING`'></ReactMarkdown></div></td>
    <td></td>
  </tr>
</table>

#### <span class="highlight">covalent.</span><span class="bold">stop_triggers</span>(dispatch_ids, triggers_server_addr=None)

<div class="up fourteen space"><Noindentation md='Stop observing on all triggers of all given dispatch ids registered on the Triggers server. :type dispatch_ids: `Union`[`str`, `List`[`str`]] :param dispatch_ids: Dispatch ID(s) for whose triggers are to be stopped :type triggers_server_addr: `Optional`[`str`] :param triggers_server_addr: Address of the Triggers server; configured dispatcher’s address is used as default'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='`None`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='None'/></div>

#### <span class="highlight">covalent.</span><span class="bold">sync</span>(dispatch_id=None)

<div class="up fourteen space"><Noindentation md='Synchronization call. Returns when one or more dispatches have completed.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up left fourteen space1"><Noindentation md=' **dispatch_id** (`Union`[`str`, `List`[`str`], `None`]) – One or more dispatch IDs to wait for before returning.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Return Type**'/></div>
<div class="up left fourteen space1"><Noindentation md='`None`'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen down space1"><Noindentation md='None'/></div>

#### <span class="highlight">covalent.</span><span class="bold">wait</span>(child, parents)

<div class="up fourteen space"><Noindentation md='Instructs Covalent that an electron should wait for some other tasks to complete before it is dispatched.'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Parameters**'/></div>
<div class="up fourteen space"><Noindentation md='* child – the dependent electron'/></div>
<div class="up fourteen space"><Noindentation md='* parents – Electron(s) which must complete before *waiting_electron* starts'/></div>

<div class="up eighteen space highlight2"><Noindentation md='**Returns**'/></div>
<div class="up left fourteen space1"><Noindentation md='waiting_electron'/></div>
<div class="up fourteen space"><Noindentation md='Useful when execution of an electron relies on a side-effect from another one.'/></div>



