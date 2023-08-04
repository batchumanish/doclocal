---
title: Consuming Multiple Return Values from an Electron
displayed_sidebar: tutorialSidebar
---

import Goto from '/src/components/Goto.js';

# Consuming Multiple Return Values from an Electron  <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/return_multiple_values.ipynb" />


In Python, it is possible to return multiple values from a function. The technique explained here prevents unnecessary usage of compute resources when you consume the results of such a function in a Covalent workflow.

## Context
When a function consumes one of multiple output values of another function – that is, uses the value as an input — Python creates a new instance of the upstream function to feed the value to the downstream function. This consumes additional memory and CPU overhead. In Covalent the copied functions inherit their dependencies, including the executor, from the upstream electron. As a result, the duplicated electron can represent a hefty chunk of memory and other resources just to retrieve the indexed result value. This extraneous activity on a potentially high-value resource is completely avoidable.

## Best Practice
Instead of taking the upstream values one at a time, input them as a tuple to the downstream function. The function reads the tuple without the creation of new upstream electrons.

## Example

Contrast the two examples below.

### Example 1: Not Recommended

This example demonstrates a questionable approach: consuming multiple return values separately.

The following simple workflow shows the creation of the extraneous electrons (see the *Node Outputs* in the Lattice Result). Nodes 3 and 5 are created only to supply the output variables from the computation in `task_1` (node 0).

```py
import covalent as ct

# Technique 1: Questionable

@ct.electron
def task_1(x, y):
    return x * 2, y * 2

@ct.electron
def task_2(x, y):
    return x ** 2, y ** 2

@ct.lattice
def workflow_1(a, b):
    res_1, res_2 = task_1(a, b) # Multiple outputs
    return task_2(res_1, res_2) # Not optimal: Consume the outputs individually

dispatch_id_1 = ct.dispatch(workflow_1)(2,3)
result_1 = ct.get_result(dispatch_id_1, wait=True)

print(result_1)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: (16, 36)
    input args: ['2', '3']
    input kwargs: {}
    error: None

    start_time: 2023-03-13 19:46:14.283738
    end_time: 2023-03-13 19:46:14.801465

    results_dir: /Users/dave/.local/share/covalent/data
    dispatch_id: 8854822f-c28a-46f6-8df7-254b2ee31239

    Node Outputs
    ------------
    task_1(0): (4, 6)
    :parameter:2(1): 2
    :parameter:3(2): 3
    :task_1()[0](3): 4
    :parameter:0(4): 0
    :task_1()[1](5): 6
    :parameter:1(6): 1
    task_2(7): (16, 36)

### 
Example 2: Improved
In contrast, the following workflow demonstrates that, by consuming the outputs as a list, the workflow avoids creating unnecessary nodes. Notice that only one instance of `task_1` is created.

```py
import covalent as ct

# Technique 2: Better

# The same task_1 as in the previous example
@ct.electron
def task_1(x, y):
    return x * 2, y * 2

# New task_2 takes an array argument
@ct.electron
def task_2_new(arr):
    return arr[0] ** 2, arr[1] ** 2


@ct.lattice
def workflow_2(a, b):
    res = task_1(a, b)     # Capture multiple outputs in an array
    return task_2_new(res) # Optimal: consume the array


dispatch_id_2 = ct.dispatch(workflow_2)(2,3)
result_2 = ct.get_result(dispatch_id_2, wait=True)

print(result_2)
```


    Lattice Result
    ==============
    status: COMPLETED
    result: (16, 36)
    input args: ['2', '3']
    input kwargs: {}
    error: None

    start_time: 2023-03-13 19:46:16.505981
    end_time: 2023-03-13 19:46:16.762871

    results_dir: /Users/dave/.local/share/covalent/data
    dispatch_id: 63710c74-9313-4bda-ad47-bd88fc8591ac

    Node Outputs
    ------------
    task_1(0): (4, 6)
    :parameter:2(1): 2
    :parameter:3(2): 3
    task_2_new(3): (16, 36)

## See Also

[Creating and Assigning an Executor](/docs/user-documentation/covalent-patterns/create-and-assign)