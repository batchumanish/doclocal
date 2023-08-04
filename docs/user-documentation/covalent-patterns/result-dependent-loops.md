---
title: Result-Dependent Loops
displayed_sidebar: tutorialSidebar
---

import Goto from '/src/components/Goto.js';

# Result-Dependent Loops <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/result_dependent_loop.ipynb" />

To iterate over the result from an electron, put the iteration (loop) logic inside another electron.

## Context

Often the output of one task is a collection that you want to iterate over using another task. In Covalent terms, this means you want to use an `electron` to produce an `iterable`, then process the iterable with another electron. In these cases, perform the iteration inside an electron.

When a lattice is dispatched, the Covalent server executes the lattice in order to build the transport graph. The transport graph is then analyzed to parallelize the execution of electrons on their assigned executors.

If the server encounters a loop over the output of an electron, it cannot infer the structure on which the loop depends (the size and composition of the iterable) and is prevented from building the transport graph.

Putting the loop inside an electron defers resolution of the loop to when the electron is dispatched, and ensures that it takes place on the electron’s executor.

Note: This pattern applies only when the iterator is produced by an electron. Iterating on fixed values in a lattice as described [here](/docs/user-documentation/how-to/looping) does not require electron execution to evaluate the iterator and build the graph.


## Best Practice

Compute dynamically generated iterators inside an electron. Electrons’ execution is deferred during the graph build phase, so their output cannot be used to build the transport graph and analyze the execution for parallelization. Instead, the electron is added to the transport graph and the loop is computed within the electron when it is executed.

For result-dependent computations that might be too complex to encapsulate in a single electron, use a [sublattice](/docs/user-documentation/covalent-patterns/dynamic-workflows).

## Example

Contrast the two examples below.

### Example 1: Incorrect
This example demonstrates the incorrect approach: looping over a computed iterator in the lattice but not within an electron.

```py
import covalent as ct
import random

# Technique 1: Fails because the transport graph cannot be defined

@ct.electron
def task():
    return random.sample(range(10, 30), 5)

@ct.electron
def task_2(x):
    return x ** 2

@ct.lattice
def workflow_1():
    random_list = task()

    res = []
    for rn in random_list:
        res.append(task_2(rn))

    return rn

id = ct.dispatch(workflow_1)()
res = ct.get_result(id, wait=True)
print("Status: ", res.status, "\n", res.error) # (Selected output)
```
    Status:  FAILED
      The following tasks failed:
    16: :task()[5]
    19: :task()[6]
    22: :task()[7]
    25: :task()[8]
    28: :task()[9]
    31: :task()[10]
    34: :task()[11]
    37: :task()[12]
    40: :task()[13]
    43: :task()[14]
    46: :task()[15]
    49: :task()[16]
    52: :task()[17]

### Example 2: Improved
The iterator is passed to the second electron, which loops over it internally and returns the results in a list. In this case the loop is executed entirely at electron execution time, in the electron’s executor.

```py
import covalent as ct
import random

# Technique 2: Iterator is contained in an electron

@ct.electron
def task_1():
    return random.sample(range(10, 30), 5)

# Method (2):
@ct.electron
def task_2_new(x_list):

    squares = []
    for x in x_list:
        squares.append(x ** 2)

    return squares

@ct.lattice
def workflow_2():
    random_list = task_1()
    return task_2_new(random_list)

id = ct.dispatch(workflow_2)()
res = ct.get_result(id, wait=True)
print(res)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: [256, 100, 625, 196, 676]
    input args: []
    input kwargs: {}
    error: None

    start_time: 2023-03-13 20:26:42.797010
    end_time: 2023-03-13 20:26:42.985698

    results_dir: /Users/dave/.local/share/covalent/data
    dispatch_id: a03a79f3-748f-488d-8a7e-aebe78a4a26e

    Node Outputs
    ------------
    task_1(0): [16, 10, 25, 14, 26]
    task_2_new(1): [256, 100, 625, 196, 676]


## See Also

[Result-Dependent If-Else](/docs/user-documentation/covalent-patterns/result-dependent)

[Dynamic Workflows](/docs/user-documentation/covalent-patterns/dynamic-workflows)
