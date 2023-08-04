---
title: Executors
displayed_sidebar: tutorialSidebar
---

import exe from '@site/static/img/assets/executors.png';
import Admonition from '@theme/Admonition';
import ReactMarkdown from 'react-markdown';

Use the Executors Settings page to view and change executor preferences for all executors. When you use a remote executor, the executor’s settings become available in the Executors list. The built-in local and Dask cluster executors are always available.

:::info Note

Click Save to enable all changes made in the Executors list. Clicking Cancel reverts all fields to their pre-changed values.

:::

<img src={exe}/>

## Local

**Log Standard Out**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The name of the file to which the local executor logs `stdout`. The file is located in dispatch- and node-specific subdirectories of the results directory.
</div>

**Log Standard Error**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The name of the file to which the local executor logs `stderr`. The file is located in dispatch- and node-specific subdirectories of the results directory.
</div>

**Cache Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path to which all intermediate data and results are logged.
</div>

## Dask

**Log Standard Out**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The name of the file to which the local executor logs `stdout`. The file is located in dispatch- and node-specific subdirectories of the results directory.
</div>

**Log Standard Error**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The name of the file to which the local executor logs `stderr`. The file is located in dispatch- and node-specific subdirectories of the results directory.
</div>

**Cache Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path to which all intermediate data and results are logged.
</div>

## Remote

**Poll Freq**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
How often, in seconds, the Dask cluster polls this executor type for status. Used in remote executors only (In the Local and Dask local executors, this value is set but not used.)
</div>

**Remote Cache**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The remote directory path used by the remote executor to cache results. On completion of an electron, the cached node data is transmitted back to the Covalent server.
</div>

**Credentials File**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The path of the file containing the connection credentials for the remote compute node. Contents of the file vary by executor type. For example, the path of the AWS config file for AWS Cloud credentials.
</div>
