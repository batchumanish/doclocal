---
displayed_sidebar: tutorialSidebar
title: Adding Constraints to Tasks and Workflows
---

import Goto from '/src/components/Goto.js';

# Adding Constraints to Tasks and Workflows <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/add_constraints_to_lattice.ipynb" />

Add constraints and execution directives to electrons by specifying them as arguments to the Covalent `@electron` decorator.

The most-used constraint is to explicitly name an executor for an electron. Other constraints are described in the API Reference.

## Prerequisites

[Create a lattice](/docs/user-documentation/how-to/construct-lattice).

```python
import covalent as ct

@ct.electron
def sum(x, y):
    return x

@ct.electron
def square(x):
    return x * x

@ct.lattice
def sum_of_squares_wf(a, b):
    x2 = square(x=a)
    y2 = square(y=b)
    return sum(x=x2, y=y2)
```

## Procedure

1. To specify a constraint on a single electron, add the constraint as a keyword argument to its Covalent `@electron` decorator.

```python
@ct.electron(executor = "local")
def sum(x, y):
    return x
```

2. To specify a constraint on all electrons in a lattice, add the constraint as a keyword argument to the `@lattice` decorator. The constraint is inherited by all electrons in the lattice.

```python
@ct.lattice(executor = "local")
def sum_of_squares_wf(a, b):
    x2 = square(x=a)
    y2 = square(y=b)
    return sum(x=x2, y=y2)
```

3. To override a constraint inherited from a lattice, specify the overriding constraint on the `@electron` decorator.

```python
import covalent as ct

@ct.electron(executor = "dask")
def sum(x, y):
    return x

@ct.electron
def square(x):
    return x * x

@ct.lattice(executor = "local")
def sum_of_squares_wf(a, b):
    x2 = square(x=a)
    y2 = square(y=b)
    return sum(x=x2, y=y2)
```

In the example above, the `square` electron inherits the `local` executor from the lattice. The `sum` electron overrides the inherited value and uses the `dask` executor instead.

## See Also

[Adding Pip Dependencies to an Electron](/docs/user-documentation/how-to/add-pip-dependencies-to-electron)

[Adding Bash Dependencies to an Electron](/docs/user-documentation/how-to/add-bash-dependencies-to-electron.md)

[Adding Callable Function Dependencies to an Electron](/docs/user-documentation/how-to/add-callable-dependencies-to-electron.md)
