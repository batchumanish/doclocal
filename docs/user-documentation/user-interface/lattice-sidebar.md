---
title: Lattice Sidebar
displayed_sidebar: tutorialSidebar
---
import sidebar from '@site/static/img/assets/Lattice_sidebar.png';
import copy from '@site/static/img/assets/copy_icon.png';


The Lattice sidebar shows details for the selected workflow dispatch. It displays the following:

<img src={sidebar}/>

**Dispatch ID**

The ID of the selected dispatch. Click <img src={copy} style={{height:'22px'}}/> to copy the ID.

**Description**

The description of the lattice, if provided as a docstring in the lattice definition.

**Started - Ended**

The local time at which the dispatch started and ended. If the dispatch has not finished, the “Ended” time is omitted.

**Runtime**

The run duration for the dispatch. Updated in real time if the dispatch is still running.

**Directory**

The folder path where the result objects are stored for the lattice. Click <img src={copy} style={{height:'22px'}}/> to copy the folder path.

**Input**

The input parameters passed to the lattice function. Click the parameter string to [copy a serialized representation](/docs/user-documentation/user-interface/copying-python) of the input.


**Result**

The Result object returned by the lattice execution. Click the result string to [copy a serialized representation](/docs/user-documentation/user-interface/copying-python) of the input.

**Executor**

The type of executor to which the lattice is assigned.

**Function String**

The `lattice`-decorated Python function.