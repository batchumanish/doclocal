---
title: SDK
displayed_sidebar: tutorialSidebar
---

import sdk from '@site/static/img/assets/sdk.png';
import Admonition from '@theme/Admonition';
import ReactMarkdown from 'react-markdown';

Use the SDK Settings page to view and change SDK-related preferences.
<img src={sdk}/>

:::info Note

You must restart Covalent for changes on this page to take effect.

:::

**Config File**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The configuration file for all settings. Defaults to /*Users/mini-me/.config/covalent/covalent.conf*. We recommend not editing or moving this file; changes could cause unexpected behavior or errors.
</div>

**Log Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path containing Covalent’s log file.
</div>

**Log Level**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Select the minimum logging level of SDK-related events to log.
</div>

**Enable Logging**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Turn SDK logging on (True) or off (False).
</div>

**Executor Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path containing remote executor plugin modules used by the SDK.
</div>

**No Cluster**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
Turn Dask clustering on (False) or off (True). With No Cluster set to True, the default executor is local.
</div>
