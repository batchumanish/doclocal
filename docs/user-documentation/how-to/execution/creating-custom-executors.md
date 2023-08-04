---
displayed_sidebar: tutorialSidebar
title: Creating a Custom Executor
---

import Goto from '/src/components/Goto.js';

# Creating a Custom Executor <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/creating_custom_executors.ipynb" />


Executors define how abackend resource handles computations. They specify everything about the resource: the hardware and configuration, the computation strategy, logic, and even goals.

Executors are plugins. Any executor plugins found by the dispatcher are imported as classes in the `covalent.executor` name space.

Covalent already contains a number of versatile executors. (See [Choosing an Executor For a Task](/docs/user-documentation/how-to/execution/choosing-executors) for information about choosing an existing executor.)

If an existing executor does not fit your needs, you can write your own, using your choice of environments, hardware, and cloud resources to execute Covalent electrons however you like. A template to write an executor can be found [here](https://github.com/AgnostiqHQ/covalent-executor-template).

### Prerequisites

Decide the purpose of the executor. You should have a good handle on the following questions:

- What is the purpose of the executor?
- What types of tasks is it designed to run?
- What capabilities does the executor require that aren't already in an existing executor?
- What hardware or cloud resource will it run on?
- Will it scale? How?

### Procedure

The following example creates a `TimingExecutor` that computes the CPU time used by the function to help determine its efficiency. It then writes this result to a file along with its `dispatch_id` and `node_id`.

1. Decide whether to make your executor asynchronous.

Covalent is written to be capable of running asynchronous (async) executors. In general, Covalent suggests that you write your custom executors to be async-capable as well, especially if it depends on network communication or has I/O-bound logic inside the `run()` function.

Some examples of async executors are:

- The default [DaskExecutor](https://github.com/AgnostiqHQ/covalent/blob/develop/covalent/executor/executor_plugins/dask.py)
- [SSHPlugin](https://github.com/AgnostiqHQ/covalent-ssh-plugin)
- [SlurmPlugin](https://github.com/AgnostiqHQ/covalent-slurm-plugin).

To make your executor async-capable, do the following: 1. Subclass `AsyncBaseExecutor` instead of `BaseExecutor` 2. Define your `run()` function with:

        `async def run(...)`

        instead of

        `def run(...)`

2. Import the Covalent `BaseExecutor` (or `AsyncBaseExecutor`) and Python `typing` libraries.

```python
# timing_plugin.py

from covalent.executor import BaseExecutor
from typing import Callable, Dict, List
import time
from pathlib import Path
```

3. Write the plugin class. The class must contain:

- The class name of the executor, shared in `executor_plugin_name` to make it importable by `covalent.executors`.
- A `run()` function that handles the task to be executed. The `run()` function must take these parameters:
  - A `Callable` object to contain the task;
  - A list of arguments (`args`) and a dictionary of keyword arguments (`kwargs`) to pass to the `Callable`.
  - A dictionary, `task_metadata`, to store the `dispatch_id` and `node_id` (and possibly other metadata in the future).
- `_EXECUTOR_PLUGIN_DEFAULTS`, if there are any defaults for the executor.

With all the above in mind, the example `TimingExecutor` class looks like this:

```python
executor_plugin_name = "TimingExecutor" # Required by covalent.executors

class TimingExecutor(BaseExecutor):

    def __init__(self, timing_filepath, **kwargs):
        self.timing_filepath = str(Path(timing_filepath).resolve())
        super().__init__(**kwargs)

    def run(self, function: Callable, args: List, kwargs: Dict, task_metadata: Dict):

        start = time.process_time()

        result = function(*args, **kwargs)

        time_taken = time.process_time() - start

        with open(f"{self.timing_filepath}", "a") as f:
            f.write(f"Node {task_metadata['node_id']} in dispatch {task_metadata['dispatch_id']} took {time_taken}s of CPU time.")

        close(f)
        return result

```

At this point the executor is ready for use (or at least testing).

4. Construct electrons and assign them to the new executor, then execute them in a lattice:

```python
import covalent as ct

timing_log = "./cpu_timing.log"
timing_executor = TimingExecutor(timing_log)

# Calculate e based on a series
@ct.electron
def e_ser(x):
    e_est = 1
    fact = 1
    for i in range(1, x):
        fact *= i
        e_est += 1/fact
    return e_est

@ct.lattice
def workflow(x):
    return e_ser(x)
```

5. Run the lattice:

```python
dispatch_id = ct.dispatch(workflow)(10)
result = ct.get_result(dispatch_id, wait=True)
print(result)

for line in open(timing_log, 'r'):
    print(line)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: 2.7182815255731922
    input args: ['10']
    input kwargs: {}
    error: None

    start_time: 2023-01-31 23:07:16.920729
    end_time: 2023-01-31 23:07:17.030380

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/execution/results
    dispatch_id: a2119573-5465-4390-869b-5709991da0e1

    Node Outputs
    ------------
    e_ser(0): 2.7182815255731922
    :parameter:10(1): 10




    ---------------------------------------------------------------------------

    FileNotFoundError                         Traceback (most recent call last)

    Input In [4], in <cell line: 5>()
          2 result = ct.get_result(dispatch_id, wait=True)
          3 print(result)
    ----> 5 for line in open(timing_log, 'r'):
          6     print(line)


    FileNotFoundError: [Errno 2] No such file or directory: './cpu_timing.log'

### See Also

[Adding Constraints to Tasks and Workflows](/docs/user-documentation/how-to/add-constraints-to-lattice)

[Choosing an Executor For a Task](/docs/user-documentation/how-to/execution/choosing-executors)

[Executor Template (GitHub)](https://github.com/AgnostiqHQ/covalent-executor-template)

[DaskExecutor (GitHub)](https://github.com/AgnostiqHQ/covalent/blob/develop/covalent/executor/executor_plugins/dask.py)

[SSHPlugin (GitHub)](https://github.com/AgnostiqHQ/covalent-ssh-plugin)

[SlurmPlugin (GitHub)](https://github.com/AgnostiqHQ/covalent-slurm-plugin)

