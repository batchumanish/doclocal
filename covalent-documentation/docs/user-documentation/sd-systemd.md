---
title: Installing Covalent with Systemd
displayed_sidebar: tutorialSidebar
---

import Adomonition from '/src/components/Adomonition';

> We recommend that you _not_ install Covalent directly at the system level as its Python version and package dependencies can conflict with those of the system. Instead, create a Python virtual environment with Covalent installed and manage Covalent with the `systemd` service. This approach prevents any Python conflicts.

:::info Note
In these installation instructions, we assume `Python3.8` is available on the system and that all the commands are issued as `root`.
:::

To install Covalent on a Linux physical or virtual host with `systemd`, do the following:

## Prerequisites

On Debian/Ubuntu based systems, install the virtualenv Python module at the system level:

```bash

python3 -m pip install virtualenv
```

## Procedure

**1. Create the Python virtual environment in which to install Covalent:**

```bash
python3 -m virtualenv /opt/virtualenvs/covalent
```

**2. Install Covalent in the virtual environment:**

```bash
/opt/virtualenvs/covalent/bin/python -m pip install covalent
```

This ensures that the latest release of Covalent along with all its dependencies are properly installed in the virtual environment.

**3. If you plan to use the AWS executor plugins with your Covalent deployment, install the covalent-aws-plugins:**

```bash
/opt/virtualenvs/covalent/bin/python -m pip install 'covalent-aws-plugins[all]'
```

**4. Create a systemd unit file for Covalent.**
Use the `systemd` `Environment` and `EnvironmentFile` directives to configure environment variables that determine Covalent’s startup and runtime behavior.

Customize the following sample `covalent.service` `systemd` unit file to your needs for hosting Covalent. On most Linux systems, this service file can be installed under `/usr/lib/systemd/system`. For more information about the service file, see the `systemd` documentation [here](https://www.freedesktop.org/software/systemd/man/systemd.html).

```py
[Unit]
Description=Covalent Dispatcher server
After=network.target

[Service]
Type=forking
Environment=VIRTUAL_ENV=/opt/virtualenvs/covalent
Environment=PATH=/opt/virtualenvs/covalent/bin:$PATH
Environment=HOME=/var/lib/covalent
Environment=COVALENT_SERVER_IFACE_ANY=1
EnvironmentFile=/etc/covalent/covalent.env
ExecStartPre=-/opt/virtualenvs/covalent/bin/covalent stop
ExecStart=/opt/virtualenvs/covalent/bin/covalent start
ExecStop=/opt/virtualenvs/covalent/bin/covalent stop
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
```

**5. Configure a `service` account on the server with only the privileges required to ensure proper Covalent functionality.**
Running Covalent as the root user is _not_ recommended; this compromises security on the server. For one thing, the Covalent GUI’s built-in terminal provides a login shell as the Covalent user – so if the Covalent server is running as root, users have access to a root shell on the server.

**6. To ensure that systemd invokes the Covalent server from within the virtual environment created earlier, set the VIRTUAL_ENV environment variable to the location of the virtual environment:**

```js
VIRTUAL_ENV=/opt/virtualenvs/covalent
```

This ensures that the proper Python interpreter is used by Covalent at runtime.

**7. (Optional) Customize Covalent-specific environment variables:**
Create the file specified in the In the `[Service]` directive `EnvironmentFile` location (in the above example, `/etc/covalent/covalent.env`).

Populate the file with Covalent-specific environment variables such as `COVALENT_CACHE_DIR`, `COVALENT_DATABASE`, `COVALENT_SVC_PORT` and so on to customize Covalent’s runtime environment.

**8. Once all the settings have been configured, start Covalent:**

```
systemctl daemon-reload
systemclt start covalent.service
```

:::info Note
You only need to update `systemd` by executing the `systemd daemon-reload` command when a unit file is modified.
:::

**9. Check the status of the service at any time with:**

```py
systemctl status covalent
```

**10. (Optional) Configure `covalent.service` to start on system bootup:**

```py
systemctl enable covalent.service
```

**11. Once the service is running properly, connect to the Covalent GUI from a browser.**
Use the server hostname and port configured in the `COVALENT_SVC_PORT` environment variable. By default, Covalent starts on port `48008`.

**12. If you need to stop the server, use:**

```
systemctl stop covalent.service
```
