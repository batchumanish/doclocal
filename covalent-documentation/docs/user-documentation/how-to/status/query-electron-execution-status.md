---
displayed_sidebar: tutorialSidebar
title: Querying Task (Electron) Status in a Notebook
---

import Goto from '/src/components/Goto.js';

# Querying Task (Electron) Status in a Notebook <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/status/query_electron_execution_status.ipynb" />

Check the status of individual tasks in a workflow using the Covalent `Result` object.

## Prerequisites

Define and [run a workflow](/docs/user-documentation/how-to/execution/execute-lattice):

```python
import covalent as ct

import time

@ct.electron
def add(x, y):
    time.sleep(5)
    return x + y

@ct.electron
def multiply(x, y):
    return x * y

@ct.lattice
def workflow(x, y):
    res_1 = add(x=x, y=y)
    return multiply(x=res_1, y=y)

dispatch_id = ct.dispatch(workflow)(x=1, y=2)
time.sleep(10)
```

1. View the transport graph in the Covalent GUI as described in the [User Interface Reference](/docs/user-documentation/user-interface/graph-view) to determine the node IDs for the electrons.
2. Query the individual electrons' execution status using the node IDs from the transport graph.

```python
dispatch_id = ct.dispatch(workflow)(x=1, y=2)
time.sleep(2)
result = ct.get_result(dispatch_id=dispatch_id, wait=False)
result.get_node_result(node_id=0)['status']
```

    Status(STATUS='NEW_OBJECT')

Note the query for the execution status via the `status` field. Possible values are `PENDING`, `FAILED`, `RUNNING`, or `COMPLETED`. A node can also have status `NEW_OBJECT` if the task has not yet been dispatched.

## See Also

[Adding Electrons to Lattices](/docs/user-documentation/how-to/add-electron-to-lattice)

[Dispatching a Workflow](/docs/user-documentation/how-to/execution/execute-lattice)

[Querying the Status of a Lattice](/docs/user-documentation/how-to/status/query-lattice-execution-status)
