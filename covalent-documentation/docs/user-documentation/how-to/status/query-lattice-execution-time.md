---
displayed_sidebar: tutorialSidebar
title: Calculating Lattice Execution Time
---

import Goto from '/src/components/Goto.js';

# Calculating Lattice Execution Time <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/status/query_lattice_execution_time.ipynb" />

Calculate execution time of a workflow (lattice) after it ends by querying the `Result` object and subtracting the start time from the end time.

## Prerequisites

Define a [workflow](/docs/user-documentation/how-to/execution/execute-lattice).

```python
import covalent as ct
import time

@ct.electron
def add(x, y):
    time.sleep(2)
    return x + y

@ct.electron
def multiply(x, y):
    return x * y

@ct.lattice
def workflow(x, y):
    res_1 = add(x=x, y=y)
    return multiply(x=res_1, y=y)
```

## Procedure

1. Use the Covalent `dispatch()` function to dispatch the workflow.

```python
dispatch_id = ct.dispatch(workflow)(x=2, y=3)
```

2. Retrieve the Covalent result object, setting the `wait` parameter to `True` so that execution finishes before the result is retrieved.

```python
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
```

2. Use the result object's `start_time` and `end_time` attributes to calculate the duration of the dispatch:

```python
print(f"Execution time: {(result.end_time - result.start_time).total_seconds():.2f} seconds")
```

    Execution time: 2.18 seconds

## See Also

[Dispatching a Workflow](/docs/user-documentation/how-to/execution/execute-lattice)

[Querying the Status of a Lattice](/docs/user-documentation/how-to/status/query-lattice-execution-status)

[Querying the Status of an Electron](/docs/user-documentation/how-to/status/query-electron-execution-status)

