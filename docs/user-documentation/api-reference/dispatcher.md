---
title: Dispatcher
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';

Dispatching jobs to the server and stopping triggered dispatches

#### <span class="highlight">covalent.</span><span class="bold">dispatch</span>(orig_lattice, dispatcher_addr=None, disable_run=False)

<Indentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/>
<Indentation md='Afterwards, send the lattice to the dispatcher server and return the assigned dispatch id.'/>
<Indentation md='**PARAMETERS**'/>
<Indentation md='* **orig_lattice** ([`Lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone)) – The lattice/workflow to send to the dispatcher server.'/>
<Indentation md='* **dispatcher_addr** (`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/>
<Indentation md='* **disable_run** (`bool`) – Whether to disable running the worklow and rather just save it on Covalent’s server for later execution'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='`Callable`'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='Wrapper function which takes the inputs of the workflow as arguments'/>

#### <span class="highlight">covalent.</span><span class="bold">dispatch_sync</span>(lattice, dispatcher_addr=None)

<Indentation md='Wrapping the synchronous dispatching functionality to allow input passing and server address specification.'/>
<Indentation md='Afterwards, sends the lattice to the dispatcher server and return the result of the executed workflow.'/>
<Indentation md='**PARAMETERS**'/>
<Indentation md='* **orig_lattice** – The lattice/workflow to send to the dispatcher server.'/>
<Indentation md='* **dispatcher_addr** (`Optional`[`str`]) – The address of the dispatcher server. If None then defaults to the address set in Covalent’s config.'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='`Callable`'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='Wrapper function which takes the inputs of the workflow as arguments. '/>

#### <span class="highlight">covalent.</span><span class="bold">redispatch</span>(dispatch_id, dispatcher_addr=None, replace_electrons=None, reuse_previous_results=False, is_pending=False)

<Indentation md='Wrapping the dispatching functionality to allow input passing and server address specification.'/>
<Indentation md='**PARAMETERS**'/>
<Indentation md='* **dispatch_id** (`str`) – The dispatch id of the workflow to re-dispatch.'/>
<Indentation md='* **dispatcher_addr** (`Optional`[`str`]) – The address of the dispatcher server. If None then then defaults to the address set in Covalent’s config.'/>
<Indentation md='* **replace_electrons** (`Optional`[`Dict`[`str`, `Callable`]]) – A dictionary of electron names and the new electron to replace them with.'/>
<Indentation md='* **reuse_previous_results** (`bool`) – Boolean value whether to reuse the results from the previous dispatch.'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='`Callable`'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='Wrapper function which takes the inputs of the workflow as arguments. '/>

#### <span class="highlight">covalent.</span><span class="bold">stop_triggers</span>(dispatch_ids, triggers_server_addr=None)

<Indentation md='Stop observing on all triggers of all given dispatch ids registered on the Triggers server. :type dispatch_ids: `Union`[`str`, `List`[`str`]] :param dispatch_ids: Dispatch ID(s) for whose triggers are to be stopped :type triggers_server_addr: `Optional`[`str`] :param triggers_server_addr: Address of the Triggers server; configured dispatcher’s address is used as default'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='`None`'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='None'/>
