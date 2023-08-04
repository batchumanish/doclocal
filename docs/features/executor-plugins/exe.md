# Plugins

Covalent offers various plugins, starting with executor plugins. Executors are used to run tasks on the various kinds of backends. Executors decouple a task from hardware details by executing the task in a certain place in a certain way. For example, the *local* executor invokes the task on the user’s local computer. You can define custom executors to make Covalent compatible with any remote backend system. Covalent has a wide range of executor plugin libraries that connect to a variety of resources, from local Slurm clusters to cloud-based AWS, GCP, and Azure compute nodes and more.

**EXECUTOR PLUGINS**
* [Dask Executor](/docs/user-documentation/api-reference/executors/dask)
* [SSH Executor](/docs/user-documentation/api-reference/executors/ssh)
* [Slurm Executor](/docs/user-documentation/api-reference/executors/slurm)
* [AWS Plugins](/docs/features/executor-plugins/aws-plugins)
* [AWS EC2 Executor](/docs/user-documentation/api-reference/executors/awsec2)
* [AWS Lambda Executor](/docs/user-documentation/api-reference/executors/awslambda)
* [AWS Batch Executor](/docs/user-documentation/api-reference/executors/awsbatch)
* [AWS ECS Executor](/docs/user-documentation/api-reference/executors/awsecs)
* [AWS Braket Executor](/docs/user-documentation/api-reference/executors/aws-bracket)
* [Azure Batch Executor](/docs/user-documentation/api-reference/executors/azurebatch)
* [Google Batch Executor](/docs/user-documentation/gcp)

**QUANTUM EXECUTOR PLUGINS**
* [Qiskit Executor](/docs/user-documentation/api-reference/executors/qiskit)
* [IBM Quantum Executor](/docs/user-documentation/api-reference/executors/ibmq)
* [AWS Braket Qubit Executor](/docs/user-documentation/api-reference/executors/braketqubit)
* [Local Braket Qubit Executor](/docs/user-documentation/api-reference/executors/localqubit)
* [Simulator](/docs/user-documentation/api-reference/executors/simulator)