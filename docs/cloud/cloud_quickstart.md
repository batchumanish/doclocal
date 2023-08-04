# Getting Started

Hello and welcome! This guide will help you dive right in and get your first workflow up and running in no time. Let's go!

## Step 1: Sign Up

Create your account at **[Covalent](https://app.covalent.xyz/)**. Once done, grab your API key from the dashboard. This is your personal access code to all the fantastic features Covalent has to offer.

```python
import covalent_cloud as cc
cc.save_api_key("YOUR_API_KEY")
```

## Step 2: Define Your Environments

Environments represent the libraries and packages your computations need. Let's set them up. This is a one-time process, and you can always refer to them by name later in your code.

```python
cc.create_env("pandas_env", pip=["numpy", "pandas"], conda=["python=3.8", "pip"])
cc.create_env("sklearn_env", pip=["scikit-learn"], conda=["python=3.8", "pip"])
cc.create_env("scipy_env", pip=["scipy"], conda=["python=3.8", "pip"])
```

## Step 3: Define Your Executors

Executors manage the computational resources required for your tasks. Here, we are setting up three executors with varying resources.

```python
high_compute = cc.CloudExecutor(env="pandas_env", num_cpus=3, memory=1024)
low_compute = cc.CloudExecutor(env="sklearn_env", num_cpus=1, memory=1024)
general_compute = cc.CloudExecutor(env="scipy_env", num_cpus=2, memory=1024)
```

## Step 4: Define Your Computations

With our environments and executors set up, we can now define some computations. We use the **`@ct.electron`** decorator to define these tasks.

```python
import covalent as ct

@ct.electron(executor=high_compute)
def add(x, y):
    import pandas as pd
    s = pd.Series([x, y])
    return s.sum()

@ct.electron(executor=low_compute)
def multiply(x, y):
    return x * y

@ct.electron(executor=general_compute)
def divide(x, y):
    return x / y
```

## Step 5: Create Your Workflow

We are now ready to bring together our computations into a workflow using the **`@ct.lattice`** decorator.

:::info Note
Unlike Open-Source, it is important to define lattice’s default executor (which needs to be a Covalent Cloud executor), for all tasks that might be generated on the fly and also `workflow_executor` which takes care of tasks that are generated dynamically.
:::

```python
@ct.lattice(executor=low_compute, workflow_executor=low_compute)
def workflow(x, y):
    r1 = add(x, y)
    r2 = [multiply(r1, y) for _ in range(4)]
    r3 = [divide(x, value) for value in r2]
    return r3
```

## Step 6: Dispatch Your Workflow and Get Results

Let's get your workflow in motion! Dispatch your workflow, wait for the computation, and fetch your results.

```python
run_id = cc.dispatch(workflow)(1, 2)
result = cc.get_result(run_id)
print(result.result)
```

And there you have it! You've successfully set up and run your first computational workflow on Covalent Cloud. We're thrilled to see where your computations take you next!

<details>
<summary>Full code</summary>
<div>

```python
import covalent as ct
import covalent_cloud as cc

# Save API Key

cc.save_api_key("YOUR_API_KEY")

# Define Environments

cc.create_env("pandas_env", pip=["numpy", "pandas"], conda=["python=3.8", "pip"])
cc.create_env("sklearn_env", pip=["scikit-learn"], conda=["python=3.8", "pip"])
cc.create_env("scipy_env", pip=["scipy"], conda=["python=3.8", "pip"])

# Define Executors

high_compute = cc.CloudExecutor(env="pandas_env", num_cpus=3, memory=1024)
low_compute = cc.CloudExecutor(env="sklearn_env", num_cpus=1, memory=1024)
general_compute = cc.CloudExecutor(env="scipy_env", num_cpus=2, memory=1024)

# Define Computations

@ct.electron(executor=high_compute)
def add(x, y):
import pandas as pd
s = pd.Series([x, y])
return s.sum()

@ct.electron(executor=low_compute)
def multiply(x, y):
return x \* y

@ct.electron(executor=general_compute)
def divide(x, y):
return x / y

# Create Workflow

@ct.lattice(executor=low_compute, workflow_executor=low_compute)
def workflow(x, y):
r1 = add(x, y)
r2 = [multiply(r1, y) for * in range(4)]
r3 = [divide(x, value) for value in r2]
return r3

# Dispatch Workflow and Get Results

run_id = cc.dispatch(workflow)(1, 2)
result = cc.get_result(run_id)
print(result.result)

```

</div>
</details>

Just replace "YOUR_API_KEY" with your actual API key and you're good to go. Happy computing!
