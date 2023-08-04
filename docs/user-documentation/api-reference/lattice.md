---
title: Lattice
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import ReactMarkdown from 'react-markdown';

<!-- [toelectron](./electron#deevid) -->

#### <span class="highlight">@covalent.</span><span class="bold">lattice</span>(\_func=None, \*, backend=None, executor=None, workflow_executor=None, deps_bash=None, deps_pip=None, call_before=[], call_after=[], triggers=None)

<Indentation md='Lattice decorator to be called upon a function. Returns a new *Lattice 
<covalent._workflow.lattice.Lattice>* object.'/>

<Indentation md='**PARAMETERS**'/>
<Doubleind md='**_func** (`Optional`[`Callable`]) – function to be decorated'/>

<Indentation md='**KEYWORD ARGUMENTS**'/>

<Indentation md='* **backend** – DEPRECATED: Same as *executor*.'/>
<Indentation md='* **executor** – Alternative executor object to be used in the execution of each node. If not passed, the local executor is used by default..'/>
<Indentation md='* **workflow_executor** –  Executor for postprocessing the workflow. Defaults to the built-in dask executor or the local executor depending on whether Covalent is started with the –*no-cluster*.'/>
<Indentation md='* **deps_bash** – An optional DepsBash object specifying a list of shell commands to run before *_func*.'/>
<Indentation md='* **deps_pip** – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*.'/>
<Indentation md='* **call_before** – An optional list of DepsCall objects specifying python functions to invoke before the electron'/>
<Indentation md='* **call_after** – An optional list of DepsCall objects specifying python functions to invoke after the electron'/>
<Indentation md='* **triggers** –  Any triggers that need to be attached to this lattice, default is None'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='Lattice object inside which the decorated function exists.'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='[`Lattice`](#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-source)'/>

#### class <span class="highlight">covalent.\_workflow.lattice.</span><span class="bold">Lattice</span>(workflow_function, transport_graph=None)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](./scode-lattice)

<Indentation md='A lattice workflow object that holds the work flow graph and is returned by [`lattice`](#covalentlattice_funcnone--backendnone-executornone-workflow_executornone-deps_bashnone-deps_pipnone-call_before-call_after-triggersnone) decorator.'/>

<!-- #### workflow_function

#### transport_graph

#### metadata

#### post_processing

#### kwargs

#### electron_outputs -->

<Indentation md='**workflow_function**' color='#B30000'/>
<Doubleind md='The workflow function that is decorated by [`lattice`](#covalentlattice_funcnone--backendnone-executornone-workflow_executornone-deps_bashnone-deps_pipnone-call_before-call_after-triggersnone) decorator.'/>

<Indentation md='**transport_graph**' color='#B30000'/>
<Doubleind md='The transport graph which will be the basis on how the workflow is executed.'/>

<Indentation md='**metadata**' color='#B30000'/>
<Doubleind md='Dictionary of metadata of the lattice.'/>

<Indentation md='**post_processing**' color='#B30000'/>
<Doubleind md='post_processing'/>

<Indentation md='**kwargs**' color='#B30000'/>
<Doubleind md='Keyword arguments passed to the workflow function.'/>

<Indentation md='**electron_outputs**' color='#B30000'/>
<Doubleind md='Dictionary of electron outputs received after workflow execution.'/>

<Indentation md='**Methods:**'/>

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [build_graph](#build_graphargs-kwargssource)(*args, **kwargs)  '></ReactMarkdown></div></td>
    <td>Builds the transport graph for the lattice by executing the workflow function which will trigger the call of all underlying electrons and they will get added to the transport graph for later execution.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[dispatch](#dispatchargs-kwargssource)(*args, **kwargs)'></ReactMarkdown></div></td>
    <td>DEPRECATED: Function to dispatch workflows. </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[dispatch_sync](#dispatch_syncargs-kwargssource)(*args, **kwargs)'></ReactMarkdown></div></td>
    <td> DEPRECATED: Function to dispatch workflows synchronously by waiting for the result too.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [draw](#drawargs-kwargssource)(*args, **kwargs)'></ReactMarkdown></div></td>
    <td>Generate lattice graph and display in UI taking into account passed in arguments.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[get_metadata](#get_metadatanamesource)(name)  '></ReactMarkdown></div></td>
    <td> Get value of the metadata of given name.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [set_metadata](#set_metadataname-valuesource)(name, value)'></ReactMarkdown></div></td>
    <td>Function to add/edit metadata of given name and value to lattice’s metadata.</td>
  </tr>
</table>      

#### <span class="bold">build_graph</span>(\*args, \*\*kwargs)[[source]](./scode-lattice)

<Doubleind md='Builds the transport graph for the lattice by executing the workflow function which will trigger the call of all underlying electrons and they will get added to the transport graph for later execution.'/>
<Doubleind md='Also redirects any print statements inside the lattice function to null and ignores any exceptions caused while executing the function.'/>
<Doubleind md='GRAPH WILL NOT BE BUILT AFTER AN EXCEPTION HAS OCCURRED.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* ***args** – Positional arguments to be passed to the workflow function.'/>
<Doubleind md='* ****kwargs** – Keyword arguments to be passed to the workflow function.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`None`'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='None'/>

#### <span class="bold">dispatch</span>(\*args, \*\*kwargs)[[source]](./scode-lattice)

<Doubleind md='DEPRECATED: Function to dispatch workflows.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* ***args** – Positional arguments for the workflow'/>
<Doubleind md='* ****kwargs** – Keyword arguments for the workflow'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`str`'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Dispatch id assigned to job'/>

#### <span class="bold">dispatch_sync</span>(\*args, \*\*kwargs)[[source]](./scode-lattice)

<Doubleind md='DEPRECATED: Function to dispatch workflows synchronously by waiting for the result too.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* ***args** – Positional arguments for the workflow'/>
<Doubleind md='* ****kwargs** – Keyword arguments for the workflow'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='[Result](/docs/user-documentation/api-reference/dispatch-infrastructure#covalentget_resultdispatch_id-waitfalse-dispatcher_addrnone-status_onlyfalse)'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Result of workflow execution'/>

#### <span class="bold">draw</span>(\*args, \*\*kwargs)[[source]](./scode-lattice)

<Doubleind md='Generate lattice graph and display in UI taking into account passed in arguments.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* ***args** – Positional arguments to be passed to build the graph.'/>
<Doubleind md='* ****kwargs** –  Keyword arguments to be passed to build the graph.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`None`'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='None'/>

#### <span class="bold">get_metadata</span>(name)[[source]](./scode-lattice)

<Doubleind md='Get value of the metadata of given name.'/>

<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**name** (`str`) – Name of the metadata whose value is needed.'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Value of the metadata of given name.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='value'/>

<Doubleind md='**RAISES**'/>
<Tripleind md='**KeyError** – If metadata of given name is not present.'/>

#### <span class="bold">set_metadata</span>(name, value)[[source]](./scode-lattice)

<Doubleind md='Function to add/edit metadata of given name and value to lattice’s metadata.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* **name** (`str`) – Name of the metadata to be added/edited.'/>
<Doubleind md='* **value** (`Any`) – Value of the metadata to be added/edited.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`None`'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='None'/>
