---
displayed_sidebar: tutorialSidebar
title: Querying Workflow (Lattice) Execution Status in a Notebook
---

import Goto from '/src/components/Goto.js';

# Querying Workflow (Lattice) Execution Status in a Notebook <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/status/query_lattice_execution_status.ipynb" />

Once you have dispatched a workflow, use the Covalent `Result` object to check run status of the lattice programmatically. You can also check the status of [individual electrons](/docs/user-documentation/how-to/status/query-electron-execution-status).

## Prerequisites

Define and [run a workflow](/docs/user-documentation/how-to/execution/execute-lattice):

```python
import time

import covalent as ct

@ct.electron
def add(x, y):
    return x + y

@ct.electron
def multiply(x, y):
    time.sleep(5)
    return x * y

@ct.lattice
def workflow(x, y):
    res_1 = add(x=x, y=y)
    return multiply(x=res_1, y=y)

dispatch_id = ct.dispatch(workflow)(x=2, y=3)
```

## Procedure

1. Retrieve the `result` object using the dispatch ID with the `ct.get_result()` function.

To retrieve the result only once the computation is completed, set `wait=True`. Otherwise, set `wait=False`.

```python
result = ct.get_result(dispatch_id=dispatch_id, wait=False)
```

2. The dispatch status is maintained in the `status` attribute of the result object. While the computations are running, the status is `RUNNING`:

```python
print(result.status)
```

    RUNNING

3. The result object is updated continuously until the workflow is finished. The final status can be one of several values, including `COMPLETED`, `FAILED`, and `CANCELED`.

To check the computation status again, re-retrieve the results object:

```python
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
print(result.status)
```

    COMPLETED

## See Also

[Querying Task (Electron) Status in a Notebook](/docs/user-documentation/how-to/status/query-electron-execution-status)

[Running a Workflow](/docs/user-documentation/how-to/execution/execute-lattice)

[Querying Lattice Execution Time](/docs/user-documentation/how-to/status/query-lattice-execution-time)
