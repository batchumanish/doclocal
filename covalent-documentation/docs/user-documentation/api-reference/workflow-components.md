import Indentation from '/src/components/Indentation';
import Noindentation from '/src/components/Noindentation';

import ReactMarkdown from 'react-markdown';

# Workflow Components

## Electron

#### <span class="eighteen"><span class="highlight">@covalent.</span><span class="bold">electron</span>(\_func=None, \*, backend=None, executor=None, files=[], deps_bash=None, deps_pip=None, call_before=[], call_after=[])</span>

<div class="up space"><Noindentation md='Electron decorator to be applied to a function. Returns the wrapper function with the same functionality as *_func*.'/></div>

<div class="up eighteen highlight2 space "><ReactMarkdown children='**Parameters**'/></div>

<div class="left up fourteen space1"><ReactMarkdown children='**_func** (`Optional`[`Callable`]) – function to be decorated' /></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Keyword Arguments**'/></div>

<div class="up fourteen space"><Noindentation md='* backend – DEPRECATED: Same as *executor*.'/></div>
<div class="up space"><Noindentation md='* executor – Alternative executor object to be used in the execution of each node. If not passed, the local executor is used by default..'/></div>

<div class="up space"><Noindentation md='* deps_bash – An optional DepsBash object specifying a list of shell commands to run before *_func*.'/></div>
<div class="up space"><Noindentation md='* deps_pip – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*.'/></div>
<div class="up space"><Noindentation md='* call_before – An optional list of DepsCall objects specifying python functions to invoke before the electron'/></div>
<div class="up space"><Noindentation md='* call_after – An optional list of DepsCall objects specifying python functions to invoke after the electron'/></div>
<div class="up space"><Noindentation md='* files – An optional list of FileTransfer objects which copy files to/from remote or local filesystems.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1">Electron object containing the decorated function.</div>

<div class=" eighteen highlight2 space "><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1 down"><ReactMarkdown children='[`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_workflow.electron.</span><span class="bold">Electron</span>(function, node_id=None, metadata=None) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up space"><ReactMarkdown children='An electron (or task) object that is a modular component of a workflow and is returned by [electron](/docs/user-documentation/api-reference/workflow-components#covalentelectron_funcnone--backendnone-executornone-files-deps_bashnone-deps_pipnone-call_before-call_after)'/></div>

#### <span class="bold">function</span>

<div class="left fourteen up"><ReactMarkdown children='Function to be executed.'/></div>

#### <span class="bold">node_id</span>

<div class="up left fourteen"><ReactMarkdown children='Node id of the electron.'/></div>

#### <span class="bold" >metadata</span>

<div class="up left fourteen"><ReactMarkdown children='Metadata to be used for the function execution.'/></div>

#### <span class="bold">kwargs</span>

<div class="up left fourteen"><ReactMarkdown children='Keyword arguments if any.'/></div>

<Noindentation md='**Methods:**'/>

<table className="tables">
  <tr>
    <td><div ><ReactMarkdown children=' [`add_collection_node_to_graph`](/docs/user-documentation/api-reference/workflow-components#add_collection_node_to_graphgraph-prefix--source)(graph, prefix)  '/></div></td>
    <td>Adds the node to the lattice’s transport graph in the case where a collection of electrons is passed as an argument to another electron.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`connect_node_with_others`](/docs/user-documentation/api-reference/workflow-components#connect_node_with_othersnode_id-param_name-param_value-param_type-arg_index-transport_graph--source)(node_id, …)'/></div></td>
    <td> Adds a node along with connecting edges for all the arguments to the electron. </td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`get_metadata`](/docs/user-documentation/api-reference/workflow-components#get_metadataname--source)(name)'/></div></td>
    <td>Get value of the metadata of given name.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`get_op_function`](/docs/user-documentation/api-reference/workflow-components#get_op_functionoperand_1-operand_2-op--source)(operand_1, operand_2, op) '/></div></td>
    <td>Function to handle binary operations with electrons as operands.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`set_metadata`](/docs/user-documentation/api-reference/workflow-components#set_metadataname-value--source)(name, value) '/></div></td>
    <td>Function to add/edit metadata of given name and value to electron’s metadata.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`wait_for`](/docs/user-documentation/api-reference/workflow-components#wait_forelectrons--source)(electrons)  '/></div></td>
    <td>Waits for the given electrons to complete before executing this one. </td>
  </tr>
</table>

**Attributes:**

<table className="tables up">
  <tr>
    <td><div><ReactMarkdown children='[`as_transportable_dict`](#property-as_transportable_dict-dict) '/></div></td>
    <td>Get transportable electron object and metadata.</td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">add_collection_node_to_graph</span>(graph, prefix) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up space"><ReactMarkdown children='Adds the node to the lattice’s transport graph in the case where a collection of electrons is passed as an argument to another electron.'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Parameters**'/></div>

<div class="up fourteen space"><ReactMarkdown children='* graph (_*TransportGraph*) – Transport graph of the lattice' /></div>
<div class="up fourteen space"><ReactMarkdown children='* prefix (`str`) – Prefix of the node' /></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1"><Noindentation md='Node id of the added node'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1 down"><ReactMarkdown children='node_id'/></div>

#### <span class="eighteen">property <span class="bold">as_transportable_dict</span>: Dict</span>

<div class="up fourteen space"><ReactMarkdown children='Get transportable electron object and metadata.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="up fourteen space1 left down"><ReactMarkdown children='`Dict`'/></div>

#### <span class="eighteen"><span class="bold">connect_node_with_others</span>(node_id, param_name, param_value, param_type, arg_index, transport_graph) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up fourteen space"><ReactMarkdown children='Adds a node along with connecting edges for all the arguments to the electron.'/></div>

<div class="fourteen up highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="up space"><ReactMarkdown children='* node_id (`int`) – Node number of the electron'/></div>
<div class="up space"><ReactMarkdown children='* param_name (`str`) – Name of the parameter'/></div>
<div class="up space"><ReactMarkdown children='* param_value (`Union`[`Any`, `ForwardRef`]) – Value of the parameter'/></div>
<div class="up space"><ReactMarkdown children='* param_type (`str`) – Type of parameter, positional or keyword'/></div>
<div class="up space"><ReactMarkdown children='* transport_graph (_*TransportGraph*) – Transport graph of the lattice'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='None'/></div>

#### <span class="eighteen"><span class="bold">get_metadata</span>(name) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up fourteen space"><ReactMarkdown children='Get value of the metadata of given name.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='name (`str`) – Name of the metadata whose value is needed.' /></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Returns**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='Value of the metadata of given name.' /></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='value' /></div>

<div class="up fourteen space highlight2"><ReactMarkdown children='**Raises**'/></div>
<div class="left up fourteen space1 down"><ReactMarkdown children='KeyError – If metadata of given name is not present.' /></div>

#### <span class="eighteen"><span class="bold">get_op_function</span>(operand_1, operand_2, op) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up fourteen space"><ReactMarkdown children='Function to handle binary operations with electrons as operands. This will not execute the operation but rather create another electron whose execution will be postponed according to the default electron configuration/metadata.'/></div>

<div class="up fourteen space"><ReactMarkdown children='This also makes sure that if these operations are being performed outside of a lattice, then they are performed as is.'/></div>

<div class="up highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="left up fourteen space1"><Noindentation md='operand_1 (`Union`[`Any`, [`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)]) – First operand of the binary operation.'/></div>
<div class="left up fourteen space1"><Noindentation md='operand_2 (`Union`[`Any`, [`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)]) – Second operand of the binary operation.'/></div>
<div class="left up fourteen space1"><Noindentation md='op (`str`) – Operator to be used in the binary operation.'/></div>

<div class="up highlight2 space"><ReactMarkdown children='**Returns**'/></div>
<div class="left up fourteen space1"><Noindentation md='Electron object corresponding to the operation execution.
Behaves as a normal function call if outside a lattice.'/></div>

<div class="up highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='electron'/></div>

#### <span class="eighteen"><span class="bold">set_metadata</span>(name, value) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up fourteen space"><ReactMarkdown children='Function to add/edit metadata of given name and value to an electron’s metadata.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="left up fourteen space"><ReactMarkdown children='* name (`str`) – Name of the metadata to be added/edited.' /></div>
<div class="left up fourteen space"><ReactMarkdown children='* value (`Any`) – Name of the metadata to be added/edited.' /></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`None`'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='None'/></div>

#### <span class="eighteen"><span class="bold">wait_for</span>(electrons) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-electron)</span>

<div class="up fourteen space"><ReactMarkdown children='Waits for the given electrons to complete before executing the electron object (implicit parameter) on which the method is being called. Adds the necessary edges between this and those electrons without explicitly connecting their inputs/outputs.'/></div>

<div class="up fourteen space"><ReactMarkdown children='Useful when execution of this electron relies on a side-effect from the another one.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='electrons (Union[`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)]), Iterable[`Electron`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowelectronelectronfunction-node_idnone-metadatanone--source)])]) – Electron(s) which will be waited for to complete execution before starting execution for this one' /></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='Electron'/></div>

### Examples

- [Create a task using the @electron decorator](/docs/user-documentation/how-to/construct-electron)
- [Add an electron to a lattice](/docs/user-documentation/how-to/add-electron-to-lattice)



## Lattice

#### <span class="eighteen"><span class="highlight">@covalent.</span><span class="bold">lattice</span>(\_func=None, \*, backend=None, executor=None, workflow_executor=None, deps_bash=None, deps_pip=None, call_before=[], call_after=[], triggers=None)</span>

<div class="up fourteen space"><ReactMarkdown children='Lattice decorator to be called upon a function. Returns a new *Lattice* <*covalent._workflow.lattice.Lattice*> object.'/>
</div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='**_func** (`Optional`[`Callable`]) – function to be decorated' /></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Keyword Arguments**'/></div>

<div class="up space"><ReactMarkdown children='* backend – DEPRECATED: Same as *executor*.'/></div>
<div class="up space"><ReactMarkdown children='* executor – Alternative executor object to be used in the execution of each node. If not passed, the local executor is used by default..'/></div>
<div class="up space"><ReactMarkdown children='* workflow_executor –  Executor for postprocessing the workflow. Defaults to the built-in dask executor or the local executor depending on whether Covalent is started with the –*no-cluster*.'/></div>
<div class="up space"><ReactMarkdown children='* deps_bash – An optional DepsBash object specifying a list of shell commands to run before *_func*.'/></div>
<div class="up space"><ReactMarkdown children='* deps_pip – An optional DepsPip object specifying a list of PyPI packages to install before running *_func*.'/></div>
<div class="up space"><ReactMarkdown children='* call_before – An optional list of DepsCall objects specifying python functions to invoke before the electron'/></div>
<div class="up space"><ReactMarkdown children='* call_after – An optional list of DepsCall objects specifying python functions to invoke after the electron'/></div>
<div class="up space"><ReactMarkdown children='* triggers –  Any triggers that need to be attached to this lattice, default is None'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1"><Noindentation md='Lattice object containing the decorated function.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1 down"><ReactMarkdown children='[`Lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-source)'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_workflow.lattice.</span><span class="bold">Lattice</span>(workflow_function, transport_graph=None)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='A lattice workflow object that holds the workflow graph and is returned by [`lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-source) decorator.'/></div>

<!-- #### <div class="up"><span class="bold eighteen">workflow_function</span></div> -->

#### <span class="bold">workflow_function</span>

<div class="left up fourteen space"><ReactMarkdown children='The workflow function that is decorated by the [`lattice`](/docs/user-documentation/api-reference/workflow-components#covalentlattice_funcnone--backendnone-executornone-workflow_executornone-deps_bashnone-deps_pipnone-call_before-call_after-triggersnone) decorator.'/></div>

#### <span class="bold">transport_graph</span>

<div class="left up fourteen space"><ReactMarkdown children='The transport graph which will be the basis on how the workflow is executed.'/></div>

#### <span class="bold">metadata</span>

<div class="left up fourteen space"><ReactMarkdown children='Dictionary of metadata of the lattice.'/></div>

#### <span class="bold">post_processing</span>

<div class="left up fourteen space"><ReactMarkdown children='post_processing'/></div>

#### <span class="bold">kwargs</span>

<div class="left up fourteen space"><ReactMarkdown children='Keyword arguments passed to the workflow function.'/></div>

#### <span class="bold">electron_outputs</span>

<div class="left up fourteen space"><ReactMarkdown children='Dictionary of electron outputs received after workflow execution.'/></div>

<Noindentation md='**Methods:**'/>

<table className="tables">
  <tr>
    <td><div ><ReactMarkdown children='[`build_graph`](/docs/user-documentation/api-reference/workflow-components#build_graphargs-kwargs--source)(\*args, \*\*kwargs) '/></div></td>
    <td>Builds the transport graph for the lattice by executing the workflow function which triggers the call of all underlying electrons; these get added to the transport graph for later execution. </td>
  </tr>
      <tr>
    <td><div ><ReactMarkdown children='[`dispatch`](/docs/user-documentation/api-reference/workflow-components#dispatchargs-kwargs--source)(\*args, \*\*kwargs) '/></div></td>
    <td>DEPRECATED: Function to dispatch workflows.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children='[`dispatch_sync`](/docs/user-documentation/api-reference/workflow-components#dispatch_syncargs-kwargs--source)(\*args, \*\*kwargs) '/></div></td>
    <td>DEPRECATED: Function to dispatch workflows synchronously by waiting for the result too.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`draw`](/docs/user-documentation/api-reference/workflow-components#drawargs-kwargs--source)(\*args, \*\*kwargs)'/></div></td>
    <td>Generate lattice graph and display in UI taking into account passed in arguments.</td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children='[`get_metadata`](/docs/user-documentation/api-reference/workflow-components#get_metadataname-source)(name)  '/></div></td>
    <td>Get value of the metadata of given name. </td>
  </tr>

  <tr>
    <td><div ><ReactMarkdown children=' [`set_metadata`](/docs/user-documentation/api-reference/workflow-components#set_metadataname-value--source-1)(name, value)      '/></div></td>
    <td>Function to add/edit metadata of given name and value to lattice’s metadata.</td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">build_graph</span>(\*args, \*\*kwargs) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='Builds the transport graph for the lattice by executing the workflow function which will trigger the call of all underlying electrons and they will get added to the transport graph for later execution.'/></div>
<div class="up fourteen space"><ReactMarkdown children='Also redirects any print statements inside the lattice function to null and ignores any exceptions caused while executing the function.'/></div>
<div class="up fourteen space"><ReactMarkdown children='GRAPH WILL NOT BE BUILT AFTER AN EXCEPTION HAS OCCURRED.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>
<div class=" up fourteen space"><ReactMarkdown children='* *args – Positional arguments to be passed to the workflow function.' /></div>
<div class=" up fourteen space"><ReactMarkdown children='* **kwargs – Keyword arguments to be passed to the workflow function.' /></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`None`'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='None'/></div>

#### <span class="eighteen"><span class="bold">dispatch</span>(\*args, \*\*kwargs) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='DEPRECATED: Function to dispatch workflows.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="up space"><ReactMarkdown children='* *args – Positional arguments for the workflow'/></div>
<div class="up space"><ReactMarkdown children='* **kwargs – Keyword arguments for the workflow'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`str`'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='Dispatch id assigned to job'/></div>

#### <span class="eighteen "><span class="bold">dispatch_sync</span>(\*args, \*\*kwargs) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='DEPRECATED: Function to dispatch workflows synchronously by waiting for the result too.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="up space"><ReactMarkdown children='* *args – Positional arguments for the workflow'/></div>
<div class="up space"><ReactMarkdown children='* **kwargs – Keyword arguments for the workflow'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='[Result](/docs/user-documentation/api-reference/dispatch-infrastructure#results)'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='Result of workflow execution'/></div>

#### <span class="eighteen"><span class="bold">draw</span>(\*args, \*\*kwargs) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='Generate lattice graph and display in UI taking into account passed in arguments.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="up space"><ReactMarkdown children='* *args – Positional arguments to be passed to build the graph.'/></div>
<div class="up space"><ReactMarkdown children='* **kwargs –  Keyword arguments to be passed to build the graph.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`None`'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1 down"><Noindentation md='None'/></div>

#### <span class="eighteen"><span class="bold">get_metadata</span>(name)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='Get value of the metadata of given name.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="left up fourteen space1"><ReactMarkdown children='name (`str`) – Name of the metadata whose value is needed.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1"><Noindentation md='Value of the metadata of given name.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='value'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Raises**'/></div>
<div class="left up fourteen space1 down"><ReactMarkdown children='**KeyError** – If metadata of given name is not present.'/></div>

#### <span class="eighteen"><span class="bold">set_metadata</span>(name, value) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lattice)</span>

<div class="up fourteen space"><ReactMarkdown children='Function to add/edit metadata of given name and value to lattice’s metadata.'/></div>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Parameters**'/></div>

<div class="up space"><ReactMarkdown children='* name (`str`) – Name of the metadata to be added/edited.'/></div>
<div class="up space"><ReactMarkdown children='* value (`Any`) – Value of the metadata to be added/edited.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`None`'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="left up fourteen space1"><Noindentation md='None'/></div>

### Examples

- [Create a workflow using the @lattice decorator](/docs/user-documentation/how-to/construct-lattice)
- [Add an electron to a lattice](/docs/user-documentation/how-to/add-electron-to-lattice)



## QElectron

#### <span class="eighteen">@covalent<span class="bold">.qelectron</span>(qnode=None, *, executors=None, name=None, description=None, selector='cyclic')</span> 

<div class="up fourteen space"><ReactMarkdown children='QElectron decorator to be called upon a Pennylane QNode. Adds multi-backend execution functionality to the original QNode.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Parameters:'/></div>
<div class="up  fourteen space1"><Noindentation md= '**qnode**(`Optional`[`QNode`]) -  The Pennylane `QNode` to wrap.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Keyword Arguments**:'/></div>
<div class=" up fourteen space down"><Noindentation md='- **executors-** The quantum executor(s) to use for running the QNode. A single executor, list of executors, or a `QCluster` instance are accepted.  If a list of multiple executors is passed, a quantum cluster is initialized from this list automatically and `selector` is used as the clusters selector. Defaults to a thread-based `Simulator`.'/></div>
<div class=" doubleup fourteen space down"><Noindentation md="- **name-** An optional name for the QElectron. Defaults to the circuit function's name."/></div>

<div class=" doubleup fourteen space down"><Noindentation md="- **description-** An optional description for the QElectron. Defaults to the circuit function's docstring."/></div>

<div class=" doubleup fourteen space down"><Noindentation md='- **selector-** A callable that selects an executor, or one of the strings `"cyclic"` or `"random"`. The `"cyclic"` selector (default) cycle through `executors` and returns the next executor for each circuit. The `"random"` selector chooses an executor from `executors` at random for each circuit. Any user-defined selector must be callable with two positional arguments, a circuit and a list of executors. A selector must also return exactly one executor.'/></div>

<div class="doubleup eighteen highlight2 space"><ReactMarkdown children= '**Raises:**'/></div>
<div class=" up fourteen space1 down"><Noindentation md='**ValueError:** If any invalid executors are passed.'/></div>

<div class="doubleup eighteen highlight2 space"><Noindentation md='**Returns:**'/></div>
<div class=" up fourteen space1 down"><Noindentation md=' A sub-type of `QNode` that integrates QElectrons.'/></div>

<div class="doubleup eighteen highlight2 space"><Noindentation md='**Return Type:**'/></div>
<div class=" up fourteen space1 down"><Noindentation md='`QNodeQE`'/></div>


## Quantum Clusters

#### pydantic model <span class="eighteen"><span class="highlight">covalent.executor.</span><span class="bold">QCluster</span> [[source]](/docs/user-documentation/api-reference/scode-qcluster)</span>

<div class="up fourteen space"><ReactMarkdown children='A cluster of quantum executors.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='Parameters:'/></div>

<div class=" up fourteen space down"><Noindentation md='- **executors-** A sequence of quantum executors.'/></div>


<div class=" doubleup  fourteen space down"><Noindentation md='- **selector-** A callable that selects an executor, or one of the strings "cyclic" or "random". The "cyclic" selector (default) cycles through `executors` and returns the next executor for each circuit. The "random" selector chooses an executor from `executors` at random for each circuit. Any user-defined selector must be callable with two positional arguments, a circuit and a list of executors. A selector must also return exactly one executor.'/></div>


<details>
<summary>Show JSON Schema</summary>
<div>

```js
{
   "title": "QCluster",
   "description": "A cluster of quantum executors.\n\nArgs:\n    executors: A sequence of quantum executors.\n    selector: A callable that selects an executor, or one of the strings \"cyclic\"\n        or \"random\". The \"cyclic\" selector (default) cycles through `executors`\n        and returns the next executor for each circuit. The \"random\" selector\n        chooses an executor from `executors` at random for each circuit. Any\n        user-defined selector must be callable with two positional arguments,\n        a circuit and a list of executors. A selector must also return exactly\n        one executor.",
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
      "executors": {
         "title": "Executors",
         "type": "array",
         "items": {
            "$ref": "#/definitions/BaseQExecutor"
         }
      }
   },
   "required": [
      "executors"
   ],
   "definitions": {
      "BaseQExecutor": {
         "title": "BaseQExecutor",
         "description": "Helper class that provides a standard way to create an ABC using\ninheritance.",
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
            }
         }
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



#### <span class="eighteen">field <span class="bold">executors</span>: Sequence[BaseQExecutor] &nbsp; [Required]</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">pennylane_active_return</span>: bool = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">persist_data</span>: bool = True</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">qnode_device_import_path</span>: Tuple[str, str] = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>



#### <span class="eighteen">field <span class="bold">qnode_device_shots</span>: Optional[int] = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">qnode_device_wires</span>: int = None</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen">field <span class="bold">selector</span>: Union[str, Callable] = 'cyclic'</span>

<div class="up fourteen space"><ReactMarkdown children='Validated by'/></div>

<div class="up fourteen space"><ReactMarkdown children='- `set_name`'/></div>


#### <span class="eighteen"><span class="bold">batch_submit</span>(qscripts_list)</span> [[source]](/docs/user-documentation/api-reference/scode-qcluster)


#### <span class="bold">deserialize_selector</span>() [[source]](/docs/user-documentation/api-reference/scode-qcluster)
<div class="up fourteen space"><ReactMarkdown children='Deserializes the cluster’s selector function.'/></div>
<div class=" eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class=" fourteen space1 up"><Noindentation md='`Union`[`str`, `Callable`]'/></div>

#### <span class="bold">dict</span>(*args, **kwargs) [[source]](/docs/user-documentation/api-reference/scode-qcluster)

<div class="up fourteen space"><ReactMarkdown children='Custom dict method to create a hashable executors attribute.'/></div>
<div class=" eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class=" fourteen space1 up"><Noindentation md='[`dict`](#dict)'/></div>


#### <span class="eighteen bold">get_selector()</span> [[source]](/docs/user-documentation/api-reference/scode-qcluster)

<div class="up fourteen space"><ReactMarkdown children='Wraps `self.selector` to return defaults corresponding to string values.'/></div>

<div class="up fourteen space"><ReactMarkdown children='This method is called inside `batch_submit`.'/></div>

<div class=" eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class=" fourteen space1 up"><Noindentation md='`callable`'/></div>


#### <span class="bold">serialize_selector</span>() [[source]](/docs/user-documentation/api-reference/scode-qcluster)
<div class="up fourteen space"><ReactMarkdown children='Serializes the cluster’s selector function.'/></div>
<div class=" eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class=" fourteen space1 up"><Noindentation md='`None`'/></div>


## Lepton

### Language Decorators

<div class="up fourteen space"><ReactMarkdown children='Decorator to use languages other than Python, including scripting languages'/></div>
<div class="up fourteen space"><ReactMarkdown children='Lepton wrappers.'/></div>

<div class="up fourteen space"><ReactMarkdown children='**Functions:**'/></div>

<table className="tables">
  <tr>
    <td><ReactMarkdown children='[`bash`](/docs/user-documentation/api-reference/workflow-components#covalentleptonsbash_funcnone--display_name-executordask-files-deps_bash-deps_pipnone-call_before-call_after--source)([_func, display_name, executor, files, …])'/></td>
    <td>Bash decorator which wraps a Python function as a Bash Lepton.</td>
  </tr>
</table>

#### <span class="eighteen">covalent.leptons.bash(\_func=None, \*, display_name='', executor='dask', files=[], deps_bash=[], deps_pip=None, call_before=[], call_after=[]) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp [[source]](/docs/user-documentation/api-reference/scode-lepton)</span>

<div class="up fourteen space"><ReactMarkdown children='Bash decorator which wraps a Python function as a Bash Lepton.'/></div>

<div class=" eighteen highlight2 space up"><Noindentation md='**Return Type**'/></div>
<div class="left up fourteen space1"><ReactMarkdown children='`Callable`'/></div>

### Language Classes

<div class="up fourteen space"><ReactMarkdown children='More robust definition of languages other than Python.'/></div>

### Examples

<div class="up fourteen "><ReactMarkdown children='* [Construct an external task definition (lepton)](/docs/user-documentation/how-to/construct-lepton)'/></div>
<div class="up fourteen "><ReactMarkdown children='* [Construct a C language task definition](/docs/user-documentation/how-to/construct-c-task)'/></div>
<div class="up fourteen "><ReactMarkdown children='* [Construct a Bash task definition (lepton)](/docs/user-documentation/how-to/construct-bash-task)'/></div>
