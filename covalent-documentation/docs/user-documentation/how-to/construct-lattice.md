---
displayed_sidebar: tutorialSidebar
title: Constructing a Workflow (Lattice)
---

import Goto from '/src/components/Goto.js';

# Constructing a Workflow (Lattice) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/construct_lattice.ipynb" />

Lattices are workflows comprised of a sequence of tasks. In your Python code, a lattice is a function with the `@lattice` decorator.

To construct a lattice, do the following.

## Prerequisites

Construct one or more electrons with which to compose the lattice:

```python
import covalent as ct

@ct.electron
def quadrature(x, y):
    return sqrt(x**2 + y**2)
```

## Procedure

1. Write a function that uses one or more electrons to process the data.
2. Attach the `@lattice` decorator.

```python
@ct.lattice
def quad_workflow(x, y):
    return quadrature(x, y)
```

## See Also

[Constructing an Electron](/docs/user-documentation/how-to/construct-electron)

[Adding Electrons to Lattices](/docs/user-documentation/how-to/add-electron-to-lattice)
