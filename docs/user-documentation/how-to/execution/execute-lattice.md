---
displayed_sidebar: tutorialSidebar
title: Executing a Workflow (Lattice)
---

import Goto from '/src/components/Goto.js';

# Executing a Workflow (Lattice) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/execute_lattice.ipynb" />

To execute a lattice, use the Covalent `dispatch()` function.

## Prerequisites

1. [Start](/docs/user-documentation/how-to/execution/covalent-cli) the Covalent services.

2. Construct a workflow using the `@lattice` decorator:

```python
import covalent as ct

@ct.electron
def identity(x):
    return x

@ct.electron
def square(x):
    return x * x

@ct.lattice
def workflow(a):
    val_1 = identity(x=a)
    return square(x=val_1)
```

## Procedure

Submit the workflow using the `dispatch()` method:

```python
dispatch_id = ct.dispatch(workflow)(a=2)
print(dispatch_id)
```

    19616db4-6b26-47ee-b340-449e51e606d7

When the server dispatches a workflow, it generates a dispatch ID. Use the ID to query the status of the task and retrieve the results as discussed in [Querying the Status of an Electron](/docs/user-documentation/how-to/status/query-electron-execution-status) and [Querying the Status of a Lattice](/docs/user-documentation/how-to/status/query-lattice-execution-status).

### See Also

[Constructing a Task (Electron)](/docs/user-documentation/how-to/construct-electron)

[Constructing a Workflow (Lattice)](/docs/user-documentation/how-to/construct-lattice)

[Adding an Electron to a Lattice](/docs/user-documentation/how-to/add-electron-to-lattice)

[Managing the Covalent Server](/docs/user-documentation/how-to/execution/covalent-cli)

[Querying the Status of an Electron](/docs/user-documentation/how-to/status/query-electron-execution-result)

[Querying the Status of a Lattice](/docs/user-documentation/how-to/status/query-lattice-execution-result)
