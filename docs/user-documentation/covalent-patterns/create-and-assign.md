---
displayed_sidebar: tutorialSidebar
title: "Creating and Assigning an Executor"
---


import Goto from '/src/components/Goto.js';

# Creating and Assigning an Executor <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/executor_assignment.ipynb" />


If multiple electrons can use the same compute resource, create one executor for the resource and assign it to the electrons rather than creating an executor every time an electron is instantiated.

## Context

**Multiple electrons can and should use the same executor if they use the same back-end resource.**

Recall that an executor is an abstracted “front end” to a computing resource, such as an HPC cloud or container cluster. One executor represents one particular computing resource or “back end.” The executor decouples the electron from the compute resource, such that you can assign any executor to any electron.

**Creating multiple executors for the same resource does not improve performance.** 

Parallelization is done by the Covalent dispatcher after analyzing the transport graph, and is based on independence of the inputs and outputs of electron instances. There is no benefit to creating two or more “pipelines” to the resource.

With a single executor per compute resource, independent electrons (including multiple iterations of the same electron) are: 1. parallelized by the Covalent dispatcher; and 2. executed efficiently by the back end as separate computations.

“Efficiently” here means some combination of “in parallel,” “on multiple CPUs,” “load-balanced,” “distributed,” or whatever mechanisms the back end uses to improve performance.

Of course, different back-end resources are better suited for some tasks (electrons) than for others, but it’s up to you to match the right resource to the right executor. The executor framework gives you the flexibility to “mix and match” tasks and computation resources, for example to test a task on one resource and do production work on another.

Again, there is no performance advantage to be gained from creating multiple executors for the same back end. In fact, creating unneeded executors hurts performance by needlessly consuming dispatcher memory and CPU. As well, instantiating multiple executors complicates code maintenance. Defining the executor once means any modification can be done once, in one place.

## Best Practice

When creating multiple electrons that use the same computation resource, instantiate one executor and then assign the executor to electrons as they are defined.

## Example

Contrast the two examples below.

### Example 1: Not Recommended

This example demonstrates a questionable approach: creating an executor for every new instance of an electron.

Note: Executors don’t have ID numbers or default identifying attributes that are easily accessible. In this example, different stdout logs have been assigned to the two different executors so that you can differentiate the two executors in the Electron sidebar in the [Covalent UI](/docs/user-documentation/user-interface/preview-electron-sidebar). Click a task in the Graph view to see the Electron sidebar. (Also note that the logs are created when the executor is instantiated, so they’re in a dispatch-specific results subdirectory, not in the main directory for this notebook.)

```py
import covalent as ct
import random
from covalent.executor import LocalExecutor

# Technique 1 (not so good):

@ct.electron(executor=LocalExecutor(log_stdout="./exec_stdout_1.txt"))  # A local executor.
def task_1():
    return random.sample(range(10, 30), 5)

@ct.electron(executor=LocalExecutor(log_stdout="./exec_stdout_2.txt"))  # A different local executor.
def task_2(x_list):

    squares = []
    for x in x_list:
        squares.append(x ** 2)

    return squares

@ct.lattice
def workflow_1():
    random_list = task_1()
    return task_2(random_list)

id = ct.dispatch(workflow_1)()
res = ct.get_result(id, wait=True)
print(res)
```

```

Lattice Result
==============
status: COMPLETED
result: [100, 121, 841, 196, 256]
input args: []
input kwargs: {}
error: None

start_time: 2023-02-21 17:55:20.610470
end_time: 2023-02-21 17:55:20.811850

results_dir: /Users/mini-me/agnostiq/covalent/doc/source/developer/patterns/results
dispatch_id: eb1339b8-5af8-4c75-93e8-22584019ed2d

Node Outputs
------------
task_1(0): [10, 11, 29, 14, 16]
task_2(1): [100, 121, 841, 196, 256]

```

### Example 2: Improved

This example demonstrates the better technique: creating one executor and assigning it to each new instance of the electron.

```py
import covalent as ct
import random
from covalent.executor import DaskExecutor

# Technique 2 (better):

same_executor = LocalExecutor(log_stdout="./exec_stdout_common.txt")  # One executor is all you need here.

@ct.electron(executor=same_executor)  # Assign the executor.
def task_1():
    return random.sample(range(10, 30), 5)


@ct.electron(executor=same_executor)  # Same executor, different electron.
def task_2(x_list):

    squares = []
    for x in x_list:
        squares.append(x ** 2)

    return squares

@ct.lattice
def workflow_2():
    task_1
    random_list = task_1()
    return task_2(random_list)

id = ct.dispatch(workflow_2)()
res = ct.get_result(id, wait=True)
print(res)
```

```

Lattice Result
==============
status: COMPLETED
result: [676, 841, 729, 225, 289]
input args: []
input kwargs: {}
error: None

start_time: 2023-02-21 17:55:22.717915
end_time: 2023-02-21 17:55:22.812049

results_dir: /Users/mini-me/agnostiq/covalent/doc/source/developer/patterns/results
dispatch_id: 0225a221-4ecf-4d87-b92b-21fe3ff1776f

Node Outputs
------------
task_1(0): [26, 29, 27, 15, 17]
task_2(1): [676, 841, 729, 225, 289]

```

As with the previous example, go to the Covalent UI and examine the stdout log name in the Executor details for evidence as to which executor was used with each electron. In this example the log is the same (`exec_stdout_common.txt`). (Also, take care to note that in general this doesn’t prove that there is only one executor, since different executors can share the same log file.)