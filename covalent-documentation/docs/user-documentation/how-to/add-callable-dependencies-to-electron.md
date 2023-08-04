---
displayed_sidebar: tutorialSidebar
title: Adding Callable Function Dependencies to an Electron
---

import Goto from '/src/components/Goto.js';

# Adding Callable Function Dependencies to an Electron <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/add_callable_dependencies_to_electron.ipynb" />

Add functions to be invoked before or after executing an electron by using the electron's `call_before` and `call_after` key parameters. The functions, or _dependency calls_, are run in the electron's execution environment and can be used, for example, to set up and tear down resources for the electron's use.

## Prerequisites

Import `covalent` and `Path`.

```python
import covalent as ct
from pathlib import Path
```

## Procedure

1. Define functions to be executed before and after the electron:

```python
def call_before_hook(filename):
    Path(filename).write_text('Hello world!')
    return filename

def call_after_hook(filename):
    Path(filename).unlink()
```

2. Pass the functions as arguments to two Covalent dependency objects. The Covalent dependency class is `DepsCall()`.

3. Assign the `call_before` and `call_after` named arguments in the electron decorator to reference the `DepsCall` objects.

   `DepsCall` does not intrinsically distinguish between pre- and post-execution. The only difference is which keyword you assign the argument to.

```python
@ct.electron(
    call_before=ct.DepsCall(call_before_hook, args=('test.txt',), retval_keyword='my_file'),
    call_after=ct.DepsCall(call_after_hook, args=('test.txt',)),
)
def read_from_file(my_file=None):
    with open(my_file,'r') as f:
        return f.read()
```

4. Create and dispatch a lattice containing the electron:

```python
@ct.lattice
def workflow():
    return read_from_file()

dispatch_id = ct.dispatch(workflow)()
r = ct.get_result(dispatch_id, wait=True)
print(r.result)
```

    Hello world!

## See Also

[Adding Pip Dependencies to an Electron](/docs/user-documentation/how-to/add-pip-dependencies-to-electron)

[Adding Bash Dependencies to an Electron](/docs/user-documentation/how-to/add-bash-dependencies-to-electron)
