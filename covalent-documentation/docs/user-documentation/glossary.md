---
title: Glossary
slug: /glossary
---

import Indentation from '/src/components/Indentation';
import Noindentation from '/src/components/Noindentation';

## API

Application Programming Interface.
In general, the components of a software product that are exposed or made public so that third-party developers can extend the product or incorporate it into other software.

In Covalent, a Python module containing a small collection of classes that implement server-based workflow management. A superset of the Covalent [SDK](#sdk).

## Cluster

A pool of identical workers, typically computational processes, that can be accessed by a multiple [executors](#executor) in parallel. The computational processes can be on separate :term:`host`s, one or more VMs, or under management of a container service on the same host.

## Contributor

A volunteer who contributes work to an open source project. Usually but not always a software engineer. The work can be software, documentation, testing, or other types of support.

Covalent contributors develop and maintain the Covalent API, server code, plug-ins, documentation, examples, and tutorials, and help publicize and promote Covalent.

## Covalent

A Pythonic workflow manager engineered especially for interactive data science experimentation with high-performance and specialized computation platforms, including quantum computers.

## Credentials

Any of a number of encryption-based keys, storable in a data file, that serves to [authenticate or authorize](https://www.okta.com/identity-101/authentication-vs-authorization/) access to a computing resource such as a cloud-based virtual machine instance.

## Dask

An open source Python library and scheduler for parallel and distributed computation. Covalent uses Dask as its default [executor](#executor) for [workflow tasks](#workflow).

## Dispatch

In general, to send a [workflow](#workflow) or other computational job to be run by a scheduler.

In Covalent, `dispatch()` is a function that sends a [lattice](#lattice) to the Covalent server.

A _dispatcher_ is a server process that dispatches workflow tasks. See also [scheduler](#scheduler).

## Electron

Covalent’s Pythonic class representing a [task](#task), or the class instantiated as an object. More precisely, by typographical convention:

`Electron` (**capital "E"**)

The [Covalent API class](/docs/user-documentation/api-reference/workflow-components#electron) representing a computational task that can be run by a Covalent executor.

**electron (lower-case “e”)**
An object that is an instantiation of the `Electron` class.

`@covalent.electron`

The decorator used to (1) turn a function into an electron; (2) wrap a function in an electron, and (3) instantiate an instance of `Electron` containing the decorated function (all three descriptions are equivalent).

## Executor

In Covalent, an interface to a computational resource. The compute resource is said to _back_, or be the “backend” for, the executor. The backend can be local, remote, or cloud-based. A single executor is backed by exactly one resource (though that resource could be a [cluster](#cluster)).

A [workflow](#workflow) can have access to any number of executors, backed by any number of different resources of any number of types. Each [task](#task) within the workflow is assigned an executor, explicitly or by default.

Covalent comes with a default executor backed by a local [Dask](#dask) cluster.

## Experiment

A computational script or notebook that performs data analysis, parametric data modeling, or machine learning, usually with the intent of developing a predictive model in some scientific domain.

Covalent is designed to facilitate interactive development of an experiment, typically with the intent of working toward an analysis or model running massive data on a HPC or quantum compute resource.

## Function

In Python, a runnable object that takes input parameters and produces a result, either in the form of a return value, side effects, or both.

## GUI

Graphical user interface. The _Covalent GUI_ is a browser-based system for viewing and managing Covalent dispatches, results, and logs.

## Host

A single physical computer, as distinct from a [virtual machine (VM)](#vm). Also commonly called a “node” or “machine”.

## Lattice

Covalent’s Pythonic class representing a [workflow](#workflow), or the class instantiated as an object. More precisely, by typographical convention:

`Lattice (capital “L”)`

The [Covalent API class](/docs/user-documentation/api-reference/workflow-components#lattice) representing a workflow that can be run by a Covalent dispatcher

`lattice (lower-case “l”)`

An object that is an instantiation of the `Lattice` class.

`@covalent.lattice`

The decorator used to create a lattice by wrapping a function in the `Lattice` class.

## Local

The descriptor for a computer that you are working on directly – a laptop or desktop workstation. Also called a _client_ when you’re using it to connect to a [remote](#remote) server.

## Management

The Covalent server _manages_ workflows in the sense that it analyzes and runs them using different [executors](#executor) as specified in the code. This is in contrast to an _unmanaged_ experiment or script, which is simply in a Python interpreter without specifying or saving the execution details or results.

## Parallelism

Decomposing a workflow to run in two or more parallel processes or threads to improve real-time performance.

## Python

A high-level computer language. Covalent is written in Python.

The Python open-source community has developed several features that make it popular with machine learning researchers and data scientists, including:

- Many libraries that facilitate data analytics and ML/AI. Some of the most popular are Pandas, NumPy, SciKit-Learn, Scrapy, PyTorch, and TensorFlow.
- Compilers for improving the performance of Python code (Python is nominally an interpreted language).
- Notebooks such as Jupyter for developing, running and documenting :term:`experiment`s.

## Remote

The descriptor for a [host](#host), or for a Covalent server running on a host, that you connect to via a network. A remote host can be on-premise or in the cloud, for example on an AWS instance.

## Result

In Covalent, a Python object that represents the return value of an [electron](#remote) or [lattice](#lattice).

## S3

Simple Storage System. S3 is a cloud object storage system offered on Amazon Web Services’ (AWS).

## Scheduler

Server software that manages a queue of workflow requests. Sometimes used interchangeably with dispatcher, but technically not the same thing. A scheduler manages workflow requests; a dispatcher runs tasks and manages results

## SDK

Software Development Kit.

In general, the components of an [API](#api) that enable it to be incorporated into a larger software product.

In Covalent, the module containing the [lattice](#lattice), [electron](#electron), [dispatcher](#dispatch) and other classes that enable the Covalent server to manage workflows.

## Server

Refers to both a [remote](#remote) [host](#host), and to software (such as Covalent) running on that host.

## Sublattice

In Covalent, a [lattice](#lattice) that has been encapsulated with an [electron](#electron) decorator so that it can be included as a single task in a larger lattice.

## Subtask

Obsolete terminology for an [electron](#electron).

## Task

A unit of work in a workflow. In Covalent, a task is:

- Contained in a single function
- Denoted by the [@electron](#electron) decorator
- Assigned an [executor](#executor) on which to run

## Transport Graph

A [directed,acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) that represents a [workflow](#workflow) in Covalent. The nodes of a transport graph are tasks and parameters, and the edges of the graph are dependencies.'

## User

In general, a software industry term that describes a person using a particular application program or software system.

In Covalent, a data professional who employs the Covalent [SDK](#sdk) to run workflows from a notebook or interactive Python session.

## VM

Virtual machine. A software emulation of a computer, complete with its own compute, storage, and network resources, that runs in a set of partitioned-off address spaces on a physical [host](#host).

## Workflow

A sequence of computational tasks designed to implement a data model or analysis.'

In Covalent, a workflow is wrapped in the [lattice](#lattice) decorator so it can be analyzed, scheduled and, executed on the Covalent server.
