---
displayed_sidebar: tutorialSidebar
title: Executing Multiple Workflows (Lattices)
---

import Goto from '/src/components/Goto.js';

# Executing Multiple Workflows (Lattices) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/execute_multiple_lattices.ipynb" />

Execute multiple lattices from the same script.

In Covalent there is no reason that you cannot dispatch multiple lattices from the same script. Each dispatch is tracked separately and generates a different result set.

You might run two lattices from the same script if, for instance, the lattices represent two different approaches to the same problem and you want to programmatically compare the result sets.

## Prerequisites

[Start the Covalent services](/docs/user-documentation/how-to/execution/covalent-cli).

## Procedure

1. Write the lattices:

```python
import covalent as ct

INF_LIMIT = 50

# Calculate e based on a formula
@ct.electron
def e_exp(x):
    return (1 + 1/x) ** x

# Calculate e based on a series
@ct.electron
def e_ser(x):
    e_est = 1
    fact = 1
    for i in range(1, x):
        fact *= i
        e_est += 1/fact
    return e_est

@ct.lattice
def wf_exp(x):
    return e_exp(x)

@ct.lattice
def wf_ser(x):
    return e_ser(x)
```

2. Dispatch the lattices separately.

```python
wf_exp_id = ct.dispatch(wf_exp)(INF_LIMIT)
wf_ser_id = ct.dispatch(wf_ser)(INF_LIMIT)
```

3. Compare the results.

```python
r_exp = ct.get_result(wf_exp_id, wait=True)
r_ser = ct.get_result(wf_ser_id, wait=True)

print(r_exp.result)
print(r_ser.result)
```

    2.691588029073608
    2.7182818284590455

## See Also

[Looping](/docs/user-documentation/how-to/looping)

[Executing a Lattice Multiple Times](/docs/user-documentation/how-to/execution/execute-lattice-multiple-times)
