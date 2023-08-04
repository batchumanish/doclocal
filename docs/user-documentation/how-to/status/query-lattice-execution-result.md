---
displayed_sidebar: tutorialSidebar
title: Querying the Result of a Workflow (Lattice)
---

import Goto from '/src/components/Goto.js';

# Querying the Result of a Workflow (Lattice) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/collection/query_lattice_execution_result.ipynb" />

Use the dispatch ID to locate and view the result from a previously completed workflow. Print individual attributes of the result.

## Prerequisites

Define and dispatch a lattice:

```python
import covalent as ct
import time

@ct.electron
def add(x, y):
    time.sleep(1)
    return x + y

@ct.electron
def multiply(x, y):
    return x * y

@ct.lattice
def workflow(x, y):
    res_1 = add(x=x, y=y)
    return multiply(x=res_1, y=y)

dispatch_id = ct.dispatch(workflow)(x=2, y=3)
```

1. Retrieve the dispatch result object using `ct.get_result`. Set the `wait` parameter to `True` so that the Covalent server waits until the dispatch finishes before retrieving the result.

```python
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
```

2. Print the attributes of the result object that you are interested in.

```python
print(f"Workflow execution status: {result.status}")
print(f"Result: {result.result}")
print(f"Inputs: {result.inputs}")
print(f"Execution start time: {result.start_time}")
print(f"Execution end time: {result.end_time}")
```

    Workflow execution status: COMPLETED
    Result: 15
    Inputs: {'args': [], 'kwargs': {'x': <covalent.TransportableObject object at 0x1060ae520>, 'y': <covalent.TransportableObject object at 0x1060ae850>}}
    Execution start time: 2023-02-01 19:56:16.391500
    Execution end time: 2023-02-01 19:56:17.563476

## See Also

[Querying the Results of All Tasks (Electrons) in a Workflow](/docs/user-documentation/how-to/status/query-electron-execution-result)
