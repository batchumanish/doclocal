import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f52'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ab6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '62a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '445'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '731'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '6e4'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5f0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ada'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '621'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2c',
        component: ComponentCreator('/docs/b2c', '51e'),
        exact: true
      },
      {
        path: '/docs/cloud/cloud_api',
        component: ComponentCreator('/docs/cloud/cloud_api', '602'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/cloud_how_to',
        component: ComponentCreator('/docs/cloud/cloud_how_to', 'e3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/cloud_quickstart',
        component: ComponentCreator('/docs/cloud/cloud_quickstart', '18c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/covalent_cloud_main',
        component: ComponentCreator('/docs/cloud/covalent_cloud_main', '8dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Deployments/covalent_cloud',
        component: ComponentCreator('/docs/Deployments/covalent_cloud', '2d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/cancellation',
        component: ComponentCreator('/docs/features/cancellation', '88f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/executor-plugins/aws-bracket',
        component: ComponentCreator('/docs/features/executor-plugins/aws-bracket', '5b4'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/aws-plugins',
        component: ComponentCreator('/docs/features/executor-plugins/aws-plugins', '988'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/executor-plugins/awsbatch',
        component: ComponentCreator('/docs/features/executor-plugins/awsbatch', '0b7'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/awsec2',
        component: ComponentCreator('/docs/features/executor-plugins/awsec2', '354'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/awsecs',
        component: ComponentCreator('/docs/features/executor-plugins/awsecs', '9ef'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/awslambda',
        component: ComponentCreator('/docs/features/executor-plugins/awslambda', '6a8'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/dask',
        component: ComponentCreator('/docs/features/executor-plugins/dask', '438'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/exe',
        component: ComponentCreator('/docs/features/executor-plugins/exe', '65a'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/slurm',
        component: ComponentCreator('/docs/features/executor-plugins/slurm', '8c5'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/source-code-dask',
        component: ComponentCreator('/docs/features/executor-plugins/source-code-dask', 'f0d'),
        exact: true
      },
      {
        path: '/docs/features/executor-plugins/ssh',
        component: ComponentCreator('/docs/features/executor-plugins/ssh', 'd67'),
        exact: true
      },
      {
        path: '/docs/features/executors',
        component: ComponentCreator('/docs/features/executors', '5d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/quantumTasks',
        component: ComponentCreator('/docs/features/quantumTasks', 'de2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/redispatch',
        component: ComponentCreator('/docs/features/redispatch', 'fa9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/triggers',
        component: ComponentCreator('/docs/features/triggers', 'bfd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/for-contributors/building-covalent',
        component: ComponentCreator('/docs/for-contributors/building-covalent', '227'),
        exact: true
      },
      {
        path: '/docs/get-started/first-experiment',
        component: ComponentCreator('/docs/get-started/first-experiment', '52e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/get-started/install',
        component: ComponentCreator('/docs/get-started/install', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/get-started/quick-start',
        component: ComponentCreator('/docs/get-started/quick-start', '67b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/get-started/version-migration',
        component: ComponentCreator('/docs/get-started/version-migration', '066'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/glossary',
        component: ComponentCreator('/docs/glossary', '846'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/login',
        component: ComponentCreator('/docs/login', 'dcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Overview',
        component: ComponentCreator('/docs/Overview', 'fc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/plugin',
        component: ComponentCreator('/docs/plugin', '256'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/api-ref',
        component: ComponentCreator('/docs/user-documentation/api-reference/api-ref', '2ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/cancellation',
        component: ComponentCreator('/docs/user-documentation/api-reference/cancellation', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/cov-api',
        component: ComponentCreator('/docs/user-documentation/api-reference/cov-api', '536'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/cov-apiindex',
        component: ComponentCreator('/docs/user-documentation/api-reference/cov-apiindex', '856'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/covalent',
        component: ComponentCreator('/docs/user-documentation/api-reference/covalent', 'c87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/covalent-clitool',
        component: ComponentCreator('/docs/user-documentation/api-reference/covalent-clitool', '55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/covalent-server',
        component: ComponentCreator('/docs/user-documentation/api-reference/covalent-server', 'd8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/dependencies',
        component: ComponentCreator('/docs/user-documentation/api-reference/dependencies', '71f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/dispatch-infrastructure',
        component: ComponentCreator('/docs/user-documentation/api-reference/dispatch-infrastructure', 'ed8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/dispatcher',
        component: ComponentCreator('/docs/user-documentation/api-reference/dispatcher', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/electron',
        component: ComponentCreator('/docs/user-documentation/api-reference/electron', '7e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors-api',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors-api', '525'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/asynchronous-base-executor-class',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/asynchronous-base-executor-class', 'ad1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/aws-bracket',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/aws-bracket', '054'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/awsbatch',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/awsbatch', '15f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/awsec2',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/awsec2', '1d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/awsecs',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/awsecs', 'a86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/awslambda',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/awslambda', 'df3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/azurebatch',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/azurebatch', 'a21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/braketqubit',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/braketqubit', '105'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/customizing-the-config',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/customizing-the-config', 'bcb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/dask',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/dask', '9db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/exe',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/exe', 'b02'),
        exact: true
      },
      {
        path: '/docs/user-documentation/api-reference/executors/ibmq',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/ibmq', '922'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/localqubit',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/localqubit', '26f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/qiskit',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/qiskit', '137'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/scode',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/scode', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/scode-awsplugin',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/scode-awsplugin', '7a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/scode-executor-base',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/scode-executor-base', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/scode-qiskit',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/scode-qiskit', '4e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/simulator',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/simulator', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/slurm',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/slurm', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/ssh',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/ssh', '459'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/executors/synchronous-base-executor-class',
        component: ComponentCreator('/docs/user-documentation/api-reference/executors/synchronous-base-executor-class', 'dc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/lattice',
        component: ComponentCreator('/docs/user-documentation/api-reference/lattice', '2cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/lepton',
        component: ComponentCreator('/docs/user-documentation/api-reference/lepton', '802'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/results',
        component: ComponentCreator('/docs/user-documentation/api-reference/results', 'a74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-deps',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-deps', 'f25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-depsbash',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-depsbash', 'fc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-depscall',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-depscall', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-depspip',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-depspip', 'd7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-dirtrigger',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-dirtrigger', 'e0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-electron',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-electron', 'ae6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-filefolder',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-filefolder', '7b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-filetransfer',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-filetransfer', '967'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-filetransferfile',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-filetransferfile', '91b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-lattice',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-lattice', 'be2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-lepton',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-lepton', '12f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-qcluster',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-qcluster', '585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-qelectron',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-qelectron', '54f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-result',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-result', '805'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-rsyncstrategy',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-rsyncstrategy', 'ed3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-simulator',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-simulator', '6c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-timetrigger',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-timetrigger', '15c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-transferstrategiesbase',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-transferstrategiesbase', 'ffb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-transport',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-transport', 'c64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/scode-triggersbase',
        component: ComponentCreator('/docs/user-documentation/api-reference/scode-triggersbase', '812'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/settingdef',
        component: ComponentCreator('/docs/user-documentation/api-reference/settingdef', 'b3d'),
        exact: true
      },
      {
        path: '/docs/user-documentation/api-reference/taskhelpers',
        component: ComponentCreator('/docs/user-documentation/api-reference/taskhelpers', 'ba5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/api-reference/triggers',
        component: ComponentCreator('/docs/user-documentation/api-reference/triggers', '9a3'),
        exact: true
      },
      {
        path: '/docs/user-documentation/api-reference/workflow-components',
        component: ComponentCreator('/docs/user-documentation/api-reference/workflow-components', '647'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/compatibility',
        component: ComponentCreator('/docs/user-documentation/compatibility', 'b71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/concepts-index',
        component: ComponentCreator('/docs/user-documentation/concepts/concepts-index', 'cfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/covalent-arch/covalent-architecture',
        component: ComponentCreator('/docs/user-documentation/concepts/covalent-arch/covalent-architecture', 'fee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/covalent-arch/covalent-gui',
        component: ComponentCreator('/docs/user-documentation/concepts/covalent-arch/covalent-gui', '555'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/covalent-arch/covalent-sdk',
        component: ComponentCreator('/docs/user-documentation/concepts/covalent-arch/covalent-sdk', '46d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/covalent-arch/covalent-services',
        component: ComponentCreator('/docs/user-documentation/concepts/covalent-arch/covalent-services', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/concepts/covalent-basics',
        component: ComponentCreator('/docs/user-documentation/concepts/covalent-basics', '140'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/best-practices',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/best-practices', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/consuming-multiple-return-values',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/consuming-multiple-return-values', '36f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/create-and-assign',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/create-and-assign', 'eaf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/dynamic-workflows',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/dynamic-workflows', '526'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/large-object-transfer',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/large-object-transfer', '841'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/patterns',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/patterns', '8b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/post_process',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/post_process', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/result-dependent',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/result-dependent', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/result-dependent-loops',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/result-dependent-loops', 'f89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/covalent-patterns/return-electron',
        component: ComponentCreator('/docs/user-documentation/covalent-patterns/return-electron', '133'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/credentials/',
        component: ComponentCreator('/docs/user-documentation/credentials/', '49d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/credentials/aws',
        component: ComponentCreator('/docs/user-documentation/credentials/aws', 'dbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/credentials/azure',
        component: ComponentCreator('/docs/user-documentation/credentials/azure', '484'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/gcp',
        component: ComponentCreator('/docs/user-documentation/gcp', 'd33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/add-bash-dependencies-to-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/add-bash-dependencies-to-electron', 'd01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/add-callable-dependencies-to-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/add-callable-dependencies-to-electron', 'e9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/add-constraints-to-lattice',
        component: ComponentCreator('/docs/user-documentation/how-to/add-constraints-to-lattice', '925'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/add-electron-to-lattice',
        component: ComponentCreator('/docs/user-documentation/how-to/add-electron-to-lattice', 'f25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/add-pip-dependencies-to-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/add-pip-dependencies-to-electron', '9ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/construct-bash-task',
        component: ComponentCreator('/docs/user-documentation/how-to/construct-bash-task', '689'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/construct-c-task',
        component: ComponentCreator('/docs/user-documentation/how-to/construct-c-task', 'f2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/construct-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/construct-electron', 'eee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/construct-lattice',
        component: ComponentCreator('/docs/user-documentation/how-to/construct-lattice', 'f77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/construct-lepton',
        component: ComponentCreator('/docs/user-documentation/how-to/construct-lepton', '3bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/customization',
        component: ComponentCreator('/docs/user-documentation/how-to/customization', '1d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/dir-trigger',
        component: ComponentCreator('/docs/user-documentation/how-to/dir-trigger', '159'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/cancel-dispatch',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/cancel-dispatch', '822'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/choosing-conda-environments',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/choosing-conda-environments', 'da0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/choosing-executors',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/choosing-executors', 'ecb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/covalent-cli',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/covalent-cli', '4a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/creating-custom-executors',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/creating-custom-executors', '77d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/execute-individual-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/execute-individual-electron', 'a17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/execute-lattice',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/execute-lattice', 'e66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/execute-lattice-multiple-times',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/execute-lattice-multiple-times', 'ad9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/execute-multiple-lattices',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/execute-multiple-lattices', '4fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/execute-sublattice',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/execute-sublattice', '1c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/execution/redispatch',
        component: ComponentCreator('/docs/user-documentation/how-to/execution/redispatch', 'fa6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/file-transfers-for-workflows-local',
        component: ComponentCreator('/docs/user-documentation/how-to/file-transfers-for-workflows-local', '4b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/file-transfers-to-from-azure_blob',
        component: ComponentCreator('/docs/user-documentation/how-to/file-transfers-to-from-azure_blob', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/file-transfers-to-from-remote',
        component: ComponentCreator('/docs/user-documentation/how-to/file-transfers-to-from-remote', '92d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/file-transfers-to-from-s3',
        component: ComponentCreator('/docs/user-documentation/how-to/file-transfers-to-from-s3', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/how-to-define',
        component: ComponentCreator('/docs/user-documentation/how-to/how-to-define', '7fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/how-to-guide',
        component: ComponentCreator('/docs/user-documentation/how-to/how-to-guide', 'f9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/looping',
        component: ComponentCreator('/docs/user-documentation/how-to/looping', '695'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/run-bash-command',
        component: ComponentCreator('/docs/user-documentation/how-to/run-bash-command', '2e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-electron-execution-result',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-electron-execution-result', 'de2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-electron-execution-status',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-electron-execution-status', '37e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-lattice-execution-result',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-lattice-execution-result', 'fbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-lattice-execution-status',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-lattice-execution-status', '197'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-lattice-execution-time',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-lattice-execution-time', 'a96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/status/query-multiple-lattice-execution-results',
        component: ComponentCreator('/docs/user-documentation/how-to/status/query-multiple-lattice-execution-results', '0ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/test-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/test-electron', '598'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/time-trigger',
        component: ComponentCreator('/docs/user-documentation/how-to/time-trigger', 'a16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/use-iterable',
        component: ComponentCreator('/docs/user-documentation/how-to/use-iterable', '7a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/visualize-lattice',
        component: ComponentCreator('/docs/user-documentation/how-to/visualize-lattice', '4cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/how-to/wait-for-another-electron',
        component: ComponentCreator('/docs/user-documentation/how-to/wait-for-another-electron', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/Migration_error',
        component: ComponentCreator('/docs/user-documentation/Migration_error', '66e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/sd-deploying',
        component: ComponentCreator('/docs/user-documentation/sd-deploying', 'cd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/sd-docker',
        component: ComponentCreator('/docs/user-documentation/sd-docker', '99e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/sd-systemd',
        component: ComponentCreator('/docs/user-documentation/sd-systemd', 'b8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/server-deployment',
        component: ComponentCreator('/docs/user-documentation/server-deployment', 'ae9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/troubleshooting',
        component: ComponentCreator('/docs/user-documentation/troubleshooting', '699'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/',
        component: ComponentCreator('/docs/user-documentation/tutorials/', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/appendix',
        component: ComponentCreator('/docs/user-documentation/tutorials/appendix', '6e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/autoencoders',
        component: ComponentCreator('/docs/user-documentation/tutorials/autoencoders', '81f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/dnn_comparison',
        component: ComponentCreator('/docs/user-documentation/tutorials/dnn_comparison', 'e88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/ensemble',
        component: ComponentCreator('/docs/user-documentation/tutorials/ensemble', 'ef5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/hybrid',
        component: ComponentCreator('/docs/user-documentation/tutorials/hybrid', 'af7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/hybrid_neural_network',
        component: ComponentCreator('/docs/user-documentation/tutorials/hybrid_neural_network', 'a49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/iris',
        component: ComponentCreator('/docs/user-documentation/tutorials/iris', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/mnist',
        component: ComponentCreator('/docs/user-documentation/tutorials/mnist', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/nitrogencopper',
        component: ComponentCreator('/docs/user-documentation/tutorials/nitrogencopper', 'ade'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/parityclassify',
        component: ComponentCreator('/docs/user-documentation/tutorials/parityclassify', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/qaoa',
        component: ComponentCreator('/docs/user-documentation/tutorials/qaoa', 'd6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/qpuaccessibm',
        component: ComponentCreator('/docs/user-documentation/tutorials/qpuaccessibm', '840'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/quantumchemistry',
        component: ComponentCreator('/docs/user-documentation/tutorials/quantumchemistry', '20f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/quantumembedding',
        component: ComponentCreator('/docs/user-documentation/tutorials/quantumembedding', '2c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/spacetime',
        component: ComponentCreator('/docs/user-documentation/tutorials/spacetime', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/star_tracker',
        component: ComponentCreator('/docs/user-documentation/tutorials/star_tracker', '375'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/svm',
        component: ComponentCreator('/docs/user-documentation/tutorials/svm', '30c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/tutorials/violating_the_chsh',
        component: ComponentCreator('/docs/user-documentation/tutorials/violating_the_chsh', '887'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/copying-python',
        component: ComponentCreator('/docs/user-documentation/user-interface/copying-python', 'ab1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/dark-cluster',
        component: ComponentCreator('/docs/user-documentation/user-interface/dark-cluster', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/dashboard',
        component: ComponentCreator('/docs/user-documentation/user-interface/dashboard', '90c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/dispatch-summary',
        component: ComponentCreator('/docs/user-documentation/user-interface/dispatch-summary', 'b8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/dispatcher',
        component: ComponentCreator('/docs/user-documentation/user-interface/dispatcher', 'e89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/electron-sidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/electron-sidebar', 'dcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/electron-subsidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/electron-subsidebar', '4d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/executor',
        component: ComponentCreator('/docs/user-documentation/user-interface/executor', '4a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/filter',
        component: ComponentCreator('/docs/user-documentation/user-interface/filter', '33a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/graph-view',
        component: ComponentCreator('/docs/user-documentation/user-interface/graph-view', 'ec4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/lattice-sidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/lattice-sidebar', '162'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/pagination',
        component: ComponentCreator('/docs/user-documentation/user-interface/pagination', 'f8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/preview-electron-sidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/preview-electron-sidebar', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/preview-lattice-sidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/preview-lattice-sidebar', 'd54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/preview-transport-graph',
        component: ComponentCreator('/docs/user-documentation/user-interface/preview-transport-graph', 'ac6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/sdk',
        component: ComponentCreator('/docs/user-documentation/user-interface/sdk', 'ad4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/search',
        component: ComponentCreator('/docs/user-documentation/user-interface/search', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/server-lo-pagination',
        component: ComponentCreator('/docs/user-documentation/user-interface/server-lo-pagination', '2cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/server-log',
        component: ComponentCreator('/docs/user-documentation/user-interface/server-log', '9c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/server-log-search',
        component: ComponentCreator('/docs/user-documentation/user-interface/server-log-search', '565'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/server-log-sort',
        component: ComponentCreator('/docs/user-documentation/user-interface/server-log-sort', 'e64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/settings',
        component: ComponentCreator('/docs/user-documentation/user-interface/settings', '126'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/sort',
        component: ComponentCreator('/docs/user-documentation/user-interface/sort', '9a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/sublattice-views',
        component: ComponentCreator('/docs/user-documentation/user-interface/sublattice-views', '06e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/sublattices-sidebar',
        component: ComponentCreator('/docs/user-documentation/user-interface/sublattices-sidebar', '2b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/sublattices-transport-graph',
        component: ComponentCreator('/docs/user-documentation/user-interface/sublattices-transport-graph', '7ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/terminal',
        component: ComponentCreator('/docs/user-documentation/user-interface/terminal', '11d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/the-ui',
        component: ComponentCreator('/docs/user-documentation/user-interface/the-ui', 'd77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/transport-graph',
        component: ComponentCreator('/docs/user-documentation/user-interface/transport-graph', 'eb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/ui',
        component: ComponentCreator('/docs/user-documentation/user-interface/ui', 'ce7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/workflow-data',
        component: ComponentCreator('/docs/user-documentation/user-interface/workflow-data', '6a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/workflow-dispatch-deletetion',
        component: ComponentCreator('/docs/user-documentation/user-interface/workflow-dispatch-deletetion', '795'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/workflow-dispatch-list',
        component: ComponentCreator('/docs/user-documentation/user-interface/workflow-dispatch-list', 'e3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/user-documentation/user-interface/workflow-preview-graph',
        component: ComponentCreator('/docs/user-documentation/user-interface/workflow-preview-graph', 'baf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/what-covalent',
        component: ComponentCreator('/docs/what-covalent', '2c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/why-covalent',
        component: ComponentCreator('/docs/why-covalent', 'd29'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '019'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
