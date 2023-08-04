---
displayed_sidebar: tutorialSidebar
title: Querying Multiple Workflows (Lattices)
---

import Goto from '/src/components/Goto.js';

# Querying Multiple Workflows (Lattices) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/collection/query_multiple_lattice_execution_results.ipynb" />

Query the results of multiple workflows (lattices) run in the same notebook.

## Prerequisites

Construct mutliple workflows (or a single workflow to be dispatched multiple times).

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

1. Dispatch the workflows. Record the dispatch IDs to enable retrieval of the results.

```python
params = [1, 2, 3, 4]
dispatch_ids = [ct.dispatch(workflow)(a=param) for param in params]

for dispatch_id in dispatch_ids:
    print(dispatch_id)
```

    8a42ce81-62c6-44a5-bbdf-ecbfd99cf87e
    46877bbb-28c4-4227-9ca0-f1c27bc2293c
    15307ee7-ecc5-484d-9cfb-4a39cc9b1d55
    7d64ef14-28ac-49b5-8867-1bfea93d73d5

2. Query and retrieve the workflow results corresponding to the dispatch IDs:

```python
results = []

for dispatch_id in dispatch_ids:
    result = ct.get_result(dispatch_id=dispatch_id, wait=True)
    results.append(result)
```

3. Use the `print()` method to see the results of individual workflows:

```python
for i in (params):
    print(results[i-1])
```

    Lattice Result
    ==============
    status: COMPLETED
    result: 1
    input args: []
    input kwargs: {'a': '1'}
    error: None

    start_time: 2023-02-01 19:40:08.641600
    end_time: 2023-02-01 19:40:08.976987

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/collection/results
    dispatch_id: 8a42ce81-62c6-44a5-bbdf-ecbfd99cf87e

    Node Outputs
    ------------
    identity(0): 1
    :parameter:1(1): 1
    square(2): 1


    Lattice Result
    ==============
    status: COMPLETED
    result: 4
    input args: []
    input kwargs: {'a': '2'}
    error: None

    start_time: 2023-02-01 19:40:08.667773
    end_time: 2023-02-01 19:40:09.001117

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/collection/results
    dispatch_id: 46877bbb-28c4-4227-9ca0-f1c27bc2293c

    Node Outputs
    ------------
    identity(0): 2
    :parameter:2(1): 2
    square(2): 4


    Lattice Result
    ==============
    status: COMPLETED
    result: 9
    input args: []
    input kwargs: {'a': '3'}
    error: None

    start_time: 2023-02-01 19:40:08.697165
    end_time: 2023-02-01 19:40:08.994736

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/collection/results
    dispatch_id: 15307ee7-ecc5-484d-9cfb-4a39cc9b1d55

    Node Outputs
    ------------
    identity(0): 3
    :parameter:3(1): 3
    square(2): 9


    Lattice Result
    ==============
    status: COMPLETED
    result: 16
    input args: []
    input kwargs: {'a': '4'}
    error: None

    start_time: 2023-02-01 19:40:08.724797
    end_time: 2023-02-01 19:40:09.026908

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/collection/results
    dispatch_id: 7d64ef14-28ac-49b5-8867-1bfea93d73d5

    Node Outputs
    ------------
    identity(0): 4
    :parameter:4(1): 4
    square(2): 16

## See Also

[Executing a Workflow (Lattice) Multiple Times](/docs/user-documentation/how-to/execution/execute-lattice-multiple-times.md)

[Executing Multiple Workflows (Lattices)](/docs/user-documentation/how-to/execution/execute-multiple-lattices)

[Querying Workflow (Lattice) Execution Status in a Notebook](/docs/user-documentation/how-to/status/query-lattice-execution-status)
