---
title: Results
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import Tripleind from '/src/components/Tripleind';
import ReactMarkdown from 'react-markdown';

Collecting and managing results

#### <span class="highlight">covalent.</span><span class="bold">get_result</span>(dispatch_id, wait=False, dispatcher_addr=None, status_only=False)

<Indentation md='Get the results of a dispatch from the Covalent server.'/>

<Indentation md='**PARAMETERS**'/>
<Indentation md='* **dispatch_id** (`str`) – The dispatch id of the result.'/>
<Indentation md='* **wait** (`bool`) – Controls how long the method waits for the server to return a result. If False, the method will not wait and will return the current status of the workflow. If True, the method will wait for the result to finish and keep retrying for sys.maxsize.'/>
<Indentation md='* **dispatcher_addr** (`Optional`[`str`]) – Dispatcher server address, if None then defaults to the address set in Covalent’s config.'/>
<Indentation md='* **status_only** (`bool`) – If true, only returns result status, not the full result object, default is False.'/>

<Indentation md='**RETURN TYPE**'/>
<Doubleind md='[`Result`](#class-covalent_results_managerresultresultlattice-dispatch_idsource)'/>

<Indentation md='**RETURNS**'/>
<Doubleind md='The Result object from the Covalent server'/>

#### class <span class="highlight">covalent.\_results_manager.result.</span><span class="bold">Result</span>(lattice, dispatch_id='')&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-result)

<Indentation md='Result class to store and perform operations on the result obtained from a dispatch.'/>

<!-- #### lattice -->
<Indentation md='**lattice**' color='#B30000'/>  
<Doubleind md='“Lattice” object which was dispatched.'/>

<!-- #### results_dir    -->
<Indentation md='**results_dir**' color='#B30000'/>
<Doubleind md='results_dir'/>

<!-- #### dispatch_id    -->
<Indentation md='**dispatch_id**' color='#B30000'/>
<Doubleind md='Dispatch id assigned to this dispatch.'/>

<!-- #### root_dispatch_id  -->
<Indentation md='**root_dispatch_id**' color='#B30000'/>
<Doubleind md='Dispatch id of the root lattice in a hierarchy of sublattice workflows.'/>

<!-- #### status   -->
<Indentation md='**status**' color='#B30000'/>
<Doubleind md='Status of the result. It’ll be one of the following: - Result.NEW_OBJ: When it is a new result object. - Result.COMPLETED: When processing of all the nodes has completed successfully. - Result.RUNNING: When some node executions are in process. - Result.FAILED: When one or more node executions have failed. - Result.CANCELLED: When the dispatch was cancelled.'/>

<!-- #### result    -->
<Indentation md='**result**' color='#B30000'/>
<Doubleind md='Final result of the dispatch, i.e whatever the “Lattice” was returning as a function.'/>

<!-- #### inputs   -->
<Indentation md='**inputs**' color='#B30000'/>
<Doubleind md='Inputs sent to the “Lattice” function for dispatching.'/>

<!-- #### error  -->
<Indentation md='**error**' color='#B30000'/>
<Doubleind md='Error due to which the execution failed.'/>

<Indentation md='**Functions:**'/>
<Doubleind md='save_result: Save the result object to the passed results directory or to self.results_dir by default. get_all_node_outputs: Return all the outputs of all the node executions.'/>

<Indentation md='**Attributes:**'/> 

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`dispatch_id`](#property-dispatch_id-str)  '></ReactMarkdown></div></td>
    <td>Dispatch id of current dispatch.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`encoded_result`](#property-encoded_result-covalenttransportableobject)'></ReactMarkdown></div></td>
    <td>Encoded final result of current dispatch</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [`end_time`](#property-end_time-datetimedatetime)'></ReactMarkdown></div></td>
    <td>End time of processing the dispatch.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`error`](#property-error-str)'></ReactMarkdown></div></td>
    <td>Error due to which the dispatch failed.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`inputs`](#property-inputs-dict) '></ReactMarkdown></div></td>
    <td>Inputs sent to the “Lattice” function for dispatching.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children=' [`lattice`](#property-lattice-covalent_workflowlatticelattice)'></ReactMarkdown></div></td>
    <td>“Lattice” object which was dispatched.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`result`](#property-result-unionint-float-list-dict)'></ReactMarkdown></div></td>
    <td>Final result of current dispatch. </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`results_dir`](#property-results_dir-str)'></ReactMarkdown></div></td>
    <td>Results directory used to save this result object.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`root_dispatch_id`](#property-root_dispatch_id-str)'></ReactMarkdown></div></td>
    <td>Dispatch id of the root dispatch </td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`start_time`](#property-start_time-datetimedatetime)'></ReactMarkdown></div></td>
    <td>Start time of processing the dispatch.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`status`](#property-status-covalent_shared_filesutil_classesstatus) '></ReactMarkdown></div></td>
    <td>Status of current dispatch. </td>
  </tr>
</table>  

<Indentation md='**Methods:**'/>

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`get_all_node_outputs`](#get_all_node_outputssource)() '></ReactMarkdown></div></td>
    <td>Return output of every node execution.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`get_all_node_outputs`](#get_all_node_outputssource)()'></ReactMarkdown></div></td>
    <td>	Get all the node results.</td>
  </tr>
    <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`get_node_result`](#get_node_resultnode_idsource)(node_id)  '></ReactMarkdown></div></td>
    <td>Return the result of a particular node.</td>
  </tr>
      <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`post_process`](#post_processsource)()  '></ReactMarkdown></div></td>
    <td>Post-processing method</td>
  </tr>
</table>

#### property <span class="bold">dispatch_id</span>: str

<Doubleind md='Dispatch id of current dispatch.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`str`'/>

#### property <span class="bold">encoded_result</span>: covalent.TransportableObject

<Doubleind md='Encoded final result of current dispatch'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='[`TransportableObject`](/docs/user-documentation/api-reference/covalent#class-covalenttransportableobjectobj)'/>

#### property <span class="bold">end_time</span>: datetime.datetime

<Doubleind md='End time of processing the dispatch.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`datetime`'/>

#### property <span class="bold">error</span>: str

<Doubleind md='Error due to which the dispatch failed.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`str`'/>

#### <span class="bold">get_all_node_outputs</span>()[[source](./scode-result)]

<Doubleind md='Return output of every node execution.'/>
<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**None-**'/>
<Doubleind md='**RETURNS**'/>
<Tripleind md='A dictionary containing the output of every node execution.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='node_outputs'/>

#### <span class="bold">get_all_node_results</span>()[[source](./scode-result)]

<Doubleind md='Get all the node results.'/>
<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**None-**'/>
<Doubleind md='**RETURNS**'/>
<Tripleind md='A list of dictionaries containing the result of every node execution.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='node_results'/>

#### <span class="bold">get_node_result</span>(node_id)[[source](./scode-result)]

<Doubleind md='Return the result of a particular node.'/>
<Doubleind md='**PARAMETERS**'/>
<Tripleind md='**node_id** (`int`) – The node id.'/>
<Doubleind md='**RETURNS**'/>
<Tripleind md='**The result of the node containing below in a dictionary format:**'/>

<Tripleind md='* node_id: The node id.'/>
<Tripleind md='* node_name: The name of the node.'/>
<Tripleind md='* start_time: The start time of the node execution.'/>
<Tripleind md='* end_time: The end time of the node execution.'/>
<Tripleind md='* status: The status of the node execution.'/>
<Tripleind md='* output: The output of the node unless error occured in which case None.'/>
<Tripleind md='* error: The error of the node if occured else None.'/>
<Tripleind md='* sublattice_result: The result of the sublattice if any.'/>
<Tripleind md='* stdout: The stdout of the node execution.'/>
<Tripleind md='* stderr: The stderr of the node execution.'/>

<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='node_result'/>

#### property <span class="bold">inputs</span>: dict

<Doubleind md='Inputs sent to the “Lattice” function for dispatching.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`dict`'/>

#### property <span class="bold">lattice</span>: covalent.\_workflow.lattice.Lattice

<Doubleind md='“Lattice” object which was dispatched.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='[`Lattice`](/docs/user-documentation/api-reference/workflow-components#class-covalent_workflowlatticelatticeworkflow_function-transport_graphnone-perma)'/>

#### <span class="bold">post_process</span>()[[source](./scode-result)]

<Doubleind md='Post-processing method. This method was introduced to enable manual client-side postprocessing in case automatic post-processing by the server fails (e.g. insufficient dask worker memory)'/>
<Doubleind md='**RETURNS**'/>
<Tripleind md='Post-processed result output'/> 
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='Any'/>

#### property <span class="bold">result</span>: Union[int, float, list, dict]

<Doubleind md='Final result of current dispatch.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`Union`[`int`, `float`, `list`, `dict`]'/>

#### property <span class="bold">results_dir</span>: str

<Doubleind md='Results directory used to save this result object.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`str`'/>

#### property <span class="bold">root_dispatch_id</span>: str

<Doubleind md='Dispatch id of the root dispatch'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`str`'/>

#### property <span class="bold">start_time</span>: datetime.datetime

<Doubleind md='Start time of processing the dispatch.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`datetime`'/>

#### property <span class="bold">status</span>: covalent.\_shared_files.util_classes.Status

<Doubleind md='Status of current dispatch.'/>
<Doubleind md='**RETURN TYPE**'/>
<Tripleind md='`Status`'/>


