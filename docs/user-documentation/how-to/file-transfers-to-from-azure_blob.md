---
displayed_sidebar: tutorialSidebar
title: Transferring Files To and From Azure Blob Storage
---

# Transferring Files To and From Azure Blob Storage

Retrieve files from an Azure Blob Storage container before executing a task, then upload files to a storage container after the task's execution.

The following example workflow downloads an image file from a storage container, processes the file's contents, then uploads the file back to the storage container.

### Prerequisites

Upload a color image file to a storage container. Make note of the blob URI to use in the workflow, in the format `https://<storage_account_name>.blob.core.windows.net/<container_name>/<blob_name>`.

In this example, the blob URI is `https://covalenthowto.blob.core.windows.net/howto/remote_{unprocessed_filename}`, where `{unprocessed_filename}` is a variable containing the name of the file.

Additionally, create a service principal whose credentials will be used to authenticate to the storage account.

### Procedure

1. Define two Covalent `FileTransfer` objects and a Covalent `Blob` strategy object. In this example, we will be using factory classes `TransferFromRemote` and `TransferToRemote` which generate `FileTransfer` objects.

```python
import covalent as ct
from typing import List, Tuple
from pathlib import Path
from skimage import io, color

strategy = ct.fs_strategies.Blob(
    client_id="my-sp-client-id",
    client_secret="my-sp-client-secret",
    tenant_id="my-aad-tenant-id",
)

unprocessed_filename = "unprocessed_file.png"
processed_filename = "processed_file.png"

unprocessed_filepath = str(Path(unprocessed_filename).resolve())
processed_filepath = str(Path(processed_filename).resolve())

storage_account = "covalenthowto"
storage_container = "howto"

blob_source_path = f"https://{storage_account}.blob.core.windows.net/{storage_container}/remote_{unprocessed_filename}"
blob_dest_path = f"https://{storage_account}.blob.core.windows.net/{storage_container}/remote_{processed_filename}"

ft_1 = ct.fs.TransferFromRemote(blob_source_path, unprocessed_filepath, strategy=strategy)
ft_2 = ct.fs.TransferToRemote(blob_dest_path, processed_filepath, strategy=strategy)
```

2. Define an electron to:
   1. Download the unprocessed file from Blob storage
   2. Perform some processing on the contents
   3. Upload the processed file to Blob storage

Access the file paths inside the electron as shown below using the "files" keyword argument. Covalent injects the source and destination file paths of the `TransferFromRemote` and `TransferToRemote` objects into the `files` argument. In this case, the `files` variable is a list of tuples of the form `(<source-path>, <destination-path>)`. The list looks something like this:

```python
[('/remote_unprocessed_file.png', '/path/to/current/dir/unprocessed_file.png'), ('/path/to/current/dir/processed_file.png', '/remote_processed_file.png')]
```

The Blob storage account and container names are omitted from the remote path in the list; they are applied automatically by the `FileTransfer` objects.

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
def process_blob_data():
    return to_grayscale()

dispatch_id = ct.dispatch(process_blob_data)()
status = ct.get_result(dispatch_id, wait=True).status
print(status)
```

### See Also

[Transferring Local Files During Workflows](/docs/user-documentation/how-to/file-transfers-for-workflows-local)

[Transferring Files To and From a Remote Host](/docs/user-documentation/how-to/file-transfers-to-from-remote)

[Transferring Files To and From an S3 Bucket](/docs/user-documentation/how-to/file-transfers-to-from-s3)
