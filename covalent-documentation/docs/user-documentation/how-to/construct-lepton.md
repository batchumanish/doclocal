---
displayed_sidebar: tutorialSidebar
title: Constructing an External Task Definition (Lepton) 
---

import Goto from '/src/components/Goto.js';

# Constructing an External Task Definition (Lepton) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/construct_lepton.ipynb" />

A lepton is a generalization of an electron (task). Leptons are used instead of electrons when the task definition is in a separate file, such as a Python module or a compiled C library. Leptons are particularly useful for workflows comprised of tasks in different languages. This example demonstrates how to construct a Lepton from a task definition in a Python module.

## Prerequisites

Create a module containing the task definition.

```python
import covalent as ct
import os

test_module = """
def entrypoint(x: int, y: int) -> int:
    return x + y
"""

with open("test_module.py", "w") as f:
    f.write(test_module)
```

## Procedure

1. Make `test_module` available to the Python interpreter by appending the directory containing the module to `sys.path` just before running the task. To do this, use a Covalent [call dependency](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse):

```python
cwd = os.getcwd()

def set_pythonpath(directory):
    import sys
    print(f"Appending {directory} to module search path")
    sys.path.append(directory)

calldep = ct.DepsCall(set_pythonpath, args=[cwd])
```

2. Create the lepton object:

```python
library_path = "test_module"
task = ct.Lepton(
    language = "python",
    library_name = library_path,
    function_name = "entrypoint",
    call_before=[calldep]
)
```

3. Use the task definition in a workflow (lattice) as if it were an electron object:

```python
@ct.lattice
def workflow(x: int) -> int:
    return task(x, 1)

result = ct.dispatch_sync(workflow)(2)
print(result)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: 3
    input args: ['2']
    input kwargs: {}
    error: None

    start_time: 2023-01-30 03:45:22.440202
    end_time: 2023-01-30 03:45:22.631020

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/results
    dispatch_id: af941ee1-0089-4090-910e-bf804834361f

    Node Outputs
    ------------
    entrypoint(0): 3
    :parameter:2(1): 2
    :parameter:1(2): 1

## See Also

[Using C Code (Leptons)](/docs/user-documentation/how-to/construct-c-task)
