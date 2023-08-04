---
title: Dask Cluster
displayed_sidebar: tutorialSidebar
---

import dask from '@site/static/img/assets/dask.png';
import Admonition from '@theme/Admonition';
import ReactMarkdown from 'react-markdown';

Use the Dask Cluster Settings page to view preferences for the Dask cluster that backs the Covalent default executor. The Dask Cluster settings are not editable in the Covalent GUI, but can be configured as described in the [Dask documentation](https://docs.dask.org/en/stable/configuration.html). In most cases there is no need to adjust the Dask configuration used with Covalent

:::info Note

If No Cluster is set to True in the [SDK](/docs/user-documentation/user-interface/sdk) Settings page, then the Covalent server does not start the Dask cluster and instead uses the local executor by default.

:::

<img src={dask}/>

**Cache Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path that Dask uses for cacheing.</div>

**Log Directory**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>

The directory path of the Dask cluster logs.

</div>

**Mem Per Worker**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>

The memory allocated per worker process. For larger workloads the default memory per worker for a local Dask cluster might be too small. See the [Dask worker memory documentation](https://distributed.dask.org/en/stable/worker-memory.html) for information about setting worker memory. (This is an exception to the rule that the default Dask settings are adequate for most cases.)

</div>

**Threads Per Worker**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The number of threads allocated to each worker node in the Dask cluster.</div>

**Num Workers**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The number of workers in the Dask cluster.</div>

**Scheduler Address**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The IP address and port for the Dask scheduler.</div>

**Dashboard Link**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The directory path that Dask uses for cacheing.</div>

**Process Info**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The URL of the Dask dashboard.</div>

**PID**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The main process ID of the Dask cluster. This is the parent of the Dask worker processes.</div>

**Admin Host**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The IP address of the Dask admin UI. For the default Dask cluster, this is the local host.</div>

**Admin Port**

<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The port of the Dask admin UI.</div>
