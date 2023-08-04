import Typography from "@mui/material/Typography";
import ReactMarkdown from 'react-markdown';

# Tutorials

The following tutorials demonstrate examples of how Covalent is used in real-world settings. Make sure you have properly installed Covalent and have started the Covalent server before attempting to reproduce a tutorial.

---

<Typography style={{fontSize:'18px', fontWeight:'700'}}>

Beginner

</Typography>

<table className="tables">
  <tr>
    <th style={{width:'10.5rem'}}>Topic</th>
    <th style={{width:'30rem'}}>Title</th>
  </tr>
    <tr>
    <td>Machine learning</td>
    <td ><ReactMarkdown children='[MNIST classifier](/docs/user-documentation/tutorials/mnist)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Using Covalent with PennyLane for hybrid computation](/docs/user-documentation/tutorials/hybrid)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Linear and convolutional autoencoders](/docs/user-documentation/tutorials/autoencoders)'/></td>
  </tr>
    <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Accessing IBM Quantum Cloud](/docs/user-documentation/tutorials/qpuaccessibm)'/></td>
  </tr>
</table>

<Typography style={{fontSize:'18px', fontWeight:'700'}}> Intermediate </Typography>

<table className="tables">
  <tr>
    <th  style={{width:'10.5rem'}}>Topic</th>
    <th  style={{width:'30rem'}}>Title</th>
  </tr>
    <tr>
    <td>Machine learning</td>
    <td ><ReactMarkdown children='[Iris classification](/docs/user-documentation/tutorials/iris)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Variational parity classification](/docs/user-documentation/tutorials/parityclassify)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Modeling time series for sales forecasting](/docs/user-documentation/tutorials/dnn_comparison)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Training a quantum-classical neural network](/docs/user-documentation/tutorials/hybrid_neural_network)'/></td>
  </tr>
  <tr>
    <td>Quantum Chemistry</td>
    <td><ReactMarkdown children='[Dynamic quantum chemistry workflow](/docs/user-documentation/tutorials/quantumchemistry)'/>
    </td>
  </tr>
    <tr>
    <td>Quantum Electron</td>
    <td><ReactMarkdown children='[Violating the CHSH Inequality on IBM Quantum Backends](/docs/user-documentation/tutorials/violating_the_chsh)'/>
    </td>
  </tr>
</table>

<Typography style={{fontSize:'18px', fontWeight:'700'}}>Advanced</Typography>

<table className="tables">
  <tr>
    <th>Topic</th>
    <th style={{width:'30rem'}}>Title</th>
  </tr>
    <tr>
    <td>Quantum Chemistry</td>
    <td ><ReactMarkdown children='[Simulating the Nitrogen-Copper interaction](/docs/user-documentation/tutorials/nitrogencopper)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Classical and quantum support vector machines](/docs/user-documentation/tutorials/svm)'/></td>
  </tr>
  <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Training quantum embedding kernels for classification](/docs/user-documentation/tutorials/quantumembedding)'/></td>
  </tr>
    <tr>
    <td>Quantum Optimization</td>
    <td><ReactMarkdown children='[Using QAOA to Solve the Max-Cut Problem](/docs/user-documentation/tutorials/qaoa)'/></td>
  </tr>
    <tr>
    <td>Machine learning</td>
    <td><ReactMarkdown children='[Quantum Ensemble Classification](/docs/user-documentation/tutorials/ensemble)'/></td>
  </tr>
      <tr>
    <td>Astronomy</td>
    <td ><ReactMarkdown children='[Tracking stars in the night sky](/docs/user-documentation/tutorials/star_tracker)'/></td>
  </tr>
      <tr>
    <td>Quantum Gravity</td>
    <td><ReactMarkdown children='[Classifying discrete spacetimes by dimension](/docs/user-documentation/tutorials/spacetime)'/></td>
  </tr>
</table>

Do you use Covalent in an interesting project? Contribute a tutorial on [GitHub](https://github.com/AgnostiqHQ/covalent/issues). To get started, check out the [Tutorial Guidelines](https://github.com/AgnostiqHQ/covalent/blob/develop/doc/TUTORIAL_GUIDELINES.md).
