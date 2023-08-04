---
title: Server Deployment
---

import Serverdeploymentgrid from '/src/components/Serverdeploymentgrid';
import data from "/src/components/basics.json";
import Covalent from '/src/components/Reactgrid';

Covalent supports both local and remote installation to suit different use cases. For quick prototyping and testing, running Covalent locally is sufficient.

For dispatching large compute-intensive workflows that require many CPU cores and a lot of memory, deploying Covalent as a [remote](/docs/glossary#remote) server (cloud or on-premise) uses resources more efficiently. You can develop workflows locally, then dispatch them to the remote Covalent server for execution.

<img src="/img/assets/server_deployment/covalent-self-hosted.svg" style={{width:'57%'}} />

## Deployment Instructions

Click an option below for instructions on deploying to that platform.

<!-- <Serverdeploymentgrid/> -->

<Covalent arr={data.premise.content} heading={data.premise.heading} description={data.premise.description} display={"inline"} cursor={"auto"} isdisabled={true}/>

<Covalent arr={data.cloud.content} heading={data.cloud.heading} description={data.cloud.description} display={"inline"} cursor={"auto"} isdisabled={true}/>

## Best Practices

Whether you deploy on-prem or on a web service, there are some issues to be aware of that don’t apply when you run Covalent locally. [This information](/docs/user-documentation/covalent-patterns/best-practices) will help you avoid some common remote deployment pitfalls.
