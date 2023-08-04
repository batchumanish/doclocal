---
displayed_sidebar: tutorialSidebar
title: Transferring Local Files During Workflows 
---

import Goto from '/src/components/Goto.js';

# Transferring Local Files During Workflows <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/file_transfers_for_workflows_local.ipynb" />

Transfer files locally before or after executing an electron.

## Prerequisites

1. For convenience in running this example, define the read (source) and write (destination) file paths.

```python
from pathlib import Path

# Define source and destination filepaths
source_filepath = Path('./my_source_file').resolve()
dest_filepath = Path('./my_dest_file').resolve()
```

2. Create a source file to transfer.

```python
# Create an example file
file_content = """Mares eat oats and does eat oats
And little lambs eat ivy ...
"""
with open(source_filepath, "w") as f:
    f.write(file_content)
```

## Procedure

1. Define a Covalent `FileTransfer` object, assigning the source and destination file paths respectively as its arguments.

```python
import covalent as ct

xfer = ct.fs.FileTransfer(str(source_filepath), str(dest_filepath))
```

2. Define a list of Covalent `FileTransfer` objects to assign to a task. (In this example, the list contains only the single `FileTransfer` named `xfer`.)

```python
ft_list = [xfer]
```

3. Define an electron that uses a Covalent `FileTransfer` task to read the source file and writes to the destination file, assigning the list containing the `FileTransfer` objects to the `files` argument of the electron decorator. (Note that the `files` argument takes a list of Covalent `FileTransfer` objects, _not_ files or path names.)

```python
@ct.electron(
        files = ft_list
)
def my_file_transfer_task(files):
    from_file, to_file = files[0]
    with open(to_file,'w') as f:
        for line in open(from_file, 'r'):
            f.write(line)
    return to_file
```

Here is the task definition again, with the three steps combined in the electron decorator. The `FileTransfer` defaults to the local `Rsync` strategy:

```python
import covalent as ct

@ct.electron(
        files=[ct.fs.FileTransfer(str(source_filepath), str(dest_filepath))] # defaults to Rsync
)
def my_file_transfer_task(files=[]):
    from_file, to_file = files[0]
    with open(to_file,'w') as f_to, open(from_file, 'r') as f_from:
        for line in f_from:
            f_to.write(line)
    return to_file
```

4. Run the electron thus created in a lattice:

```python
# Create and dispatch a workflow to transfer data from source to destination, and write to destination file

@ct.lattice()
def my_workflow():
    return my_file_transfer_task()

dispatch_id = ct.dispatch(my_workflow)()
```

5. Confirm the transfer by reading the contents of the destination file:
   After executing the workflow a copy of the file (`source_filepath`) has been written to `my_dest_file`. This file transfer occured before electron execution.

```python
result = ct.get_result(dispatch_id, wait=True)
print(result)
result_filepath = result.result

# Read from the destination file
print("Reading from ", result_filepath, "\n")
with open(result_filepath,'r') as f:
    print(f.read())

# Clean up files
source_filepath.unlink()
dest_filepath.unlink()
```

    Lattice Result
    ==============
    status: COMPLETED
    result: /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/my_dest_file
    input args: []
    input kwargs: {}
    error: None

    start_time: 2023-01-29 22:18:07.789282
    end_time: 2023-01-29 22:18:07.914328

    results_dir: /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/results
    dispatch_id: 024088b9-6f74-4e5f-9757-9f088bd16b29

    Node Outputs
    ------------
    my_file_transfer_task(0): /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/my_dest_file

    Reading from  /Users/mini-me/agnostiq/covalent/doc/source/how_to/coding/my_dest_file

    Mares eat oats and does eat oats
    And little lambs eat ivy ...

## See Also

[Transferring Remote Files During Workflows](/docs/user-documentation/how-to/file-transfers-to-from-remote)

[Transferring Files to and from an S3 Bucket](/docs/user-documentation/how-to/file-transfers-to-from-s3)

