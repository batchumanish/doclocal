---
title: Transport Graph
displayed_sidebar: tutorialSidebar
---

import Admonition from '@theme/Admonition';
import main from '@site/static/img/assets/graph_main.png';
import toolbar from '@site/static/img/assets/tgraph_icons.png';
import plus from '@site/static/img/assets/tg_plus.png';
import minus from '@site/static/img/assets/tg_minus.png';
import cam from '@site/static/img/assets/tg_camera.png';
import layout from '@site/static/img/assets/tg_layout.png';
import label from '@site/static/img/assets/tg_label.png';
import param from '@site/static/img/assets/tg_param.png';
import lock from '@site/static/img/assets/tg_lock.png';
import fit from '@site/static/img/assets/tg_fit.png';

The Transport Graph displays the directed acyclic graph representing the dispatch.

<img src={main}/>

## Controls

<div class="side1">

<img src={toolbar}/>

</div>

<div class="side2">

On the left edge of the Transport Graph window is a vertical control bar consisting of several icons, shown here to the left. Use these controls to adjust the view of the transport graph.

<div style={{width:'90%', paddingLeft:'5rem'}}>

:::info Note

Adjustments made to the transport graph are lost if you leave the page, for example by going back to the Dashboard screen.

:::

</div>

Zoom <img src={plus} style={{height:'22px'}}/> and <img src={minus} style={{height:'22px'}}/>

<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Zoom in and out on the transport graph. To pan, click and drag over the transport graph.
</div>

Screenshot <img src={cam} style={{height:'22px'}}/>
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Take a screenshot of the Transport Graph window. Only the transport graph, without the control bar, is captured. The image, a JPG file named after the dispatch ID, is saved in your browser’s default location.
</div>

Fit to Screen <img src={fit} style={{height:'22px'}}/>
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Automatically scale the entire transport graph to fit in the available window space.
</div>



</div>

Layout <img src={layout} style={{height:'22px'}}/>

<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Choose a layout for the graph nodes. Clicking <img src={layout} style={{height:'22px'}}/> opens a menu with the following options: Layered, Tree, Force, Rectangular, Box, Old Layout.
</div>

Labels <img src={label} style={{height:'22px'}}/>

<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Toggle labels on the node on or off. Labels include the executor, the task name, and the node ID.ut.
</div>

Parameters <img src={param} style={{height:'22px'}}/>

<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Toggle parameter nodes. Parameter nodes show input parameters to the task nodes. With parameter nodes off (default), the graph displays only electron nodes.

Clicking a parameter node also highlights the dependencies (graph edges) that contain the selected parameter.

</div>

Lock Nodes <img src={lock} style={{height:'22px'}}/>

<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Toggle locking of draggable nodes. Toggle to “unlock” to enable dragging nodes to improve readability of the graph. Toggle to “lock” (default) to keep from accidentally dragging nodes.</div>
