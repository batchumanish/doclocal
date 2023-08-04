import Noindentation from '/src/components/Noindentation';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

# Dispatch Infrastructure

## Dispatcher

Dispatching jobs to the server and stopping triggered dispatches

#### <span class="eighteen"><span class="highlight">covalent.</span></span><span class="bold">dispatch</span>(orig_lattice, dispatcher_addr=None, disable_run=False)

<div class="up space"><Noindentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/></div>

<div class="up space"><Noindentation md='Afterwards, send the lattice to the dispatcher server and return the assigned dispatch id.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>

<div class="up space"><Noindentation md='* orig_lattice([`Lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-source)) – the lattice/workflow to send to the dispatcher server.'/></div>
<div class="up space"><Noindentation md='* dispatcher_addr(`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>
<div class="up space"><Noindentation md='* disable_run (`bool) – Whether to disable running the worklow and rather just save it on Covalent’s server for later execution'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`callable`]'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down">Wrapper function which takes the inputs of the workflow as arguments</div>

#### <span class="eighteen"><span class="highlight">covalent.</span></span><span class="bold">dispatch_sync</span>(lattice, dispatcher_addr=None)

<div class="up space"><Noindentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/></div>

<div class="up space"><Noindentation md='Afterwards, send the lattice to the dispatcher server and return the assigned dispatch id.'/></div>

<div class="up highlight2 space eighteen"><Noindentation md='**Parameters**'/></div>

<div class="up space"><Noindentation md='* orig_lattice – the lattice/workflow to send to the dispatcher server.'/></div>
<div class="up space"><Noindentation md='* dispatcher_addr(`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`callable`]'/></div>

<div class="eighteen highlight2 space up"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down">Wrapper function which takes the inputs of the workflow as arguments</div>

#### <span class="eighteen"><span class="highlight">covalent.</span></span><span class="bold">redispatch</span>(dispatch_id, dispatcher_addr=None, replace_electrons=None, reuse_previous_results=False, is_pending=False)

<div class="up space"><Noindentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>

<div class="up space"><Noindentation md='* dispatch_id (`str`) – The dispatch id of the workflow to re-dispatch.'/></div>
<div class="up space"><Noindentation md='* dispatcher_addr(`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>
<div class="up space"><Noindentation md='* replace_electrons (`Optional`[`Dict`[`str`, `Callable`]]) – A dictionary of electron names and the new electron to replace them with.'/></div>
<div class="up space"><Noindentation md='* reuse_previous_results(`bool`) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/></div>

<div class="twentyoneup eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`callable`]'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down">Wrapper function which takes the inputs of the workflow as arguments</div>

#### <span class="eighteen"><span class="highlight">covalent.</span></span><span class="bold">stop_triggers</span>(dispatch_ids, triggers_server_addr=None)

<div class="up space"><Noindentation md='Stop observing on all triggers of all given dispatch ids registered on the Triggers server. :type dispatch_ids: `Union`[`str`, `List`[`str`]] :param dispatch_ids: Dispatch ID(s) for whose triggers are to be stopped :type triggers_server_addr: `Optional`[`str`] :param triggers_server_addr: Address of the Triggers server; configured dispatcher’s address is used as default'/></div>

<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`callable`]'/></div>

<div class="highlight2 space up eighteen" ><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down">Wrapper function which takes the inputs of the workflow as arguments</div>

### Examples

- [Dispatch a lattice](/docs/user-documentation/how-to/execution/execute-lattice)
- [Execute multiple lattices](/docs/user-documentation/how-to/execution/execute-multiple-lattices)
- [Execute a lattice multiple times](/docs/user-documentation/how-to/execution/execute-lattice-multiple-times)

## Triggers

Execute a workflow triggered by a specific type of event

#### Classes:

<table class="tables down">
  <tr>
    <td><div><ReactMarkdown children='[`BaseTrigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)([lattice_dispatch_id, …])'/></div></td>
    <td>Base class to be subclassed by any custom defined trigger.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`DirTrigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalenttriggersdirtriggerdir_path-event_names-batch_size1-lattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone-recursivefalse--source)(dir_path, event_names[, …])'/></div></td>
    <td>Directory or File based trigger which watches for events in said file/dir and performs a trigger action whenever they happen.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`TimeTrigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalenttriggerstimetriggertime_gap-lattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)(time_gap[, lattice_dispatch_id, …]) '/></div></td>
    <td>Performs a trigger action every time_gap seconds.</td>
  </tr>
</table>

#### class <span class="eighteen"><span class="highlight ">covalent.triggers.</span><span class="bold">BaseTrigger</span>(lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None) &emsp; [[source]](/docs/user-documentation/api-reference/scode-triggersbase)</span>

<div class="space"><Noindentation md='Bases: `object`'/></div>
<div class="up space"><Noindentation md='Base class to be subclassed by any custom defined trigger. Implements all the necessary methods used for interacting with dispatches, including getting their statuses and performing a redispatch of them whenever the trigger gets triggered.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>

<div class="up space"><Noindentation md='- lattice_dispatch_id (`Optional`[`str`]) – Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/></div>
<div class="up space"><Noindentation md='- dispatcher_addr (`Optional`[`str`]) – Address of dispatcher server used to retrieve info about or redispatch any dispatches'/></div>
<div class="up down space"><Noindentation md='- triggers_server_addr (`Optional`[`str`]) – Address of the Triggers server (if there is any) to register this trigger to, uses the dispatcher’s address by default'/></div>

#### <span class="eighteen"><span class="highlight">self.</span><span class="bold">lattice_dispatch_id</span></span>

<div class="up down space"><Noindentation md='Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/></div>

#### <span class="eighteen"><span class="highlight">self.</span><span class="bold">dispatcher_addr</span></span>

<div class="up down space"><Noindentation md='Address of dispatcher server used to retrieve info about or redispatch any dispatches'/></div>

#### <span class="highlight">self.</span><span class="bold">triggers_server_addr</span>

<div class="up down space"><Noindentation md='Address of the Triggers server (if there is any) to register this trigger to, uses the dispatcher’s address by default'/></div>

#### <span class="highlight">self.</span><span class="bold">new_dispatch_ids</span>

<div class="up down space"><Noindentation md='List of all the newly created dispatch ids from performing redispatch'/></div>

#### <span class="highlight">self.</span><span class="bold">observe_blocks</span>

<div class="up down space"><Noindentation md='Boolean to indicate whether the self.observe method is a blocking call'/></div>

#### <span class="highlight">self.</span><span class="bold">event_loop</span>

<div class="up down space"><Noindentation md='Event loop to be used if directly calling dispatcher’s functions instead of the REST APIs'/></div>

#### <span class="highlight">self.</span><span class="bold">use_internal_funcs</span>

<div class="up down space"><Noindentation md='Boolean indicating whether to use dispatcher’s functions directly instead of through API calls'/></div>

#### <span class="highlight">self.</span><span class="bold">stop_flag</span>

<div class="up down space"><Noindentation md='To handle stopping mechanism in a thread safe manner in case self.observe() is a blocking call (e.g. see TimeTrigger)'/></div>

#### Methods:

<table class="tables down">
  <tr>
    <td><div><ReactMarkdown children=' [`observe`](/docs/user-documentation/api-reference/dispatch-infrastructure#abstract-observe-source)()'/></div></td>
    <td>Start observing for any change which can be used to trigger this trigger.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`register`](/docs/user-documentation/api-reference/dispatch-infrastructure#register-source)()'/></div></td>
    <td>Register this trigger to the Triggers server and start observing.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`stop`](/docs/user-documentation/api-reference/dispatch-infrastructure#abstract-stop-source)() '/></div></td>
    <td> Stop observing for changes.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`to_dict`](/docs/user-documentation/api-reference/dispatch-infrastructure#to_dict-source)()'/></div></td>
    <td>Return a dictionary representation of this trigger which can later be used to regenerate it.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`trigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#trigger-source)()'/></div></td>
    <td>Trigger this trigger and perform a redispatch of the connected dispatch id’s workflow.</td>
  </tr>
</table>

#### <span class="eighteen">abstract <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)</span>

<div class="up down space"><Noindentation md='Start observing for any change which can be used to trigger this trigger. To be implemented by the subclass.'/></div>

#### <span class="bold">register</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)

<div class="up space"><Noindentation md='Register this trigger to the Triggers server and start observing.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

#### <span class="eighteen">abstract <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)</span>

<div class="up down space"><Noindentation md='Stop observing for changes. To be implemented by the subclass.'/></div>

#### <span class="bold">to_dict</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)

<div class="up space"><Noindentation md='Return a dictionary representation of this trigger which can later be used to regenerate it.'/></div>
<div class="up highlight2 space"><Noindentation md='**RETURNS**'/></div>
<div class="up space1"><Noindentation md='Dictionary representation of this trigger'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='tr_dict'/></div>

#### <span class="bold">trigger</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)

<div class="up space"><Noindentation md='Trigger this trigger and perform a redispatch of the connected dispatch id’s workflow. Should be called within self.observe() whenever a trigger action is desired.'/></div>
<div class="up highlight2 space"><Noindentation md='**Raises**'/></div>
<div class="up space1"><Noindentation md='**RuntimeError** – In case no dispatch id is connected to this trigger'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.triggers.</span><span class="bold">DirTrigger</span>(dir_path, event_names, batch_size=1, lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None, recursive=False) &emsp; [[source]](/docs/user-documentation/api-reference/scode-dirtrigger)</span>

<Noindentation md='Bases: [`covalent.triggers.base.BaseTrigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)'/>
<div class="up space"><Noindentation md='Directory or File based trigger which watches for events in said file/dir and performs a trigger action whenever they happen.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>

<div class="up space"><Noindentation md='- dir_path – Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/></div>
<div class="up space"><Noindentation md='- event_names –  List of event names on which to perform the trigger action. Possible options can be a subset of: *[“created”, “deleted”, “modified”, “moved”, “closed”]*.'/></div>
<div class="up space"><Noindentation md='- batch_size (`int`) – The number of changes to wait for before performing the trigger action, default is 1.'/></div>
<div class="up down space"><Noindentation md='- recursive (`bool`) – Whether to recursively watch the directory, default is False.'/></div>

#### <span class="highlight">self.</span><span class="bold">dir_path</span>

<div class="up down space"><Noindentation md='Path to the file/dir which is to be observed for events'/></div>

#### <span class="highlight">self.</span><span class="bold">event_names</span>

<div class="up down space"><Noindentation md='List of event names on which to perform the trigger action. Possible options can be a subset of: *[“created”, “deleted”, “modified”, “moved”, “closed”]*.'/></div>

#### <span class="highlight">self.</span><span class="bold">batch_size</span>

<div class="up down space"><Noindentation md='The number of events to wait for before performing the trigger action, default is *1*.'/></div>

#### <span class="highlight">self.</span><span class="bold">recursive</span>

<div class="up down space"><Noindentation md='Whether to recursively watch the directory, default is False.'/></div>

#### <span class="highlight">self.</span><span class="bold">n_changes</span>

<div class="up down space"><Noindentation md='Number of events since last trigger action. Whenever *self.n_changes == self.batch_size* a trigger action happens.'/></div>

#### Methods:

<table class="tables down">
  <tr>
    <td><div><ReactMarkdown children='[`attach_methods_to_handler`](/docs/user-documentation/api-reference/dispatch-infrastructure#attach_methods_to_handler-source)()'/></div></td>
    <td>Dynamically attaches and overrides the “on_*” methods to the handler depending on which ones are requested by the user.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`observe`](/docs/user-documentation/api-reference/dispatch-infrastructure#observe-source)()'/></div></td>
    <td>Start observing the file/dir for any possible events among the ones mentioned in * self.event_names *.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`stop`](/docs/user-documentation/api-reference/dispatch-infrastructure#stop-source)()'/></div></td>
    <td>Stop observing the file or directory for changes.</td>
  </tr>
</table>

#### <span class="bold">attach_methods_to_handler</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)

<div class="up space"><Noindentation md='Dynamically attaches and overrides the “on_*” methods to the handler depending on which ones are requested by the user.'/></div>
<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space"><Noindentation md='* event_names – List of event names upon which to perform a trigger action'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

#### <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)

<div class="up space"><Noindentation md='Start observing the file/dir for any possible events among the ones mentioned in *self.event_names*. Currently only supports running within the Covalent/Triggers server.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

#### <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)

<div class="up space"><Noindentation md='Stop observing the file or directory for changes.'/></div>


<div class="up eighteen highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`None`'/></div>

<!-- <div class="up highlight2 space"><Noindentation md='RETURN TYPE'/></div> -->
<!-- <div class="up space1"><Noindentation md='`None`'/></div> -->

#### <span class="eighteen">class <span class="highlight">covalent.triggers.</span><span class="bold">TimeTrigger</span>(time_gap, lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None) &emsp; [[source]](/docs/user-documentation/api-reference/scode-timetrigger)</span>

<div class="up space"><Noindentation md='Bases: [`covalent.triggers.base.BaseTrigger`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)'/></div>
<div class="up space"><Noindentation md='Performs a trigger action every time_gap seconds.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>

<div class="up down space1"><Noindentation md='time_gap(`int`) – Amount of seconds to wait before doing a trigger action'/></div>

#### <span class="highlight">self.</span><span class="bold">time_gap</span>

<div class="up down space"><Noindentation md='Amount of seconds to wait before doing a trigger action'/></div>

#### <span class="highlight">self.</span><span class="bold">stop_flag</span>

<div class="up down space"><Noindentation md='NThread safe flag used to check whether the stop condition has been met'/></div>

#### Methods:

<table class="tables down up">
  <tr>
    <td><div><ReactMarkdown children='[`observe`](/docs/user-documentation/api-reference/dispatch-infrastructure#observe-source-1)()'/></div></td>
    <td>Keep performing the trigger action every * self.time_gap * seconds until stop condition has been met.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`stop`](/docs/user-documentation/api-reference/dispatch-infrastructure#stop-source-1)()'/></div></td>
    <td>Stop the running * self.observe() * method by setting the * self.stop_flag * flag.</td>
  </tr>
</table>

#### <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-timetrigger)

<div class="up space"><Noindentation md='Keep performing the trigger action every *self.time_gap* seconds until stop condition has been met.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

#### <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-timetrigger)

<div class="up space"><Noindentation md='Stop the running *self.observe()* method by setting the *self.stop_flag* flag.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`None`'/></div>

### Examples

- [Add a timed trigger to a workflow](/docs/user-documentation/how-to/time-trigger)
- [Add a directory trigger to a workflow](/docs/user-documentation/how-to/dir-trigger)

## Cancelation

Cancel a dispatch using the `dispatch_id` or multiple tasks within a workflow using the `task_ids`

#### <span class="eighteen"><span class="highlight">covalent.\_results_manager.results_manager.</span><span class="bold">cancel</span>(dispatch_id, task_ids=None, dispatcher_addr=None)</span>

<div class="up space"><Noindentation md='Cancel a running dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space"><Noindentation md='- dispatch_id (`str`) – The dispatch id of the dispatch to be canceled.'/></div>
<div class="up space"><Noindentation md='- task_ids (`Optional`[`List`[`int`]]) – Optional, list of task ids to cancel within the workflow'/></div>
<div class="up space"><Noindentation md='- dispatcher_addr (`Optional`[`str`]) –  Dispatcher server address, if None then defaults to the address set in Covalent’s config.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1"><Noindentation md='`str`'/></div>
<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1 down"><Noindentation md='Cancelation response'/></div>

### Examples

- [Cancel a running workflow](/docs/user-documentation/how-to/execution/cancel-dispatch)

## Results

<div class="up space">Collecting and managing results</div>

#### <span class="eighteen"><span class="highlight">covalent.</span><span class="bold">get_result</span>(dispatch_id, wait=False, dispatcher_addr=None, status_only=False)</span>

<div class="up space"><Noindentation md='Get the results of a dispatch from the Covalent server.'/></div>

<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space"><Noindentation md='* dispatch_id (`str`) – The dispatch id of the result.'/></div>
<div class="up space"><Noindentation md='* wait (`bool`) – Controls how long the method waits for the server to return a result. If False, the method will not wait and will return the current status of the workflow. If True, the method will wait for the result to finish and keep retrying for sys.maxsize.'/></div>
<div class="up space"><Noindentation md='* dispatcher_addr (`Optional`[`str`]) – Dispatcher server address, if None then defaults to the address set in Covalent’s config.'/></div>
<div class="up space"><Noindentation md='* status_only (`bool`) – If true, only returns result status, not the full result object, default is False.'/></div>

<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1"><Noindentation md='[`Result`](/docs/user-documentation/api-reference/dispatch-infrastructure#class-covalent_results_managerresultresultlattice-dispatch_idsource)'/></div>

<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1 down"><Noindentation md='The Result object from the Covalent server'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_results_manager.result.</span><span class="bold">Result</span>(lattice, dispatch_id='')&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-result)</span>

<div class="up space"><Noindentation md='Result class to store and perform operations on the result obtained from a dispatch.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**lattice**'/></span></div>

<div class="space1 up fourteen"><ReactMarkdown children='“Lattice” object which was dispatched.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**results_dir**'/></span></div>

<div class="up space1"><Noindentation md='results_dir'/></div>



<div class="up space"><span class="bold"><Noindentation md='**dispatch_id**'/></span></div>

<div class="up space1"><Noindentation md='Dispatch id assigned to this dispatch.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**root_dispatch_id**'/></span></div>

<div class="up space1"><Noindentation md='Dispatch id of the root lattice in a hierarchy of sublattice workflows.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**status**'/></span></div>

<div class="up space1"><Noindentation md='Status of the result. It’ll be one of the following: - Result.NEW_OBJ: When it is a new result object. - Result.COMPLETED: When processing of all the nodes has completed successfully. - Result.RUNNING: When some node executions are in process. - Result.FAILED: When one or more node executions have failed. - Result.CANCELED: When the dispatch was canceled.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**result**'/></span></div>

<div class="up space1"><Noindentation md='Final result of the dispatch, i.e whatever the “Lattice” was returning as a function.'/></div>



<div class="up space"><span class="bold"><Noindentation md='**inputs**'/></span></div>

<div class="up space1"><Noindentation md='Inputs sent to the “Lattice” function for dispatching.'/></div>


<div class="up space"><span class="bold"><Noindentation md='**error**'/></span></div>

<div class="up space1"><Noindentation md='Error due to which the execution failed.'/></div>

<div class="up space"><span class="bold"><Noindentation md='**Functions:**'/></span></div>

<div class="up space1"><Noindentation md='save_result: Save the result object to the passed results directory or to self.results_dir by default. get_all_node_outputs: Return all the outputs of all the node executions.'/></div>

<span class="up space"><Noindentation md='**Attributes:**'/></span>

<table class="up tables down ">
  <tr>
    <td><div><ReactMarkdown children='[`dispatch_id`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-dispatch_id-str)  '></ReactMarkdown></div></td>
    <td>Dispatch id of current dispatch.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`encoded_result`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-encoded_result-covalenttransportableobject)'></ReactMarkdown></div></td>
    <td>Encoded final result of current dispatch</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`end_time`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-end_time-datetimedatetime)'></ReactMarkdown></div></td>
    <td>End time of processing the dispatch.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`error`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-error-str)'></ReactMarkdown></div></td>
    <td>Error due to which the dispatch failed.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`inputs`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-inputs-dict) '></ReactMarkdown></div></td>
    <td>Inputs sent to the “Lattice” function for dispatching.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children=' [`lattice`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-lattice-covalent_workflowlatticelattice)'></ReactMarkdown></div></td>
    <td>“Lattice” object which was dispatched.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`result`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-result-unionint-float-list-dict)'></ReactMarkdown></div></td>
    <td>Final result of current dispatch. </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`results_dir`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-results_dir-str)'></ReactMarkdown></div></td>
    <td>Results directory used to save this result object.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`root_dispatch_id`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-root_dispatch_id-str)'></ReactMarkdown></div></td>
    <td>Dispatch id of the root dispatch </td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`start_time`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-start_time-datetimedatetime)'></ReactMarkdown></div></td>
    <td>Start time of processing the dispatch.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`status`](/docs/user-documentation/api-reference/dispatch-infrastructure#property-status-covalent_shared_filesutil_classesstatus) '></ReactMarkdown></div></td>
    <td>Status of current dispatch. </td>
  </tr>
</table>  

<Noindentation md='**Methods:**'/>

<table class="tables up down">
  <tr>
    <td><div><ReactMarkdown children='[`get_all_node_outputs`](/docs/user-documentation/api-reference/dispatch-infrastructure#get_all_node_outputssource)() '></ReactMarkdown></div></td>
    <td>Return output of every node execution.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_all_node_outputs`](/docs/user-documentation/api-reference/dispatch-infrastructure#get_all_node_outputssource)()'></ReactMarkdown></div></td>
    <td>	Get all the node results.</td>
  </tr>
    <tr>
    <td><div><ReactMarkdown children='[`get_node_result`](/docs/user-documentation/api-reference/dispatch-infrastructure#get_node_resultnode_idsource)(node_id)  '></ReactMarkdown></div></td>
    <td>Return the result of a particular node.</td>
  </tr>
      <tr>
    <td><div><ReactMarkdown children='[`post_process`](/docs/user-documentation/api-reference/dispatch-infrastructure#post_processsource)()  '></ReactMarkdown></div></td>
    <td>Post-processing method</td>
  </tr>
</table>

#### <span class="eighteen">property <span class="bold">dispatch_id</span>: str</span>

<div class="up space"><Noindentation md='Dispatch id of current dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`str`'/></div>

#### <span class="eighteen">property <span class="bold">encoded_result</span>: covalent.TransportableObject</span>

<div class="up space"><Noindentation md='Encoded final result of current dispatch'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='[`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj)'/></div>

#### <span class="eighteen">property <span class="bold">end_time</span>: datetime.datetime</span>

<div class="up space"><Noindentation md='End time of processing the dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Returm Type**'/></div>
<div class="up space1 down"><Noindentation md='`datetime`'/></div>

#### <span class="eighteen">property <span class="bold">error</span>: str</span>

<div class="up space"><Noindentation md='Error due to which the dispatch failed.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`str`'/></div>

#### <span class="bold">get_all_node_outputs</span>()[[source](./scode-result)]

<div class="up space"><Noindentation md='Return output of every node execution.'/></div>
<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space1"><Noindentation md='None -'/></div>
<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1"><Noindentation md='A dictionary containing the output of every node execution.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='node_outputs'/></div>

#### <span class="bold">get_all_node_results</span>()[[source](./scode-result)]

<div class="up space"><Noindentation md='Get all the node results.'/></div>
<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space1"><Noindentation md='None-'/></div>
<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1"><Noindentation md='A list of dictionaries containing the result of every node execution.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='node_results'/></div>

#### <span class="eighteen"><span class="bold">get_node_result</span>(node_id)[[source](./scode-result)]</span>

<div class="up space"><Noindentation md='Return the result of a particular node.'/></div>
<div class="up highlight2 space"><Noindentation md='**Parameters**'/></div>
<div class="up space1"><Noindentation md='node_id (`int`) – The node id.'/></div>
<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1"><Noindentation md='**The result of the node containing below in a dictionary format:**'/></div>

<div class="up space1"><Noindentation md='* node_id: The node id.'/></div>
<div class="up space1"><Noindentation md='* node_name: The name of the node.'/></div>
<div class="up space1"><Noindentation md='* start_time: The start time of the node execution.'/></div>
<div class="up space1"><Noindentation md='* end_time: The end time of the node execution.'/></div>
<div class="up space1"><Noindentation md='* status: The status of the node execution.'/></div>
<div class="up space1"><Noindentation md='* output: The output of the node unless error occured in which case None.'/></div>
<div class="up space1"><Noindentation md='* error: The error of the node if occured else None.'/></div>
<div class="up space1"><Noindentation md='* sublattice_result: The result of the sublattice if any.'/></div>
<div class="up space1"><Noindentation md='* stdout: The stdout of the node execution.'/></div>
<div class="up space1"><Noindentation md='* stderr: The stderr of the node execution.'/></div>

<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='node_result'/></div>

#### property <span class="bold">inputs</span>: dict

<div class="up space"><Noindentation md='Inputs sent to the “Lattice” function for dispatching.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`dict`'/></div>

#### <span class="eighteen">property <span class="bold">lattice</span>: covalent.\_workflow.lattice.Lattice</span>

<div class="up space"><Noindentation md='“Lattice” object which was dispatched.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='[`Lattice`](/docs/user-documentation/api-reference/lattice#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-perma)'/></div>

#### <span class="eighteen"><span class="bold">post_process</span>()[[source](./scode-result)]</span>

<div class="up space"><Noindentation md='Post-processing method. This method was introduced to enable manual client-side postprocessing in case automatic post-processing by the server fails (e.g. insufficient dask worker memory)'/></div>
<div class="up highlight2 space"><Noindentation md='**Returns**'/></div>
<div class="up space1"><Noindentation md='Post-processed result output'/></div> 
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='Any'/></div>

#### <span class="eighteen">property <span class="bold">result</span>: Union[int, float, list, dict]</span>

<div class="up space"><Noindentation md='Final result of current dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`Union`[`int`, `float`, `list`, `dict`]'/></div>

#### <span class="eighteen">property <span class="bold">results_dir</span>: str</span>

<div class="up space"><Noindentation md='Results directory used to save this result object.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`str`'/></div>

#### <span class="eighteen">property <span class="bold">root_dispatch_id</span>: str</span>

<div class="up space"><Noindentation md='Dispatch id of the root dispatch'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`str`'/></div>

#### <span class="eighteen">property <span class="bold">start_time</span>: datetime.datetime</span>

<div class="up space"><Noindentation md='Start time of processing the dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`datetime`'/></div>

#### <span class="eighteen">property <span class="bold">status</span>: covalent.\_shared_files.util_classes.Status</span>

<div class="up space"><Noindentation md='Status of current dispatch.'/></div>
<div class="up highlight2 space"><Noindentation md='**Return Type**'/></div>
<div class="up space1 down"><Noindentation md='`Status`'/></div>

### Examples

- [Query a workflow result](/docs/user-documentation/how-to/status/query-lattice-execution-result)
- [Query individual task results](/docs/user-documentation/how-to/status/query-electron-execution-result)
