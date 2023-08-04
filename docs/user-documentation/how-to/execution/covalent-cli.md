---
displayed_sidebar: tutorialSidebar
title: Managing the Covalent Server
---

import Goto from '/src/components/Goto.js';

# Managing the Covalent Server <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/covalent_cli.rst" />

Covalent provides a command line interface (CLI) to start, stop, and check the status of the server. Covalent also provides a browser-based GUI to view and manage workflow dispatches and results.

## Prerequisites

Before using any of the Covalent server tools, you must:

1. [Install](/docs/get-started/quick-start) the Covalent package.

2. Activate the Python environment where the Covalent package has been installed.

## Procedures

### Starting the Server

In order to dispatch lattice workflows for execution, you must start the Covalent server.

To start the server, use the following command:

```bash
$ covalent start
Covalent server has started at http://localhost:48008

```

:::info Note
By default, the server port is set to `48008`.
:::

### Using the GUI

Use the Covalent GUI to view and manage workflow dispatches and results.

Navigate to [http://localhost:48008](http://localhost:48008) to view the Covalent GUI.

### Checking the Server Status

Check the server status using the following command:

```bash
$ covalent status
Covalent server is running at http://localhost:48008.
```

### Stopping the Server

Use the following command to stop the server:

```bash
$ covalent stop
Covalent server has stopped.
```

### Restarting the Server

To stop and restart the server (for example, to pick up a changed parameter in the configuration):

```bash
$ covalent restart
Covalent server has stopped.
Covalent server has started at http://localhost:48008
```

### Using a Custom Port

You can force the server to use a port other than the default if necessary. To specify a custom port, use the _ –port _ flag:

```bash
$ covalent start --port 5001
Covalent server has started at http://localhost:5001
```

The default port value can also be changed in the global config file as discussed in [Configuration Customization](/docs/user-documentation/how-to/customization) in the How-To Guide.

### Resetting the Configuration

At some point you might need to reset the server configuration to the shipped defaults.

:::caution Warning

Resetting the configuration deletes all directories referenced in the config file, including log and cache directories, with the exception of the results directory.

:::

Reset the configuration using the `purge` subcommand:

```bash
$ covalent purge
Covalent server files have been purged.
```
