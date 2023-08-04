---
title: Covalent-Patterns
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';

# Covalent Patterns

This guide describes some best practices for use with Covalent. Most are coding best practices to be followed when writing workflows. Others include server configuration and runtime considerations.

:::info Note

The coding best practices are illustrated examples using Jupyter notebook files (formerly IPython files; they have an ipynb file extension). You can open a file and run the example on your local machine. To run an example:

1. [Install Jupyter.](https://jupyter.org/install)
2. [Install Covalent.](/docs/get-started/quick-start)
3. [Start the Covalent server.](/docs/user-documentation/how-to/execution/covalent-cli)
4. Download the IPython (.ipynb) file by selecting the "go to the source" button present next to the heading.
5. [Open the IPython (.ipynb) file in a Jupyter notebook.](https://docs.jupyter.org/en/latest/running.html#how-do-i-open-a-specific-notebook)

:::

The coding practices described here fall into two categories:

- Patterns and techniques that improve Covalent implementations in some way. These improvements can be in efficiency, performance, code maintainability, or any of a number of other attributes considered desireable in a development project.

-  Techniques that must be followed when using Covalent. These usually reflect requirements for server-based dispatch and execution of workflows. The consequences of violating these requirements are demonstrated in the individual entries; in most cases, they cause the workflow to fail.


## Coding Best Practices

[Implementing Dynamic Workflows](/docs/user-documentation/covalent-patterns/dynamic-workflows)
<Indentation md='Use sublattices to encapsulate dynamic code.' fs='16px' color='#E5E7F3'/>

[Creating One Executor per Resource](/docs/user-documentation/covalent-patterns/create-and-assign)
<Indentation md='Create one executor object per compute resource and assign the executor to electrons as needed.' fs='16px' color='#E5E7F3'/>

[Transferring Large Data Objects](/docs/user-documentation/covalent-patterns/large-object-transfer)
<Indentation md='Save large data objects to a data store and read the object to electrons as needed.' fs='16px' color='#E5E7F3'/>

[Containing Computations in Tasks](/docs/user-documentation/covalent-patterns/post_process)
<Indentation md='Use an electron to generate the return value of a workflow.' fs='16px' color='#E5E7F3'/>

[Writing Result-Dependent Branch Decisions](/docs/user-documentation/covalent-patterns/result-dependent)
<Indentation md='Encapsulate result-dependent if/else statements in an electron.' fs='16px' color='#E5E7F3'/>

[Writing Result-Dependent Loops](/docs/user-documentation/covalent-patterns/result-dependent-loops)
<Indentation md='Encapsulate result-dependent loops in an electron.' fs='16px' color='#E5E7F3'/>

[Returning Multiple Values from a Function](/docs/user-documentation/covalent-patterns/consuming-multiple-return-values)
<Indentation md='To avoid needlessly proliferating functions, return multiple values from a task in an array.' fs='16px' color='#E5E7F3'/>

[Deploying a Covalent Server](/docs/user-documentation/covalent-patterns/best-practices)
<Indentation md='Follow these guidelines when running Covalent on a server.' fs='16px' color='#E5E7F3'/>
