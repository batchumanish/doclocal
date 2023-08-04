---
displayed_sidebar: tutorialSidebar
---

# Customizing the Configuration

If `$COVALENT_CONFIG_DIR` is defined in the user environment then the Covalent global configuration file is stored at `$COVALENT_CONFIG_DIR/covalent.conf`. Otherwise, the configuration is in `~/.config/covalent/covalent.conf`.

You can view and update the global configuration from a notebook. Updates are applied to the global configuration file.

## Prerequisite

Use the shell to determine the file path to the Covalent configuration file:

```
$ echo $COVALENT_CONFIG_DIR
$ ls -l ~/.config/covalent/covalent.conf
-rw-r--r--  1 test1  staff  1405 Jan  2 14:05 /home/user/.config/covalent/covalent.conf
```

## Procedure

1. Retrieve the configuration as a Python `dict` by using the Covalent `get_config()` function:

```python
import covalent as ct
ct.get_config()
```

    {'sdk': {'config_file': '/Users/mini-me/.config/covalent/covalent.conf',
      'log_dir': '/Users/mini-me/.cache/covalent/test',
      'log_level': 'error',
      'enable_logging': 'true',
      'executor_dir': '/Users/mini-me/.config/covalent/executor_plugins',
      'no_cluster': 'false'},
     'dispatcher': {'address': 'localhost',
      'port': 48008,
      'cache_dir': '/Users/mini-me/.cache/covalent',
      'results_dir': 'results',
      'log_dir': '/Users/mini-me/.cache/covalent',
      'db_path': '/Users/mini-me/.local/share/covalent/dispatcher_db.sqlite'},
     'dask': {'cache_dir': '/Users/mini-me/.cache/covalent',
      'log_dir': '/Users/mini-me/.cache/covalent',
      'mem_per_worker': 'auto',
      'threads_per_worker': 1,
      'num_workers': 8,
      'scheduler_address': 'tcp://127.0.0.1:51918',
      'dashboard_link': 'http://127.0.0.1:8787/status',
      'process_info': "<DaskCluster name='LocalDaskCluster' parent=12559 started>",
      'pid': 12561,
      'admin_host': '127.0.0.1',
      'admin_port': 51915},
     'workflow_data': {'storage_type': 'local',
      'base_dir': '/Users/mini-me/.local/share/covalent/workflow_data'},
     'user_interface': {'address': 'localhost',
      'port': 48008,
      'dev_port': 49009,
      'log_dir': '/Users/mini-me/.cache/covalent'},
     'executors': {'local': {'log_stdout': 'stdout.log',
       'log_stderr': 'stderr.log',
       'cache_dir': '/Users/mini-me/.cache/covalent'},
      'remote_executor': {'poll_freq': 15,
       'remote_cache': '.cache/covalent',
       'credentials_file': ''},
      'dask': {'log_stdout': 'stdout.log',
       'log_stderr': 'stderr.log',
       'cache_dir': '/Users/mini-me/.cache/covalent'}}}

2. Retrieve individual settings by specifying them in the `get_config()` function:

```python
ct.get_config("dispatcher.address")
```

    'localhost'

```python
ct.get_config(["dispatcher.address", "dispatcher.port"])
```

    {'dispatcher.address': 'localhost', 'dispatcher.port': 48008}

3. Set configuration parameters using the Covalent `set_config()` function:

```python
ct.set_config("sdk.enable_logging", "false")
```

4. You can set multiple configuration parameters by passing them in a dictionary to the `set_config` function:

```python
ct.set_config({
    "sdk.enable_logging": "true",
    "sdk.log_level": "debug"
})
```

5. Of course, you can edit the config file directly. If you edit the config file, reload it into a Python environment using the Covalent `reload_config()` function:

```python
ct.reload_config()
```

```bash
$ covalent restart
Covalent server has stopped.
Covalent server has started at http://localhost:48008

$  cat ~/.config/covalent/covalent.conf
[sdk]
config_file = "/home/user/.config/covalent/covalent.conf"
log_dir = "/home/user/.cache/covalent/test"
log_level = "debug"
enable_logging = "true"
executor_dir = "/home/user/.config/covalent/executor_plugins"
no_cluster = "false"

[dispatcher]
address = "localhost"
port = 48008
cache_dir = "/home/user/.cache/covalent"
results_dir = "results"
log_dir = "/home/user/.cache/covalent"
db_path = "/home/user/.local/share/covalent/dispatcher_db.sqlite"

[dask]
cache_dir = "/home/user/.cache/covalent"
log_dir = "/home/user/.cache/covalent"
mem_per_worker = "auto"
threads_per_worker = 1
num_workers = 8
scheduler_address = "tcp://127.0.0.1:56006"
dashboard_link = "http://127.0.0.1:8787/status"
process_info = "<DaskCluster name='LocalDaskCluster' parent=4210 started>"
pid = 4214
admin_host = "127.0.0.1"
admin_port = 55996

[workflow_data]
storage_type = "local"
base_dir = "/home/user/.local/share/covalent/workflow_data"

[user_interface]
address = "localhost"
port = 48008
dev_port = 49009
log_dir = "/home/user/.cache/covalent"

[executors.local]
log_stdout = "stdout.log"
log_stderr = "stderr.log"
cache_dir = "/home/user/.cache/covalent"

[executors.remote_executor]
poll_freq = 15
remote_cache = ".cache/covalent"
credentials_file = ""

[executors.dask]
log_stdout = "stdout.log"
log_stderr = "stderr.log"
cache_dir = "/home/user/.cache/covalent"
```
