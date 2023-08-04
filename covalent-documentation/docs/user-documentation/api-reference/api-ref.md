---
title: Covalent API
displayed_sidebar: tutorialSidebar
---

The following API documentation describes how to use Covalent.

- [Electron](/docs/user-documentation/api-reference/electron) and [Lattice](/docs/user-documentation/api-reference/lattice) are used for constructing workflows
<!-- - [Local Executor](/docs/user-documentation/api-reference/executors/local) is used to execute electrons locally -->
- [File and Data Transfer](/docs/user-documentation/api-reference/taskhelpers#data-transfer) is used to queue remote or local file transfer operations prior or post electron execution.
- [File transfer strategies](/docs/user-documentation/api-reference/taskhelpers#file-transfer-strategies) are used to perform download/upload/copy operations over various protocols.
- [Dask Executor](/docs/user-documentation/api-reference/executors/dask) is used to execute electrons in a Dask cluster
- [Automate Repetitive Tasks with Triggers](/docs/features/triggers) are used to execute a workflow triggered by a specific type of event
- [Dependencies](/docs/user-documentation/api-reference/taskhelpers#dependencies) are used to specify any kind of electron dependency
- [Pip Dependencies](/docs/user-documentation/api-reference/cov-api#pip-dependencies) are used to specify PyPI packages that are required to run an electron
- [Bash Dependencies](/docs/user-documentation/api-reference/cov-api#bash-dependencies) are used to specify optional pre-execution shell commands for an electron
- [Call Dependencies](/docs/user-documentation/api-reference/cov-api#call-dependencies) are used to specify functions or dependencies that are called in an electron’s execution environment
- [Results](/docs/user-documentation/api-reference/results) is used for collecting and manipulating results
- [Dispatcher](/docs/user-documentation/api-reference/dispatcher) is used for dispatching workflows
- The [Covalent CLI Tool](/docs/user-documentation/api-reference/covalent-clitool) is used for interfacing with the Covalent server
- The cancelation API is used for canceling dispatches and individual tasks within a workflow
