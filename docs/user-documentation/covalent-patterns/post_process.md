---
displayed_sidebar: tutorialSidebar
title: "Return Electron Output Values from Lattices"
---

import Goto from '/src/components/Goto.js';

# Return Electron Output Values from Lattices <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/post_process.ipynb" />

To avoid causing graph construction issues and being scolded by the Covalent server post-processor, ensure that the value returned by a lattice is the output of an electron.

Many best practices with Covalent boil down to "use the decorators." Putting as much of the working code as possible inside Covalent's decorators (electrons and lattices) enables the Covalent server to manage execution as intended.
 
## Context

Covalent allows you to put business logic in a lattice outside of an electron, but that doesn't mean you should do so. Violating this practice puts results outside of Covalent's ability to run code on executors. Following this practice ensures that your lattices, at least in this respect, will work with future versions of Covalent.

## Best Practice

Keep computations inside electrons. Use lattices to execute sequences of electrons, not to perform computations.

## Example

Contrast the two examples below.

### Example 1: Not Recommended

This example demonstrates the incorrect approach. Notice all the computation that occurs in the lattice: a list of random samples is created, then returned as a numpy array. However, the list cannot be created when the lattice is run since `res`, the second parameter to the `random.sample()` method, is an unexecuted electron. As a result, the `random.sample()` method fails.


```python
import covalent as ct
import numpy as np
import random

# Technique 1:

@ct.electron
def task_1(x):
    return x * 2

@ct.lattice
def workflow(a):
    res = task_1(a)
    res_list = random.sample(range(10, 30), res) # this will fail at graph construction time since `res` is still an Electron
    return np.array(res_list)

# Uncomment the two following statements to demonstrate 
# id = ct.dispatch(workflow)(1)
# result = ct.get_result(id, wait=True)
```

### Example 2: Improved

In contrast, the  following code properly contains the construction of `res_list` in an electron, `task_2_new`.



```python
import covalent as ct
import numpy as np
import random

# Technique 2:

@ct.electron
def task_1(x):
    return x * 2

@ct.electron
def task_2_new(x):
    res_list = random.sample(range(10, 30), x)
    return np.array(res_list)

@ct.lattice
def workflow_2(a):
    res_1 = task_1(a)
    return task_2_new(res_1)

id = ct.dispatch(workflow_2)(1)
result = ct.get_result(id, wait=True)

print(result)
```

    
    Lattice Result
    ==============
    status: COMPLETED
    result: [19 11]
    input args: ['1']
    input kwargs: {}
    error: None
    
    start_time: 2023-03-13 21:27:15.248600
    end_time: 2023-03-13 21:27:15.404917
    
    results_dir: /Users/dave/.local/share/covalent/data
    dispatch_id: 642292a8-758c-42cd-a2d3-757755388207
    
    Node Outputs
    ------------
    task_1(0): 2
    :parameter:1(1): 1
    task_2_new(2): [19 11]
    

