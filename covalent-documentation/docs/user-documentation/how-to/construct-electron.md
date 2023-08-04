---
displayed_sidebar: tutorialSidebar
title: Constructing a Task (Electron)
---

import Goto from '/src/components/Goto.js';

# Constructing a Task (Electron) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/construct_electron.ipynb" />

An electron is a single task, the basic building block of a workflow. Construct an electron by writing a function that performs one step in a workflow.

## Prerequisites

Import the Covalent library. Do this in any file you write that uses the Covalent SDK.

```python
import covalent as ct
```

## Procedure

To create an electron:

1. Define a function to perform a task.

```python
def quadrature(x, y):
    return sqrt(x**2 + y**2)
```

2. Attach the `@electron` decorator.

```python
@ct.electron
def quadrature(x, y):
    return sqrt(x**2 + y**2)
```

## See Also

[Constructing a Lattice](/docs/user-documentation/how-to/construct-lattice.md)
