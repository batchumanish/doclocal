---
title: Settings
displayed_sidebar: tutorialSidebar
---

import settings from '@site/static/img/assets/settings.gif';
import Admonition from '@theme/Admonition';
import ReactMarkdown from 'react-markdown';

<img src={settings}/>

Use the Settings page to view and edit configuration settings for the Covalent server.

:::info Note

Several of the Settings pages are not editable, as noted below. They are provided in the Covalent GUI for information only.
:::

The following Settings pages are available:

**[SDK](/docs/user-documentation/user-interface/sdk)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The configuration file and logging parameters for the SDK.
</div>

**[Executors](/docs/user-documentation/user-interface/executor)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Logging and file paths for Covalent executors. As remote executors are instantiated and invoked by the SDK, they are added to the list on this page.
</div>

**[Dispatcher](/docs/user-documentation/user-interface/dispatcher)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Address and port of the UI, and file paths for results, logs, and the Covalent database. (Not editable.)</div>

**[Dask Cluster](/docs/user-documentation/user-interface/dark-cluster)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Configuration of the Dask cluster that is the default local executor. (Not editable.)</div>

**[Workflow Data](/docs/user-documentation/user-interface/workflow-data)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Location of workflow-related settings. (Not editable.)
</div>

**[User Interface](/docs/user-documentation/user-interface/ui)**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Address, port, and log file path of the Covalent GUI. (Not editable.)</div>
