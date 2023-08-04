---
title: Covalent Services
---

import Adom from '/src/components/Adomonition';

The Covalent server runs as a service on your local machine or on a server. The service contains a _dispatcher_ that analyzes workflows (lattices) and hands its component functions (electrons) off to _executors_. Each executor is an adaptor to a backend hardware resource. Covalent has a growing list of turn-key executors for common compute backends. If no executor exists yet for your compute platform, Covalent provides base classes for writing your own.

The examples that follow assume that the Covalent server is running locally. You start and manage the local server using the Covalent command-line interface (CLI) tool. (See also the [How-to Guide](/docs/user-documentation/how-to/execution/covalent-cli).)

## Transport Graph

Before executing the workflow, the dispatcher constructs a dependency graph of the tasks, called the _transport graph_. Transport graphs are _directed acyclic graphs_, which are a commonly used model for workflows. In this model, the nodes of the graph represent tasks and the edges represent dependencies.

The dispatcher constructs the transport graph by sequentially inspecting the electrons within the lattice. As each electron is examined, a corresponding node and its input-output relations are added to the transport graph. You can view the transport graph in the GUI.

## Workflow Dispatch

Recall that you dispatch a workflow in your Python code using the Covalent `dispatch()` function:

```py
# Send the run_experiment() lattice to the dispatch server

dispatch_id = ct.dispatch(run_experiment)(C=1.0, gamma=0.7)
```

The dispatcher ingests the workflow and generates a dispatch ID, then tags all information about the dispatched workflow with the dispatch ID. This information includes:

- The lattice definition
- Runtime parameters to the lattice
- Execution status
- Result output

… in short, everything about the instantiated workflow before, during, and after its execution. Every time you dispatch a workflow, all this information is saved and the process is executed on the server. This means that after the workflow is dispatched you can close the Jupyter notebook or console on which you ran the script. You can view information about the process in the [GUI](/docs/user-documentation/concepts/covalent-arch/covalent-gui).

Furthermore, when a workflow is redispatched:

```py
# Redispatch the run_experiment lattice to the dispatch server with an updated svm training task definition.

redispatch_id = ct.redispatch(
    dispatch_id,
    replace_electrons={'train_svm': train_svm_redefined},
    reuse_previous_results=True
)(),
```

the Covalent `redispatch` command prepares the lattice definition, runtime parameters etc. and triggers the dispatch command.

## Executors

An executor is responsible for taking a task – an [electron](/docs/glossary#electron) – and executing it on a particular platform in a certain way. For example, the _local_ executor invokes the task on your local computer. You can specify an executor as a parameter when you define an electron, or omit the parameter to use the default executor.

:::info Note
It would be reasonable to expect that the local executor is the default, but it is not. Instead, the local dispatch server starts a local [Dask](/docs/glossary#dask) cluster and, for any task not explicitly assigned an executor, queues the task to the Dask cluster. This is usually more efficient than native local execution for parallel tasks.
:::

For example, consider one of the electrons defined in the ML example:

```py
@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(X_test[:90], y_test[:90])
```

The definition uses the electron decorator without an executor parameter. By default, the dispatcher uses the Dask executor for that electron.

:::info Note
Covalent has executors for many backend platforms, but if you need an executor that does not yet exist, you can define a custom executors for any remote backend system. See [Executors](/docs/features/executor-plugins/exe) in the [API Reference](/docs/user-documentation/api-reference/cov-api) for a list of executors.
:::

Covalent enables you to break down your workflow by compute requirements. You can:

- Use different executors for every electron
- Change the executor of an electron simply by changing a parameter
- Pass custom executors to the dispatcher

For example, you might need to compute one task on a quantum platform and a different task on a GPU cluster:

```py
@ct.electron(executor=quantum_executor)
def task_1(**params):
    ...
    return val

@ct.electron(executor=gpu_executor)
def task_2(**params):
    ...
    return val
```

## Results

Covalent stores the result of every lattice computation in a [Result](/docs/user-documentation/api-reference/dispatch-infrastructure#results) object.

The `Result` object contains not just the computed return value of the lattice function, but dispatch-related data including task and workflow times and durations, return statuses, and references to the lattice and parameters that generated the dispatch.

### Workflow Result Collection

Regardless of the eventual workflow outcome, a `Result` object is created and associated with the dispatch ID upon dispatch and is updated as tasks complete.

The Covalent UI provides a list of dispatched workflows. As each workflow task is terminated, either due to an error, cancelation, or successful completion, the [result](/docs/user-documentation/concepts/covalent-arch/covalent-services#results) object is updated by the result manager.

### Result Manager

The Covalent server contains a Result Manager responsible for storing, updating, and retrieving workflow `Result` objects. The Result Manager sits between the dispatched `@lattice` and the `Result` object, storing the experiment result and decoupling it from the workflow defined in a Jupyter notebook or Python script.

This decoupling ensures that once the workflow has been dispatched, updated outcomes are viewable in the Covalent UI even without the original source code. Partial outcomes are recorded at every task completion and are available thereafter, even in the event of a hardware failure or other mishap.

You can retrieve the result object even if the computations have not completed by setting the `wait` parameter to `False` as shown here:

```py
dispatch_id = ct.dispatch(workflow)(**params)
result = ct.get_result(dispatch_id=dispatch_id, wait=False)
```
