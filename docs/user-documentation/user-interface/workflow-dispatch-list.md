---
displayed_sidebar: tutorialSidebar
---
# Workflow Dispatch List
import im from '@site/static/img/assets/dispatches_with_appropriate_metadata.png';



A filterable, sortable list of all dispatches in the Covalent server database. A typical dispatch list is shown below.
<img src={im}/>

Each line represents one dispatch, and contains the following information:

**Dispatch ID**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The unique dispatch ID for the workflow invocation. This ID is used to identify the dispatch in the SDK.
</div>

**Lattice**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The name of the dispatched lattice function.
</div>

**Runtime**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The approximate run time of the dispatch.
</div>

**Started**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The local time when a dispatch started.
</div>

**Ended**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The local time when a dispatch ended (completed or failed). A dash is displayed while the dispatch is Running.
</div>

**Status**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The status of a dispatch. The possible statuses are: Pending
</div>

Not yet running due to scheduling or resource availability.

**Running**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Started, with one or more tasks handed off to executors.
</div>

**Failed**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Finished with one or more tasks throwing an error.</div>


**Canceled**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The dispatch was shut down before completion.
</div>



**Completed**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Finished with all tasks successful, and postprocessing is complete.
</div>

**Pending Postprocessing**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The dispatch has finished running, but postprocessing tasks defined for the dispatch have not started yet.
</div>

**Postprocessing**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The postprocessing tasks defined for the dispatch are running.
</div>