---
displayed_sidebar: tutorialSidebar
title: Constructing Tasks from Bash Scripts
---

import Goto from '/src/components/Goto.js';

# Constructing Tasks from Bash Scripts <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/construct_bash_task.ipynb" />

Run a Bash script from within a workflow.

## Prerequisites

Import `covalent`.

```python
import covalent as ct
```

## Procedure

This example returns the product of two numbers from a function in bash. The possible uses for this technique are endless. In software deployment scenario, for example, you could run a Makefile or a build command on a remote backend machine.

1. Define a Covalent `Lepton` object containing the Bash script you want to run.

```python
task = ct.Lepton(
    language="bash",
    command="product=$(({num_1} * {num_2}))",
    argtypes=[
        (int, ct.Lepton.INPUT_OUTPUT),
        (int, ct.Lepton.INPUT_OUTPUT),
        (int, ct.Lepton.OUTPUT)
    ],
    named_outputs=["num_1", "num_2", "product"]
)
```

2. Write a lattice to run the task, then dispatch it and print the result.

```python
@ct.lattice
def bash_multiply_workflow(**kwargs) -> str:
    return task(**kwargs)

result = ct.dispatch_sync(bash_multiply_workflow)(num_1=7, num_2=8).result
print(result)
```

    (7, 8, 56)

The output results from executing the command `product=$((7 * 8))`. The parameter values `num_1` and `num_2` is replaced during execution with the passed values 7 and 8. The `product` variable and operands are then returned as specified in `named_outputs`.

The `named_outputs` parameter tells Covalent the environment variables from which to read the script output. You must specify the corresponding types in `argtypes` when constructing the Lepton. In this example, the `num_1`, `num_2`, and `product` variables are all defined as integers.
