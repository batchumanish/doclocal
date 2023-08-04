---
title: Deploying on AWS
displayed_sidebar: tutorialSidebar
---

import Adomonition from '/src/components/Adomonition';
import Indentation from '/src/components/Indentation';

Deploy Covalent in an AWS account with any x86-based EC2 instance. Deploying on AWS Cloud enables you to scale your deployments based on compute needs.

As with the [Docker image](/docs/user-documentation/sd-docker), with each stable release we include a ready-to-use Amazon Machine Image (AMI) that is fully configured to start a Covalent server on instance boot.

To run Covalent on AWS, do the following:

## Prerequisites

Have your [AWS account](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html) information ready, including: azaszrfdrfdfr454rrfe432r _ The AWS subnet ID _ The ID of the security group you want to use \* Your EC2 authentication key-pair name

## Procedure

**1. Query AWS Marketplace for the AMI ID.**
You can query directly from the console or via the aws cli command line tool. For example, the following CLI command queries details about the AMI released for version `covalent==0.202.0`:

```bash
aws ec2 describe-images --owners Agnostiq --filter "Name=tag:Version,Values=0.202.0"
```

:::info Note
To get the current stable image of Covalent, use `stable` instead of `latest`.
:::

**2. Once you have the AMI ID, launch an EC2 instance.**

You can launch an EC2 instance as follows:

```
aws ec2 run-instances --image-id <ami-id> --instance-type <instance-type> --subnet-id <subnet-id> -security-group-ids <security-group-id> --key-name <ec2-key-pair-name>
```

where:


`ami-id`
<Indentation md='is the AMI ID you queried in the previous step.'/>

`instance-type`
<Indentation md='is the EC2 instance type.'/>

`isubnet-id`
<Indentation md='is the AWS subnet ID.'/>

`security-group-id`
<Indentation md='is the ID of the EC2 security group you want to assign to the instance.'/>

`ec2-key-pair-name`
<Indentation md='is the name of the key pair you use to authenticate to EC2.'/>

For more complicated deployments, infrastructure-as-code tools such as [AWS CloudFormation](https://aws.amazon.com/cloudformation/) and [Terraform](https://www.terraform.io/) are available.
