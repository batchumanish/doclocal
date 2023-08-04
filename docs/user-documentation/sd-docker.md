---
title: Deploying with Docker
displayed_sidebar: tutorialSidebar
---

import Adomonition from '/src/components/Adomonition';

To run Covalent as a Docker container using public images, do the following.

## Prerequisites

[Install and run Docker](https://docs.docker.com/engine/install/) on your remote host.

## Procedure

**1. Get the latest Docker image for Covalent:**

```bash
docker pull public.ecr.aws/covalent/covalent:latest
```

:::info Note
To get the current stable image of Covalent, use stable instead of latest.
:::

**2. Start Covalent:**

```bash
docker container run -d --name covalent -p 48008:48008 public.ecr.aws/covalent/covalent:latest
```

**3. To view the Covalent GUI, go to [http://localhost:48008](/).**

**4. Configure Covalent inside the container with environment variables.**

The following table lists the environment variables available to customize Covalent’s execution environment at startup:

#### Covalent configuration environment variables {#cen}

<div class="tables">

| Environment Variable                            |                                        Description                                        |
| ------------------------------- | --------------------------------------------------------------------------------- |
| COVALENT_ROOT                   |                     Root directory for the `covalent` process                       |
| COVALENT_CONFIG_DIR             |   Directory that covalent searches for its configuration file, `covalent.conf`      |         |
| COVALENT_PLUGINS_DIR            |        Path where `covalent` looks to load any installed executor plugins           |
| COVALENT_DATABASE               |                   Path to `covalent`’s backend SQLite3 database                     |
| COVALENT_LOGDIR                 |                           Path to `covalent`’s log file                             |
| COVALENT_CACHE_DIR              |      Directory used by `covalent` to store temporary objects during runtime         |
| COVALENT_DATA_DIR               |                      Path to `covalent`’s database directory                        |
| COVALENT_RESULTS_DIR            |              Directory in which to store intermediate result objects                |
| COVALENT_SVC_PORT               |                         TCP port on which `covalent` runs                           |
| COVALENT_SERVER_IFACE_ANY       | Boolean flag that causes covalent to listen on all network interfaces on the host   |
| COVALENT_NUM_WORKERS            |                Number of Dask workers in Covalent’s default cluster                 |
| COVALENT_MEM_PER_WORKER         |                         Memory limit for each Dask worker                           |         |
| COVALENT_THREADS_PER_WORKER     |                 Number of threads with which to start each worker                   |

</div>

**5. For example, to start Covalent with two workers on port 8000:**

```bash
docker container run --name covalent -p 8000:8000 -e COVALENT_NUM_WORKERS=2 -e COVALENT_SVC_PORT=8000 public.ecr.aws/covalent/covalent:latest
```
