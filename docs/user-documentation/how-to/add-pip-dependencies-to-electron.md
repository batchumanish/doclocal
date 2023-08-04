---
displayed_sidebar: tutorialSidebar
title: Adding Pip Dependencies to an Electron
---

import Goto from '/src/components/Goto.js';

# Adding Pip Dependencies to an Electron <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/add_pip_dependencies_to_electron.ipynb" />

There are three ways to declare Pip package dependencies to an electron:

1. Assign the dependencies directly in the Covalent `DepsPip` class.
2. Specify a requirements file containing the dependencies.
3. Use the electron's `call_before()` and `call_after()` hooks.

All three methods are illustrated below.

## Prerequisites

Import `covalent` and the packages required by the electron.

```python
import covalent as ct
import numpy
```

(Optional) If you're going to assign dependencies from a requirements file, create the file.

```python
import os
with open('requirements_example.txt', 'w') as f:
    f.write('numpy==1.22.4')
f.close()
```

## Procedure

### Using the DepsPip Class

1. Create a Covalent `DepsPip` object, passing a list of package assignments as the `packages` keyword argument.

```python
deps_numpy = ct.DepsPip(packages=["numpy==1.22.4"])
```

### Specifying a Requirements File

1. To use a requirements file instead, pass the file path to the `DepsPip` class as the `reqs_path` keyword rather than passing the `packages` list.

```python
deps_numpy = ct.DepsPip(reqs_path="./requirements_example.txt")
```

2. In either case, once the `DepsPip` object is created, pass it to the electron decorator as the `deps_pip` keyword argument.

```python
@ct.electron(
    deps_pip=deps_numpy
)
def get_result():
    matrix = numpy.identity(3)
    return numpy.sum(matrix)

```

### Using call_before() and call_after()

1. Rather than assign a `DepsPip` object in the `deps_pip` argument, you can assign a `DepsPip` object to either the `call_before()` or `call_after()` hook on an electron, or assign a different `DepsPip` object to both.

```python
@ct.electron(
    call_before = [ct.DepsPip(packages=["numpy==1.22.4"])],
    call_after = [ct.DepsPip(packages=["networkx==2.5"])]
)
def get_result():
    matrix = numpy.identity(3)
    return numpy.sum(matrix)
```

## Complete the Workflow

Regardless of how you've assigned the dependencies, assign the electron to a workflow and dispatch the workflow as you normally would.

```python
@ct.lattice
def workflow():
    return get_result()

dispatch_id = ct.dispatch(workflow)()
res = ct.get_result(dispatch_id, wait=True)
print(res.result)
```

    3.0
