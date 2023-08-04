---
title: Triggers
---
import Ind from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

Execute a workflow triggered by a specific type of event

#### Classes:

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`BaseTrigger`](#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)([lattice_dispatch_id, …])'/></div></td>
    <td>Base class to be subclassed by any custom defined trigger.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`DirTrigger`](#class-covalenttriggersdirtriggerdir_path-event_names-batch_size1-lattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone-recursivefalse--source)(dir_path, event_names[, …])'/></div></td>
    <td>Directory or File based trigger which watches for events in said file/dir and performs a trigger action whenever they happen.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`TimeTrigger`](#class-covalenttriggerstimetriggertime_gap-lattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)(time_gap[, lattice_dispatch_id, …]) '/></div></td>
    <td>Performs a trigger action every time_gap seconds.</td>
  </tr>
</table>


#### class <span class="highlight">covalent.triggers.</span><span class="bold">BaseTrigger</span>(lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None) &emsp; [[source]](/docs/user-documentation/api-reference/scode-triggersbase)

<Ind md='Bases: `object`'/>
<Ind md='Base class to be subclassed by any custom defined trigger. Implements all the necessary methods used for interacting with dispatches, including getting their statuses and performing a redispatch of them whenever the trigger gets triggered.'/>

<Ind md='PARAMETERS'/>

<Ind md='- **lattice_dispatch_id** (`Optional`[`str`]) – Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/>
<Ind md='- **dispatcher_addr** (`Optional`[`str`]) – Address of dispatcher server used to retrieve info about or redispatch any dispatches'/>
<Ind md='- **triggers_server_addr** (`Optional`[`str`]) – Address of the Triggers server (if there is any) to register this trigger to, uses the dispatcher’s address by default'/>

#### <span class="highlight">self.</span><span class="bold">lattice_dispatch_id</span>
<Ind md='Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/>

#### <span class="highlight">self.</span><span class="bold">dispatcher_addr</span>
<Ind md='Address of dispatcher server used to retrieve info about or redispatch any dispatches'/>

#### <span class="highlight">self.</span><span class="bold">triggers_server_addr</span>
<Ind md='Address of the Triggers server (if there is any) to register this trigger to, uses the dispatcher’s address by default'/>

#### <span class="highlight">self.</span><span class="bold">new_dispatch_ids</span>
<Ind md='List of all the newly created dispatch ids from performing redispatch'/>

#### <span class="highlight">self.</span><span class="bold">observe_blocks</span>
<Ind md='Boolean to indicate whether the self.observe method is a blocking call'/>

#### <span class="highlight">self.</span><span class="bold">event_loop</span>
<Ind md='Event loop to be used if directly calling dispatcher’s functions instead of the REST APIs'/>

#### <span class="highlight">self.</span><span class="bold">use_internal_funcs</span>
<Ind md='Boolean indicating whether to use dispatcher’s functions directly instead of through API calls'/>

#### <span class="highlight">self.</span><span class="bold">stop_flag</span>
<Ind md='To handle stopping mechanism in a thread safe manner in case self.observe() is a blocking call (e.g. see TimeTrigger)'/>

#### Methods:

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [`observe`](#abstract-observe-source)()'/></div></td>
    <td>Start observing for any change which can be used to trigger this trigger.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`register`](#register-source)()'/></div></td>
    <td>Register this trigger to the Triggers server and start observing.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`stop`](#abstract-stop-source)() '/></div></td>
    <td> Stop observing for changes.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`to_dict`](#to_dict-source)()'/></div></td>
    <td>Return a dictionary representation of this trigger which can later be used to regenerate it.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`trigger`](#trigger-source)()'/></div></td>
    <td>Trigger this trigger and perform a redispatch of the connected dispatch id’s workflow.</td>
  </tr>
</table>

#### abstract <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)
<Ind md='Start observing for any change which can be used to trigger this trigger. To be implemented by the subclass.'/>

#### <span class="bold">register</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)
<Ind md='Register this trigger to the Triggers server and start observing.'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>

#### abstract <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)
<Ind md='Stop observing for changes. To be implemented by the subclass.'/>

#### <span class="bold">to_dict</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)
<Ind md='Return a dictionary representation of this trigger which can later be used to regenerate it.'/>
<Ind md='RETURNS'/>
<Doubleind md='Dictionary representation of this trigger'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='tr_dict'/>

#### <span class="bold">trigger</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-triggersbase.md)
<Ind md='Trigger this trigger and perform a redispatch of the connected dispatch id’s workflow. Should be called within self.observe() whenever a trigger action is desired.'/>
<Ind md='RAISES'/>
<Doubleind md='**RuntimeError** – In case no dispatch id is connected to this trigger'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>

#### class <span class="highlight">covalent.triggers.</span><span class="bold">DirTrigger</span>(dir_path, event_names, batch_size=1, lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None, recursive=False) &emsp; [[source]](/docs/user-documentation/api-reference/scode-dirtrigger)

<Ind md='Bases: [`covalent.triggers.base.BaseTrigger`](#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)'/>
<Ind md='Directory or File based trigger which watches for events in said file/dir and performs a trigger action whenever they happen.'/>

<Ind md='PARAMETERS'/>

<Ind md='- **dir_path** – Dispatch ID of the worfklow which has to be redispatched in case this trigger gets triggered'/>
<Ind md='- **event_names** –  List of event names on which to perform the trigger action. Possible options can be a subset of: *[“created”, “deleted”, “modified”, “moved”, “closed”]*.'/>
<Ind md='- **batch_size** (`int`) – The number of changes to wait for before performing the trigger action, default is 1.'/>
<Ind md='- **recursive** (`bool`) – Whether to recursively watch the directory, default is False.'/>

#### <span class="highlight">self.</span><span class="bold">dir_path</span>
<Ind md='Path to the file/dir which is to be observed for events'/>

#### <span class="highlight">self.</span><span class="bold">event_names</span>
<Ind md='List of event names on which to perform the trigger action. Possible options can be a subset of: *[“created”, “deleted”, “modified”, “moved”, “closed”]*.'/>

#### <span class="highlight">self.</span><span class="bold">batch_size</span>
<Ind md='The number of events to wait for before performing the trigger action, default is *1*.'/>

#### <span class="highlight">self.</span><span class="bold">recursive</span>
<Ind md='Whether to recursively watch the directory, default is False.'/>

#### <span class="highlight">self.</span><span class="bold">n_changes</span>
<Ind md='Number of events since last trigger action. Whenever *self.n_changes == self.batch_size* a trigger action happens.'/>

#### Methods:

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`attach_methods_to_handler`](#attach_methods_to_handler-source)()'/></div></td>
    <td>Dynamically attaches and overrides the “on_*” methods to the handler depending on which ones are requested by the user.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`observe`](#observe-source)()'/></div></td>
    <td>Start observing the file/dir for any possible events among the ones mentioned in * self.event_names *.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`stop`](#stop-source)()'/></div></td>
    <td>Stop observing the file or directory for changes.</td>
  </tr>
</table>

#### <span class="bold">attach_methods_to_handler</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)
<Ind md='Dynamically attaches and overrides the “on_*” methods to the handler depending on which ones are requested by the user.'/>
<Ind md='PARAMETERS'/>
<Doubleind md='**event_names** – List of event names upon which to perform a trigger action'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>

#### <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)
<Ind md='Start observing the file/dir for any possible events among the ones mentioned in *self.event_names*. Currently only supports running within the Covalent/Triggers server.'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>

#### <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-dirtrigger)
<Ind md='Stop observing the file or directory for changes.'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>

#### class <span class="highlight">covalent.triggers.</span><span class="bold">TimeTrigger</span>(time_gap, lattice_dispatch_id=None, dispatcher_addr=None, triggers_server_addr=None) &emsp; [[source]](/docs/user-documentation/api-reference/scode-timetrigger)

<Ind md='Bases: [`covalent.triggers.base.BaseTrigger`](#class-covalenttriggersbasetriggerlattice_dispatch_idnone-dispatcher_addrnone-triggers_server_addrnone--source)'/>
<Ind md='Performs a trigger action every time_gap seconds.'/>

<Ind md='PARAMETERS'/>

<Ind md='**time_gap**(`int`) – Amount of seconds to wait before doing a trigger action'/>

#### <span class="highlight">self.</span><span class="bold">time_gap</span>
<Ind md='Amount of seconds to wait before doing a trigger action'/>

#### <span class="highlight">self.</span><span class="bold">stop_flag</span>
<Ind md='NThread safe flag used to check whether the stop condition has been met'/>


#### Methods:

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`observe`](#observe-source-1)()'/></div></td>
    <td>Keep performing the trigger action every * self.time_gap * seconds until stop condition has been met.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`stop`](#stop-source-1)()'/></div></td>
    <td>Stop the running * self.observe() * method by setting the * self.stop_flag * flag.</td>
  </tr>
</table>

#### <span class="bold">observe</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-timetrigger)
<Ind md='Keep performing the trigger action every * self.time_gap * seconds until stop condition has been met.'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>


#### <span class="bold">stop</span>() &emsp;[[source]](/docs/user-documentation/api-reference/scode-timetrigger)
<Ind md='Stop the running * self.observe() * method by setting the * self.stop_flag * flag.'/>
<Ind md='RETURN TYPE'/>
<Doubleind md='`None`'/>
