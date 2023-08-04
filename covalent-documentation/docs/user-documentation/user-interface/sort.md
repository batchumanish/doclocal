---
title: Sort
displayed_sidebar: tutorialSidebar
---
import asc from '@site/static/img/assets/ascending_arrow.png';
import desc from '@site/static/img/assets/descending_arrow.png';
import sort from '@site/static/img/assets/dispatchlist_sort.gif';

<!-- <div style={{marginLeft:'42px',marginTop:'-17px',marginBottom:'10px'}}>
Displays a list view of sublattices in the lattice. Click a row to display a sublattice in the Transport Graph area. The Sublattices tab is only shown if the transport graph contains one or more sublattices.
</div> -->


Sort the dispatch list on any column except Dispatch ID by clicking the column heading.Click <img src={asc} style={{height:'22px'}}/> and <img src={desc} style={{height:'22px'}}/> to toggle between ascending and descending sort.

“Ascending” and “Descending” are alphabetical for Lattice; chronological for Started and Ended; by magnitude for Runtime; and ordered (Running < Completed < Failed) for Status.

The page default is to sort by descending “Started” value; that is, most recent dispatches first.

<img src={sort}/>


