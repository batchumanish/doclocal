# Effortlessly Leverage Heterogeneous Computing with Covalent Executors

Covalent Executors empower users to leverage the capabilities of heterogeneous computing environments by seamlessly running tasks across various backends such as quantum computers, HPC clusters, GPU arrays, and cloud services. By harnessing the power of Executors, Covalent enables you to optimize your workflows, achieve better performance, scalability, and resource utilization.

## Why Executors Matter

The ability to run tasks across various backends is essential for modern computing needs. Executors allow you to:

1. Effortlessly adapt your workload to various computing paradigms.
2. Leverage a wide range of backends to optimize performance.
3. Focus on your core tasks while Covalent handles the complexities.
4. Switch between backends with just a single line of code.

Without Covalent, users would need to handle the intricacies of each backend individually, often leading to time-consuming and error-prone processes. Covalent simplifies this by offering a unified abstracted interface, allowing users to switch between Executors with just a single line of code.

Covalent provides a wide range of executor plugin libraries that connect to various resources, including local clusters and cloud-based platforms such as AWS, GCP, and Azure. These plugins allow users to adapt their workflows to different computing environments and use the most suitable backend resources for their tasks. A prime example of the flexibility offered by Covalent Executors is the ability to perform cloud bursting from an on-premises cluster managed by Slurm to other cloud platforms. Cloud bursting enables users to offload tasks to external cloud resources when local resources are under heavy load or insufficient for handling the workload. Slurm Executors facilitate this process by allowing users to interface with HPC systems managed by Slurm and deploy workflows on both on-premises clusters and cloud resources seamlessly. Covalent Executors are designed for flexibility and extensibility, allowing users to create their own Executors to meet specific requirements, such as interfacing with a local machine (like our SSH Executor) or an HPC cluster with unique login requirements like 2FA.

## Using Executors in Your Workflow

Covalent offers various options to configure and use Executors. The default executor is a Dask cluster running on the Covalent server. However, you can create custom Executors or use built-in ones to suit your specific needs.

### Assigning Executors to Electrons

To use Executors, you simply need to create an Executor object and associate it with an electron. The assigned executor will manage the task execution, ensuring that the task is executed on the most suitable platform.

```python
@ct.electron(executor=gpu_executor)
def task(**params):
    ...
```

### Switching Between Executors

Switching between different Executor backends is as simple as modifying a single line of code. By adding a decorator and changing the Executor backend, you can quickly adapt your workload to the desired computing environment. Users can set default Executor parameters directly in the UI, allowing them to use the decorator without specifying parameters while still retaining the ability to override defaults when needed. This feature also enables users to employ the string representation of the executor without creating an executor object, as shown below.

```python
import covalent as ct

@ct.executor_decorator("local")
def my_task():
    # Your task implementation here

# Change the Executor to a remote one:
@ct.executor_decorator("awsbatch")
def my_task():
    # Your task implementation here
```

### Default Executors and Dask

Note that the default executor is not the local executor, but a Dask cluster running on the Covalent server. This is usually more efficient than native local execution for parallel tasks. You can also use the same Dask executor to send jobs to remote Dask clusters.

```python
@ct.electron(ct.executor.DaskExecutor(scheduler_address="tcp://127.0.0.1:55564"))
def my_custom_task(x, y):
    return x + y
```

## Executors Abstract Away Complexity

Managing diverse computing environments can be a daunting task. Covalent abstracts away the complexities associated with different paradigms, taking care of packaging, file management, and transfer mechanisms for you. This simplification allows you to focus on what matters most – your work.

## Covalent Cloud Executor

While open-source Executors enable users to interact with self made pre-existing or third-party-managed infrastructure, this can pose difficulties for those who want to leverage heterogeneous high compute systems but lack access to the necessary infrastructure. Covalent Cloud Executor is a managed executor that allows users to run tasks on Covalent's cloud infrastructure. This executor is ideal for users who want to experience Covalent without setting up their own infrastructure. Covalent Cloud seamlessly abstracts the underlying compute, enabling users to concentrate on their work. For example, users can easily run tasks requiring GPU and CPU resources by:

```python
from covalent_cloud import CloudExecutor

cloud_executor=CloudExecutor(num_gpu=4, num_cpu=64)

@ct.electron(executor=cloud_executor)
def my_task():
    # Your task implementation here
```

Please note that this executor is only accessible to users with a Covalent Cloud account and can only be dispatched using Covalent Cloud's dispatch function. To learn more about Covalent Cloud Executor, please visit [Covalent Cloud ](/docs/cloud/covalent_cloud_main).

## Further reading

- [Covalent Executors](/docs/user-documentation/concepts/covalent-basics#executor)
- [Covalent Executor Plugins](/docs/features/executor-plugins/exe)
- [Creating custom executor](/docs/user-documentation/how-to/how-to-guide)
