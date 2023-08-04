---
displayed_sidebar: tutorialSidebar
title: Executing an Individual Task (Electron) 
---

import Goto from '/src/components/Goto.js';

# Executing an Individual Task (Electron) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/execute_individual_electron.ipynb" />

## Prerequisites

[Start](/docs/user-documentation/how-to/execution/covalent-cli) the Covalent services.

## Procedure

To execute an individual electron:

1. Decorate it with a `@lattice` decorator as shown below. (Note that the `@lattice` decorator is applied "atop" or "around" the task's `@electron` decorator.)

```python
import covalent as ct

@ct.lattice
@ct.electron
def product(x, y):
    return x * y
```

2. Dispatch the lattice:

```python
dispatch_id = ct.dispatch(product)(2, 3)
print(dispatch_id)
```

    7e7c1440-8beb-4f3f-9252-9b43d508bf61

Executing the individual electron returns a dispatch ID that can be used to query the electron's computation result. This is a useful technique for [testing an individual electron](/docs/user-documentation/how-to/test-electron).

## See Also

[Testing an Electron](/docs/user-documentation/how-to/test-electron)
