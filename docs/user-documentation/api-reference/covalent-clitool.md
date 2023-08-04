---
title: Covalent CLI Tool
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';

This Command Line Interface (CLI) tool is used to manage Covalent server.

## covalent

Covalent CLI tool used to manage the servers.

```bash
covalent [OPTIONS] COMMAND [ARGS]...
```

### Options

#### -v, --version {#perma}

<Indentation md='Display version information.'/>

### start

Start the Covalent server.

#### -d, --develop {#perma}

<Indentation md='Start the server in developer mode.'/>

#### -p, --port < port > {#perma}

<Indentation md='Start the server in developer mode.'/>
<Indentation md='**DEFAULT**'/>
<Indentation md='`48008`'/>

#### -m, --mem-per-worker <mem_per_worker> {#perma}

<Indentation md='Memory limit per worker in (GB). Provide strings like 1gb/1GB or 0 for no limits'/>

#### -n, --workers < workers> {#perma}

<Indentation md='Number of workers to start covalent with.'/>

#### -t, --threads-per-worker <threads_per_worker> {#perma}

<Indentation md='Number of CPU threads per worker'/>

#### --ignore-migrations {#perma}

<Indentation md='Start the server without requiring migrations'/>
<Indentation md='**DEFAULT**'/>
<Indentation md='`False`'/>

#### --no-cluster {#perma}

<Indentation md='Start the server without Dask'/>
<Indentation md='**DEFAULT**'/>
<Indentation md='`False`'/>

#### --triggers-only {#perma}

<Indentation md='Start only the Triggers server'/>
<Indentation md='**DEFAULT**'/>
<Indentation md='`False`'/>

### stop

Stop the Covalent server.

```bash
covalent stop [OPTIONS]
```

### restart

Restart the server.

```bash
covalent restart [OPTIONS]
```

### Options

#### -p, --port < port> {#perma}

<Indentation md='Restart Covalent server on a different port.'/>

#### -d, --develop {#perma}

<Indentation md='Start the server in developer mode.'/>

### status

Query the status of the Covalent server.

```bash
covalent status [OPTIONS]
```

### purge

Purge Covalent from this system. This command is for developers.

```bash
covalent purge [OPTIONS]
```

### Options

#### -H, --hard {#perma}

<Indentation md='Perform a hard purge, deleting the DB as well. [default: False]'/>

#### -y, --yes {#perma}

<Indentation md='Approve without showing the warning. [default: False]'/>

### logs

Show Covalent server logs.

```bash
covalent logs [OPTIONS]
```

### db

Group of utility commands to manage dispatcher database

```bash
covalent db [OPTIONS] COMMAND [ARGS]...
```

### alembic

Expose alembic CLI to be used via covalent CLI

```bash
covalent db alembic [OPTIONS] [ALEMBIC_ARGS]...
```

### Arguments

#### ALEMBIC_ARGS {#perma}

<Indentation md='Optional argument(s)'/>

### migrate

Run DB Migrations programatically

```bash
covalent db migrate [OPTIONS]
```

### cluster

Inspect and manage the Dask cluster’s configuration.

```bash
covalent cluster [OPTIONS]
```

### Options

#### --status {#perma}

<Indentation md='Show Dask cluster status'/>

#### --info {#perma}

<Indentation md='Retrieve Dask cluster info'/>

#### --address {#perma}

<Indentation md='Fetch connection information of the cluster scheduler/workers'/>

#### --size {#perma}

<Indentation md='Return number of active workers in the cluster'/>

#### --restart {#perma}

<Indentation md='Restart the cluster'/>

#### --scale < scale > {#perma}

<Indentation md='Scale cluster by adding/removing workers to match *nworkers*'/>
<Indentation md='*DEFAULT*'/>
<Indentation md='`2`'/>

#### --logs {#perma}

<Indentation md='Show Dask cluster logs'/>
