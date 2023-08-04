---
title: Dispatcher
displayed_sidebar: tutorialSidebar
---

import dis from '@site/static/img/assets/dispatcher.png';
import Admonition from '@theme/Admonition';
import ReactMarkdown from 'react-markdown';

Use the Dispatcher Settings page to view preferences for the Covalent workflow dispatcher service.

:::info Note

The Dispatcher settings are not editable.

:::

<img src={dis}/>

**Address**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The IP address or name of the server on which the dispatcher is running, for example localhost.
</div>

**Port**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The port on which the dispatcher receives Covalent API calls. The default is port 48008 (this port also serves the Covalent GUI).
</div>

**Cache Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory used by the dispatcher to cache serialized data and results.</div>

**Results Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The name of the subdirectory, relative to a dispatch-specific directory in the execution directory, where the results of the dispatch are stored.</div>

**Log Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Directory path of the Covalent log.</div>

**DB Path**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
File path of the SQLite file containing the Covalent database.
</div>
