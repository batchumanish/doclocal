---
displayed_sidebar: tutorialSidebar
title: Cancel a running Workflow
---

import Goto from '/src/components/Goto.js';

# Canceling a Running Workflow <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/cancel_dispatch.ipynb" />


You can cancel a dispatched workflow before it completes.

### Prerequisites

Dispatch a workflow that takes a long time to complete. During that time, you decide to cancel the workflow (perhaps because you realize you started it with the wrong parameters).

The following example workflow uses the `time.sleep()` function to simulate lengthy computations:


```python
import covalent as ct
import time

@ct.electron
def task_1(x):
    time.sleep(x)
    print("Task 1")
    return x

@ct.electron
def task_2(a, b):
    c = a + b
    time.sleep(c)
    print("Task 2")
    return c

@ct.electron
def task_3(a):
    time.sleep(2)
    print("Task 3")
    return a ** 2
    
@ct.lattice
def workflow(x):
    res_2 = task_2(task_1(10), x)
    for y in range(10):
        task_1(10)
    task_3(res_2)

dispatch_id = ct.dispatch(workflow)(5)
print(dispatch_id)
```

    55c61a91-60dd-4beb-b553-c970ced0abee
    

### Procedure

1. Demonstrate that the workflow is still running by executing the following within a few seconds of starting the workflow:


```python
time.sleep(3)
result = ct.get_result(dispatch_id)
print(result)
```

    
    Lattice Result
    ==============
    status: RUNNING
    result: None
    input args: ['5']
    input kwargs: {}
    error: None
    
    start_time: 2023-01-31 23:03:19.586311
    end_time: None
    
    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/execution/results
    dispatch_id: 55c61a91-60dd-4beb-b553-c970ced0abee
    
    Node Outputs
    ------------
    task_1(0): None
    :parameter:10(1): None
    task_2(2): None
    :parameter:5(3): None
    task_1(4): None
    :parameter:10(5): None
    task_1(6): None
    :parameter:10(7): None
    task_1(8): None
    :parameter:10(9): None
    task_1(10): None
    :parameter:10(11): None
    task_1(12): None
    :parameter:10(13): None
    task_1(14): None
    :parameter:10(15): None
    task_1(16): None
    :parameter:10(17): None
    task_1(18): None
    :parameter:10(19): None
    task_1(20): None
    :parameter:10(21): None
    task_1(22): None
    :parameter:10(23): None
    task_3(24): None
    
    

2. Use the `ct.cancel()` function to stop the workflow:


```python
ct.cancel(dispatch_id)
```




    'Dispatch 55c61a91-60dd-4beb-b553-c970ced0abee canceled.'



3. Check the result again. Note that some of the nodes might have completed (they have returned outputs), but the lattice status is `CANCELED`.


```python
result = ct.get_result(dispatch_id, wait=True)
print(result)

print(result.get_all_node_outputs())
```

    
    Lattice Result
    ==============
    status: COMPLETED
    result: None
    input args: ['5']
    input kwargs: {}
    error: None
    
    start_time: 2023-01-31 23:03:19.586311
    end_time: 2023-01-31 23:03:47.026382
    
    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/execution/results
    dispatch_id: 55c61a91-60dd-4beb-b553-c970ced0abee
    
    Node Outputs
    ------------
    task_1(0): 10
    :parameter:10(1): 10
    task_2(2): 15
    :parameter:5(3): 5
    task_1(4): 10
    :parameter:10(5): 10
    task_1(6): 10
    :parameter:10(7): 10
    task_1(8): 10
    :parameter:10(9): 10
    task_1(10): 10
    :parameter:10(11): 10
    task_1(12): 10
    :parameter:10(13): 10
    task_1(14): 10
    :parameter:10(15): 10
    task_1(16): 10
    :parameter:10(17): 10
    task_1(18): 10
    :parameter:10(19): 10
    task_1(20): 10
    :parameter:10(21): 10
    task_1(22): 10
    :parameter:10(23): 10
    task_3(24): 225
    
    {'task_1(0)': <covalent.TransportableObject object at 0x112536a30>, ':parameter:10(1)': <covalent.TransportableObject object at 0x136e99ca0>, 'task_2(2)': <covalent.TransportableObject object at 0x136e993a0>, ':parameter:5(3)': <covalent.TransportableObject object at 0x136e998b0>, 'task_1(4)': <covalent.TransportableObject object at 0x136e99430>, ':parameter:10(5)': <covalent.TransportableObject object at 0x136e99be0>, 'task_1(6)': <covalent.TransportableObject object at 0x136e996a0>, ':parameter:10(7)': <covalent.TransportableObject object at 0x136ebf640>, 'task_1(8)': <covalent.TransportableObject object at 0x136ebf850>, ':parameter:10(9)': <covalent.TransportableObject object at 0x136ebf2e0>, 'task_1(10)': <covalent.TransportableObject object at 0x136ebf8b0>, ':parameter:10(11)': <covalent.TransportableObject object at 0x136ebf820>, 'task_1(12)': <covalent.TransportableObject object at 0x136ebfbb0>, ':parameter:10(13)': <covalent.TransportableObject object at 0x136ebfb80>, 'task_1(14)': <covalent.TransportableObject object at 0x136ebff70>, ':parameter:10(15)': <covalent.TransportableObject object at 0x136ebfe50>, 'task_1(16)': <covalent.TransportableObject object at 0x136f161f0>, ':parameter:10(17)': <covalent.TransportableObject object at 0x136f16250>, 'task_1(18)': <covalent.TransportableObject object at 0x136f164f0>, ':parameter:10(19)': <covalent.TransportableObject object at 0x136f16550>, 'task_1(20)': <covalent.TransportableObject object at 0x136f167f0>, ':parameter:10(21)': <covalent.TransportableObject object at 0x136f16850>, 'task_1(22)': <covalent.TransportableObject object at 0x136f16af0>, ':parameter:10(23)': <covalent.TransportableObject object at 0x136f16b50>, 'task_3(24)': <covalent.TransportableObject object at 0x136f16df0>}
    

In this example, which used the default Dask executor, any tasks that were already started ran to completion because Dask does not allow cancelation of a running thread. Only nodes that had not yet begun execution were canceled.

In general, how the lattice shuts down depends on the executors used by the nodes. 


```python

```
