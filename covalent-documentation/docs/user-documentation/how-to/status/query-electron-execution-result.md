---
displayed_sidebar: tutorialSidebar
title: Querying the Results of All Tasks (Electrons) in a Workflow
---

import Goto from '/src/components/Goto.js';

# Querying the Results of All Tasks (Electrons) in a Workflow <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/collection/query_electron_execution_result.ipynb" />

Query the result values of all electrons in a lattice at once.

### Prerequisites

Create and dispatch a lattice.

```python
import covalent as ct

@ct.electron
def add(x, y):
    return x + y

@ct.electron
def multiply(x, y):
    return x * y

@ct.lattice
def workflow(x, y):
    res_1 = add(x=x, y=y)
    return multiply(x=res_1, y=y)

dispatch_id = ct.dispatch(workflow)(x=2, y=3)
```

## Procedure

1. Retrieve the workflow result object using the Covalent `get_result()` function.

```python
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
```

2. Query the electron executions using the `get_all_node_ouputs()` method.

```python
result.get_all_node_outputs()
```

    {'add(0)': <covalent.TransportableObject at 0x11a79d400>,
     ':parameter:2(1)': <covalent.TransportableObject at 0x11a79d8e0>,
     ':parameter:3(2)': <covalent.TransportableObject at 0x11a79de50>,
     'multiply(3)': <covalent.TransportableObject at 0x11aab7640>,
     ':parameter:3(4)': <covalent.TransportableObject at 0x11ab01280>}

3. Note the ID number of the nodes in which you are interested. The node ID is in parentheses after the node name.

   The list of nodes contains both electrons and parameters. In this example, node 0 and node 3 (`add` and `multiply`, respectively) are electrons.

4. Use the `result.get_node_result()` function to examine the result of an individual node.

```python
result.get_node_result(node_id=0)
```

    {'node_id': 0,
     'node_name': 'add',
     'start_time': datetime.datetime(2023, 2, 1, 21, 9, 0, 618814, tzinfo=datetime.timezone.utc),
     'end_time': datetime.datetime(2023, 2, 1, 21, 9, 0, 680075, tzinfo=datetime.timezone.utc),
     'status': Status(STATUS='COMPLETED'),
     'output': <covalent.TransportableObject at 0x11a79d400>,
     'error': None,
     'sublattice_result': None,
     'stdout': '',
     'stderr': ''}

### See Also

[Querying the Status of an Electron](/docs/user-documentation/how-to/status/query-electron-execution-status)
