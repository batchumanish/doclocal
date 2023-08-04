---
title: Deleting Dispatches
displayed_sidebar: tutorialSidebar
---

import Admonition from '@theme/Admonition';

import immg from '@site/static/img/assets/ui_list_select_delete.png';
import del from '@site/static/img/assets/delete_icon.png';
import deletion from '@site/static/img/assets/deletion.gif';

Select checkboxes on the left of dispatch lines to delete those dispatches.

:::info Note
Deleting a dispatch removes the dispatch and its results only from the UI. The dispatch is still in the database. This behavior could change in a future version of Covalent.
:::

<img src={immg}/>

When one or more lines are selected, the <img src={del} style={{height:'22px'}}/> icon appears above the dispatch list. Click the icon to delete the selected records from the UI.

Alternatively, click the dropdown arrow to the left of the Dispatch ID heading. If all lines are currently visible (“Running”, “Completed”, and “Failed” filters unselected) then the dropdown menu contains the following Delete options:

**All visible**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Selects all lines on the current page. Click <img src={del} style={{height:'22px'}}/> to delete these records.
</div>

**All**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Brings up the Delete Items dialog. Click the Delete button to delete all records.
</div>

**Completed**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Brings up the Delete Items dialog. Click the Delete button to delete all successfully completed dispatches.
</div>

**Failed**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Brings up the Delete Items dialog. Click the Delete button to delete all failed dispatches.
</div>

## Filter and Delete

If one of the filters is selected, then the dropdown contains only two options:

**All visible**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Selects all lines on the page, as above.
</div>

**_Filter status_**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Brings up the Delete Items dialog. Click the Delete button to delete all dispatches with the currently selected Status. For example if the Completed filter is selected, clicking Delete deletes all Completed dispatches.</div>

## Search and Delete

If the list is currently filtered by a [Search](/docs/user-documentation/user-interface/search) term, the Delete Options dropdown menu only applies to lines that match the search criteria and the selected status. For example, if a search term limits the list to four items and only one of those items has a Failed status, then choosing Failed from the Delete Options dropdown deletes only that line.

<img src={deletion}/>
