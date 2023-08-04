---
title: Dependencies
displayed_sidebar: tutorialSidebar
---

Main Covalent public functionality.

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import ReactMarkdown from 'react-markdown';

**Classes:**

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`DepsBash`](#class-covalentdepsbashcommands)([commands])'/></div></td>
    <td>	Shell commands to run before an electron</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`DepsCall`](#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)([func, args, kwargs, …])'/></div></td>
    <td>Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`DepsPip`](#class-covalentdepspippackages-reqs_path)([packages, reqs_path])'/></div></td>
    <td>PyPI packages to be installed before executing an electron</td>
  </tr>
</table>

#### class <span class="highlight">covalent.</span><span class="bold">DepsBash</span>(commands=[]) 

<Indentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/>
<Indentation md='Shell commands to run before an electron'/>
<Indentation md='Deps class to encapsulate Bash dependencies for an electron.'/>
<Indentation md='The specified commands will be executed as subprocesses in the same environment as the electron.'/>

#### <span class="bold">commands</span>

<Indentation md='A list of bash commands to execute before the electron runs.'/>

#### <span class="bold">from_dict</span>(object_dict) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depsbash)

<Indentation md='Rehydrate a dictionary representation'/>

<Indentation md='**PARAMETERS**'/>
<Doubleind md='**object_dict** – a dictionary representation returned by *to_dict*'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='[`DepsBash`](#class-covalentdepsbashcommands)'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='self'/>
<Indentation md='Instance attributes will be overwritten.'/>

#### <span class="bold">to_dict</span>() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depsbash)

<Indentation md='Return a JSON-serializable dictionary representation of self'/>    
<Indentation md='**RETURN TYPE**'/> 
<Doubleind md='dict'/>

##### class <span class="highlight">covalent.</span><span class="bold">DepsCall</span>(func=None, args=[], kwargs={}, \*, retval_keyword='', override_reserved_retval_keys=False)

<Indentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/>
<Indentation md='Functions, shell commands, PyPI packages, and other types of dependencies to be called in an electron’s execution environment'/>
<Indentation md='Deps class to encapsulate python functions to be called in the same execution environment as the electron.'/>

<!-- #### func  -->
<Indentation md='**func**' color='#B30000'/>
<Doubleind md='A callable'/>

<!-- #### args -->
<Indentation md='**args**' color='#B30000'/>
<Doubleind md='args list'/>

<!-- #### kwargs -->
<Indentation md='**kwargs**' color='#B30000'/>
<Doubleind md='kwargs dict'/>

<!-- #### retval_keyword -->
<Indentation md='**retval_keyword**' color='#B30000'/>
<Doubleind md='An optional string referencing the return value of func.'/>

<Indentation md='If retval_keyword is specified, the return value of func will be passed during workflow execution as an argument to the electron corresponding to the parameter of the same name.'/>

<Indentation md='NOTES'/>
<Indentation md='Electron parameters to be injected during execution must have default parameter values.'/>
<Indentation md='It is the user’s responsibility to ensure that retval_keyword is actually a parameter of the electron. Unexpected behavior may occur otherwise.'/>

#### <span class="bold">from_dict</span>(object_dict) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depscall)

<Indentation md='Rehydrate a dictionary representation'/>

<Indentation md='**PARAMETERS**'/> 
<Doubleind md='**object_dict** – a dictionary representation returned by *to_dict*'/>

<Indentation md='**RETURN TYPE**'/> 
<Doubleind md='[`Depscall`](#class-covalentdepscallfuncnone-args-kwargs--retval_keyword-override_reserved_retval_keysfalse)'/>

<Indentation md='**RETURNS**'/> 
<Doubleind md='self'/>

<Indentation md='Instance attributes will be overwritten.'/>

#### <span class="bold">to_dict</span>() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depscall)

<Indentation md='Return a JSON-serializable dictionary representation of self'/>

<Indentation md='**RETURN TYPE**'/> 
<Doubleind md='`dict`'/>

#### class <span class="highlight">covalent.</span><span class="bold">DepsPip</span>(packages=[], reqs_path='')

<Indentation md='Bases: [`covalent._workflow.deps.Deps`](/docs/user-documentation/api-reference/cov-api#class-covalent_workflowdepsdepsapply_fnnone-apply_args-apply_kwargs--retval_keyword-source)'/>
<Indentation md='PyPI packages to be installed before executing an electron'/> 
<Indentation md='A specification of Pip packages to be installed'/>

<Indentation md='**packages**' color='#B30000'/>
<Doubleind md='A list of PyPI packages to install'/>

<Indentation md='**reqs_path**' color='#B30000'/> 
<Doubleind md='Path to requirements.txt (overrides *packages*)'/>

These packages are installed in an electron’s execution environment just before the electron is run.

#### <span class="bold">from_dict</span>(object_dict) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depspip)

<Indentation md='Rehydrate a dictionary representation'/>

<Indentation md='**PARAMETERS**'/> 
<Doubleind md='object_dict – a dictionary representation returned by to_dict'/>

<Indentation md='**RETURN TYPE**'/> 
<Doubleind md='[`DepsPip`](#class-covalentdepspippackages-reqs_path)'/>

<Indentation md='**RETURNS**'/> 
<Doubleind md='self'/>
<Indentation md='Instance attributes will be overwritten.'/>

#### <span class="bold">to_dict</span>() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [[source]](/docs/user-documentation/api-reference/scode-depspip)

<Indentation md='Return a JSON-serializable dictionary representation of self'/>

<Indentation md='**RETURN TYPE**'/> 
<Doubleind md='`dict`'/>
