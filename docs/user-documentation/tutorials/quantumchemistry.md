---
displayed_sidebar: tutorialSidebar
title: Dynamic Quantum Chemistry Workflow 
---
import Goto from '/src/components/Goto.js';

# Dynamic Quantum Chemistry Workflow <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/tutorials/3_QuantumChemistry/dynamic_quantum_chemistry/source.ipynb" /> 

In this tutorial, we discuss how _covalent_ can be used to construct and manage dynamic workflows that are common in quantum-chemical simulations. In this example, given a crystal structure, we seek to do the following:

1. Relax the atomic positions and cell volume for the structure (i.e. find the local minimum energy configuration).
2. Carve all possible surface slabs of the relaxed structure.
3. For each generated slab, relax the atomic positions of each structure.

This will be done using the materials informatics library [Pymatgen](https://github.com/materialsproject/pymatgen) and a machine learned interatomic potential called [M3GNet](https://www.nature.com/articles/s43588-022-00349-3). Because the number of slabs is only known at runtime, this is a [dynamic workflow](https://covalent.readthedocs.io/en/latest/developer/patterns/dynamic_workflow.html) and we must take advantage of the [sublattice](https://covalent.readthedocs.io/en/latest/glossary/index.html#term-Sublattice) feature in Covalent to properly dispatch the workflow.

First, we need to install the necessary Python packages from the provided `requirements.txt` file (e.g. `pip install -r requirements.txt`). These are printed below:


```python
with open("requirements.txt", "r") as file:
    for line in file:
        print(line.rstrip())
```

    covalent
    pymatgen[relaxation]==2023.5.10
    

Once that is done, we can import the necessary functions for this tutorial:


```python
import covalent as ct

from subprocess import Popen
from pymatgen.core import Structure
from pymatgen.core.surface import generate_all_slabs
```

We then will make sure the Covalent server is started:


```python
sts = Popen("covalent start", shell=True).wait()
```

    Covalent server has started at http://localhost:48008
    

Now we will define the individual compute tasks. The first `Electron` we will define is a `relax_structure` function, which takes in a Pymatgen `Structure` object as the input and runs the relaxation calculation using M3GNet. It returns an updated `Structure` object. This process can be thought of as the compute-heavy task.


```python
@ct.electron
def relax_structure(structure, relax_cell=True):
    return structure.relax(relax_cell=relax_cell)
```

Now we will define a separate `Electron` called `carve_slabs` that takes in a `Structure` object and carves all plausible surface slabs, which it returns as a list of new `Structure` objects. This is a relatively quick task, but we still need to define it as an `Electron` so that it can be used appropriately in the workflow.


```python
@ct.electron
def carve_slabs(structure, max_index=1, min_slab_size=10.0, min_vacuum_size=10.0):
    slabs = generate_all_slabs(
        structure,
        max_index,
        min_slab_size,
        min_vacuum_size,
    )
    return slabs
```

Now, for the most subtle but important bit. We need to define a sublattice that will take in the list of slabs and relax each individual slab using the previously defined `relax_structure` `Electron`. The sublattice is crucial here because the number of slabs is only determined at runtime and will vary depending on the input `Structure` object.


```python
@ct.electron
@ct.lattice
def relax_slabs(slabs):
    return [relax_structure(slab, relax_cell=False) for slab in slabs]
```

With these individual `Electron` objects defined, we can now define the overall workflow that stitches them together and forms a `Lattice`. As introduced at the start of this tutorial, there are three major sets of tasks, and those are reflected by the three functions defined above.


```python
@ct.lattice(executor="local")
def workflow(structure):
    relaxed_structure = relax_structure(structure)
    slabs = carve_slabs(relaxed_structure)
    relaxed_slabs = relax_slabs(slabs)
    return relaxed_slabs
```

Now we can create an example `Structure` as the input for our workflow. Its structure is shown below.


```python
structure = Structure(
    lattice=[[0, 2.13, 2.13], [2.13, 0, 2.13], [2.13, 2.13, 0]],
    species=["Mg", "O"],
    coords=[[0, 0, 0], [0.5, 0.5, 0.5]],
)
```

And we finally take this input `Structure` and run it through our newly created workflow.


```python
dispatch_id = ct.dispatch(workflow)(structure)
results = ct.get_result(dispatch_id, wait=True)
```

The workflow in the Covalent UI looks like the following. Note that when you click on the sublattice in the UI, it will open up a new view that shows the individual tasks that were run.

![ui](/img/assets/ui_animation.gif)

The image below shows the input structure on the left and one of the four generated slabs on the right.

![image](/img/assets/slabgen.png)

And this is the output of the workflow:


```python
print(results)
```

    
    Lattice Result
    ==============
    status: COMPLETED
    result: [Structure Summary
    Lattice
        abc : 3.012274887854692 3.0122748878546917 30.122748878546922
     angles : 120.00000000000001 120.00000000000001 60.00000000000001
     volume : 193.27193999999986
          A : 2.6087065760640837 0.0 -1.5061374439273467
          B : 0.8695688586880268 2.459512146747805 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0808, -0.0571, 2.1193) [-0.0232, -0.0232, 0.0680]
    PeriodicSite: O (1.8010, 1.2735, -0.6459) [0.5178, 0.5178, 0.0303]
    PeriodicSite: Mg (-0.0401, -0.0284, 5.2020) [-0.0115, -0.0115, 0.1715]
    PeriodicSite: O (1.7790, 1.2579, 2.3282) [0.5114, 0.5114, 0.1284]
    PeriodicSite: Mg (-0.0392, -0.0277, 8.2159) [-0.0113, -0.0113, 0.2716]
    PeriodicSite: O (1.7778, 1.2571, 5.3384) [0.5111, 0.5111, 0.2283]
    PeriodicSite: Mg (-0.0320, -0.0226, 11.2406) [-0.0092, -0.0092, 0.3722]
    PeriodicSite: O (1.7829, 1.2607, 8.3596) [0.5126, 0.5126, 0.3288]
    PeriodicSite: Mg (-0.0059, -0.0042, 14.2980) [-0.0017, -0.0017, 0.4745]
    PeriodicSite: O (1.7529, 1.2395, 11.3199) [0.5040, 0.5040, 0.4262], Structure Summary
    Lattice
        abc : 3.012274887854692 3.012274887854692 30.122748878546922
     angles : 120.00000000000001 60.00000000000001 90.0
     volume : 193.2719399999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : 0.8695688586880286 2.4595121467478047 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0015, 0.0021, 1.5088) [-0.0009, 0.0009, 0.0502]
    PeriodicSite: O (1.7403, 1.2281, 1.5042) [0.5007, 0.4993, 0.0499]
    PeriodicSite: Mg (0.0016, -0.0022, 4.5157) [0.0009, -0.0009, 0.1498]
    PeriodicSite: O (1.7373, 1.2323, 4.5215) [0.4990, 0.5010, 0.1502]
    PeriodicSite: Mg (0.0000, -0.0000, 7.5307) [0.0000, -0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 7.5307) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (-0.0016, 0.0022, 10.5457) [-0.0009, 0.0009, 0.3502]
    PeriodicSite: O (1.7409, 1.2272, 10.5399) [0.5010, 0.4990, 0.3498]
    PeriodicSite: Mg (0.0015, -0.0021, 13.5526) [0.0009, -0.0009, 0.4498]
    PeriodicSite: O (1.7380, 1.2314, 13.5572) [0.4993, 0.5007, 0.4501], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 48.196398205675074
     angles : 30.000000000000014 60.00000000000002 73.22134511903965
     volume : 309.2351039999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : -0.869568858688028 2.4595121467478056 4.518412331782038
          C : 0.0 0.0 48.196398205675074
        pbc : True True True
    PeriodicSite: Mg (0.0262, 0.0105, 2.2139) [0.0114, 0.0042, 0.0452]
    PeriodicSite: O (0.9825, 1.0539, 3.5697) [0.5195, 0.4285, 0.0177]
    PeriodicSite: Mg (0.0662, 0.2336, 5.1568) [0.0571, 0.0950, 0.0963]
    PeriodicSite: O (0.8459, 1.1867, 6.8186) [0.4851, 0.4825, 0.0811]
    PeriodicSite: Mg (0.0133, 0.0507, 8.2607) [0.0120, 0.0206, 0.1691]
    PeriodicSite: O (0.8496, 1.1727, 9.8246) [0.4846, 0.4768, 0.1440]
    PeriodicSite: Mg (0.0086, 0.0959, 11.2811) [0.0163, 0.0390, 0.2299]
    PeriodicSite: O (0.8389, 1.1668, 12.8553) [0.4797, 0.4744, 0.2073]
    PeriodicSite: Mg (0.0091, 0.0613, 14.2926) [0.0118, 0.0249, 0.2938]
    PeriodicSite: O (0.8384, 1.1314, 15.8685) [0.4747, 0.4600, 0.2713]
    PeriodicSite: Mg (0.0019, 0.0338, 17.3173) [0.0053, 0.0137, 0.3579]
    PeriodicSite: O (0.8477, 1.1616, 18.8647) [0.4824, 0.4723, 0.3321]
    PeriodicSite: Mg (0.0237, 0.0330, 20.2919) [0.0135, 0.0134, 0.4193]
    PeriodicSite: O (0.8368, 1.0796, 21.8957) [0.4671, 0.4390, 0.3986]
    PeriodicSite: Mg (-0.0806, 0.1485, 23.4847) [-0.0108, 0.0604, 0.4819]
    PeriodicSite: O (0.8484, 1.2181, 24.8879) [0.4903, 0.4953, 0.4546], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 42.17184842996569
     angles : 29.999999999999964 59.999999999999986 54.735610317245346
     volume : 270.58071599999977
          A : 2.608706576064084 0.0 1.5061374439273465
          B : 0.8695688586880266 2.4595121467478043 4.51841233178204
          C : 0.0 0.0 42.17184842996569
        pbc : True True True
    PeriodicSite: Mg (-0.0254, -0.0718, 1.5501) [0.0000, -0.0292, 0.0399]
    PeriodicSite: O (1.7306, 1.2057, 4.5332) [0.5000, 0.4902, 0.0371]
    PeriodicSite: Mg (0.0279, 0.0790, 4.4700) [0.0000, 0.0321, 0.1026]
    PeriodicSite: O (1.7433, 1.2415, 7.5235) [0.5000, 0.5048, 0.1065]
    PeriodicSite: Mg (-0.0041, -0.0115, 7.5377) [0.0000, -0.0047, 0.1792]
    PeriodicSite: O (1.7393, 1.2301, 10.5427) [0.5000, 0.5002, 0.1785]
    PeriodicSite: Mg (0.0000, 0.0000, 10.5430) [0.0000, 0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 13.5552) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (0.0041, 0.0115, 13.5482) [0.0000, 0.0047, 0.3208]
    PeriodicSite: O (1.7390, 1.2294, 16.5678) [0.5000, 0.4998, 0.3215]
    PeriodicSite: Mg (-0.0279, -0.0790, 16.6159) [0.0000, -0.0321, 0.3974]
    PeriodicSite: O (1.7350, 1.2180, 19.5870) [0.5000, 0.4952, 0.3935]
    PeriodicSite: Mg (0.0254, 0.0718, 19.5358) [-0.0000, 0.0292, 0.4601]
    PeriodicSite: O (1.7477, 1.2539, 22.5773) [0.5000, 0.5098, 0.4629]]
    input args: ['Full Formula (Mg1 O1)\nReduced Formula: MgO\nabc   :   3.012275   3.012275   3.012275\nangles:  60.000000  60.000000  60.000000\npbc   :       True       True       True\nSites (2)\n  #  SP      a    b    c\n---  ----  ---  ---  ---\n  0  Mg    0    0    0\n  1  O     0.5  0.5  0.5']
    input kwargs: {}
    error: None
    
    start_time: 2023-05-15 22:45:11.634086
    end_time: 2023-05-15 22:46:21.630720
    
    results_dir: /home/rosen/.local/share/covalent/data
    dispatch_id: 190be75f-a9b0-431d-a7de-fea489b3b5d2
    
    Node Outputs
    ------------
    relax_structure(0): Full Formula (Mg1 O1)
    Reduced Formula: MgO
    abc   :   3.012275   3.012275   3.012275
    angles:  60.000000  60.000000  60.000000
    pbc   :       True       True       True
    Sites (2)
      #  SP      a    b    c
    ---  ----  ---  ---  ---
      0  Mg    0    0    0
      1  O     0.5  0.5  0.5
    :parameter:Full Formula (Mg1 O1)
    Reduced Formula: MgO
    abc   :   3.012275   3.012275   3.012275
    angles:  60.000000  60.000000  60.000000
    pbc   :       True       True       True
    Sites (2)
      #  SP      a    b    c
    ---  ----  ---  ---  ---
      0  Mg    0    0    0
      1  O     0.5  0.5  0.5(1): Full Formula (Mg1 O1)
    Reduced Formula: MgO
    abc   :   3.012275   3.012275   3.012275
    angles:  60.000000  60.000000  60.000000
    pbc   :       True       True       True
    Sites (2)
      #  SP      a    b    c
    ---  ----  ---  ---  ---
      0  Mg    0    0    0
      1  O     0.5  0.5  0.5
    carve_slabs(2): [Structure Summary
    Lattice
        abc : 3.012274887854692 3.0122748878546917 30.122748878546922
     angles : 120.00000000000001 120.00000000000001 60.00000000000001
     volume : 193.27193999999986
          A : 2.6087065760640837 0.0 -1.5061374439273467
          B : 0.8695688586880268 2.459512146747805 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (0.0000, 0.0000, 2.2592) [0.0000, 0.0000, 0.0750]
    PeriodicSite: O (1.7391, 1.2298, -0.7531) [0.5000, 0.5000, 0.0250]
    PeriodicSite: Mg (0.0000, 0.0000, 5.2715) [0.0000, 0.0000, 0.1750]
    PeriodicSite: O (1.7391, 1.2298, 2.2592) [0.5000, 0.5000, 0.1250]
    PeriodicSite: Mg (0.0000, 0.0000, 8.2838) [0.0000, 0.0000, 0.2750]
    PeriodicSite: O (1.7391, 1.2298, 5.2715) [0.5000, 0.5000, 0.2250]
    PeriodicSite: Mg (0.0000, 0.0000, 11.2960) [0.0000, 0.0000, 0.3750]
    PeriodicSite: O (1.7391, 1.2298, 8.2838) [0.5000, 0.5000, 0.3250]
    PeriodicSite: Mg (0.0000, 0.0000, 14.3083) [0.0000, 0.0000, 0.4750]
    PeriodicSite: O (1.7391, 1.2298, 11.2960) [0.5000, 0.5000, 0.4250], Structure Summary
    Lattice
        abc : 3.012274887854692 3.012274887854692 30.122748878546922
     angles : 120.00000000000001 60.00000000000001 90.0
     volume : 193.2719399999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : 0.8695688586880286 2.4595121467478047 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (0.0000, 0.0000, 1.5061) [0.0000, 0.0000, 0.0500]
    PeriodicSite: O (1.7391, 1.2298, 1.5061) [0.5000, 0.5000, 0.0500]
    PeriodicSite: Mg (0.0000, 0.0000, 4.5184) [0.0000, 0.0000, 0.1500]
    PeriodicSite: O (1.7391, 1.2298, 4.5184) [0.5000, 0.5000, 0.1500]
    PeriodicSite: Mg (0.0000, 0.0000, 7.5307) [0.0000, 0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 7.5307) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (0.0000, 0.0000, 10.5430) [0.0000, 0.0000, 0.3500]
    PeriodicSite: O (1.7391, 1.2298, 10.5430) [0.5000, 0.5000, 0.3500]
    PeriodicSite: Mg (0.0000, 0.0000, 13.5552) [0.0000, 0.0000, 0.4500]
    PeriodicSite: O (1.7391, 1.2298, 13.5552) [0.5000, 0.5000, 0.4500], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 48.196398205675074
     angles : 30.000000000000014 60.00000000000002 73.22134511903965
     volume : 309.2351039999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : -0.869568858688028 2.4595121467478056 4.518412331782038
          C : 0.0 0.0 48.196398205675074
        pbc : True True True
    PeriodicSite: Mg (0.0000, 0.0000, 2.2592) [0.0000, 0.0000, 0.0469]
    PeriodicSite: O (0.8696, 1.2298, 3.7653) [0.5000, 0.5000, 0.0156]
    PeriodicSite: Mg (0.0000, 0.0000, 5.2715) [0.0000, 0.0000, 0.1094]
    PeriodicSite: O (0.8696, 1.2298, 6.7776) [0.5000, 0.5000, 0.0781]
    PeriodicSite: Mg (0.0000, 0.0000, 8.2838) [0.0000, 0.0000, 0.1719]
    PeriodicSite: O (0.8696, 1.2298, 9.7899) [0.5000, 0.5000, 0.1406]
    PeriodicSite: Mg (0.0000, 0.0000, 11.2960) [0.0000, 0.0000, 0.2344]
    PeriodicSite: O (0.8696, 1.2298, 12.8022) [0.5000, 0.5000, 0.2031]
    PeriodicSite: Mg (0.0000, 0.0000, 14.3083) [0.0000, 0.0000, 0.2969]
    PeriodicSite: O (0.8696, 1.2298, 15.8144) [0.5000, 0.5000, 0.2656]
    PeriodicSite: Mg (0.0000, 0.0000, 17.3206) [0.0000, 0.0000, 0.3594]
    PeriodicSite: O (0.8696, 1.2298, 18.8267) [0.5000, 0.5000, 0.3281]
    PeriodicSite: Mg (0.0000, 0.0000, 20.3329) [0.0000, 0.0000, 0.4219]
    PeriodicSite: O (0.8696, 1.2298, 21.8390) [0.5000, 0.5000, 0.3906]
    PeriodicSite: Mg (0.0000, 0.0000, 23.3451) [0.0000, 0.0000, 0.4844]
    PeriodicSite: O (0.8696, 1.2298, 24.8513) [0.5000, 0.5000, 0.4531], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 42.17184842996569
     angles : 29.999999999999964 59.999999999999986 54.735610317245346
     volume : 270.58071599999977
          A : 2.608706576064084 0.0 1.5061374439273465
          B : 0.8695688586880266 2.4595121467478043 4.51841233178204
          C : 0.0 0.0 42.17184842996569
        pbc : True True True
    PeriodicSite: Mg (0.0000, 0.0000, 1.5061) [0.0000, 0.0000, 0.0357]
    PeriodicSite: O (1.7391, 1.2298, 4.5184) [0.5000, 0.5000, 0.0357]
    PeriodicSite: Mg (0.0000, 0.0000, 4.5184) [0.0000, 0.0000, 0.1071]
    PeriodicSite: O (1.7391, 1.2298, 7.5307) [0.5000, 0.5000, 0.1071]
    PeriodicSite: Mg (0.0000, 0.0000, 7.5307) [0.0000, 0.0000, 0.1786]
    PeriodicSite: O (1.7391, 1.2298, 10.5430) [0.5000, 0.5000, 0.1786]
    PeriodicSite: Mg (0.0000, 0.0000, 10.5430) [0.0000, 0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 13.5552) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (0.0000, 0.0000, 13.5552) [0.0000, 0.0000, 0.3214]
    PeriodicSite: O (1.7391, 1.2298, 16.5675) [0.5000, 0.5000, 0.3214]
    PeriodicSite: Mg (0.0000, 0.0000, 16.5675) [0.0000, 0.0000, 0.3929]
    PeriodicSite: O (1.7391, 1.2298, 19.5798) [0.5000, 0.5000, 0.3929]
    PeriodicSite: Mg (0.0000, 0.0000, 19.5798) [0.0000, 0.0000, 0.4643]
    PeriodicSite: O (1.7391, 1.2298, 22.5921) [0.5000, 0.5000, 0.4643]]
    :sublattice:relax_slabs(3): [Structure Summary
    Lattice
        abc : 3.012274887854692 3.0122748878546917 30.122748878546922
     angles : 120.00000000000001 120.00000000000001 60.00000000000001
     volume : 193.27193999999986
          A : 2.6087065760640837 0.0 -1.5061374439273467
          B : 0.8695688586880268 2.459512146747805 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0808, -0.0571, 2.1193) [-0.0232, -0.0232, 0.0680]
    PeriodicSite: O (1.8010, 1.2735, -0.6459) [0.5178, 0.5178, 0.0303]
    PeriodicSite: Mg (-0.0401, -0.0284, 5.2020) [-0.0115, -0.0115, 0.1715]
    PeriodicSite: O (1.7790, 1.2579, 2.3282) [0.5114, 0.5114, 0.1284]
    PeriodicSite: Mg (-0.0392, -0.0277, 8.2159) [-0.0113, -0.0113, 0.2716]
    PeriodicSite: O (1.7778, 1.2571, 5.3384) [0.5111, 0.5111, 0.2283]
    PeriodicSite: Mg (-0.0320, -0.0226, 11.2406) [-0.0092, -0.0092, 0.3722]
    PeriodicSite: O (1.7829, 1.2607, 8.3596) [0.5126, 0.5126, 0.3288]
    PeriodicSite: Mg (-0.0059, -0.0042, 14.2980) [-0.0017, -0.0017, 0.4745]
    PeriodicSite: O (1.7529, 1.2395, 11.3199) [0.5040, 0.5040, 0.4262], Structure Summary
    Lattice
        abc : 3.012274887854692 3.012274887854692 30.122748878546922
     angles : 120.00000000000001 60.00000000000001 90.0
     volume : 193.2719399999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : 0.8695688586880286 2.4595121467478047 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0015, 0.0021, 1.5088) [-0.0009, 0.0009, 0.0502]
    PeriodicSite: O (1.7403, 1.2281, 1.5042) [0.5007, 0.4993, 0.0499]
    PeriodicSite: Mg (0.0016, -0.0022, 4.5157) [0.0009, -0.0009, 0.1498]
    PeriodicSite: O (1.7373, 1.2323, 4.5215) [0.4990, 0.5010, 0.1502]
    PeriodicSite: Mg (0.0000, -0.0000, 7.5307) [0.0000, -0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 7.5307) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (-0.0016, 0.0022, 10.5457) [-0.0009, 0.0009, 0.3502]
    PeriodicSite: O (1.7409, 1.2272, 10.5399) [0.5010, 0.4990, 0.3498]
    PeriodicSite: Mg (0.0015, -0.0021, 13.5526) [0.0009, -0.0009, 0.4498]
    PeriodicSite: O (1.7380, 1.2314, 13.5572) [0.4993, 0.5007, 0.4501], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 48.196398205675074
     angles : 30.000000000000014 60.00000000000002 73.22134511903965
     volume : 309.2351039999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : -0.869568858688028 2.4595121467478056 4.518412331782038
          C : 0.0 0.0 48.196398205675074
        pbc : True True True
    PeriodicSite: Mg (0.0262, 0.0105, 2.2139) [0.0114, 0.0042, 0.0452]
    PeriodicSite: O (0.9825, 1.0539, 3.5697) [0.5195, 0.4285, 0.0177]
    PeriodicSite: Mg (0.0662, 0.2336, 5.1568) [0.0571, 0.0950, 0.0963]
    PeriodicSite: O (0.8459, 1.1867, 6.8186) [0.4851, 0.4825, 0.0811]
    PeriodicSite: Mg (0.0133, 0.0507, 8.2607) [0.0120, 0.0206, 0.1691]
    PeriodicSite: O (0.8496, 1.1727, 9.8246) [0.4846, 0.4768, 0.1440]
    PeriodicSite: Mg (0.0086, 0.0959, 11.2811) [0.0163, 0.0390, 0.2299]
    PeriodicSite: O (0.8389, 1.1668, 12.8553) [0.4797, 0.4744, 0.2073]
    PeriodicSite: Mg (0.0091, 0.0613, 14.2926) [0.0118, 0.0249, 0.2938]
    PeriodicSite: O (0.8384, 1.1314, 15.8685) [0.4747, 0.4600, 0.2713]
    PeriodicSite: Mg (0.0019, 0.0338, 17.3173) [0.0053, 0.0137, 0.3579]
    PeriodicSite: O (0.8477, 1.1616, 18.8647) [0.4824, 0.4723, 0.3321]
    PeriodicSite: Mg (0.0237, 0.0330, 20.2919) [0.0135, 0.0134, 0.4193]
    PeriodicSite: O (0.8368, 1.0796, 21.8957) [0.4671, 0.4390, 0.3986]
    PeriodicSite: Mg (-0.0806, 0.1485, 23.4847) [-0.0108, 0.0604, 0.4819]
    PeriodicSite: O (0.8484, 1.2181, 24.8879) [0.4903, 0.4953, 0.4546], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 42.17184842996569
     angles : 29.999999999999964 59.999999999999986 54.735610317245346
     volume : 270.58071599999977
          A : 2.608706576064084 0.0 1.5061374439273465
          B : 0.8695688586880266 2.4595121467478043 4.51841233178204
          C : 0.0 0.0 42.17184842996569
        pbc : True True True
    PeriodicSite: Mg (-0.0254, -0.0718, 1.5501) [0.0000, -0.0292, 0.0399]
    PeriodicSite: O (1.7306, 1.2057, 4.5332) [0.5000, 0.4902, 0.0371]
    PeriodicSite: Mg (0.0279, 0.0790, 4.4700) [0.0000, 0.0321, 0.1026]
    PeriodicSite: O (1.7433, 1.2415, 7.5235) [0.5000, 0.5048, 0.1065]
    PeriodicSite: Mg (-0.0041, -0.0115, 7.5377) [0.0000, -0.0047, 0.1792]
    PeriodicSite: O (1.7393, 1.2301, 10.5427) [0.5000, 0.5002, 0.1785]
    PeriodicSite: Mg (0.0000, 0.0000, 10.5430) [0.0000, 0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 13.5552) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (0.0041, 0.0115, 13.5482) [0.0000, 0.0047, 0.3208]
    PeriodicSite: O (1.7390, 1.2294, 16.5678) [0.5000, 0.4998, 0.3215]
    PeriodicSite: Mg (-0.0279, -0.0790, 16.6159) [0.0000, -0.0321, 0.3974]
    PeriodicSite: O (1.7350, 1.2180, 19.5870) [0.5000, 0.4952, 0.3935]
    PeriodicSite: Mg (0.0254, 0.0718, 19.5358) [-0.0000, 0.0292, 0.4601]
    PeriodicSite: O (1.7477, 1.2539, 22.5773) [0.5000, 0.5098, 0.4629]]
    :parameter:<covalent._workflow.lattice.Lattice object at 0x7fed05d264f0>(4): <covalent._workflow.lattice.Lattice object at 0x7fed05d264f0>
    :parameter:{"executor": "local", "workflow_executor": "dask", "deps": {}, "call_before": [], "call_after": [], "triggers": null, "executor_data": {}, "workflow_executor_data": {}}(5): {"executor": "local", "workflow_executor": "dask", "deps": {}, "call_before": [], "call_after": [], "triggers": null, "executor_data": {}, "workflow_executor_data": {}}
    :postprocess:(6): [Structure Summary
    Lattice
        abc : 3.012274887854692 3.0122748878546917 30.122748878546922
     angles : 120.00000000000001 120.00000000000001 60.00000000000001
     volume : 193.27193999999986
          A : 2.6087065760640837 0.0 -1.5061374439273467
          B : 0.8695688586880268 2.459512146747805 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0808, -0.0571, 2.1193) [-0.0232, -0.0232, 0.0680]
    PeriodicSite: O (1.8010, 1.2735, -0.6459) [0.5178, 0.5178, 0.0303]
    PeriodicSite: Mg (-0.0401, -0.0284, 5.2020) [-0.0115, -0.0115, 0.1715]
    PeriodicSite: O (1.7790, 1.2579, 2.3282) [0.5114, 0.5114, 0.1284]
    PeriodicSite: Mg (-0.0392, -0.0277, 8.2159) [-0.0113, -0.0113, 0.2716]
    PeriodicSite: O (1.7778, 1.2571, 5.3384) [0.5111, 0.5111, 0.2283]
    PeriodicSite: Mg (-0.0320, -0.0226, 11.2406) [-0.0092, -0.0092, 0.3722]
    PeriodicSite: O (1.7829, 1.2607, 8.3596) [0.5126, 0.5126, 0.3288]
    PeriodicSite: Mg (-0.0059, -0.0042, 14.2980) [-0.0017, -0.0017, 0.4745]
    PeriodicSite: O (1.7529, 1.2395, 11.3199) [0.5040, 0.5040, 0.4262], Structure Summary
    Lattice
        abc : 3.012274887854692 3.012274887854692 30.122748878546922
     angles : 120.00000000000001 60.00000000000001 90.0
     volume : 193.2719399999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : 0.8695688586880286 2.4595121467478047 -1.5061374439273467
          C : 0.0 0.0 30.122748878546922
        pbc : True True True
    PeriodicSite: Mg (-0.0015, 0.0021, 1.5088) [-0.0009, 0.0009, 0.0502]
    PeriodicSite: O (1.7403, 1.2281, 1.5042) [0.5007, 0.4993, 0.0499]
    PeriodicSite: Mg (0.0016, -0.0022, 4.5157) [0.0009, -0.0009, 0.1498]
    PeriodicSite: O (1.7373, 1.2323, 4.5215) [0.4990, 0.5010, 0.1502]
    PeriodicSite: Mg (0.0000, -0.0000, 7.5307) [0.0000, -0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 7.5307) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (-0.0016, 0.0022, 10.5457) [-0.0009, 0.0009, 0.3502]
    PeriodicSite: O (1.7409, 1.2272, 10.5399) [0.5010, 0.4990, 0.3498]
    PeriodicSite: Mg (0.0015, -0.0021, 13.5526) [0.0009, -0.0009, 0.4498]
    PeriodicSite: O (1.7380, 1.2314, 13.5572) [0.4993, 0.5007, 0.4501], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 48.196398205675074
     angles : 30.000000000000014 60.00000000000002 73.22134511903965
     volume : 309.2351039999999
          A : 2.6087065760640846 0.0 1.5061374439273456
          B : -0.869568858688028 2.4595121467478056 4.518412331782038
          C : 0.0 0.0 48.196398205675074
        pbc : True True True
    PeriodicSite: Mg (0.0262, 0.0105, 2.2139) [0.0114, 0.0042, 0.0452]
    PeriodicSite: O (0.9825, 1.0539, 3.5697) [0.5195, 0.4285, 0.0177]
    PeriodicSite: Mg (0.0662, 0.2336, 5.1568) [0.0571, 0.0950, 0.0963]
    PeriodicSite: O (0.8459, 1.1867, 6.8186) [0.4851, 0.4825, 0.0811]
    PeriodicSite: Mg (0.0133, 0.0507, 8.2607) [0.0120, 0.0206, 0.1691]
    PeriodicSite: O (0.8496, 1.1727, 9.8246) [0.4846, 0.4768, 0.1440]
    PeriodicSite: Mg (0.0086, 0.0959, 11.2811) [0.0163, 0.0390, 0.2299]
    PeriodicSite: O (0.8389, 1.1668, 12.8553) [0.4797, 0.4744, 0.2073]
    PeriodicSite: Mg (0.0091, 0.0613, 14.2926) [0.0118, 0.0249, 0.2938]
    PeriodicSite: O (0.8384, 1.1314, 15.8685) [0.4747, 0.4600, 0.2713]
    PeriodicSite: Mg (0.0019, 0.0338, 17.3173) [0.0053, 0.0137, 0.3579]
    PeriodicSite: O (0.8477, 1.1616, 18.8647) [0.4824, 0.4723, 0.3321]
    PeriodicSite: Mg (0.0237, 0.0330, 20.2919) [0.0135, 0.0134, 0.4193]
    PeriodicSite: O (0.8368, 1.0796, 21.8957) [0.4671, 0.4390, 0.3986]
    PeriodicSite: Mg (-0.0806, 0.1485, 23.4847) [-0.0108, 0.0604, 0.4819]
    PeriodicSite: O (0.8484, 1.2181, 24.8879) [0.4903, 0.4953, 0.4546], Structure Summary
    Lattice
        abc : 3.012274887854692 5.217413152128169 42.17184842996569
     angles : 29.999999999999964 59.999999999999986 54.735610317245346
     volume : 270.58071599999977
          A : 2.608706576064084 0.0 1.5061374439273465
          B : 0.8695688586880266 2.4595121467478043 4.51841233178204
          C : 0.0 0.0 42.17184842996569
        pbc : True True True
    PeriodicSite: Mg (-0.0254, -0.0718, 1.5501) [0.0000, -0.0292, 0.0399]
    PeriodicSite: O (1.7306, 1.2057, 4.5332) [0.5000, 0.4902, 0.0371]
    PeriodicSite: Mg (0.0279, 0.0790, 4.4700) [0.0000, 0.0321, 0.1026]
    PeriodicSite: O (1.7433, 1.2415, 7.5235) [0.5000, 0.5048, 0.1065]
    PeriodicSite: Mg (-0.0041, -0.0115, 7.5377) [0.0000, -0.0047, 0.1792]
    PeriodicSite: O (1.7393, 1.2301, 10.5427) [0.5000, 0.5002, 0.1785]
    PeriodicSite: Mg (0.0000, 0.0000, 10.5430) [0.0000, 0.0000, 0.2500]
    PeriodicSite: O (1.7391, 1.2298, 13.5552) [0.5000, 0.5000, 0.2500]
    PeriodicSite: Mg (0.0041, 0.0115, 13.5482) [0.0000, 0.0047, 0.3208]
    PeriodicSite: O (1.7390, 1.2294, 16.5678) [0.5000, 0.4998, 0.3215]
    PeriodicSite: Mg (-0.0279, -0.0790, 16.6159) [0.0000, -0.0321, 0.3974]
    PeriodicSite: O (1.7350, 1.2180, 19.5870) [0.5000, 0.4952, 0.3935]
    PeriodicSite: Mg (0.0254, 0.0718, 19.5358) [-0.0000, 0.0292, 0.4601]
    PeriodicSite: O (1.7477, 1.2539, 22.5773) [0.5000, 0.5098, 0.4629]]
    
    
