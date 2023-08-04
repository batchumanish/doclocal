---
title: Cancelation
displayed_sidebar: tutorialSidebar
---

import Ind from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';

Cancel a dispatch using the `dispatch_id` or multiple tasks within a workflow using the `task_ids`

#### <span class="highlight">covalent.\_results_manager.results_manager.</span><span class="bold">cancel</span>(dispatch_id, task_ids=None, dispatcher_addr=None)

<Ind md='Cancel a running dispatch.'/>

<Ind md='**PARAMETERS**'/>
<Ind md='- **dispatch_id** (`str`) – The dispatch id of the dispatch to be canceled.'/>
<Ind md='- **task_ids** (`Optional`[`List`[`int`]]) – Optional, list of task ids to cancel within the workflow'/>
<Ind md='- **dispatcher_addr** (`Optional`[`str`]) –  Dispatcher server address, if None then defaults to the address set in Covalent’s config.'/>
<Ind md='**RETURN TYPE**'/> 
<Doubleind md='`str`'/>
<Ind md='**RETURNS**'/> 
<Doubleind md='cancelation response'/>
