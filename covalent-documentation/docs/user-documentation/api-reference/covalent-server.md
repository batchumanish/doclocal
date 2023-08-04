---
# Display h1 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---

import Indentation from '/src/components/Indentation';

# Covalent Server

## Covalent CLI Tool

This Command Line Interface (CLI) tool is used to manage Covalent server.

### covalent

Covalent CLI tool used to manage the servers.

```bash
covalent [OPTIONS] COMMAND [ARGS]...
```

Options

##### -v, --version

<Indentation md='Display version information.' fs="16px"/>

#### start

Start the Covalent server.

##### -d, --develop

<Indentation md='Start the server in developer mode.' fs="16px"/>

##### -p, --port < port >

<Indentation md='Start the server in developer mode.' fs="16px"/>
<Indentation md='**DEFAULT**'/>
<Indentation md='`48008`'/>

##### -m, --mem-per-worker <mem_per_worker>

<Indentation md='Memory limit per worker in (GB). Provide strings like 1gb/1GB or 0 for no limits' fs="16px"/>

##### -n, --workers < workers>

<Indentation md='Number of workers to start covalent with.' fs="16px"/>

##### -t, --threads-per-worker <threads_per_worker>

<Indentation md='Number of CPU threads per worker' fs="16px"/>

##### --ignore-migrations

<Indentation md='Start the server without requiring migrations'fs="16px"/>
<Indentation md='**DEFAULT**' fs="16px"/>
<Indentation md='`False`' fs="16px"/>

##### --no-cluster

<Indentation md='Start the server without Dask' fs="16px"/>
<Indentation md='**DEFAULT**' fs="16px"/>
<Indentation md='`False`' fs="16px"/>

##### --triggers-only

<Indentation md='Start only the Triggers server' fs="16px"/>
<Indentation md='**DEFAULT**' fs="16px"/>
<Indentation md='`False`' fs="16px"/>

#### stop

Stop the Covalent server.

```bash
covalent stop [OPTIONS]
```

#### restart

Restart the server.

```bash
covalent restart [OPTIONS]
```

Options

##### -p, --port < port>

<Indentation md='Restart Covalent server on a different port.' fs="16px"/>

##### -d, --develop

<Indentation md='Start the server in developer mode.' fs="16px"/>

#### status

Query the status of the Covalent server.

```bash
covalent status [OPTIONS]
```

#### purge

Purge Covalent from this system. This command is for developers.

```bash
covalent purge [OPTIONS]
```

Options

##### -H, --hard

<Indentation md='Perform a hard purge, deleting the DB as well. [default: False]' fs="16px"/>

##### -y, --yes

<Indentation md='Approve without showing the warning. [default: False]' fs="16px"/>

#### logs

Show Covalent server logs.

```bash
covalent logs [OPTIONS]
```

#### db

Group of utility commands to manage dispatcher database

```bash
covalent db [OPTIONS] COMMAND [ARGS]...
```

##### alembic

Expose alembic CLI to be used via covalent CLI

```bash
covalent db alembic [OPTIONS] [ALEMBIC_ARGS]...
```

Arguments

##### ALEMBIC_ARGS

<Indentation md='Optional argument(s)'/>

#### migrate

Run DB Migrations programatically

```bash
covalent db migrate [OPTIONS]
```

#### cluster

Inspect and manage the Dask cluster’s configuration.

```bash
covalent cluster [OPTIONS]
```

Options

##### --status

<Indentation md='Show Dask cluster status' fs="16px"/>

##### --info

<Indentation md='Retrieve Dask cluster info' fs="16px"/>

##### --address

<Indentation md='Fetch connection information of the cluster scheduler/workers' fs="16px"/>

##### --size

<Indentation md='Return number of active workers in the cluster'fs="16px"/>

##### --restart

<Indentation md='Restart the cluster' fs="16px"/>

##### --scale < scale >

<Indentation md='Scale cluster by adding/removing workers to match *nworkers*' fs="16px"/>
<Indentation md='*DEFAULT*' fs="16px"/>
<Indentation md='`2`' fs="16px"/>

##### --logs

<Indentation md='Show Dask cluster logs' fs="16px"/>

---

## Setting Defaults

Default configuration for covalent can be set by defining the environment variable `COVALENT_CONFIG_DIR`. By default, config files are stored in `~/.config/covalent/covalent.conf`.

Example settings in config file

:::info Note
This is a YAML file, so you can use any YAML syntax.
:::

:::tip Tip
Each executor comes with its own configuration parameters that is stored in this same config file config file. For example, for SSH plugin, we have the following settings:

```python
[executors.ssh]
username = "user"
hostname = "host.hostname.org"
remote_dir = "/home/user/.cache/covalent"
ssh_key_file = "/home/user/.ssh/id_rsa"
```

:::

### Typical Configuration settings

Generated each time covalent is installed and can be found at `~/.config/covalent/covalent.conf`

```python
[sdk]
log_dir = "/Users/he-who-must-not-be-named/.cache/covalent"
log_level = "warning"
enable_logging = "false"
executor_dir = "/Users/voldemort/.config/covalent/executor_plugins"

[dispatcher]
address = "localhost"
port = 48008
cache_dir = "/Users/voldemort/.cache/covalent"
results_dir = "results"
log_dir = "/Users/voldemort/.cache/covalent"

[dask]
cache_dir = "/Users/voldemort/.cache/covalent"
log_dir = "/Users/voldemort/.cache/covalent"
mem_per_worker = "auto"
threads_per_worker = 1
num_workers = 8
scheduler_address = "tcp://127.0.0.1:60690"
dashboard_link = "http://127.0.0.1:8787/status"
process_info = "<DaskCluster name='LocalDaskCluster' parent=80903 started>"
pid = 80924
admin_host = "127.0.0.1"
admin_port = 60682

[workflow_data]
db_path = "/Users/voldemort/.local/share/covalent/workflow_db.sqlite"
storage_type = "local"
base_dir = "/Users/voldemort/.local/share/covalent/workflow_data"

[user_interface]
address = "localhost"
port = 48008
log_dir = "/Users/voldemort/.cache/covalent"
dispatch_db = "/Users/voldemort/.cache/covalent/dispatch_db.sqlite"

[executors.local]
log_stdout = "stdout.log"
log_stderr = "stderr.log"
cache_dir = "/Users/voldemort/.cache/covalent"

[executors.dask]
log_stdout = "stdout.log"
log_stderr = "stderr.log"
cache_dir = "/Users/voldemort/.cache/covalent"
```
