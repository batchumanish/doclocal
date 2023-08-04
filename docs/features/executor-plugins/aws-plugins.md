---
title: AWS Plugins
displayed_sidebar: tutorialSidebar
---

import Back from '@site/static/img/executorAssets/AWS_Plugins.png';
import code from '@site/static/img/executorAssets/covalent-ec2-code-example.png';
import batch from '@site/static/img/executorAssets/Batch.png';
import braket from '@site/static/img/executorAssets/Braket.png';
import ec2 from '@site/static/img/executorAssets/EC2.png';
import ecs from '@site/static/img/executorAssets/ECS.png';
import lambda from '@site/static/img/executorAssets/Lambda.png';
import Plugingrid from '/src/components/Plugingrid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src='/img/executorAssets/AWS_Plugins.png'/>

[Covalent](https://github.com/AgnostiqHQ/covalent) is a python based workflow orchestration tool used to execute HPC and quantum tasks in heterogenous environments.

By installing Covalent AWS Plugins users can leverage a broad plugin ecosystem to execute tasks using AWS resources best fit for each task.

<Plugingrid code={code}/>

If you’re new to covalent visit our [Getting Started Guide](/docs/get-started/quick-start).

## 1. Installation

To use the AWS plugin ecosystem with Covalent, simply install it with `pip`:

```bash
pip install "covalent-aws-plugins[all]"
```

This will ensure that all the AWS executor plugins listed below are installed.

:::info Note
Users will require [Terraform](https://www.terraform.io/downloads) to be installed in order to use the EC2 plugin.
:::

## 2. Included Plugins

While each plugin can be separately installed installing the above pip package installs all of the below plugins.

<div className="tables">

|       Plugins       | Plugin Name         | Use Case                                                                                                                                                                              |
| :-----------------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={batch}/>  | AWS Batch Executor  | ** Useful for heavy compute workloads (high CPU/memory). ** Tasks are queued to execute in the user defined Batch compute environment.                                                |
|  <img src={ec2}/>   | AWS EC2 Executor    | **General purpose compute workloads where users can select compute resources. ** An EC2 instance is auto-provisioned using Terraform with selected compute settings to execute tasks. |
| <img src={braket}/> | AWS Braket Executor | **Suitable for Quantum/Classical hybrid workflows. ** Tasks are executed using a combination of classical and quantum devices.                                                        |
|  <img src={ecs}/>   | AWS ECS Executor    | ** Useful for moderate to heavy workloads (low memory requirements). ** Tasks are executed in an AWS ECS cluster as containers.                                                       |
| <img src={lambda}/> | AWS Lambda Executor | ** Suitable for short lived tasks that can be parallalized (low memory requirements). ** Tasks are executed in serverless AWS Lambda functions.                                       |

</div>

## 3. Usage Example

- Firstly, import covalent

```py
import covalent as ct
```

- Secondly, define your executor

<Tabs>
  <TabItem value="Batch" label="Batch" default>

```py
executor = ct.executor.AWSBatchExecutor(
    s3_bucket_name = "covalent-batch-qa-job-resources",
    batch_job_definition_name = "covalent-batch-qa-job-definition",
    batch_queue = "covalent-batch-qa-queue",
    batch_execution_role_name = "ecsTaskExecutionRole",
    batch_job_role_name = "covalent-batch-qa-job-role",
    batch_job_log_group_name = "covalent-batch-qa-log-group",
    vcpu = 2, # Number of vCPUs to allocate
    memory = 3.75, # Memory in GB to allocate
    time_limit = 300, # Time limit of job in seconds
)
```

  </TabItem>
  <TabItem value="EC2" label="EC2">

```py
executor = ct.executor.EC2Executor(
    instance_type="t2.micro",
    volume_size=8, #GiB
    ssh_key_file="~/.ssh/ec2_key"
)
```

  </TabItem>
  <TabItem value="Braket" label="Braket">

```py
executor = ct.executor.BraketExecutor(
    s3_bucket_name="braket_s3_bucket",
    ecr_repo_name="braket_ecr_repo",
    braket_job_execution_role_name="covalent-braket-iam-role",
    quantum_device="arn:aws:braket:::device/quantum-simulator/amazon/sv1",
    classical_device="ml.m5.large",
    storage=30,
)
```

  </TabItem>
  <TabItem value="ECS" label="ECS">

```py
executor = ct.executor.ECSExecutor(
    s3_bucket_name="covalent-fargate-task-resources",
    ecr_repo_name="covalent-fargate-task-images",
    ecs_cluster_name="covalent-fargate-cluster",
    ecs_task_family_name="covalent-fargate-tasks",
    ecs_task_execution_role_name="ecsTaskExecutionRole",
    ecs_task_role_name="CovalentFargateTaskRole",
    ecs_task_subnet_id="subnet-000000e0",
    ecs_task_security_group_id="sg-0000000a",
    ecs_task_log_group_name="covalent-fargate-task-logs",
    vcpu=1,
    memory=2
)
```

  </TabItem>
  <TabItem value="Lambda" label="Lambda">

```py
executor = ct.executor.AWSLambdaExecutor(
    lambda_role_name="CovalentLambdaExecutionRole",
    s3_bucket_name="covalent-lambda-job-resources",
    timeout=60,
    memory_size=512
)
```

  </TabItem>
</Tabs>

- Lastly, define a workflow to execute a particular task using one of the above executors

```py
@ct.electron(
    executor=executor
)
def compute_pi(n):
    # Leibniz formula for π
    return 4 * sum(1.0/(2*i + 1)*(-1)**i for i in range(n))

@ct.lattice
def workflow(n):
    return compute_pi(n)


dispatch_id = ct.dispatch(workflow)(100000000)
result = ct.get_result(dispatch_id=dispatch_id, wait=True)
print(result.result)

```

Which should output

```py
3.141592643589326
```
