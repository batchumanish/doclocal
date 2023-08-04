---
displayed_sidebar: tutorialSidebar
title: Constructing a Task from C Code
---

import Goto from '/src/components/Goto.js';

# Constructing a Task from C Code <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/construct_c_task.ipynb" />

Workflows can incorporate functions written in different languages, for example when a compiled C function is used to optimize performance. This example demonstrates how to construct a Lepton from a compiled C function.

## Prerequisite

Writing a Covalent lepton for a C function presupposes that you have a compiled C function that you want to call from within a Python session. This example creates a simple C program for that purpose.

1. Write C source and header files for the program:

```python
c_source = """
#include "test.h"

void test_entry(int x, int *y, int *z)
{
        *y += x;
        *z = 5;
}
"""

c_header = """
void test_entry(int x, int *y, int *z);
"""

with open("test.c", "w") as f:
    f.write(c_source)

with open("test.h", "w") as f:
    f.write(c_header)
```

2. Compile the C source into a shared library:

```python
!gcc -shared -fPIC -o libtest.so test.c
```

3. Optionally, confirm that the entry-point function is exposed in the library:

```python
!nm -D libtest.so | grep 'T test_entry'
```

    error: nm: invalid argument -D

    Usage: nm [-agnopruUmxjlfAPL[s segname sectname] [-] [-t format] [[-arch <arch_flag>] ...] [file ...]

## Procedure

1. Construct a task that interfaces with the compiled function using a Covalent lepton object:

```python
import covalent as ct
from ctypes import POINTER, c_int32
import os

library_path = os.path.join(os.getcwd(),"libtest.so")

task = ct.Lepton(
    language = "C",
    library_name = library_path,
    function_name = "test_entry",
    argtypes = [                     # Type conversion info required by the lepton object
        (c_int32, ct.Lepton.INPUT),
        (POINTER(c_int32), ct.Lepton.INPUT_OUTPUT),
        (POINTER(c_int32), ct.Lepton.OUTPUT)
    ]
)
```

2. Use the lepton in the context of a lattice:

```python
@ct.lattice
def workflow(x: int, y: int) -> int:
    return task(x, y)

dispatch_id = ct.dispatch(workflow)(1, 2)
result = ct.get_result(dispatch_id, wait=True)
print(result.result)
```

    (3, 5)

Note that the return values consist of input-output and output-only variables. Output-only variables can only be scalars, since there is no way to to determine an output-only variable's array size. To return an array, declare it as an input-output variable and initialize it appropriately before passing it to the lepton.

## See Also

[Constructing a Lepton](/docs/user-documentation/how-to/construct-lepton)

[Covalent API: Lepton](/docs/user-documentation/api-reference/workflow-components#lepton)

[Constructing Tasks from Bash Scripts](/docs/user-documentation/how-to/construct-bash-task)
