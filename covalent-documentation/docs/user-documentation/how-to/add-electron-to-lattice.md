---
displayed_sidebar: tutorialSidebar
---

import Goto from '/src/components/Goto.js';

# Adding Electrons to a Lattice <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/add_electron_to_lattice.ipynb" />

[Construct a workflow](/docs/user-documentation/how-to/construct-lattice) by creating a function and attaching the Covalent `@lattice` decorator. Then, within the function, use [electrons](/docs/user-documentation/how-to/construct-electron) to do all the computational work.

## Prerequisites

Decide what overall computation your workflow is designed to do. Then, have an idea of how to break the computation into subtasks that will be computed by electrons.

## Procedure

1. Write an electron to do each basic calculation in your workflow.

```python
import covalent as ct

@ct.electron
def sum(x, y):
    return x

@ct.electron
def square(x):
    return x * x
```

2. Compose the lattice function from these electrons. Avoid manipulating any data directly in the lattice outside of electron functions.

If you're starting with a script or experiment and are converting it to run in Covalent, you'll essentially have to reverse the process. If the workflow is especially complex, you might need to break it into subordinate workflows (sublattices).

```python
@ct.lattice
def sum_of_squares_wf(a, b):
    x2 = square(x=a)
    y2 = square(y=b)
    return sum(x=x2, y=y2)
```

Of course, this is a simplified example. You might have to work through several iterations to lay out a sequence of electrons that does what you want.

Avoid the temptation to write computations directly in the lattice. The more granular you make the computations in the electrons, the more flexibility the Covalent dispatcher has to efficiently parallelize the computations.

## See Also

[Constructing an Electron](/docs/user-documentation/how-to/construct-electron)

[Constructing a Lattice](/docs/user-documentation/how-to/construct-lattice)

[Constructing a Sublattice](#)
