---
displayed_sidebar: tutorialSidebar
title: Using an Iterable 
---

import Goto from '/src/components/Goto.js';

# Using an Iterable  <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/use_iterable.ipynb" />

You can pass a slice of an iterable returned by one electron as an input to another iterable in a lattice.

## Prerequisites

Create two electrons, one that returns an iterable and one that takes an interable as an input.

```python
import covalent as ct

@ct.electron
def task_1():
    return ['a', 'b', 'c', 'd', 'e']

@ct.electron
def task_2(items):
    items.reverse()
    return(items)
```

## Procedure

Pass the first electron's iterable output to the second electron.

```python
@ct.lattice
def workflow(**params):
    res_1 = task_1()
    res_2 = task_2(res_1) # Using an iterable data structure as an input parameter
    return(res_2)
```

You don't have to pass the entire iterable. You can pass an arbitrary slice of it instead:

```python
@ct.lattice
def workflow(**params):
    res_1 = task_1()
    res_2 = task_2(res_1[1:3]) # Using an iterable data structure slice as an input parameter
    return(res_2)
```

The key idea is that no work is done on the data outside of the electrons.

## See Also

[Adding Electrons to Lattices](/docs/user-documentation/how-to/add-electron-to-lattice)

[Looping](/docs/user-documentation/how-to/looping)
