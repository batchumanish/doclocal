---
title: Sublattices Sidebar
displayed_sidebar: tutorialSidebar
---

import sub from '@site/static/img/assets/sublattices.gif';
import subl from '@site/static/img/assets/sublattice_sidebar.png';
import asc from '@site/static/img/assets/ascending_arrow.png';
import desc from '@site/static/img/assets/descending_arrow.png';


The Sublattices sidebar has two tabs:

**Overview**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Shows runtime information including start and end times, input, results, and executor type.</div>

**Sublattices**
<div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Displays a list view of sublattices in the lattice. Click a row to display a sublattice in the Transport Graph area. The Sublattices tab is only shown if the transport graph contains one or more sublattices.
</div>

<img src={subl}/>

Click a Sublattice list column heading to sort the list by that column: Title, Runtime, or Node count. Click <img src={asc} style={{height:'22px'}}/> and <img src={desc} style={{height:'22px'}}/> to toggle between ascending and descending sort.