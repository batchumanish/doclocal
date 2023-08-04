---
displayed_sidebar: tutorialSidebar
title: Looping
---

import Goto from '/src/components/Goto.js';

# Looping <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/looping.ipynb" />

The design pattern shown below is encouraged (when possible) for deploying multiple experiments using the `for` loop. This enables the independent experiments to be performed in parallel rather than sequentially.

## Prerequisites

Define an experiment in an electron or sublattice.

```python
import covalent as ct
import random

@ct.electron
def experiment(min_max=[0, 99]):          # A simple experiment in an electron (with default parameter set)
    min, max = min_max[0], min_max[1]
    return random.randint(min, max)
```

## Procedure

1. Create a lattice from which to deploy multiple runs of your experiment.
2. In the lattice, loop through an iterable containing a complete set of experimental parameters for each run of the experiment.
3. Append the results of each run to a list of results. Since no single run of the experiment depends on the output of another run, Covalent parallelizes the loop and runs each experiment concurrently in its own executor (subject to limits imposed by the chosen executor pool).
4. Return the list of results.

```python
@ct.lattice
def run_experiment(experiment_params=[[0,99]]):  # 1. A lattice for the experiment
    res = []
    for params in experiment_params:             # 2. Loop through the experimental parameters
        res.append(experiment(params))           # 3. Append each result to a list
    return res                                   # 4. Return the results
```

Dispatch the lattice, supplying an iterable with the experimental parameters.

```python
dispatch_id = ct.dispatch(run_experiment)([[0,9],[10,19],[20,29],[30,39],[40,49]])
result = ct.get_result(dispatch_id, wait=True)
print(result)
```

    Lattice Result
    ==============
    status: COMPLETED
    result: [1, 15, 27, 31, 43]
    input args: ['[[0, 9], [10, 19], [20, 29], [30, 39], [40, 49]]']
    input kwargs: {}
    error: None

    start_time: 2023-01-29 21:24:39.654830
    end_time: 2023-01-29 21:24:40.186362

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/results
    dispatch_id: 9efced5d-5124-4fcc-aacb-5f544bdaf05b

    Node Outputs
    ------------
    experiment(0): 1
    :electron_list:(1): [0, 9]
    :parameter:0(2): 0
    :parameter:9(3): 9
    experiment(4): 15
    :electron_list:(5): [10, 19]
    :parameter:10(6): 10
    :parameter:19(7): 19
    experiment(8): 27
    :electron_list:(9): [20, 29]
    :parameter:20(10): 20
    :parameter:29(11): 29
    experiment(12): 31
    :electron_list:(13): [30, 39]
    :parameter:30(14): 30
    :parameter:39(15): 39
    experiment(16): 43
    :electron_list:(17): [40, 49]
    :parameter:40(18): 40
    :parameter:49(19): 49

## See Also

[Adding an Electron to a Lattice](/docs/user-documentation/how-to/add-electron-to-lattice)

[Constructing a Sublattice](#)
