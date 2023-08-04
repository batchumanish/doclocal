---
displayed_sidebar: tutorialSidebar
title: Choosing an Executor for a Task (Electron)
---

import Goto from '/src/components/Goto.js';

# Choosing an Executor for a Task (Electron) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/choosing_executors.ipynb" />

Within a lattice, every electron can use a different executor. These exectors can have different capabilities: different hardware, different computation strategies, and so on.

Executors are plugins. Any executor plugins found by the dispatcher are imported as classes in the `covalent.executor` name-space.

### Prerequisites

1. [Start](./covalent-cli) the Covalent services.

2. Import `covalent`.

```python
import covalent as ct
```

## Procedure

Initialize an executor with its class:

```python
executor1 = ct.executor.LocalExecutor()
```

2. Assign the executor to an electron using the keyword argument `executor`:

```python
@ct.electron(executor=executor1)
def identity(x):
    return x
```

Another way to specify an executor is by the name of the module that contains the executor plugin.

In this case, the executor plugin is in `covalent/executor/executor_plugins/local.py`:

```python
@ct.electron(executor="local")
def square(x):
    return x * x
```

3. Construct rest of the workflow as usual within a `lattice`:

```python
@ct.lattice
def workflow(a):
    val_1 = identity(x=a)
    return square(x=val_1)
```

4. Submit the workflow using the `dispatch` method:

```python
dispatch_id = ct.dispatch(workflow)(a=2)
print(dispatch_id)
```

    5f0e220f-35dc-4a75-92c6-a00176f530e2

Dispatching the workflow generates a dispatch ID.

Use this ID to query the status of the task and retrieve the results:

```python
output = ct.get_result(dispatch_id=dispatch_id, wait=True)
print(output)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: 4
    input args: []
    input kwargs: {'a': '2'}
    error: None

    start_time: 2023-01-31 21:20:27.871124
    end_time: 2023-01-31 21:20:28.054424

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/execution/results
    dispatch_id: 5f0e220f-35dc-4a75-92c6-a00176f530e2

    Node Outputs
    ------------
    identity(0): 2
    :parameter:2(1): 2
    square(2): 4

## See Also

[Getting the Results of an Electron Execution](/docs/user-documentation/how-to/status/query-electron-execution-result)

[Getting Results of Previous Runs](/docs/user-documentation/how-to/status/query-lattice-execution-result)
