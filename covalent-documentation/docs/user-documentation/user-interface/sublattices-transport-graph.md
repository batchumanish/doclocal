---
title: Sublattices Transport Graph
displayed_sidebar: tutorialSidebar
---
import copy from '@site/static/img/assets/copy_icon.png';
import revert from '@site/static/img/assets/revert.png';
import sub from '@site/static/img/assets/sublattices.gif';


A [sublattice](/docs/user-documentation/concepts/covalent-arch/covalent-sdk#sublattice) is a lattice wrapped with an electron decorator so that it behaves as a single task. For example:

```py
@ct.electron
@ct.lattice
def sub_workflow():
    # Lattice code containing calls to other electrons ...
```

When you open the Graph View page for a lattice that contains sublattices, the sublattices are displayed as simple (unexpanded) nodes in the transport graph.

Each sublattice in a dispatch has a unique lattice ID (separate from the integer node ID). Click <img src={copy} style={{height:'22px'}}/> on the sublattice node to copy the sublattice ID.

Click a sublattice node in the transport graph to view the [electron sidebar](/docs/user-documentation/user-interface/electron-sidebar) of the sublattice. The Electron sidebar for a sublattice displays the dispatch information of the sublattice in its role as an electron: its overall start and end times, its final result, and so on.

To see “inside” the sublattice – to view its component electrons – select the Sublattices tab in the [Sublattices sidebar](/docs/user-documentation/user-interface/sublattices-sidebar) to the left of the transport graph. Then click the line item of the sublattice you want to view.

While viewing a sublattice in the Graph View area, the sublattice name is displayed in the upper left as “Viewing: < sublattice name>”. Click <img src={revert} style={{height:'22px'}}/> to the right of the name to return to viewing the main lattice transport graph.

<img src={sub}/>




