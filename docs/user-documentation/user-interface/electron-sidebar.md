---
title: Electron Sidebar
displayed_sidebar: tutorialSidebar
---

import esidebar from '@site/static/img/assets/electron_sidebar.gif';
import uiesbar from '@site/static/img/assets/ui_electron_side.png';



The Electron sidebar shows information about a selected task node. Click an electron node in the transport graph to display the sidebar.

<img src={esidebar}/>

This sidebar contains the following attributes:

**Status**

The status for the selected node/electron.

**Started - Ended**

The local time when the electron dispatch started and ended.

**Runtime**

The live runtime for the selected node.

**Input**

The input parameters passed to the selected node. Click the parameter string to [copy a serialized representation](/docs/user-documentation/user-interface/copying-python) of the input.

**Result**

The Result returned by the electron function. Click the result string to [copy a serialized representation](/docs/user-documentation/user-interface/copying-python) of the result.

**Executor**
The executor’s type and its relevant information for the selected node.

**Function String**

The electron-decorated Python function.

<img src={uiesbar}/>



