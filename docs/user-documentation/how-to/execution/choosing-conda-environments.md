---
displayed_sidebar: tutorialSidebar
title: Working in a Conda Environment
---

import Goto from '/src/components/Goto.js';

# Working in a Conda Environment <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/choosing_conda_environments.ipynb" />

You can choose a [Conda](https://docs.conda.io/projects/conda/en/stable/) environment when you [choose an executor to be used in an electron](/docs/user-documentation/how-to/execution/choosing-executors). This can be useful if you have sandboxed environments for different task types, but need to use the tasks in a workflow, or if the workflow itself uses a different environment.

## Prerequisites

1. Create one or more Conda environments suitable for running electrons.
2. [Start](/docs/user-documentation/how-to/execution/covalent-cli) the Covalent services in the current Conda environment.
3. Create a second Conda environment in which to execute selected tasks. This environment must have the `cloudpickle` module installed.

### Procedure

1. Use the `conda_env` keyword argument to assign an executor to a Conda environment.

   In the cells below, whenever there is the input parameter `conda_env = "your_conda_env"`, replace `"your_conda_env"` with the name of the task-execution Conda environment you created, in quotations; for example, `conda_env = "tensor_flow_environment"`.

   The requested Conda environment must already exist and must have the `cloudpickle` module installed. If it does not, the process fails in the specified environment. However, if `current_env_on_conda_fail` is set to `True`, the dispatcher then runs the electron in the current Conda environment.

```python
import covalent as ct

executor1 = ct.executor.LocalExecutor(
    conda_env = "your_conda_env",
    current_env_on_conda_fail=False,
)

executor2 = ct.executor.LocalExecutor(
    conda_env = "your_conda_env",
    current_env_on_conda_fail=True,
)

@ct.electron(executor=executor1)
def identity(x):
    return x

@ct.electron(executor=executor2)
def square(x):
    return x * x
```

2. Run the electrons within a lattice as usual:

```python
@ct.lattice
def workflow(a):
    val_1 = identity(x=a)
    return square(x=val_1)
```

3. Dispatch the workflow:

```python
dispatch_id = ct.dispatch(workflow)(a=2)
print(dispatch_id)
```

    15b34963-8982-4c81-a2e5-15b9d93f0cdf

4. Query the workflow result:

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

    start_time: 2023-02-01 18:06:00.213197
    end_time: 2023-02-01 18:06:00.630832

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/execution/results
    dispatch_id: 15b34963-8982-4c81-a2e5-15b9d93f0cdf

    Node Outputs
    ------------
    identity(0): 2
    :parameter:2(1): 2
    square(2): 4

### See Also

[Getting the Result of a Task (Electron)](/docs/user-documentation/how-to/status/query-electron-execution-result)

[Getting the Result Previous Workflow Dispatches](/docs/user-documentation/how-to/status/query-lattice-execution-result).
