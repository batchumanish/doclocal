---
title: The Covalent GUI
---

import Adom from '/src/components/Adomonition';
import Ind from '/src/components/Indentation';

The Covalent UI is a graphical tool that combines with the Covalent database to store, monitor, visualize, and compare dispatched workflows. Aside from the ability to delete completed dispatched workflows, the UI does not affect the workflows in any way. It is described here as a separate component of the Covalent system because its power to store and visualize the dispatched workflows makes it essential to using Covalent.

The UI’s functionality is documented in [The User Interface](/docs/user-documentation/user-interface/the-ui). This page discusses some of the GUI’s features as they relate to the concepts in [The Covalent SDK](/docs/user-documentation/concepts/covalent-arch/covalent-sdk) and [Covalent Services](/docs/user-documentation/concepts/covalent-arch/covalent-services).

## Dispatches

The UI dashboard displays a list of all dispatched workflows that have been created by the server, whether they’ve completed or not.

![covalentsdk](/img/assets/ui_list_incomplete_and_error.png)

Note that the second workflow in the screen above failed (_Status_ shows 4 of 5 tasks successfully completed), and that the first workflow is still in progress with 11 seconds of runtime and two tasks completed.

### Dispatch Status

The status of each dispatch on the Dashboard is one of the following. Statuses are color-coded in the dispatch list:

**Pending (orange)**
<Ind md="Not yet running." fs="16px"/>

**- Running (white)**
<Ind md="Started, with one or more tasks executing."  fs="16px"/>

**- Failed (red)**
<Ind md="Stopped. Did not complete successfully because one or more tasks threw fatal errors."  fs="16px"/>

**- Completed (green)**
<Ind md="All tasks completed. Result available."  fs="16px"/>

## Transport Graph

Click on a dispatch ID to view the transport graph. The nodes in the graph show the executor, name, and ID number of each task. The graph’s edges are labeled with the data dependencies betwen nodes.

:::info Note
In some default display configurations, edges can run behind other nodes, labels can be obscured, and other display anomalies can occur. The graph view features [controls](/docs/user-documentation/user-interface/transport-graph#controls) that you can use to adjust the graph display.
:::

<!-- Below is a transport graph for the [machine-learning workflow](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#lattice) example. -->

Below is a transport graph for the [machine-learning workflow](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#ML-Example) example.

<img src="/img/assets/images/transport_graph.png" width="70%" />

:::info Note
The node count includes parameters, which (except in rare cases) are counted as successful. To explicitly view parameters in the transport graph, click the _ P _ icon in the [transport graph icon array](/docs/user-documentation/user-interface/transport-graph#controls).
:::

### Transport Graph Nodes

Each electron node in the transport graph shows the following by default:

![covalent](/img/assets/electron_node_callout.png)

**Executor**
<Ind md="The type of executor to which the electron is assigned."  fs="16px"/>

**Status**
<Ind md="An icon indicating the real-time status of the electron. Possible statuses are the same as for dispatched workflows: Pending, Running, Failed, or Completed."  fs="16px"/>

**Name**
<Ind md="The name of the function as defined in the Python code."  fs="16px"/>

**ID**
<Ind md="A unique (within the dispatch) integer value that can be used to fetch the electron in the SDK."  fs="16px"/>



### The Node Dialog

Click on the node to view an informational dialog, as shown here. In addition to what is displayed on the node, the dialog shows this information about the task:

**Started - Ended**
<Ind md="The type of executor to which the electron is assigned."  fs="16px"/>

**Status**
<Ind md="The local times at which the task began and finished."  fs="16px"/>

**Input**
<Ind md="The input arguments to the task function."  fs="16px"/>

**Result**
<Ind md="The value or object returned by the task function."  fs="16px"/>

The text box at the bottom of the dialog displays the Python definition the task.

![covalentsdk](/img/assets/ui_electron_side.png)
