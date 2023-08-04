---
displayed_sidebar: tutorialSidebar
title: Adding Bash Dependencies to an Electron
---

import Goto from '/src/components/Goto.js';

# Adding Bash Dependencies to an Electron <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/add_bash_dependencies_to_electron.ipynb" />

Bash dependencies can be passed to an electron as an argument to the electron decorator. The dependencies can take one of two forms:

1. A Covalent DepsBash object.
2. A list of commands represented as strings.

Both forms are illustrated below.

## Prerequisites

Import `covalent`.

```python
import covalent as ct
```

## Procedure

### Using a Covalent DepsBash object

1. Pass a comma-separated list of Bash commands to the constructor of a `DepsBash()` object, then assign the object to the `deps_bash` keyword argument:

```python
@ct.electron(
        deps_bash=ct.DepsBash(["echo `whereis cpp` > /tmp/path.txt"]),
)
def get_bash_result():
    with open('/tmp/path.txt','r') as f:
        return f.read()
```

2. Use the electron in a lattice and dispatch the lattice as usual:

```python
@ct.lattice
def workflow():
    return get_bash_result()

dispatch_id = ct.dispatch(workflow)()
r = ct.get_result(dispatch_id, wait=True)
print(r.result)
```

    cpp: /usr/bin/cpp

### Using a List

1. Pass a list of commands – represented as strings – directly to the `deps_bash` named argument:

```python
@ct.electron(
        deps_bash=["echo `whereis cpp` /tmp/path.txt"],
)
def get_bash_result():
    with open('/tmp/path.txt','r') as f:
        return f.read()
```

2. Dispatch the elctron in a lattice as usual:

```python
@ct.lattice
def workflow():
    return get_bash_result()

dispatch_id = ct.dispatch(workflow)()
r = ct.get_result(dispatch_id, wait=True)
print(r.result)
```

    cpp: /usr/bin/cpp

## See Also

[Constructing Tasks from Bash Scripts](/docs/user-documentation/how-to/construct-bash-task.md)
