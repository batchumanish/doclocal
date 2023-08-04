import Indentation from '/src/components/Indentation';
import Noindentation from '/src/components/Noindentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

# Task Helpers

### Dependencies

<div class="up fourteen"><ReactMarkdown children='Generic dependencies for an electron'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_workflow.deps.</span><span class="bold">Deps</span>(apply_fn=None, apply_args=[], apply_kwargs={}, \*, retval_keyword='') [[source]](./scode-deps)</span>

<div class="space up fourteen"><ReactMarkdown children='Generic dependency class used in specifying any kind of dependency for an electron.'/></div>

#### <span class="up"><span class="bold ">apply_fn</span></span>

<div class="space up fourteen"><ReactMarkdown children='function to be executed in the backend environment'/></div>

#### <span class="up"><span class="bold">apply_args</span></span>

<div class="space up fourteen"><ReactMarkdown children='list of arguments to be applied in the backend environment'/></div>

#### <span class="up"><span class="bold">apply_kwargs</span></span>

<div class="space up fourteen"><ReactMarkdown children='dictionary of keyword arguments to be applied in the backend environment'/></div>

**Methods:**

<table className="tables">
  <tr>
    <td><ReactMarkdown children='[`apply`](/docs/user-documentation/api-reference/taskhelpers#apply-source)() '/></td>
    <td>Encapsulates the exact function and args/kwargs to be executed in the backend environment.</td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">apply</span>() [[source]](/docs/user-documentation/api-reference/scode-deps)</span>

<div class="space up fourteen"><ReactMarkdown children='Encapsulates the exact function and args/kwargs to be executed in the backend environment.'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><Noindentation md='**None**-'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`Tuple`[`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj), [`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj), [`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj), `str`]'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='A tuple of transportable objects containing the function and optional args/kwargs'/></div>

<div class="fourteen"><Noindentation md='Main Covalent public functionality.'/></div>

<div class="fourteen up"><Noindentation md='**Classes:**'/></div>

<table class="tables">
  <tr>
    <td><ReactMarkdown children='[`DepsBash`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepsbashcommands)([commands]) '/></td>
    <td>Shell commands to run before an electron</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`DepsCall`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)([func, args, kwargs, …]) '/></td>
    <td>Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path--)([packages, reqs_path]) '/></td>
    <td>PyPI packages to be installed before executing an electron</td>
  </tr>
</table>

#### <span class="eighteen">class <span class="highlight">covalent.</span><span class="bold">DepsBash</span>(commands=[])</span>

<div class="space up fourteen"><ReactMarkdown children='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/></div>
<div class="space up fourteen"><ReactMarkdown children='Shell commands to run before an electron'/></div>
<div class="space up fourteen"><ReactMarkdown children='Deps class to encapsulate Bash dependencies for an electron.'/></div>
<div class="space up fourteen"><ReactMarkdown children='The specified commands will be executed as subprocesses in the same environment as the electron.'/></div>

#### <span class="bold">commands</span>

<div class="space up fourteen"><Noindentation md='A list of bash commands to execute before the electron runs.'/></div>

#### <span class="bold">from_dict</span>(object_dict) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depsbash)

<div class="space up fourteen"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><Noindentation md='**object_dict** – a dictionary representation returned by to_dict'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><Noindentation md='[`DepsBash`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepsbashcommands)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='self'/></div>
<div class="space up fourteen down"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>() &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depsbash)

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`dict`'/></div>

#### <span class="eighteen">class <span class="highlight">covalent</span><span class="bold">.DepsCall</span>(func=None, args=[], kwargs={}, \*, retval_keyword='', override_reserved_retval_keys=False)</span>

<div class="space up fourteen"><ReactMarkdown children='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/></div>
<div class="space up fourteen"><ReactMarkdown children='Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment'/></div>
<div class="space up fourteen"><ReactMarkdown children='Deps class to encapsulate python functions to be called in the same execution environment as the electron.'/></div>

#### <span class="bold">func</span>

<div class="space up fourteen"><ReactMarkdown children='A callable'/></div>

#### <span class="bold">args</span>

<div class="space up fourteen"><ReactMarkdown children='args list'/></div>

#### <span class="bold">kwargs</span>

<div class="space up fourteen"><ReactMarkdown children='kwargs list'/></div>

#### <span class="bold">retval keyword</span>

<div class="space up fourteen"><ReactMarkdown children='An optional string referencing the return value of func.'/></div>

<div class=" space fourteen down"><ReactMarkdown children='If retval_keyword is specified, the return value of func will be passed during workflow execution as an argument to the electron corresponding to the parameter of the same name.'/></div>
<div class="space up fourteen down"><ReactMarkdown children='**NOTES**'/></div>
<div class="space up fourteen"><ReactMarkdown children='Electron parameters to be injected during execution must have default parameter values.'/></div>
<div class="space up fourteen down"><ReactMarkdown children='It is the user’s responsibility to ensure that retval_keyword is actually a parameter of the electron. Unexpected behavior may occur otherwise.'/></div>

#### <span class="bold">from_dict</span>(object_dict)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="space up fourteen"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="space up eighteen highlight2"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict – a dictionary representation returned by to_dict'/></div>

<div class="space up eighteen highlight2"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`DepsCall`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)'/></div>

<div class="space up eighteen highlight2"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="fourteen up space down"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>()&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="space eighteen highlight2 up"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`dict`'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='object_dict – a dictionary representation returned by to_dict'/></div>

#### <span class="eighteen">class <span class="highlight">covalent</span><span class="bold">DepsPip</span>(packages=[], reqs_path=' ') </span>

<div class="space up fourteen"><ReactMarkdown children='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/></div>
<div class="space up fourteen"><ReactMarkdown children='PyPI packages to be installed before executing an electron'/></div>
<div class="space up fourteen"><ReactMarkdown children='A specification of Pip packages to be installed'/></div>

#### <span class="bold space">packages</span>

<div class="space1 up fourteen"><ReactMarkdown children='A list of PyPI packages to install'/></div>

#### <span class="bold">reqs_path</span>

<div class="space up fourteen"><ReactMarkdown children='Path to requirements.txt (overrides *packages*)'/></div>

<div class="space up fourteen"><ReactMarkdown children='These packages are installed in an electron’s execution environment just before the electron is run.'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict – a dictionary representation returned by to_dict'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path--)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="space up fourteen down"><ReactMarkdown children='Instance attributes will be overwritten.'/></div>

#### <span class="bold">from_dict</span>(object_dict) [[source]](/docs/user-documentation/api-reference/scode-depspip)

<div class="space up fourteen"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict – a dictionary representation returned by *to_dict*'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path--)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="space up fourteen down"><ReactMarkdown children='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>() [[source]](/docs/user-documentation/api-reference/scode-depspip)

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`dict`'/></div>

<div class="fourteen highlight2"><Noindentation md='**Examples**'/></div>
<div class="fourteen up"><Noindentation md='* [Add a Bash dependency to an electron](docs/user-documentation/how-to/add-bash-dependencies-to-electron)'/></div>
<div class="up fourteen up"><Noindentation md='* [Add a callable dependency to an electron](/docs/user-documentation/how-to/add-callable-dependencies-to-electron)'/></div>
<div class="up fourteen up"><Noindentation md='* [Add a Pip dependency to an electron](docs/user-documentation/how-to/add-pip-dependencies-to-electron)'/></div>

## Bash Dependencies

<div class="fourteen"><ReactMarkdown children='Shell commands to run before an electron
'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_workflow.depsbash.</span><span class="bold">DepsBash</span>(commands=[])</span>

<div class="space up fourteen"><ReactMarkdown children='Shell commands to run before an electron'/></div>
<div class="space up fourteen"><ReactMarkdown children='Deps class to encapsulate Bash dependencies for an electron.'/></div>
<div class="space up fourteen"><ReactMarkdown children='The specified commands will be executed as subprocesses in the same environment as the electron.'/></div>

#### <span class="bold">commands</span>

<div class="space up fourteen"><ReactMarkdown children='A list of bash commands to execute before the electron runs.'/></div>

**Methods:**

<table class="tables">
  <tr>
    <td><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source-2)(object_dict)  '/></td>
    <td>Rehydrate a dictionary representation  </td>
  </tr>
    <tr>
    <td><ReactMarkdown children=' [`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dict-source-2)()'/></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>

#### <span class="bold">from_dict</span>(object_dict) [[source]](/docs/user-documentation/api-reference/scode-depsbash)

<div class="space up fourteen"><ReactMarkdown children='Rehydrate a dictionary representation'/></div>

<div class="space eighteen highlight2 up"><ReactMarkdown children='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict – a dictionary representation returned by *to_dict*'/></div>

<div class="space eighteen highlight2 up"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`Depsbash`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepsbashcommands)'/></div>

<div class="space eighteen highlight2 up"><ReactMarkdown children='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="space up fourteen down"><ReactMarkdown children='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>() [[source]](/docs/user-documentation/api-reference/scode-depsbash )

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="space up eighteen highlight2 "><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`dict`'/></div>

### Examples

<div class="up fourteen"><ReactMarkdown children='* [Add a Bash dependency to an electron](docs/user-documentation/how-to/add-bash-dependencies-to-electron)'/></div>

## Call Dependencies

<div class="fourteen">Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment</div>

#### class <span class="highlight">covalent.\_workflow.depscall.</span><span class="bold">DepsCall</span>(func=None, args=[], kwargs={}, \*, retval_keyword='', override_reserved_retval_keys=False)

<div class="up fourteen"><Noindentation md='Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment'/></div>

<div class="up fourteen"><Noindentation  md='Deps class to encapsulate python functions to be called in the same execution environment as the electron.'/></div>

#### <span class="bold">func</span>

<div class="space up fourteen"><ReactMarkdown children='A callable'/></div>

#### <span class="bold">args</span>

<div class="space up fourteen"><ReactMarkdown children='args list'/></div>

#### <span class="bold">kwargs</span>

<div class="space up fourteen"><ReactMarkdown children='kwargs list'/></div>

#### <span class="bold">retval keyword</span>

<div class="space up fourteen"><ReactMarkdown children='An optional string referencing the return value of func.'/></div>

<div class="fourteen down "><ReactMarkdown children='If retval_keyword is specified, the return value of func will be passed during workflow execution as an argument to the electron corresponding to the parameter of the same name.'/></div>
<div class="up fourteen down"><ReactMarkdown children='NOTES'/></div>
<div class="up fourteen"><ReactMarkdown children='Electron parameters to be injected during execution must have default parameter values.'/></div>
<div class="up fourteen"><ReactMarkdown children='It is the user’s responsibility to ensure that retval_keyword is actually a parameter of the electron. Unexpected behavior may occur otherwise.'/></div>

**Methods:**

<table class="tables">
  <tr>
    <td><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source-3)(object_dict)  '/></td>
    <td>Rehydrate a dictionary representation  </td>
  </tr>
    <tr>
    <td><ReactMarkdown children=' [`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dict-source-3)()'/></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>

#### <span class="bold">from_dict</span>(object_dict) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="space up fourteen"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><Noindentation md='object_dict – a dictionary representation returned by to_dict'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><Noindentation md='[`DepsCall`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_workflowdepscalldepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><Noindentation md='self'/></div>
<div class="space up fourteen down"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>() &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[[source]](/docs/user-documentation/api-reference/scode-depscall)

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`dict`'/></div>

### Examples

<div class="up fourteen"><Noindentation md='* [Add a callable dependency to an electron](/docs/user-documentation/how-to/add-callable-dependencies-to-electron)
'/></div>

## Pip Dependencies

<div class="fourteen">PyPI packages to be installed before executing an electron</div>

#### <span class="eighteen">class <span class="highlight">covalent.\_workflow.depspip.</span><span class="bold">DepsPip</span>(packages=[], reqs_path='')</span>

<div class="space up fourteen"><Noindentation md='PyPI packages to be installed before executing an electron'/></div>

<div class="space up fourteen"><Noindentation md='A specification of Pip packages to be installed' /></div>

#### <span class="bold">packages</span>

<div class="space up fourteen"><ReactMarkdown children='A list of PyPI packages to install'/></div>

#### <span class="bold">reqs_path</span>

<div class="space up fourteen"><ReactMarkdown children='Path to requirements.txt (overrides *packages*)'/></div>

<div class="fourteen">These packages are installed in an electron’s execution environment just before the electron is run.</div>

**Methods:**

<table className="tables">
  <tr>
    <td><div ><ReactMarkdown children='[`from_dict`](/docs/user-documentation/api-reference/taskhelpers#from_dictobject_dict-source-4)(object_dict)  '/></div></td>
    <td>Rehydrate a dictionary representation  </td>
  </tr>
    <tr>
    <td><div ><ReactMarkdown children=' [`to_dict`](/docs/user-documentation/api-reference/taskhelpers#to_dict-source-4)()'/></div></td>
    <td>Return a JSON-serializable dictionary representation of self</td>
  </tr>
</table>

#### <span class="bold">from_dict</span>(object_dict) [[source]](/docs/user-documentation/api-reference/scode-depspip)

<div class="fourteen up space"><Noindentation md='Rehydrate a dictionary representation'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='object_dict – a dictionary representation returned by *to_dict*'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`DepsPip`](/docs/user-documentation/api-reference/taskhelpers#class-covalentdepspippackages-reqs_path--)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='self'/></div>

<div class="space up fourteen down"><Noindentation md='Instance attributes will be overwritten.'/></div>

#### <span class="bold">to_dict</span>() [[source]](/docs/user-documentation/api-reference/scode-depspip)

<div class="space up fourteen"><ReactMarkdown children='Return a JSON-serializable dictionary representation of self'/></div>

<div class="space eighteen highlight2 up"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='`dict`'/></div>

### Examples

<div class="up fourteen"><ReactMarkdown children='* [Add a Pip dependency to an electron](docs/user-documentation/how-to/add-pip-dependencies-to-electron)'/></div>

## File Transfer

<div class="fourteen">File Transfer from (source) and to (destination) local or remote files prior/post electron execution. Instances are are provided to files keyword argument in an electron decorator.</div>

#### <span class="eighteen">class <span class="highlight">covalent.\_file_transfer.file.</span><span class="bold">File</span>(filepath=None, is_remote=False, is_dir=False, include_folder=False) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-filetransfer)</span>

<div class="space up fourteen"><ReactMarkdown children='File class to store components of provided URI including scheme (s3://, file://, ect.) determine if the file is remote, and acts a facade to facilitate filesystem operations.'/></div>

#### <span class="bold">filepath</span>

<div class="space up fourteen"><ReactMarkdown children='File path corresponding to the file.' /></div>

#### <span class="bold">is_remote</span>

<div class="space up fourteen"><ReactMarkdown children='Flag determining if file is remote (override). Default is resolved automatically from file scheme.' /></div>

#### <span class="bold">is_dir</span>

<div class="space up fourteen"><ReactMarkdown children='Flag determining if file is a directory (override). Default is determined if file uri contains trailing slash.' /></div>

#### <span class="bold">include_folder</span>

<div class="space up fourteen down"><ReactMarkdown children='Flag that determines if the folder should be included in the file transfer, if False only contents of folder are transfered.' /></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_file_transfer.folder.</span><span class="bold">Folder</span>(filepath=None, is_remote=False, is_dir=True, include_folder=False) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-filefolder)</span>

<div class="space up fourteen"><ReactMarkdown children='Folder class to store components of provided URI including scheme (s3://, file://, ect.), determine if the file is remote, and act as facade to facilitate filesystem operations. Folder is a child of the File class which sets is_dir flag to True.'/></div>

#### <span class="bold">include_folder</span>

<div class="space1 up fourteen down"><ReactMarkdown children='Flag that determines if the folder should be included in the file transfer, if False only contents of folder are transfered.' /></div>

#### <span class="eighteen">class <span class="highlight">covalent.\_file_transfer.file_transfer.</span><span class="bold">FileTransfer</span>(from_file=None, to_file=None, order=<Order.BEFORE: 'before'>, strategy=None) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-filetransferfile)</span>

<div class="space up fourteen"><ReactMarkdown children='FileTransfer object class that takes two File objects or filepaths (from, to) and a File Transfer Strategy to perform remote or local file transfer operations.'/></div>

#### <span class="bold">from_file</span>

<div class="space up fourteen"><Noindentation md='Filepath or File object corresponding to the source file.'/></div>

#### <span class="bold">to_file</span>

<div class="space up fourteen"><Noindentation md='Filepath or File object corresponding to the destination file.'/></div>

#### <span class="bold">order</span>

<div class="space up fourteen"><Noindentation md='Order (enum) to execute the file transfer before (Order.BEFORE) or after (Order.AFTER) electron execution.'/></div>

#### <span class="bold">strategy</span>

<div class="space up fourteen down"><Noindentation md='Optional File Transfer Strategy to perform file operations - default will be resolved from provided file schemes.'/></div>

#### <span class="eighteen"><span class="highlight">covalent.\_file_transfer.file_transfer.</span><span class="bold">TransferFromRemote</span>(from_filepath, to_filepath=None, strategy=None, order=<Order.BEFORE: 'before'>) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-filetransferfile)</span>

<div class="space up fourteen"><ReactMarkdown children='Factory for creating a FileTransfer instance where from_filepath is implicitly created as a remote File Object, and the order (Order.BEFORE) is set so that this file transfer will occur prior to electron execution.'/></div>

<div class="space up eighteen highlight2"><ReactMarkdown children='**Parameters**'/></div>

<div class="space up fourteen"><ReactMarkdown children='* from_filepath (`str`) – File path corresponding to remote file (source).'/></div>
<div class="space up fourteen"><ReactMarkdown children='* to_filepath (Optional[`str`]) – File path corresponding to local file (destination)'/></div>
<div class="space up fourteen"><ReactMarkdown children='* strategy (`Optional`[`FileTransferStrategy`]) – Optional File Transfer Strategy to perform file operations - default will be resolved from provided file schemes.'/></div>
<div class="space up fourteen"><ReactMarkdown children='* order ([`Order`](#class-covalentfsordervalue)) – Order (enum) to execute the file transfer before (Order.BEFORE) or after (Order.AFTER) electron execution - default is BEFORE'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`FileTransfer`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfile_transferfiletransferfrom_filenone-to_filenone-orderorderbefore-before-strategynone-source)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="space1 up fourteen down"><Noindentation md='FileTransfer instance with implicit Order.BEFORE enum set and from (source) file marked as remote'/></div>

#### <span class="eighteen"><span class="highlight">covalent.\_file_transfer.file_transfer.</span><span class="bold">TransferToRemote</span>(to_filepath, from_filepath=None, strategy=None, order=<Order.AFTER: 'after'>) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](/docs/user-documentation/api-reference/scode-filetransferfile)</span>

<div class="space up fourteen"><ReactMarkdown children='Factory for creating a FileTransfer instance where to_filepath is implicitly created as a remote File Object, and the order (Order.AFTER) is set so that this file transfer will occur post electron execution.'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Parameters**'/></div>

<div class="fourteen up space"><Noindentation md='* to_filepath (Optional[`str`]) – File path corresponding to local file (destination)'/></div>
<div class="fourteen up space"><Noindentation md='* from_filepath (`str`) – File path corresponding to remote file (source).'/></div>
<div class="fourteen up space"><Noindentation md='* strategy (`Optional`[`FileTransferStrategy`]) – Optional File Transfer Strategy to perform file operations - default will be resolved from provided file schemes.'/></div>
<div class="fourteen up space"><Noindentation md='* order ([`Order`](/docs/user-documentation/api-reference/taskhelpers#class-covalentfsorder) – Order (enum) to execute the file transfer before (Order.BEFORE) or after (Order.AFTER) electron execution - default is BEFORE'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="fourteen space1 up"><Noindentation md='[`FileTransfer`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfile_transferfiletransferfrom_filenone-to_filenone-orderorderbefore-before-strategynone-source)'/></div>

<div class="eighteen highlight2 up space"><Noindentation md='**Returns**'/></div>
<div class="fourteen space1 up"><Noindentation md='FileTransfer instance with implicit Order.AFTER enum set and to (destination) file marked as remote'/></div>

### Examples

<div class="fourteen  up"><Noindentation md='* [Transfer files locally](/docs/user-documentation/how-to/file-transfers-for-workflows-local)'/></div>
<div class="fourteen  up"><Noindentation md='* [Transfer files to and from a remote host](/docs/user-documentation/how-to/file-transfers-to-from-remote)'/></div>
<div class="fourteen  up"><Noindentation md='* [Transfer files to and from an S3 bucket](/docs/user-documentation/how-to/file-transfers-to-from-s3)'/></div>

## File Transfer Strategies

<div class="space up fourteen"><ReactMarkdown children='A set of classes with a shared interface to perform copy, download, and upload operations given two (source & destination) File objects that support various protocols.'/></div>

**Classes:**

<table class="tables">
  <tr>
    <td><ReactMarkdown children=' [`Blob`](#class-covalentfs_strategiesblobclient_idnone-client_secretnone-tenant_idnone)([client_id, client_secret, tenant_id])'/></td>
    <td>Implements FileTransferStrategy class to transfer files to/from Azure Blob Storage.</td>
  </tr>
    <tr>
    <td><ReactMarkdown children=' [`GCloud`](#class-covalentfs_strategiesgcloudclient_idnone-client_secretnone-tenant_idnone)([credentials, project_id])'/></td>
    <td>Implements FileTransferStrategy class to transfer files to/from Google Cloud Storage.</td>
  </tr>
  <tr>
    <td><ReactMarkdown children='[`HTTP`](/docs/user-documentation/api-reference/taskhelpers#class-covalentfs_strategieshttp)() '/></td>
    <td>Implements Base FileTransferStrategy class to use HTTP to download files from public URLs.</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`Rsync`](/docs/user-documentation/api-reference/taskhelpers#class-covalentfs_strategiesrsyncuser-host-private_key_pathnone)([user, host, private_key_path]) '/></td>
    <td>Implements Base FileTransferStrategy class to use rsync to move files to and from remote or local filesystems.</td>
  </tr>
  <tr>
    <td><ReactMarkdown children='[`S3`](/docs/user-documentation/api-reference/taskhelpers#class-covalentfs_strategiess3credentialsnone-profilenone-region_namenone)([credentials, profile, region_name])'/></td>
    <td>Implements Base FileTransferStrategy class to upload/download files from S3 Bucket.</td>
  </tr>
</table>

#### <span class="eighteen">class <span class="highlight">covalent.fs_strategies.</span><span class="bold">Blob</span>(client_id=None, client_secret=None, tenant_id=None)</span>

<div class="fourteen up space"><ReactMarkdown children='Bases: [`covalent._file_transfer.strategies.transfer_strategy_base.FileTransferStrategy`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>
<div class="space up fourteen"><ReactMarkdown children='Implements FileTransferStrategy class to transfer files to/from Azure Blob Storage.'/></div>
<div class="space up fourteen highlight2"><ReactMarkdown children='PARAMETERS'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __client_id__ (`Optional`[`str`]) - ID of a service principal authorized to perform the transfer'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __client_secret__ (`Optional`[`str`]) - Corresponding secret key for the service principal credentials'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __tenant_id__ (`Optional`[`str`]) - The Azure Active Directory tenant ID which owns the cloud resources.'/></div>

<div class="fourteen bold">credentials</div>

<div class="space fourteen"><ReactMarkdown children='A tuple containing (client_id, client_secret, tenant_id)'/></div>

#### Methods:

<table className="tables">
  <tr>
    <td><ReactMarkdown children=' [`cp`](#cpfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file])'/></td>
    <td>RTYPE <ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`download`](#downloadfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file])'/></td>
    <td>Download files or the contents of folders from Azure Blob Storage.</td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`upload`](#uploadfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file])'/></td>
    <td>Upload files or the contents of folders to Azure Blob Storage.</td>
  </tr>
</table>


#### <span class="bold">cp</span>(from_file, to_file=<covalent._file_transfer.file.File object>)

<div class="space up eighteen highlight2"><ReactMarkdown children='RETURN TYPE'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>


#### <span class="bold">download</span>(from_file, to_file=<covalent._file_transfer.file.File object>)

<div class="space up fourteen"><ReactMarkdown children='Download files or the contents of folders from Azure Blob Storage.'/></div>
<div class="space up fourteen highlight2"><ReactMarkdown children='PARAMETERS'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __from_file__ ([`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)) -  File object referencing an object in Azure Blob storage'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __to_file__ ([`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)) -  File object referencing a path in the local filesystem'/></div>

<div class="space up eighteen highlight2"><ReactMarkdown children='RETURNS'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Download function that is injected into wrapper_fn'/></div>

<div class="space up eighteen highlight2"><ReactMarkdown children='RETURN TYPE'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`callable`'/></div>

#### <span class="bold">upload</span>(from_file, to_file=<covalent._file_transfer.file.File object>)

<div class="space up eighteen highlight2"><ReactMarkdown children='RETURN TYPE'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Upload files or the contents of folders to Azure Blob Storage.'/></div>
<div class="space up fourteen highlight2"><Noindentation md='PARAMETERS'/></div>
<div class="space up fourteen"><ReactMarkdown children='- __from_file__ ([`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)) -   File object referencing a path in the local filesystem'/></div>
<div class="space up fourteen"><Noindentation md='- __to_file__ ([`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)) -  File object referencing an object in Azure Blob storage'/></div>

<div class="eighteen highlight2 up space"><ReactMarkdown children='RETURNS'/></div>
<div class="space1 up fourteen"><ReactMarkdown children='Upload function that is injected into wrapper_fn'/></div>

<div class="eighteen highlight2 up space"><ReactMarkdown children='RETURN TYPE'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`callable`'/></div>


#### <span class="eighteen">class <span class="highlight">covalent.fs_strategies.</span><span class="bold">GCloud</span>(client_id=None, client_secret=None, tenant_id=None)</span>

<div class='up fourteen space'><ReactMarkdown children='Bases: [`covalent._file_transfer.strategies.transfer_strategy_base.FileTransferStrategy`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>
<div class='up fourteen space'><ReactMarkdown children='Implements FileTransferStrategy class to transfer files to/from Google Cloud Storage.'/></div>
<div class='up fourteen space highlight2'><ReactMarkdown children='PARAMETERS'/></div>
<div class='up fourteen space'><ReactMarkdown children='- __credentials__ (`Optional`[`str`]) - IPath to OAuth 2.0 credentials JSON file for a service account'/></div>
<div class='up fourteen space'><ReactMarkdown children='- __project_id__ (`Optional`[`str`]) - ID of a project in GCP'/></div>

<div class="bold">credentials</div>

<div class='space fourteen'><ReactMarkdown children='String containing OAuth 2.0 credentials.'/></div>

<div class="bold">project_id</div>

<div class='space fourteen'><ReactMarkdown children='ID of a project in GCP'/></div>


#### Methods:

<table className="tables">
  <tr>
    <td><ReactMarkdown children=' [`cp`](#cpfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file])'/></td>
    <td>RTYPE <ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`download`](#downloadfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file])'/></td>
    <td><ReactMarkdown children='`callable`'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[`upload`](#uploadfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file])'/></td>
    <td><ReactMarkdown children='`callable`'/></td>
  </tr>
</table>

#### <span class="bold">cp</span>(from_file, to_file=<covalent._file_transfer.file.File object>)

<div class='space eighteen highlight2 up '><ReactMarkdown children='RETURN TYPE'/></div>
<div class='space1 up fourteen down'><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/cov-api#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="bold">download</span>(from_file, to_file=<covalent._file_transfer.file.File object>)

<div class='space eighteen highlight2 up'><ReactMarkdown children='RETURN TYPE'/></div>
<div class='up space1 fourteen down'><ReactMarkdown children='`callable`'/></div>

#### <span class="bold">upload</span>(from_file, to_file=<covalent._file_transfer.file.File object>)


<div class='eighteen space highlight2 up'><ReactMarkdown children='RETURN TYPE'/></div>
<div class='up fourteen space1 down'><ReactMarkdown children='`callable`'/></div>

#### <span class="eighteen">class<span class="highlight"> covalent.fs_strategies</span><span class="bold">.HTTP</span></span>

<div class="space up fourteen"><ReactMarkdown children='Bases: `covalent._file_transfer.strategies.transfer_strategy_base.FileTransferStrategy`'/></div>
<div class="space up fourteen"><ReactMarkdown children='Implements Base FileTransferStrategy class to use HTTP to download files from public URLs.'/></div>

<table class="tables">
  <tr>
    <td><ReactMarkdown children='[cp](/docs/user-documentation/api-reference/taskhelpers#cpfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE [`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[download](/docs/user-documentation/api-reference/taskhelpers#downloadfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE [`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[upload](/docs/user-documentation/api-reference/taskhelpers#uploadfrom_file-to_filecovalent_file_transferfilefile-object)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE [`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
</table>

#### <span class="bold">cp</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="bold">download</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="bold">upload</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)

<div class="eighteen highlight2 up space"><Noindentation md='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.fs_strategies.</span></span><span class="bold">Rsync</span>(user='', host='', private_key_path=None)

<div class="space up fourteen"><ReactMarkdown children='Bases: `covalent._file_transfer.strategies.transfer_strategy_base.FileTransferStrategy`'/></div>
<div class="space up fourteen"><ReactMarkdown children='Implements Base FileTransferStrategy class to use rsync to move files to and from remote or local filesystems. Rsync via ssh is used if one of the provided files is marked as remote.'/></div>

#### <span class="bold">user</span>

<div class="space up fourteen"><ReactMarkdown children='(optional) Determine user to specify for remote host if using rsync with ssh'/></div>

#### <span class="bold">host</span>

<div class="space up fourteen"><ReactMarkdown children='(optional) Determine what host to connect to if using rsync with ssh'/></div>

#### <span class="bold">private_key_path</span>

<div class="space up fourteen"><ReactMarkdown children='(optional) Filepath for ssh private key to use if using rsync with ssh'/></div>

**Methods:**

<table className="tables">
  <tr>
    <td><ReactMarkdown children='[cp](/docs/user-documentation/api-reference/taskhelpers#cpfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE `None`'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[download](/docs/user-documentation/api-reference/taskhelpers#downloadfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE [`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[get_rsync_cmd](/docs/user-documentation/api-reference/taskhelpers#get_rsync_cmdfrom_file-to_file-transfer_from_remotefalse)(from_file, to_file[, …]) '/></td>
    <td><ReactMarkdown children='RTYPE `str`'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[get_rsync_ssh_cmd](/docs/user-documentation/api-reference/taskhelpers#get_rsync_ssh_cmdlocal_file-remote_file-transfer_from_remotefalse)(local_file, remote_file[, …]) '/></td>
     <td><ReactMarkdown children='RTYPE
`str`'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[return_subprocess_callable](/docs/user-documentation/api-reference/taskhelpers#return_subprocess_callablecmd)(cmd) '/></td>
    <td><ReactMarkdown children='RTYPE
`None`'/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[upload](/docs/user-documentation/api-reference/taskhelpers#uploadfrom_file-to_file)(from_file, to_file) '/></td>
    <td><ReactMarkdown children='RTYPE
`None`'/></td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">cp</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**RETURN TYPE**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`None`'/></div>

#### <span class="eighteen"><span class="bold">download</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="eighteen"><span class="bold">get_rsync_cmd</span>(from_file, to_file, transfer_from_remote=False)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`str`'/></div>

#### <span class="eighteen"><span class="bold">get_rsync_ssh_cmd</span>(local_file, remote_file, transfer_from_remote=False)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`str`'/></div>

#### <span class="eighteen"><span class="bold">return_subprocess_callable</span>(cmd)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`None`'/></div>

#### <span class="eighteen"><span class="bold">upload</span>(from_file, to_file)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='`None`'/></div>

#### <span class="eighteen">class <span class="highlight">covalent.fs_strategies.</span><span class="bold">S3</span>(credentials=None, profile=None, region_name=None)</span>

<div class="space up fourteen"><ReactMarkdown children='Bases: `covalent._file_transfer.strategies.transfer_strategy_base.FileTransferStrategy`'/></div>
<div class="space up fourteen"><ReactMarkdown children='Implements Base FileTransferStrategy class to upload/download files from S3 Bucket.'/></div>

**Methods:**

<table className="tables">
  <tr>
    <td><ReactMarkdown children='[cp](/docs/user-documentation/api-reference/taskhelpers#cpfrom_file-to_filecovalent_file_transferfilefile-object-2)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='RTYPE
[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source) '/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[download](/docs/user-documentation/api-reference/taskhelpers#downloadfrom_file-to_filecovalent_file_transferfilefile-object-2)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='Download files or the contents of folders from S3 bucket. '/></td>
  </tr>
    <tr>
    <td><ReactMarkdown children='[upload](/docs/user-documentation/api-reference/taskhelpers#uploadfrom_file-to_filecovalent_file_transferfilefile-object-1)(from_file[, to_file]) '/></td>
    <td><ReactMarkdown children='	
Upload files or folders to S3 bucket.'/></td>
  </tr>
</table>

#### <span class="eighteen"><span class="bold">cp</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)</span>

<div class="up eighteen highlight2 space"><ReactMarkdown children='**RETURN TYPE**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="eighteen"><span class="bold">download</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)</span>

<div class="space up fourteen"><ReactMarkdown children='Download files or the contents of folders from S3 bucket.'/></div>
<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

#### <span class="eighteen"><span class="bold">upload</span>(from_file, to_file=<covalent.\_file_transfer.file.File object>)</span>

<div class="space up fourteen"><ReactMarkdown children='Upload files or folders to S3 bucket.'/></div>
<div class="up eighteen highlight2 space"><ReactMarkdown children='**Return Type**'/></div>
<div class="space1 up fourteen down"><ReactMarkdown children='[`File`](/docs/user-documentation/api-reference/taskhelpers#class-covalent_file_transferfilefilefilepathnone-is_remotefalse-is_dirfalse-include_folderfalse-source)'/></div>

### Examples

<div class="up fourteen"><ReactMarkdown children='* [Transfer files to and from a remote host](/docs/user-documentation/how-to/file-transfers-to-from-remote)'/></div>
<div class="up fourteen"><ReactMarkdown children='* [Transfer files to and from an S3 bucket](/docs/user-documentation/how-to/file-transfers-to-from-s3)'/></div>
