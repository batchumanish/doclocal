/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      label: "Home",
      id: "index",
      className: "home",
    },
    {
      type: "doc",
      label: "Overview",
      id: "Overview",
      className: "overview",
    },
    // {
    //   type: "category",
    //   label: "Overview",
    //   className: "overview",
    //   items: [
    //     {
    //       type: "doc",
    //       label: "What is Covalent?",
    //       id: "what-covalent",
    //       className: "item1",
    //     },
    //     {
    //       type: "doc",
    //       label: "Why Covalent?",
    //       id: "why-covalent",
    //       className: "why",
    //     },
    //   ],
    // },
    {
      type: "doc",
      label: "Getting Started",
      id: "get-started/quick-start",
      className: "quickstart",
    },
    {
      type: "category",
      label: "GETTING STARTED",
      className: "getstarted",
      items: [
        {
          type: "doc",
          label: "Installation",
          id: "get-started/install",
          className: "installation",
        },
        {
          type: "doc",
          label: "First Experiment",
          id: "get-started/first-experiment",
          className: "why",
        },
      ],
    },
    {
      type: "category",
      label: "CORE CONCEPTS",
      className: "core-concepts",
      link: {
        type: "doc",
        id: "user-documentation/concepts/concepts-index",
      },
      items: [
        {
          type: "doc",
          label: "Covalent Basics",
          id: "user-documentation/concepts/covalent-basics",
          className: "installation",
        },
        {
          type: "category",
          label: "Covalent Architecture",
          link: {
            type: "doc",
            id: "user-documentation/concepts/covalent-arch/covalent-architecture",
          },
          className: "why",
          items: [
            {
              type: "doc",
              label: "The Covalent SDK",
              id: "user-documentation/concepts/covalent-arch/covalent-sdk",
            },
            {
              type: "doc",
              label: "Covalent Services",
              id: "user-documentation/concepts/covalent-arch/covalent-services",
            },
            {
              type: "doc",
              label: "The Covalent GUI",
              id: "user-documentation/concepts/covalent-arch/covalent-gui",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "POWER FEATURES",
      className: "power",
      items: [
        {
          type: "doc",
          label: "Quantum tasks",
          id: "features/quantumTasks",
          className: "pow-features",
        },
        {
          type: "doc",
          label: "Triggers",
          id: "features/triggers",
          className: "pow-features",
        },
        {
          type: "doc",
          label: "Cancelation",
          id: "features/cancellation",
          className: "pow-features",
        },
        {
          type: "doc",
          label: "Executors",
          id: "features/executors",
          className: "pow-features",
        },
        {
          type: "doc",
          label: "Redispatch",
          id: "features/redispatch",
          className: "pow-features",
        }
      ],
    },
    {
      type: "category",
      label: "COVALENT CLOUD",
      collapsible: true,
      className: "cloud",
      link: {
        type: "doc",
        id: "cloud/covalent_cloud_main",
      },
      items: [
        {
          type: "doc",
          label: "Getting Started",
          id: "cloud/cloud_quickstart",
          className: "gettingstarted",
        },
        {
          type: "doc",
          label: "How to",
          id: "cloud/cloud_how_to",
          className: "howto",
        },
        {
          type: "doc",
          label: "API",
          id: "cloud/cloud_api",
          className: "api",
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "EXTENDABLE PLUGINS",
    //   className: "plugin"
      
    // },
    {
      type: "doc",
      label: "EXTENDABLE PLUGINS",
      id: "plugin",
      className: "plugin",
    },
    {
      type: "category",
      label: "GUIDES & TUTORIALS",
      className: "guides",
      items: [
        {
          type: "doc",
          label: "Tutorials",
          id: "user-documentation/tutorials/tutorials",
          className: "guides-t",
        },
        {
          type: "doc",
          label: "How-To Guide",
          id: "user-documentation/how-to/how-to-guide",
          className: "guides-t",
        },
        {
          type: "doc",
          label: "Covalent Patterns",
          id: "user-documentation/covalent-patterns/patterns",
          className: "guides-t",
        },
        {
          type: "doc",
          label: "Troubleshooting",
          id: "user-documentation/troubleshooting",
          className: "guides-t",
        },
      ],
    },
    {
      type: "category",
      label: "DEPLOYMENTS",
      className: "deploy",
      link: {
        type: "doc",
        id: "user-documentation/server-deployment",
      },
      items: [
        {
          type: "doc",
          label: "Covalent Cloud",
          id: "Deployments/covalent_cloud",
          className: "deployments",
        },
        {
          type: "doc",
          label: "AWS",
          id: "user-documentation/sd-deploying",
          className: "deployments",
        },
        // {
        //   type: "doc",
        //   label: "GCP",
        //   id: "user-documentation/gcp",
        //   className: "deployments",
        // },
        // {
        //   type: "doc",
        //   label: "Azure",
        //   id: "user-documentation/credentials/azure",
        //   className: "deployments",
        // },
        {
          type: "doc",
          label: "Docker",
          id: "user-documentation/sd-docker",
          className: "deployments",
        },
        {
          type: "doc",
          label: "Systemd",
          id: "user-documentation/sd-systemd",
          className: "deployments",
        },
      ],
    },

    {
      type: "category",
      label: "API & INTERFACE",
      className: "api-interface",
      items: [
        {
          type: "category",
          label: "OS API",
          link: {
            type: "doc",
            id: "user-documentation/api-reference/cov-api",
          },
          className: "interface",
          items: [
            {
              type: "doc",
              label: "Workflow Components",
              id: "user-documentation/api-reference/workflow-components",
            },
            {
              type: "doc",
              label: "Task Helpers",
              id: "user-documentation/api-reference/taskhelpers",
            },
            {
              type: "doc",
              label: "Executors",
              id: "user-documentation/api-reference/executors-api",
            },
            {
              type: "doc",
              label: "Dispatch Infrastructure",
              id: "user-documentation/api-reference/dispatch-infrastructure",
            },
            {
              type: "doc",
              label: "Covalent Server",
              id: "user-documentation/api-reference/covalent-server",
            },
          ],
        },
        {
          type: "category",
          label: "OS UI",
          link: {
            type: "doc",
            id: "user-documentation/user-interface/the-ui",
          },
          className: "interface",
          items: [
            {
              type: "doc",
              label: "Dashboard",
              id: "user-documentation/user-interface/dashboard",
              className: "interface-1",
            },
            {
              type: "doc",
              label: "Graph View",
              id: "user-documentation/user-interface/graph-view",
            },
            {
              type: "doc",
              label: "Sublattice Views",
              id: "user-documentation/user-interface/sublattice-views",
            },
            {
              type: "doc",
              label: "Preview Transport Graph",
              id: "user-documentation/user-interface/preview-transport-graph",
            },
            {
              type: "doc",
              label: "Server Log",
              id: "user-documentation/user-interface/server-log",
            },
            {
              type: "doc",
              label: "Settings",
              id: "user-documentation/user-interface/settings",
            },
            {
              type: "doc",
              label: "Terminal",
              id: "user-documentation/user-interface/terminal",
            },
          ],
        },
        {
          type: "doc",
          label: "Glossary",
          id: "user-documentation/glossary",
          className: "interface",
        },
      ],
    },
    {
      type: "category",
      label: "BE A CONTRIBUTOR",
      className: "contributor",
      items: [
        {
          type: "link",
          label: "Contribution Guidelines",
          href: "https://github.com/AgnostiqHQ/covalent/blob/develop/CONTRIBUTING.md",
          className: "guidelines",
        },
        {
          type: "link",
          label: "Code of Conduct",
          href: "https://github.com/AgnostiqHQ/covalent/blob/develop/CODE_OF_CONDUCT.md",
          className: "code",
        },
      ],
    },
  ],
};

module.exports = sidebars;




// items: [
//   {
//     type: "doc",
//     label: "Dask Executor",
//     id: "user-documentation/api-reference/executors/dask",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "SSH Executor",
//     id: "user-documentation/api-reference/executors/ssh",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Slurm Executor",
//     id: "user-documentation/api-reference/executors/slurm",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS Plugins",
//     id: "features/executor-plugins/aws-plugins",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS EC2 Executor",
//     id: "user-documentation/api-reference/executors/awsec2",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS Lambda Executor",
//     id: "user-documentation/api-reference/executors/awslambda",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS Batch Executor",
//     id: "user-documentation/api-reference/executors/awsbatch",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Google Batch Executor",
//     id: "user-documentation/gcp",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Azure Batch Executor",
//     id: "user-documentation/api-reference/executors/azurebatch",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS ECS  Executor",
//     id: "user-documentation/api-reference/executors/awsecs",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS Braket Executor",
//     id: "user-documentation/api-reference/executors/aws-bracket",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Qiskit Executor",
//     id: "user-documentation/api-reference/executors/qiskit",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "IBMQ Executor",
//     id: "user-documentation/api-reference/executors/ibmq",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "AWS Braket Qubit Executor",
//     id: "user-documentation/api-reference/executors/braketqubit",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Local Braket Qubit Executor",
//     id: "user-documentation/api-reference/executors/localqubit",
//     className: "exe-plug",
//   },
//   {
//     type: "doc",
//     label: "Simulator",
//     id: "user-documentation/api-reference/executors/simulator",
//     className: "exe-plug",
//   },
// ],