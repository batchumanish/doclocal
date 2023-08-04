---
displayed_sidebar: tutorialSidebar
title: Executing a Workflow (Lattice) Multiple Times
---

import Goto from '/src/components/Goto.js';

# Executing a Workflow (Lattice) Multiple Times <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/execute_lattice_multiple_times.ipynb" />

Execute a lattice multiple times with different parameters by starting the lattice from a loop. Covalent parallelizes the execution of the runs.

## Prerequisites

[Start the Covalent services](/docs/user-documentation/how-to/execution/covalent-cli).

## Procedure

1. Write the lattice. This example takes a single scalar parameter, but the principle is the same for more complex inputs.

```python
import covalent as ct

@ct.electron
def identity(x):
    return x

@ct.electron
def square(x):
    return x * x

@ct.lattice
def workflow(a):
    val_1 = identity(x=a)
    return square(x=val_1)
```

2. Dispatch the tasks separately:

```python
params = [1, 2, 3, 4]
dispatch_ids = [ct.dispatch(workflow)(a=param) for param in params]

dispatch_ids
```

    ['08a5f022-0bb7-4f70-b7bd-6a6806931e40',
     'd4a3e660-63a2-47b0-8d3e-722b697bcd7d',
     'e34ed7ef-be70-4700-954b-9ed7330b2a86',
     '1cffea94-5d82-4186-a352-0a510610e4cc']

3. The dispatch IDs are your keys to the results of each run; you will use them to process or view the results. One option is to simply save the dispatch IDs so that you can retrieve the results later:

```python
id_file = open("dispatch_ids.txt", 'w')
id_file.writelines("%s\n" % id for id in dispatch_ids)
id_file.close()
```

## See Also

[Looping](/docs/user-documentation/how-to/looping)

[Executing a Lattice as an Electron (Sublattice)](/docs/user-documentation/how-to/execution/execute-sublattice)
