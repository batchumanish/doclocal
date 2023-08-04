const mapTable = {
  "how-to": {
    label: "How-To Guide",
    href: "/docs/user-documentation/how-to/how-to-guide",
  },
  "covalent-patterns": {
    label: "Covalent Patterns",
    href:"/docs/user-documentation/covalent-patterns/patterns",
  },
  "user-documentation": { label: "User Documentation" },
  "construct-electron": { label: "Constructing a Task (Electron)" },
  "user-interface": {
    href: "/docs/user-documentation/user-interface/the-ui",
    label: "User Interface",
  },
  tutorials: {
    label: "Tutorials",
    href: "/docs/user-documentation/tutorials",
  },
  violating_the_chsh:{
    label:"Violating the CHSH Inequality on IBM Quantum Backends"
  },
  appendix:{
    label:"Appendix"
  },
  mnist: {
    label: "MNIST Classifier",
  },
  hybrid: {
    label: "PennyLane",
  },
  autoencoders: {
    label: "Linear and Convolutional autoencoders",
  },
  qpuaccessibm: {
    label: "IBM Quantum",
  },
  iris: {
    label: "Iris classification",
  },
  parityclassify: {
    label: "Parity Classification",
  },
  dnn_comparison: {
    label: "Comparing Deep Learning Models",
  },
  nitrogencopper: {
    label: "Nitrogen-Copper interaction",
  },
  svm: {
    label: "Support Vector Machines",
  },
  quantumembedding: {
    label: "Quantum Embedding Kernels",
  },
  qaoa: {
    label: "Max-Cut Problem",
  },
  ensemble: {
    label: "Ensemble Classification",
  },
  star_tracker: {
    label: "Tracking stars",
  },
  spacetime: {
    label: "Classifying discrete spacetimes",
  },
  hybrid_neural_network:{
    label:"Training a quantum-classical neural network"
  },
  "dir-trigger": {
    label: "Add a directory trigger to a lattice",
    href: "/docs/user-documentation/how-to/dir-trigger",
  },
  "time-trigger": {
    label: "Add a time trigger to a lattice",
    href: "/docs/user-documentation/how-to/time-trigger",
  },
  "how-to-define":{
    label:"Defining Custom Selector",
    href:"/docs/user-documentation/how-to/how-to-define",
  },
  "construct-lattice": {
    label: "Constructing a Workflow (Lattice)",
  },
  "add-electron-to-lattice": {
    label: "Adding Electrons to a Lattice ",
  },
  "test-electron": {
    label: "Testing an Electron",
  },
  "use-iterable": {
    label: "Using an Iterable",
  },
  looping: {
    label: "Looping",
  },
  "visualize-lattice": {
    label: "Visualizing a Lattice",
  },
  "add-constraints-to-lattice": {
    label: "Adding Constraints to Tasks and Workflows",
  },
  "wait-for-another-electron": {
    label: "Waiting for Execution of Another Electron",
  },
  "file-transfers-for-workflows-local": {
    label: "Transferring Local Files During Workflows",
  },
  "file-transfers-to-from-remote": {
    label: "Transferring Files To and From a Remote Host",
  },
  "file-transfers-to-from-s3": {
    label: "Transferring Files To and From an S3 Bucket",
  },
  "file-transfers-to-from-azure_blob": {
    label:"Transferring Files To and From Azure Blob Storage"
  },
  "construct-lepton": {
    label: "Constructing a Lepton",
  },
  "construct-c-task": {
    label: "Constructing a Task from C Code",
  },
  "add-pip-dependencies-to-electron": {
    label: "Adding Pip Dependencies",
  },
  "add-bash-dependencies-to-electron": {
    label: "Adding Bash Dependencies",
  },
  "add-callable-dependencies-to-electron": {
    label: "Adding Callable Function Dependencies",
  },
  "construct-bash-task": {
    label: "Constructing Tasks from Bash Scripts",
  },
  "covalent-cli": {
    label: "Managing the Covalent Server",
  },
  "execute-lattice": {
    label: "Executing a Workflow (Lattice)",
  },
  redispatch: {
    label: "Re-executing a Workflow",
  },
  "execute-individual-electron": {
    label: "Executing an Individual Task (Electron)",
  },
  "execute-lattice-multiple-times": {
    label: "Executing a Workflow (Lattice)",
  },
  "execute-multiple-lattices": {
    label: "Executing Multiple Workflows (Lattices) ",
  },
  "execute-sublattice": {
    label: "Executing a Lattice as an Electron (Sublattice)",
  },
  "choosing-executors": {
    label: "Choosing an Executor for a Task (Electron)",
  },
  "choosing-conda-environments": {
    label: "Working in a Conda Environment",
  },
  "query-lattice-execution-status": {
    label: "Querying Workflow (Lattice) Execution Status",
  },
  "query-electron-execution-status": {
    label: "Querying Task (Electron) Status",
  },
  "query-lattice-execution-time": {
    label: "Calculating Lattice Execution Time",
  },
  "query-multiple-lattice-execution-results": {
    label: "Querying Multiple Workflows (Lattices)",
  },
  "query-lattice-execution-result": {
    label: "Querying the Result of a Workflow (Lattice)",
  },
  "query-electron-execution-result": {
    label: "Querying the Results of All Tasks (Electrons)",
  },
  customization: {
    label: "Customizing the Configuration",
  },
  "post_process": {
    label:"Return Electron Output Values from Lattices"
  },
  "consuming-multiple-return-values": {
    label:"Consuming Multiple Return Values from an Electron"
  },
  "result-dependent": {
    label:" Result Dependent If/Else"
  },
  "result-dependent-loops": {
    label:" Result Dependent Loops"
  },
  "create-and-assign": {
    label:"Creating and Assigning an Executor"
  },
  "large-object-transfer": {
    label:"Large Object Transfer"
  },
  "return-electron": {
    label:"Return Electron Output Values from Lattices"
  },
  "dynamic-workflows":{
    label:'Dynamic Workflows'
  },
  compatibility: {
    label: "Compatibility",
  },
  "api-reference": {
    href: "/docs/user-documentation/api-reference/api-ref",
    label: "API Reference",
  },
  "scode-triggersbase": {
    label: "Source code for covalent.triggers.base",
  },
  "dispatch-summary": {
    label: "Dispatch Summary",
  },
  "workflow-dispatch-list": {
    label: "Workflow Dispatch List",
  },
  pagination: {
    label: "Pagination",
  },
  search: {
    label: "Search",
  },
  sort: {
    label: "Sort",
  },
  filter: {
    label: "Filter by Status",
  },
  "workflow-dispatch-deletetion": {
    label: "Deleting Dispatches",
  },
  "trasport-graph": {
    label: "Transport Graph",
  },
  "lattice-sidebar": {
    label: "Lattice Sidebar",
  },
  "electron-sidebar": {
    label: "Electron Sidebar",
  },
  "sublattices-transport-graph": {
    label: "Sublattices Transport Graph",
  },
  "sublattices-sidebar": {
    label: "Sublattices Sidebar",
  },
  "electron-subsidebar": {
    label: "Electron Sidebar",
  },
  "workflow-preview-graph": {
    label: "Workflow Preview Graph",
  },
  "preview-lattice-sidebar": {
    label: "Preview Lattice Sidebar",
  },
  "preview-electron-sidebar": {
    label: "Preview Electron Sidebar",
  },
  "server-log-search": {
    label: "Search",
  },
  "server-lo-pagination": {
    label: "Pagination",
  },
  "server-log-sort": {
    label: "Sort",
  },
  sdk: {
    label: "SDK",
  },
  executor: {
    label: "Executors",
  },
  dispatcher: {
    label: "Dispatcher",
  },
  "dark-cluster": {
    label: "Dask Executor",
  },
  "workflow-data": {
    label: "Workflow Data",
  },
  ui: {
    label: "User Interface",
  },
  executors: {
    label: "Executors",
  },
  "scode-electron": {
    label: "Source code for covalent._workflow.electron",
  },
  "scode-lattice": {
    label: "Source code for covalent._workflow.lattice",
  },
  "scode-qelectron":{
    label: "Source code for QElectron"
  },
  "scode-qcluster":{
    label: "Source code for QCluster"
  },
  scode: {
    label: "Source code ",
  },
  Migration_error: {
    label: "Remedying Database Migration Errors",
  },
  "cov-api": {
    label: "Covalent API",
  },
  "best-practices": {
    label: "Best Practices",
  },
};

export default mapTable;
