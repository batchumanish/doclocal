---
displayed_sidebar: tutorialSidebar
title: Run a Bash Command
---

import Goto from '/src/components/Goto.js';

# Running a Bash Command <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/run_bash_command.ipynb" />

Run a Bash command that returns information from the OS.

### Procedure

1. Write a `lepton` that invokes a Bash command. This example returns the current version of the gcc compiler. More advanced (and useful) applications might invoke a Makefile or a build command on a remote development machine.


```python
import covalent as ct

task = ct.Lepton(
    language="bash",
    command="version=`gcc --version | awk 'NR==1 {{print $3}}'` \
        && IFS=. read major minor patch <<< $version \
    ",
    argtypes=[
        (str, ct.Lepton.INPUT_OUTPUT),
        (int, ct.Lepton.OUTPUT),
        (int, ct.Lepton.OUTPUT),
        (int, ct.Lepton.OUTPUT)
    ],
    named_outputs=["CPP", "major", "minor", "patch"]
)
```

The `named_outputs` parameter identifies the environment variables from which to read the script output. You must specify the output types in the `argtypes` array when constructing the Lepton. In this example, the gcc major version, minor version, and patch version are saved to the `read`, `minor`, and `patch` env variables respectively, and each is to be interpreted as a Python `int`.

2. Run the task and print the result:


```python
@ct.lattice
def version_workflow(**kwargs) -> str:
    return task(**kwargs)

result = ct.dispatch_sync(version_workflow)(CPP="gcc")
print(result)
```

    
    Lattice Result
    ==============
    status: FAILED
    result: None
    input args: []
    input kwargs: {'CPP': 'gcc'}
    error: Node version=`gcc --version | awk 'NR==1 {{print $3}}'`         && IFS=. read major minor patch <<< $version      failed: 
    Traceback (most recent call last):
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent_dispatcher/_core/execution.py", line 353, in _run_task
        output, stdout, stderr = await execute_callable()
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent/executor/base.py", line 387, in execute
        result = await self.run(function, args, kwargs, task_metadata)
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent/executor/executor_plugins/dask.py", line 112, in run
        result, worker_stdout, worker_stderr = await dask_client.gather(future)
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/distributed/client.py", line 2037, in _gather
        raise exception.with_traceback(traceback)
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent/executor/executor_plugins/dask.py", line 60, in dask_wrapper
        output = fn(*args, **kwargs)
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent/executor/base.py", line 92, in wrapper_fn
        output = fn(*new_args, **new_kwargs)
      File "/Users/mini-me/opt/anaconda3/lib/python3.9/site-packages/covalent/_workflow/lepton.py", line 368, in shell_wrapper
        getattr(builtins, self.argtypes[idx][0])(
    ValueError: invalid literal for int() with base 10: 'version'
    
    
    start_time: 2022-12-29 03:19:14.002622
    end_time: 2022-12-29 03:19:14.168102
    
    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/results
    dispatch_id: 502074bf-5b01-43db-8a44-30a34620f338
    
    Node Outputs
    ------------
    version=`gcc --version | awk 'NR==1 {{print $3}}'`         && IFS=. read major minor patch <<< $version     (0): None
    :parameter:gcc(1): gcc
    
    

The result is the version parsed from the output of `gcc --version`. 
