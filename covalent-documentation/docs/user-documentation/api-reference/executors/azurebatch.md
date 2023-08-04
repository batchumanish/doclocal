---
title: Azure Batch Executor
displayed_sidebar: tutorialSidebar
---
import cov from '@site/static/img/assets/Azure_Batch.png';

# Azure Batch executor

<img src={cov} />

Covalent Azure Batch executor is an interface between Covalent and [Microsoft Azure Batch](https://azure.microsoft.com/en-us/products/batch/#overview). This executor allows execution of Covalent tasks on Azure’s Batch service.

The batch executor is well suited for compute/memory intensive tasks since the resource pool of compute virtual machines can be scaled accordingly. Furthermore, Azure Batch allows running tasks in parallel on multiple virtual machines and their scheduling engine manages execution of the tasks.


## 1. Installation


To use this plugin with Covalent, simply install it using `pip`:

```
pip install covalent-azurebatch-plugin
```

## 2. Usage Example

In this example, we train a Support Vector Machine (SVM) using an instance of the Azure Batch executor. The `train_svm` electron is submitted as a batch job in an existing Azure Batch Compute environment. Note that we also require [DepsPip](/docs/user-documentation/concepts/concepts-index) in order to install the python package dependencies before executing the electron in the batch environment.

```py
from numpy.random import permutation
from sklearn import svm, datasets
import covalent as ct

from covalent.executor import AzureBatchExecutor

deps_pip = ct.DepsPip(
    packages=["numpy==1.22.4", "scikit-learn==1.1.2"]
)

executor = AzureBatchExecutor(
    tenant_id="tenant-id",
    client_id="client-id",
    client_secret="client-secret",
    batch_account_url="https://covalent.eastus.batch.azure.com",
    batch_account_domain="batch.core.windows.net",
    storage_account_name="covalentbatch",
    storage_account_domain="blob.core.windows.net",
    base_image_uri="covalent.azurecr.io/covalent-executor-base:latest",
    pool_id="covalent-pool",
    retries=3,
    time_limit=300,
    cache_dir="/tmp/covalent",
    poll_freq=10
)

# Use executor plugin to train our SVM model
@ct.electron(
    executor=executor,
    deps_pip=deps_pip
)
def train_svm(data, C, gamma):
    X, y = data
    clf = svm.SVC(C=C, gamma=gamma)
    clf.fit(X[90:], y[90:])
    return clf

@ct.electron
def load_data():
    iris = datasets.load_iris()
    perm = permutation(iris.target.size)
    iris.data = iris.data[perm]
    iris.target = iris.target[perm]
    return iris.data, iris.target

@ct.electron
def score_svm(data, clf):
    X_test, y_test = data
    return clf.score(
        X_test[:90],y_test[:90]
    )

@ct.lattice
def run_experiment(C=1.0, gamma=0.7):
    data = load_data()
    clf = train_svm(
        data=data,
        C=C,
        gamma=gamma
    )
    score = score_svm(
        data=data,
        clf=clf
    )
    return score

# Dispatch the workflow.
dispatch_id = ct.dispatch(run_experiment)(
        C=1.0,
        gamma=0.7
)

# Wait for our result and get result value
result = ct.get_result(dispatch_id, wait=True).result

print(result)
```

During the execution of the workflow, one can navigate to the UI to see the status of the workflow. Once completed, the above script should also output a value with the score of our model.

```py
0.8666666666666667
```

## 3. Overview of Configuration

<div class="tables down">

| Config Key             | Required | Default                | Description                           |
| ---------------------- | -------- | ---------------------- | ------------------------------------- |
| tenant_id              | Yes      | None                   | Azure tenant ID                       |
| client_id              | Yes      | None                   | Azure client IDcalls                  |
| client_secret          | Yes      | None                   | Azure client secret                   |
| batch_account_url      | Yes      | None                   | Azure Batch account URL               |
| batch_account_domain   | No       | batch.core.windows.net | Azure Batch account domain            |
| storage_account_name   | Yes      | None                   | Azure Storage account name            |
| storage_account_domain | No       | blob.core.windows.net  | Azure Storage account domain          |
| base_image_uri         | No       | covalent.azurecr.io/covalent-executor-base:latest                   | Image used to run Covalent tasks                   |
| pool_id                | Yes      | None                   | Azure Batch pool ID                   |
| retries                | No       | 3                      | Number of retries for Azure Batch job |
| time_limit             | No       | 300                    | Time limit for Azure Batch job        |
| cache_dir              | No       | /tmp/covalent          | Directory to store cached files       |
| poll_freq              | No       | 10                     | Polling frequency for Azure Batch job |

</div>

1. Configuration options can be passed in as constructor keys to the executor class `ct.executor.AzureBatchExecutor`

2. By modifying the [covalent configuration file](/docs/user-documentation/how-to/customization) under the section `[executors.azurebatch]`

The following shows an example of how a user might modify their [covalent configuration file](/docs/user-documentation/how-to/customization) to support this plugin:

```py
[executors.azurebatch]
tenant_id="tenant-id",
client_id="client-id",
client_secret="client-secret",
batch_account_url="https://covalent.eastus.batch.azure.com",
batch_account_domain="batch.core.windows.net",
storage_account_name="covalentbatch",
storage_account_domain="blob.core.windows.net",
base_image_uri="my-custom-base-image",
pool_id="covalent-pool",
retries=5,
time_limit=500,
...
```

### Custom Containers

In some cases, users may wish to specify a custom base image for Covalent tasks running on Azure Batch.  For instance, some orgazations may have pre-built environments containing application runtimes that may be otherwise difficult to configure at runtime. Similarly, some packages may be simple to install but greatly increase the memory and runtime overhead for a task. In both of these scenarios, custom containers can simplify the user experience.

To incorporate a custom container that can be used by Covalent tasks on Azure Batch, first locate the Dockerfile packaged with this plugin in `covalent_azurebatch_plugin/assets/infra/Dockerfile`.  Assuming the custom container already has a compatible version of Python installed (specifically, the same version used by the Covalent SDK), build this image using the command

```bash
    # Login to ACR registry first
    acr login --name=<my_custom_registry_name>
    # Build the combined image used by tasks
    docker build --build-arg COVALENT_BASE_IMAGE=<my_custom_image_uri> -t <my_custom_registry_name>.azurecr.io/<my_custom_image_name>:latest .
    # Push to the registry
    docker push <my_custom_registry_name>.azurecr.io/<my_custom_image_name>:latest
```

where `my_custom_image_uri` is the fully qualified URI to the user's image, `my_custom_registry_name` is the name of the ACR resource created during deployment of the resources below, and `my_custom_image_name` is the name of the output which contains both Covalent and the user's custom image dependencies. Users would then use `base_image_name=<my_custom_registry_name>.azurecr.io/<my_custom_image_name>:latest` in the Azure Batch executor or associated configuration.

## 4. Required Cloud Resources

In order to use this plugin, the following Azure resources need to be provisioned first. These resources can be created using the [Azure Portal](https://learn.microsoft.com/en-us/azure/batch/batch-account-create-portal) or the Azure CLI.

<div class="tables down">

| Resource  | Is Required | Config Key             | Description                                                                                                                                                                                                                                                       |
| ------------------ | ----------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Batch Account      | Yes         | `batch_account_url`    | A [batch account](https://learn.microsoft.com/en-us/azure/batch/accounts) is required to submit jobs to Azure Batch. The URL can be found under the _Account endpoint_ field in the Batch account. Furthermore, ensure that `https://` is prepended to the value. |
| Storage Account    | Yes         | `storage_account_name` | [Storage account](https://learn.microsoft.com/en-us/azure/batch/accounts) must be created with blob service enabled in order for covalent to store essential files that are needed during execution.                                                              |
| Resource Group     | Yes         | N/A                    | The resource group is a logical grouping of Azure resources that can be managed as one entity in terms of lifecycle and security.                                                                                                                                 |
| Container Registry | Yes         | N/A                    | Container registry is required to store any custom containers used to run Batch jobs.                                                                                                                                                                           |
| Pool ID            | Yes         | `pool_id`              | A [pool](https://docs.microsoft.com/en-us/azure/batch/batch-pool-vm-sizes) is a collection of compute nodes that are managed together. The pool ID is the name of the pool that will be used to execute the jobs.                                                                                                                     |

</div>

## 5. TroubleShooting

More information on authentication with service principals and necessary permissions for this executor can be found [here](https://learn.microsoft.com/en-us/azure/batch/batch-aad-auth#use-a-service-principal).

For more information on error handling and detection in Batch, refer to the [Microsoft Azure documentation](https://learn.microsoft.com/en-us/azure/batch/error-handling). Furthermore, information on best practices can be found [here](https://learn.microsoft.com/en-us/azure/batch/covalent-patterns/best-practices).