---
title: Server Log
displayed_sidebar: tutorialSidebar
---
import logs from '@site/static/img/assets/logs_icon.png';
import logslist from '@site/static/img/assets/logs_list.gif';
import logsdload from '@site/static/img/assets/logs_download.gif';
import dload from '@site/static/img/assets/download.png';


To view the Covalent server log, click the <img src={logs} style={{height:'22px'}}/> icon.
<img src={logslist}/>

Each log entry represents a single event; most are one line but some (such as tracebacks) are multi-line. An entry contains the following columns:

**Time**
<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The time and date of the log entry. Time format for time and date are hh:mm:ss,ms and yyyy-mm-dd.
</div>

**Status**
<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The status of the log entry, indicating the severity of the event. The available statuses are: INFO, DEBUG, WARNING, ERROR, and CRITICAL.</div>


**Messages**
<div style={{marginTop:'-17px',marginBottom:'10px'}}>
The log message. Click on a log message to copy it to the clipboard. In the case of a multi-line message, all lines are copied.</div>

## Log Navigation

The following navigation tools are available for the Covalent server log:

* [Search](/docs/user-documentation/user-interface/server-log-search)
* [Pagination](/docs/user-documentation/user-interface/server-lo-pagination)
* [Sort](/docs/user-documentation/user-interface/server-log-sort)

## Download
<img src={logsdload}/>

Click <img src={dload} style={{height:'22px'}}/> to download the Covalent server log as a text file.




