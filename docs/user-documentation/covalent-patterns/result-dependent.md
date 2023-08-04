---
title: Result-Dependent If/Else
displayed_sidebar: tutorialSidebar
---

import Goto from '/src/components/Goto.js';

# Result-Dependent if/else <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/result_dependent_if_else.ipynb" />

To branch based on the result from an electron, put the branch (if/else) logic inside another electron.

## Context

Often the output of one task is a value used to choose the execution path. In these cases, perform the if/else logic inside an electron.

When a lattice is dispatched, the Covalent server executes the lattice in order to build the transport graph. The transport graph is then analyzed to parallelize electron execution on their assigned executors.

If the server encounters a branch decision based on the output of an electron, it cannot infer the structure on which the decision depends and is prevented from building the transport graph.

## Best Practice

Compute branching inside an electron. Electrons’ execution is deferred during the graph build phase, so their output cannot be used to build the transport graph and analyze the execution for parallelization. Instead, the electron is added to the transport graph and the branching is computed within the electron when it is executed.

For result-dependent computations that might be too complex to encapsulate in a single electron, use a [sublattice](/docs/user-documentation/covalent-patterns/dynamic-workflows).

## Example

Contrast the two examples below.

### Example 1: Incorrect 

This example demonstrates the incorrect approach: choosing the execution path in the lattice based on the output of `task_1`.

```py
import covalent as ct

# Technique 1: Incorrect

@ct.electron
def task_1(x):
    return x * 2

@ct.electron
def task_2(x):
    return x ** 3

@ct.lattice
def workflow(a):

    res_1 = task_1(a)

    if res_1 == 10:
        final_res = task_2(res_1)
    else:
        final_res = res_1

    return final_res

id = ct.dispatch(workflow)(5)
res = ct.get_result(id, wait=True)
print(res)
```

```
Lattice Result
==============
status: POSTPROCESSING_FAILED
result: None
input args: ['5']
input kwargs: {}
error: Post-processing failed: Traceback (most recent call last):
  File "/Users/dave/agnostiq/covalent/covalent/executor/utils/wrappers.py", line 36, in io_wrapper
    output = fn(*args, **kwargs)
  File "/Users/dave/agnostiq/covalent/covalent/executor/base.py", line 92, in wrapper_fn
    output = fn(*new_args, **new_kwargs)
  File "/Users/dave/agnostiq/covalent/covalent_dispatcher/_core/runner.py", line 433, in _post_process
    result = workflow_function(*args, **kwargs)
  File "/var/folders/l_/bv3pdx7142df5_sht34x64q80000gn/T/ipykernel_10514/3352216439.py", line 19, in workflow
  File "/Users/dave/agnostiq/covalent/covalent/_workflow/electron.py", line 640, in wrapper
    return electron_object(*args, **kwargs)
  File "/Users/dave/agnostiq/covalent/covalent/_workflow/electron.py", line 321, in __call__
    id, output = active_lattice.electron_outputs[0]
IndexError: list index out of range


start_time: 2023-03-13 21:14:56.656984
end_time: 2023-03-13 21:14:56.785618

results_dir: /Users/dave/.local/share/covalent/data
dispatch_id: 6bcc035a-08e4-4077-a5a6-2076d7c3841c

Node Outputs
------------
task_1(0): 10
:parameter:5(1): 5
```

### Example 2: Improved
The output of `task_1` is passed to the `task_2_new`, which executes the chosen path internally and returns the result.

```py
import covalent as ct

# Technique 2: Correct

@ct.electron
def task_1(x):
    return x * 2

# Method (2):
@ct.electron
def task_2_new(x):
    if x == 10:
        return x ** 3
    else:
        return x

@ct.lattice
def workflow_2(a):
    res_1 = task_1(a)
    return task_2_new(res_1)

id = ct.dispatch(workflow_2)(5)
res = ct.get_result(id, wait=True)
print(res)
```

```
Lattice Result
==============
status: COMPLETED
result: 1000
input args: ['5']
input kwargs: {}
error: None

start_time: 2023-03-13 21:14:58.815753
end_time: 2023-03-13 21:14:58.977721

results_dir: /Users/dave/.local/share/covalent/data
dispatch_id: c16ebb6f-1b3b-43c7-a95f-fd16334c8dc9

Node Outputs
------------
task_1(0): 10
:parameter:5(1): 5
task_2_new(2): 1000
```

## See Also

[Result-Dependent Loops](/docs/user-documentation/covalent-patterns/result-dependent-loops)

[Dynamic Workflows](/docs/user-documentation/covalent-patterns/dynamic-workflows)