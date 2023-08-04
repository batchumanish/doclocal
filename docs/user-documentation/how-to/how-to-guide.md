# How-to Guide

This guide is a collection of step-by-step instructions for tasks that are commonly (and in some cases not so commonly) encountered when using Covalent.

:::info Note

Most of the how-to instructions below are Jupyter notebook files (formerly IPython files; they have an ipynb file extension). You can open a file and run the example on your local machine. To run an example:

1. [Install Jupyter.](https://jupyter.org/install)
2. [Install Covalent.](/docs/get-started/quick-start)
3. [Start the Covalent server.](/docs/user-documentation/how-to/execution/covalent-cli)
4. Download the IPython (.ipynb) file by selecting the "go to the source" button present next to the heading.
5. [Open the IPython (.ipynb) file in a Jupyter notebook.](https://docs.jupyter.org/en/latest/running.html#how-do-i-open-a-specific-notebook)

:::

The guide covers specific tasks at every phase of the workflow development process:

1. [Constructing workflows](#constructing-workflows)
2. [Executing workflows](#executing-a-workflow), including using and writing executors
3. [Querying Status](#querying-and-viewing) and [Collecting and Viewing Results](#querying-and-viewing)

At the end are how-tos on miscellaneous topics including [configuration](#configuration).

## Constructing Workflows

[<u>Constructing a Task (Electron)</u>](/docs/user-documentation/how-to/construct-electron)

[<u>Constructing a Workflow (Lattice)</u>](/docs/user-documentation/how-to/construct-lattice)

[<u>Adding an Electron to a Lattice</u>](/docs/user-documentation/how-to/add-electron-to-lattice)

[<u>Testing an Electron</u>](/docs/user-documentation/how-to/test-electron)

[<u>Using an Iterable</u>](/docs/user-documentation/how-to/use-iterable)

[<u>Looping</u>](/docs/user-documentation/how-to/looping)

[<u>Visualizing a Lattice</u>](/docs/user-documentation/how-to/visualize-lattice)

[<u>Adding Constraints to Tasks and Workflows</u>](/docs/user-documentation/how-to/add-constraints-to-lattice)

[<u>Waiting For Execution of Another Electron</u>](/docs/user-documentation/how-to/wait-for-another-electron)

[<u>Transferring Local Files During Workflows</u>](/docs/user-documentation/how-to/file-transfers-for-workflows-local)

[<u>Transferring Files To and From a Remote Host</u>](/docs/user-documentation/how-to/file-transfers-to-from-remote)

[<u>Transferring Files To and From an S3 Bucket</u>](/docs/user-documentation/how-to/file-transfers-to-from-s3)

[<u>Transferring Files To and From Azure Blob Storage</u>](/docs/user-documentation/how-to/file-transfers-to-from-azure_blob)

[<u>Constructing a Lepton</u>](/docs/user-documentation/how-to/construct-lepton)

[<u>Using C Code (Leptons)</u>](/docs/user-documentation/how-to/construct-c-task)

[<u>Adding Pip Dependencies to an Electron</u>](/docs/user-documentation/how-to/add-pip-dependencies-to-electron)

[<u>Adding Bash Dependencies to an Electron</u>](/docs/user-documentation/how-to/add-bash-dependencies-to-electron)

[<u>Adding Callable Function Dependencies to an Electron</u>](/docs/user-documentation/how-to/add-callable-dependencies-to-electron)

[<u>Constructing a Task from Bash Scripts</u>](/docs/user-documentation/how-to/construct-bash-task)

[<u>How to add a directory trigger to a lattice</u>](/docs/user-documentation/how-to/dir-trigger)

[<u>How to add a time trigger to a lattice</u>](/docs/user-documentation/how-to/time-trigger)

[<u>How to define custom selectors for a Quantum Cluster</u>](/docs/user-documentation/how-to/how-to-define)

## Executing a Workflow

[<u>Managing the Covalent Server</u>](/docs/user-documentation/how-to/execution/covalent-cli)

[<u>Running a Workflow (Lattice)</u>](/docs/user-documentation/how-to/execution/execute-lattice)

[<u>Re-executing a Workflow</u>](/docs/user-documentation/how-to/execution/redispatch)

[<u>Executing an Individual Electron</u>](/docs/user-documentation/how-to/execution/execute-individual-electron)

[<u>Executing a Lattice Multiple Times</u>](/docs/user-documentation/how-to/execution/execute-lattice-multiple-times)

[<u>Executing Multiple Lattices</u>](/docs/user-documentation/how-to/execution/execute-multiple-lattices)

[<u>Executing a Lattice as an Electron (Sublattice)</u>](/docs/user-documentation/how-to/execution/execute-sublattice)

[<u>Choosing an Executor For a Task</u>](/docs/user-documentation/how-to/execution/choosing-executors)

[<u>Executing an Electron in a Conda Environment</u>](/docs/user-documentation/how-to/execution/choosing-conda-environments)

## Querying and Viewing

[<u>Querying the Status of a Lattice in a Notebook</u>](/docs/user-documentation/how-to/status/query-lattice-execution-status)

[<u>Querying the Status of an Electron</u>](/docs/user-documentation/how-to/status/query-electron-execution-status)

[<u>Querying Lattice Execution Time</u>](/docs/user-documentation/how-to/status/query-lattice-execution-time)

[<u>Querying Multiple Workflows (Lattices)</u>](/docs/user-documentation/how-to/status/query-multiple-lattice-execution-results)

[<u>Getting Results of Previous Workflow Dispatches</u>](/docs/user-documentation/how-to/status/query-lattice-execution-result)

[<u>Getting the Result of a Task (Electron)</u>](/docs/user-documentation/how-to/status/query-electron-execution-result)

## Configuration

[<u>Customizing the Configuration</u>](/docs/user-documentation/how-to/customization)
