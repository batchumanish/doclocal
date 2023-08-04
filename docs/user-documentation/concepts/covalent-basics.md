---
title: Covalent Basics
sidebar_label: Covalent Basics
displayed_sidebar: tutorialSidebar
---

import Adom from '/src/components/Adomonition';

This section briefly introduces the most important Python classes and functions of the Covalent SDK. These elements are key to how Covalent works.

## Electron

The simplest unit of computational work in Covalent is a task, called an electron, created in the Covalent API by using the `@covalent.electron` decorator on a function.

The `@covalent.electron` decorator makes the function runnable in a Covalent executor. It does not change the function in any other way.

Here is a simple electron that adds two numbers:

```py

    import covalent as ct

    @ct.electron
    def add(x, y):
        return x + y
```

For more about tasks written as electrons, see [Electron](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#electron) in [The Covalent SDK](/docs/user-documentation/concepts/covalent-arch/covalent-sdk).

## Quantum Electron

Covalent *quantum electrons* (or *QElectrons*) enable parallelizing and distributing quantum circuits across various local or remote backends. Currently quantum electrons work with Pennylane QNodes. QElectrons are called inside normal classical [electron](#electron) functions.

```py
# Apply the `ct.qelectron` decorator to create QElectrons from QNodes.

@ct.qelectron
@qml.qnode(qml.device('default.qubit', wires=WIRES))
def circuit(Z, Y):
    for i in range(WIRES - 1):
        qml.RZ(Z[i], wires=i)
        qml.CNOT(wires=[i, i+1])
        qml.RY(Y[i], wires=i+1)

    return qml.expval(qml.PauliZ(0) + qml.PauliZ(1))
```

*QElectrons* introduce concurrency out of the box, which can provide a speed boost for gradient calculations or measurements requiring independent evaluations.

Applying the `@ct.qelectron` decorator also enables *asynchronous* QNode calls for non-blocking execution different inputs. 

```py
# Asynchronously submit multiple circuits for concurrent execution.
futures = [circuit.run_later(Z, Y) for Z, Y in zip(Zs, Ys)]

# Retrieve results
results = [future.result() for future in futures]
```

For more information, see [Distributed Quantum Circuits with Quantum Electrons](/docs/features/quantumTasks).

## Lattice

A runnable workflow in Covalent is called a _lattice_, created with the `@covalent.lattice` decorator. A workflow is a sequence of tasks. In Covalent, then, a lattice contains calls to one or more electrons.

The example below is a simple lattice. The tasks are constructed first using the `@covalent.electron` decorator, then the `@covalent.lattice` decorator is applied on the workflow function that manages the tasks.

```py
    ## Cartesian example: electrons and lattice

    import covalent as ct
    import math

    @ct.electron
    def add(x, y):
        return x + y

    @ct.electron
    def square(x):
        return x**2

    @ct.electron
    def sqroot(x):
        return math.sqrt(x)

    @ct.lattice ## Compute the Cartesian distance between two points in 2D
    def cart_dist(x=0, y=0):
        x2 = square(x)
        y2 = square(y)
        sum_xy = add(x2, y2)
        return sqroot(sum_xy)

```

Notice that all the data manipulation in the lattice is done by electrons. The [How-to Guide](/docs/user-documentation/how-to/how-to-guide/) has articles on containing data manipulation within electrons.

For more about workflows written as lattices, see [Lattice](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#lattice) in [The Covalent SDK](/docs/user-documentation/concepts/covalent-arch/covalent-sdk).

## Dispatch

You dispatch a workflow in your Python code using the Covalent `dispatch()` function. For example, to dispatch the cart_dist lattice in the [Cartesian distance example](/docs/user-documentation/concepts/covalent-basics#lattice):

```py
    ## Send the run_experiment() lattice to the dispatch server
    dispatch_id = ct.dispatch(cart_dist)(x=3, y=4)
```

The dispatch server sends individual tasks to [executors](/docs/user-documentation/concepts/covalent-basics#executor).

## Re-Dispatch

A workflow that has been dispatched once can then be redispatched using the `covalent.redispatch()` command which allows:

1. Redefining particular tasks in the workflow.
2. Reusing previously executed results as much as possible.
3. Re-executing the workflow with different set of arguments.

Furthermore, redispatching does not rely on having the lattice object and only having access to the previous dispatch id suffices. This is convenient since the script required to initially dispatch a workflow is not required to be able to re-execute the workflow.

For example, you can redefine `add` to `weighted_sum_xy` and redispatch the workflow while reusing the previously computed results, with:

```py
@ct.electron
def weighted_sum_xy(x, y):
    return 0.5 * (x + y)


redispatch_id = ct.redispatch(
    dispatch_id,
    replace_electrons={'add': weighted_sum_xy},
    reuse_previous_results=True
)()
```

:::info Note
Redispatching does not allow altering function signatures when redefining tasks.
:::

For more on how the Covalent dispatcher analyzes and runs lattices, see Workflow Dispatch in [Covalent Services](/docs/user-documentation/concepts/covalent-arch/covalent-services).

## Cancelation

A workflow can be canceled in Covalent using the `covalent.cancel()` function as follows:

```py
@ct.lattice
def my_workflow(x):
	r1 = task1(x)
	...
	return result

dispatch_id = ct.dispatch(my_workflow)(10)

# Cancel the workflow using its dispatch id
ct.cancel(dispatch_id)
```

Individual tasks/electrons from within workflows can also be canceled by providing the task ids as follows

```py
ct.cancel(dispatch_id, task_ids=[0, 2, 5])
```

This will cancel processing of tasks `0, 2, 5` as soon as the cancelation request is received.

:::info Note
If a node in a workflow represents a sub-lattice then canceling that node would result in canceling all the tasks within that sub-lattice recursively since sub-lattices in Covalent are dynamically constructed at runtime
:::

## Result

Covalent stores the dispatch information and result of every lattice computation in a [Result](/docs/user-documentation/api-reference/dispatch-infrastructure#results) object that can be viewed in the Covalent GUI.

You can view the Result object in your notebook with `covalent.get_result()` function. For example, to view the Cartesian results, use:

```py

    ## Retrieve the Covalent Result object
    result = ct.get_result(dispatch_id=dispatch_id, wait=True)
```

For more on how the Covalent result manager saves and presents results, see [Results](/docs/user-documentation/concepts/covalent-arch/covalent-services#results) in [Covalent Services](/docs/user-documentation/concepts/covalent-arch/covalent-services).

## Executor

An executor runs a single task on a particular compute resource such as your local machine or an AWS cluster. Depending on how a lattice is written, a dispatcher might execute many electrons in parallel on several executors. The default executor is a Dask cluster running on the Covalent server.

For more on Covalent executors and how they run tasks, see [Executors](/docs/user-documentation/concepts/covalent-arch/covalent-services#executors) in [Covalent Services](/docs/user-documentation/concepts/covalent-arch/covalent-services).

## Sublattice

A sublattice is a lattice transformed into an electron by applying an electron decorator after applying the lattice decorator.

For example, suppose you want to compute multiple Cartesian distances. You can package the `cart_dist()` lattice as a sublattice, then call it just as you would an electron from another lattice:

```py

    @ct.electron
    @ct.lattice ## Compute the Cartesian distance between two points in 2D
    def cart_dist(x=0, y=0):
        x2 = square(x)
        y2 = square(y)
        sum_xy = add(x2, y2)
        return sqroot(sum_xy)

    def new_lattice(**kwargs):
...
```

For more about wrapping complex operations in sublattices, see [Sublattice](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#sublattice) in [The Covalent SDK](/docs/user-documentation/concepts/covalent-arch/covalent-sdk).
