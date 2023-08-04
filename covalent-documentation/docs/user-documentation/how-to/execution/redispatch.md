---
displayed_sidebar: tutorialSidebar
title: Re-executing a Workflow
---

import Goto from '/src/components/Goto.js';

# Re-executing a Workflow <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/execution/redispatch.ipynb" />

Use the Covalent `redispatch` command to re-execute a workflow with:

- New input parameters
- Updated or replacement task definitions

Optionally, you can reuse previous results as well.

## Prerequisites

Run the Covalent server.

## Procedure

Construct a workflow.

```python
import covalent as ct
import covalent._dispatcher_plugins

@ct.electron
def task_0(a):
    return a


@ct.electron
def task_1(a, b):
    return a + b


@ct.electron
def task_2(a, b):
    return a / b

# For demonstrating redispatch
@ct.electron
def task_2_redefined(a, b):
    return a * b


@ct.lattice
def workflow(a, b):
    res_0 = task_0(a)
    res_1 = task_1(res_0, b)
    res_2 = task_2(res_1, b)
    return res_2

```

2. Dispatch the workflow.

```python
dispatch_id = ct.dispatch(workflow)(1, 2) # Input parameters are a=1, b=2
print(f"Dispatch id: {dispatch_id}")
result = ct.get_result(dispatch_id, wait=True)
print(f"Workflow execution status: {result.status}")
print(f"Workflow output: {result.result}")

```

    Dispatch id: f6553e74-86dc-4ed7-9f38-6c3c71b6ebb7
    Workflow execution status: COMPLETED
    Workflow output: 1.5

3. Use the Covalent `redispatch` function to redispatch the workflow, replacing one or more of the tasks. (One task is replaced in these demos. In practice you can re-execute any number of tasks.)

Three cases are illustrated below:

1. Using the previous input parameters.
2. Reusing (where possible) previous task results.
3. Using new input parameters.

### 1. Using the previous input parameters

Leave the input parameters empty to dispatch the workflow with the previous input parameters.

```python
redispatch_id = ct.redispatch(
    dispatch_id,
    replace_electrons={"task_2": task_2_redefined}
)()
print(f"Redispatch id: {redispatch_id}")
result = ct.get_result(redispatch_id, wait=True)
print(f"Redispatched workflow execution status: {result.status}")
print(f"Redispatched workflow output: {result.result}")

```

    Redispatch id: 3c3be52a-4ee7-4b17-9732-c12334530839
    Redispatched workflow execution status: COMPLETED
    Redispatched workflow output: 6

### 2: Reusing the previous task results

Set the keyword argument `reuse_previous_results` to `True` to reuse computed results wherever possible. The`reuse_previous_results` flag defaults to `False`, so you must explicitly set it to `True` to reuse results.

Warning: When the workflow involves stochastic results (values that are randomly generated or computed from randomly generated values), do not set `reuse_previous_results` to `True`.

```python
redispatch_id = ct.redispatch(
    dispatch_id,
    replace_electrons={"task_2": task_2_redefined},
    reuse_previous_results=True
)()
print(f"Redispatch id: {redispatch_id}")
result = ct.get_result(redispatch_id, wait=True)
print(f"Redispatched workflow execution status: {result.status}")
print(f"Redispatched workflow output: {result.result}")

```

    Redispatch id: 52230138-e415-44c8-bd4c-f4986beb0601
    Redispatched workflow execution status: COMPLETED
    Redispatched workflow output: 6

The following code compares the start and end times times of the reused results to demonstrate that the tasks were not re-run.

```python
# If previous results were reused to compute res_0 and res_1, execution time of the tasks should be 0
# and the following two statements should be `True`.

print(result.get_node_result(0)["start_time"] == result.get_node_result(0)["end_time"])
print(result.get_node_result(2)["start_time"] == result.get_node_result(2)["end_time"])

```

    True
    True

### 3. Using new input parameters

To evaluate the workflow with new input parameters, pass a new set of parameters in the `ct.dispatch` command.

```python
redispatch_id = ct.redispatch(
    dispatch_id,
    replace_electrons={"task_2": task_2_redefined},
    reuse_previous_results=True
)(1, 4)  # Input parameters are a=1 (same as before), b=4 (different)

print(f"Redispatch id: {redispatch_id}")
result = ct.get_result(redispatch_id, wait=True)
print(f"Redispatched workflow execution status: {result.status}")
print(f"Redispatched workflow output: {result.result}")

```

    Redispatch id: 57ab8b01-e6ee-454e-bd45-9122d750df33
    Redispatched workflow execution status: COMPLETED
    Redispatched workflow output: 20

With `reuse_previous_results` set to `True`, only results that depend on the new input parameters are recomputed. In this case `res_0` is reused; `res_1` is recomputed since one of its arguments, `b`, is changed.

Note that `res_0` is reused based on a comparison of its arguments: Covalent doesn't just recompute the results because the arguments were resubmitted. Instead, it sees that the resubmitted argument `a` is identical and thus correctly concludes that there is no need to recompute `res_0`.

```python
# res_0 was reused; res_1 was recomputed since the value of b changed.

print(result.get_node_result(0)["start_time"] == result.get_node_result(0)["end_time"])
print(result.get_node_result(2)["start_time"] == result.get_node_result(2)["end_time"])
```

    True
    False
