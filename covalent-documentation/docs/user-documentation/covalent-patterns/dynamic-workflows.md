---
displayed_sidebar: tutorialSidebar
title: "Dynamic Workflows"
---

import Goto from '/src/components/Goto.js';

# Dynamic Workflows <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/dynamic_workflow.ipynb" />



To dynamically create an electron based on the output of another electron, use a sublattice.

## Context

A sublattice is a `lattice` decorated with an `electron`. All the restrictions of a lattice apply to a sublattice. Most importantly, computations, especially result-dependent ones, should be carried out inside electrons to reduce the danger of an error when constructing the transport graph.

Since it is also an electron, a sublattice is executed as a part of the workflow. Because of this dual identity, dynamic code can be run inside a sublattice which would otherwise be impossible in the Covalent framework. For example, sublattices provide a way to handle result-dependent loops and if/else statements.

## Best Practice

A sublattice enables you to compose and encapsulate arbitrarily complex code. Use a sublattice (a `lattice` decorated with an `electron`) to encapsulate dynamic code that would otherwise be difficult or impossible to execute correctly in the Covalent paradigm. Use the same best practices in building a sublattice that you would for any other lattice: [Do all calculations in electrons](/docs/user-documentation/covalent-patterns/post_process); [don’t create unnecessary executors](/docs/user-documentation/covalent-patterns/create-and-assign); and so on.

You can nest sublattices to any level.

## Example

Contrast the two examples below.

### Example 1: Incorrect

The following example contains code in the `workflow_1` lattice that is not inside electrons: in this case, an if/else decision and a `for` loop. The workflow fails when Covalent tries to build the transport graph.

```py
import covalent as ct

# Technique 1: Incorrect

@ct.electron
def task_1(x):
    return x * 3

@ct.electron
def task_2(x):
    return x ** 2

@ct.lattice
def workflow_1(a):

    res = task_1(a)

    # An if/else decision and a result-dependent loop with no enclosing electron
    if res < 10:
        final_res = []
        for _ in range(res):
            final_res.append(task_2(res))
    else:
        final_res = res

    return final_res

# Uncomment these three lines to see the workflow fail:
# id = ct.dispatch(workflow_1)(2)
# res = ct.get_result(id, wait=True)
# print(res)
```


### Example 2: Correct
The following code corrects the previous example by enclosing the if/else decision and the `for` loop in the `sub_workflow` sublattice.

```py
# Technique 2: Correct

# Define a sublattice that implements all the dynamic code
@ct.electron
@ct.lattice
def sub_workflow(res):

    if res < 10:
        final_res = []
        for i in range(res):
            final_res.append(task_2(i))
    else:
        final_res = res

    return final_res


@ct.lattice
def workflow_2(a):
    res_1 = task_1(a)
    return sub_workflow(res_1) # Nothing to see here. Just an electron consuming the output of another electron.

id = ct.dispatch(workflow_2)(2)
res = ct.get_result(id, wait=True)
print(res)
```



    Lattice Result
    ==============
    status: COMPLETED
    result: [0, 1, 4, 9, 16, 25]
    input args: ['2']
    input kwargs: {}
    error: None

    start_time: 2023-03-16 19:16:18.195332
    end_time: 2023-03-16 19:16:18.926844

    results_dir: /Users/dave/.local/share/covalent/data
    dispatch_id: 0441d942-a8ab-4cb7-9373-1ef632ec395f

    Node Outputs
    ------------
    task_1(0): 6
    :parameter:2(1): 2
    :sublattice:sub_workflow(2): [0, 1, 4, 9, 16, 25]



# See Also

[Result-Dependent Loops](/docs/user-documentation/covalent-patterns/result-dependent)

[Result-Dependent If-Else](/docs/user-documentation/covalent-patterns/result-dependent-loops)