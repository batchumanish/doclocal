---
displayed_sidebar: tutorialSidebar
---
# Dispatch Summary
import im from '@site/static/img/assets/dispatch_summary_banner.png';




The Dispatch Summary is at the top of the Dashboard screen. It lists the following summary of all dispatches in the Covalent server database. The summary includes all dispatches regardless of the current filter on the dispatch list.

<img src={im}/>

**Total jobs running**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The count of workflow dispatches that are currently running.
</div>

**Total jobs done**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The count of workflow dispatches that have completed. Does not include failed dispatches.
</div>

**Latest running task status**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
The status of the most recent workflow dispatch. Options are Pending, Running, Completed, or Failed.
</div>

**Total dispatcher duration**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Shows the sum total of clock time consumed by all listed workflow dispatches.
</div>
