---
title: Electron
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import ReactMarkdown from 'react-markdown';

#### <span class="highlight">@covalent.</span><span class="bold">electron</span>(\_func=None, \*, backend=None, executor=None, files=[], deps_bash=None, deps_pip=None, call_before=[], call_after=[])

<Indentation md='Electron decorator to be called upon a function. Returns the wrapper function with the same functionality as *_func*.'/>

<Indentation md='**PARAMETERS**.'/>
<Doubleind md='**_func** (`Optional`[`Callable`]) – function to be decorated'/>

<Indentation md='**KEYWORD ARGUMENTS**'/>

<Indentation md='* **backend** – DEPRECATED: Same as *executor*.'/>
<Indentation md='* **executor** – Alternative executor object to be used in the execution of each node. If not passed, the local executor is used by default..'/>

<Indentation md='* **deps_bash** – An optional DepsBash object specifying a list of shell commands to run before *_func*.'/>
<Indentation md='* **deps_pip** – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*.'/>
<Indentation md='* **call_before** – An optional list of DepsCall objects specifying python functions to invoke before the electron'/>
<Indentation md='* **call_after** – An optional list of DepsCall objects specifying python functions to invoke after the electron'/>
<Indentation md='* **files** – An optional list of FileTransfer objects which copy files to/from remote or local filesystems.'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='Electron object inside which the decorated function exists.'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='[`Electron`](#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanonesource)'/>

#### class <span class="highlight">covalent.\_workflow.electron.</span><span class="bold">Electron</span>(function, node_id=None, metadata=None)[[source]](./scode-electron)

<Indentation md='An electron (or task) object that is a modular component of a work flow and is returned by [`electron`](#covalentelectron_funcnone--backendnone-executornone-files-deps_bashnone-deps_pipnone-call_before-call_after).'/>

<Indentation md='#### function' color='#B30000'/>
<Doubleind md='Function to be executed.'/>

<Indentation md='#### node_id' color='#B30000'/> 
<Doubleind md='Node id of the electron.'/>

<Indentation md='**metadata**' color='#B30000'/> 
<Doubleind md='Metadata to be used for the function execution.'/>

<Indentation md='**kwargs**' color='#B30000'/> 
<Doubleind md='Keyword arguments if any.'/>

#### Methods:

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}} ><ReactMarkdown children='[add_collection_node_to_graph](#add_collection_node_to_graphgraph-prefix--source)(graph, prefix)'></ReactMarkdown></div></td>
    <td>Adds the node to lattice’s transport graph in the case where a collection of electrons is passed as an argument to another electron.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[connect_node_with_others](#connect_node_with_othersnode_id-param_name-param_value-param_type-arg_index-transport_graph--source)(node_id, …)'></ReactMarkdown></div></td>
    <td> Adds a node along with connecting edges for all the arguments to the electron.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[get_metadata](#get_metadataname--source)(name)'></ReactMarkdown></div></td>
    <td>Get value of the metadata of given name.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[get_op_function](#get_op_functionoperand_1-operand_2-op--source)(operand_1, operand_2, op)'></ReactMarkdown></div></td>
    <td>Function to handle binary operations with electrons as operands.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[set_metadata](#set_metadataname-value--source)(name, value) '></ReactMarkdown></div></td>
    <td>GFunction to add/edit metadata of given name and value to electron’s metadata.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[wait_for](#set_metadataname-value--source)(electrons)'></ReactMarkdown></div></td>
    <td>Waits for the given electrons to complete before executing this one. </td>
  </tr>
</table>

<Indentation md='**Attributes:**'/>

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[as_transportable_dict](#property-as_transportable_dict-dict)  '></ReactMarkdown></div></td>
    <td>Get transportable electron object and metadata.</td>
  </tr>
</table>

#### <span class="bold">add_collection_node_to_graph</span>(graph, prefix) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Adds the node to lattice’s transport graph in the case where a collection of electrons is passed as an argument to another electron.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* **graph** (_*TransportGraph*) – Transport graph of the lattice'/>
<Doubleind md='* **prefix** (`str`) – Prefix of the node'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Node id of the added node'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='node_id'/>

#### property <span class="bold">as_transportable_dict</span>: Dict

<Doubleind md='Get transportable electron object and metadata.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='Dict'/>

#### <span class="bold">connect_node_with_others</span>(node_id, param_name, param_value, param_type, arg_index, transport_graph) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Adds a node along with connecting edges for all the arguments to the electron.'/>
<Doubleind md='**PARAMETERS**'/>

<Doubleind md='* **node_id** (`int`) – Node number of the electron'/>
<Doubleind md='* **param_name** (`str`) – Name of the parameter'/>
<Doubleind md='* **param_value** (`Union`[`Any`, `ForwardRef`]) – Value of the parameter'/>
<Doubleind md='* **param_type** (`str`) – Type of parameter, positional or keyword'/>
<Doubleind md='* **transport_graph** (_*TransportGraph*) – Transport graph of the lattice'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='None'/>

#### <span class="bold">get_metadata</span>(name) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Get value of the metadata of given name.'/>

<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**name** (`str`) – Name of the metadata whose value is needed.'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Value of the metadata of given name.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='value'/>

<Doubleind md='**RAISES**'/>
<Tripleind md='**KeyError** – If metadata of given name is not present.'/>

#### <span class="bold">get_op_function</span>(operand_1, operand_2, op) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Function to handle binary operations with electrons as operands. This will not execute the operation but rather create another electron which will be postponed to be executed according to the default electron configuration/metadata.'/>
<Doubleind md='This also makes sure that if these operations are being performed outside of a lattice, then they are performed as is.'/>

<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* **operand_1** (`Union`[`Any`, [`Electron`](#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanonesource)])]) – First operand of the binary operation.'/>
<Doubleind md='* **operand_2** (`Union`[`Any`, [`Electron`](#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanonesource)])]) – Second operand of the binary operation.'/>
<Doubleind md='* **op** (`str`) – Operator to be used in the binary operation.'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Electron object corresponding to the operation execution.
Behaves as a normal function call if outside a lattice.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='electron'/>

#### <span class="bold">set_metadata</span>(name, value) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Function to add/edit metadata of given name and value to electron’s metadata.'/>
<Doubleind md='**PARAMETERS**'/>
<Doubleind md='* **name** (`str`) – Name of the metadata to be added/edited.'/>
<Doubleind md='* **value** (`Any`) – Name of the metadata to be added/edited.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`None`'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='None'/>

#### <span class="bold">wait_for</span>(electrons) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](./scode-electron)

<Doubleind md='Waits for the given electrons to complete before executing this one. Adds the necessary edges between this and those electrons without explicitly connecting their inputs/outputs.'/>
<Doubleind md='Useful when execution of this electron relies on a side-effect from the another one.'/>

<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**electrons** (Union[`Electron`](#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanonesource)]), Iterable[`Electron`](#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanonesource)])]) – Electron(s) which will be waited for to complete execution before starting execution for this one'/>

<Doubleind md='**RETURNS**'/>
<Tripleind md='Eectron'/>
