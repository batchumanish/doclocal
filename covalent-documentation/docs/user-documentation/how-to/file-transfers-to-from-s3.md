---
displayed_sidebar: tutorialSidebar
title: Transferring Files To and From an S3 Bucket
---

import Goto from '/src/components/Goto.js';

# Transferring Files To and From an S3 Bucket <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/file_transfers_to_from_s3.ipynb" />

Retrieve files from an Amazon S3 bucket before executing a task, then upload files to an S3 bucket after the task's execution.

The following example workflow downloads an image file from an S3 bucket, processes the file's contents, then uploads the file back to the S3 bucket.

## Prerequisites

Upload a color image file to an S3 bucket. Make note of the unique S3 file path to use in the workflow.

In this example, the S3 file path is `s3://covalent-howto-tmp/remote_{unprocessed_filename}`, where `{unprocessed_filename}` is a variable containing the name of the file.

## Procedure

1. Define two Covalent `FileTransfer` objects and a Covalent `S3` strategy object.

```python
import covalent as ct
from typing import List, Tuple
from pathlib import Path
from skimage import io, color

strategy = ct.fs_strategies.S3()

unprocessed_filename = "unprocessed_file.png"
processed_filename = "processed_file.png"

unprocessed_filepath = str(Path(unprocessed_filename).resolve())
processed_filepath = str(Path(processed_filename).resolve())


s3_source_path = f"s3://covalent-howto-tmp/remote_{unprocessed_filename}"
s3_dest_path = f"s3://covalent-howto-tmp/remote_{processed_filename}"

ft_1 = ct.fs.FileTransfer(s3_source_path, unprocessed_filepath, strategy=strategy) # order defaults to BEFORE
ft_2 = ct.fs.FileTransfer(processed_filepath, s3_dest_path, strategy=strategy, order=ct.fs.Order.AFTER)

```

2. Define an electron to:
   1. Download the unprocessed file from S3
   2. Perform some processing on the contents
   3. Upload the processed file to S3

Access the file paths inside the electron as shown below using the "files" keyword argument. Covalent injects the source and destination file paths of the `FileTransfer` objects into the `files` argument. In this case, the `files` variable is a list of tuples of the form `(<source-path>, <destination-path>)`. The list looks something like this:

```python
[('/remote_unprocessed_file.png', '/path/to/current/dir/unprocessed_file.png'), ('/path/to/current/dir/processed_file.png', '/remote_processed_file.png')]
```

The S3 path is omitted from the remote path in the list; it is applied automatically by the `FileTransfer` objects.

```python
@ct.electron(files=[ft_1, ft_2]) # ft_1 is done before the electron is executed; ft_2 is done after.
def to_grayscale(files: List[Tuple[str]] = None):

    # Get the downloaded file's path
    image_path = files[0][1] # destination file path of first file transfer, downloaded before executing this electron

    # Convert the image to grayscale
    img = io.imread(image_path)[:, :, :3] # limiting image to 3 channels
    gray_img = color.rgb2gray(img)

    # Save the grayscale image to the upload file path
    gray_image_path = files[1][0] # source filepath of second file transfer, to be uploaded
    io.imsave(gray_image_path, gray_img)

```

3. Create and dispatch a lattice to run the electron.

```python
@ct.lattice
def process_s3_data():
    return to_grayscale()

dispatch_id = ct.dispatch(process_s3_data)()
status = ct.get_result(dispatch_id, wait=True).status
print(status)
```

    COMPLETED

Notes:

- This example illustrates a typical pattern in which files are downloaded from remote storage, are processed, and the results are uploaded to the same remote storage. Other scenarios can of course be implemented with the Covalent `FileTransfer`, `FileTransferStrategy`, and `@electron` components.
- The example puts all the tasks (file download, processing, file upload) in one electron. For a real-world scenario of any complexity, a better practice would be to put each task in its own electron.

## See Also

[Transferring Local Files During Workflows](/docs/user-documentation/how-to/file-transfers-for-workflows-local)

[Transferring Files To and From a Remote Host](/docs/user-documentation/how-to/file-transfers-to-from-remote)

[Transferring Files To and From Azure Blob Storage](/docs/user-documentation/how-to/file-transfers-to-from-azure_blob)