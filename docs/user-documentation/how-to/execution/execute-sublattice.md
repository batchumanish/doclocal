---
displayed_sidebar: tutorialSidebar
title: Executing a Lattice as an Electron (Sublattice)
---

import Goto from '/src/components/Goto.js';

# Executing a Lattice as an Electron (Sublattice) <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/execute_sublattice.ipynb" />

You might want to encapsulate a computation that involves more than one electron and deploy it in workflows as a single unit. Wrap a lattice with the `@electron` decorator to run it as a self-contained unit in another lattice.

## Prerequisites

[Start the Covalent services](/docs/user-documentation/how-to/execution/covalent-cli).

## Procedure

1. Write a lattice.

```python
import covalent as ct

@ct.electron
def identity(x):
    return x

@ct.electron
def root(x):
    return x ** 0.5

@ct.electron
def square(x):
    return x * x

@ct.lattice
def multiply_3_and_square(x):
    root(x=x)
    return square(x=x * 3)
```

2. Make the lattice into an electron using the `@electron` decorator:

```python
# The same lattice, but decorated with @electron:
@ct.electron
@ct.lattice
def multiply_3_and_square(x):
    root(x=x)
    return square(x=x * 3)
```

3. Run the sublattice in another lattice as if it were any other electron:

```python
@ct.lattice
def workflow(a):
    val_1 = identity(x=a)
    return multiply_3_and_square(x=val_1)
```

Since the sublattice is also a lattice, you can pass constraints to it the same as you would [any other lattice](/docs/user-documentation/how-to/add-constraints-to-lattice).

4. Dispatch the top-level lattice (in this case `workflow`) and query the result.

```python
dispatch_id = ct.dispatch(workflow)(a=2)
print("Dispatch id:", dispatch_id)

result = ct.get_result(dispatch_id, wait=True)
print("Result of workflow:", result.result)
```

    Dispatch id: b1c7aadf-5a5a-4192-9674-d615c5150fb6
    Result of workflow: 36

The steps above show how to construct and deploy a sublattice. At this point, if everything works, you can use this sublattice in workflows as if it were an electron.

However, to troubleshoot the sublattice (or to examine its internals while you are developing it), you might need to examine intermediate results within the sublattice. The following steps show how to look at the results of the sublattice's component electrons.

5. Find the node ID of the sublattice using the `get_all_node_outputs()` function of the Covalent `Result` object:

```python
result.get_all_node_outputs()
```

    {'identity(0)': <covalent.TransportableObject at 0x11fc5a5b0>,
     ':parameter:2(1)': <covalent.TransportableObject at 0x11fc5ab80>,
     ':sublattice:multiply_3_and_square(2)': <covalent.TransportableObject at 0x11fc7f6a0>}

The number in parenthesis denotes the node ID. For the `identity` node, the ID is `0`. The ID of the sublattice `multiply_3_and_square` is `2`.

6. Use this information to query the sublattice's result using the result's `get_node_result` function:

```python
result.get_node_result(2)
```

    {'node_id': 2,
     'node_name': ':sublattice:multiply_3_and_square',
     'start_time': datetime.datetime(2023, 1, 31, 21, 17, 15, 551089, tzinfo=datetime.timezone.utc),
     'end_time': datetime.datetime(2023, 1, 31, 21, 17, 15, 750506, tzinfo=datetime.timezone.utc),
     'status': Status(STATUS='COMPLETED'),
     'output': <covalent.TransportableObject at 0x11fc7f6a0>,
     'error': None,
     'sublattice_result': <covalent._results_manager.result.Result at 0x11fc7f040>,
     'stdout': None,
     'stderr': None}

The `sublattice_result` value shows that a `Result` object is present. This is just like any other result object; the only difference is that it was returned by a sublattice.

7. Query the sublattice result:

```python
sublattice_result = result.get_node_result(2)["sublattice_result"]

sublattice_result.result
```

    36

8. Optionally, access all of the executions performed by the sublattice using `get_all_node_outputs()`:

```python
sublattice_result.get_all_node_outputs()
```

    {'root(0)': <covalent.TransportableObject at 0x11fc7f670>,
     ':parameter:2(1)': <covalent.TransportableObject at 0x11fc7f2e0>,
     'square(2)': <covalent.TransportableObject at 0x11fc7f7c0>,
     ':parameter:6(3)': <covalent.TransportableObject at 0x11fc7f730>}

## See Also

[Adding Constraints to Tasks and Workflows](/docs/user-documentation/how-to/add-constraints-to-lattice).
