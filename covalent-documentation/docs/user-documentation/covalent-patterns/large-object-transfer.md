---
displayed_sidebar: tutorialSidebar
title: "Large Object Transfer"
---

import Goto from '/src/components/Goto.js';

# Large Object Transfer <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/developer/patterns/large_object_transfer.ipynb" />

For large result objects from electrons that need to be passed as input to another electron, write the object to a storage service, then read the object into the consuming electron.

If your use case frequently requires such transfers, use a Covalent `FileTransfer` objects to write the object to a storage service, then use another `FileTransfer` to read the object into the consuming electron. Using `FileTransfer` dependencies is described in the Covalent [How-to Guide](/docs/user-documentation/how-to/how-to-guide).

## Context

Passing large objects between electrons presents a challenge to Covalent because the producing and consuming electrons can be on any two executors, so that transferring the object programmatically depends on arbitrary network and file-sharing implementations. Even on the same executor, an object is copied to every electron that contains the object.

To address this, Covalent loads all objects to memory in every electron where they are used. This method is reliable, but it can cause long delays where the transfer mechanism is slow, and can eat up large amounts of memory on the dispatcher and/or executors.

## Best Practice

Store large objects where they are generated. Then, retrieve them where needed to prevent them from consuming memory in more than one electron at a time.

Covalent implements file transfers as objects that can be run pre- or post-execution with respect to electrons. Use these objects to store and retrieve large objects that need to be passed between electrons.

## Example

Contrast the two examples below.

### Example 1: Not Recommended

This example demonstrates a questionable approach: returning and consuming a large object directly, which can lead to the object being duplicated in memory in two different electrons.

```py
import covalent as ct

# Techique 1: not recommended for large objects

@ct.electron
def task_1():
    large_object = 42
    return large_object

@ct.electron
def task_2(large_obj):
    return large_obj // 2

@ct.lattice
def workflow_1():
    lo = task_1()      # The large object is created and in memory
    return task_2(lo)  # ... And remains in memory while it is duplicated in task_2

id = ct.dispatch(workflow_1)()
res = ct.get_result(id, wait=True)
print(res) # Sure, it works -- as long as you have enough memory.
```

```

Lattice Result
==============
status: COMPLETED
result: 21
input args: []
input kwargs: {}
error: None

start_time: 2023-03-13 21:43:13.219856
end_time: 2023-03-13 21:43:13.357266

results_dir: /Users/dave/.local/share/covalent/data
dispatch_id: 6e3bb5c6-c87d-4a1d-82bd-e414652e7b08

Node Outputs
------------
task_1(0): 42
task_2(1): 21

```

## Example 2: Improved

The following example stores the large object to a file, then reads the object from a reference. Note that the lattice code is the same, but the object passed, lo, is a file reference rather than the large data object itself.

```py
import covalent as ct

# Method (2):
@ct.electron
def task_1():
    large_object = 42
    lo_ref = "my_data.data"

    with open(lor, "w") as f:
        f.write(large_object)

    return lo_ref

@ct.electron
def task_2(large_obj_reference):
    with open(large_obj_reference, "r") as f:
        x = f.readlines()
    return x // 2

@ct.lattice
def workflow_2():
    lo = task_1()
    return task_2(lo)

id = ct.dispatch(workflow_1)()
res = ct.get_result(id, wait=True)
print(res)
```

```

Lattice Result
==============
status: COMPLETED
result: 21
input args: []
input kwargs: {}
error: None

start_time: 2023-03-13 21:43:28.745648
end_time: 2023-03-13 21:43:28.896047

results_dir: /Users/dave/.local/share/covalent/data
dispatch_id: 3eb0fbec-61da-4034-9e77-3fa79ac0ddf8

Node Outputs
------------
task_1(0): 42
task_2(1): 21
```