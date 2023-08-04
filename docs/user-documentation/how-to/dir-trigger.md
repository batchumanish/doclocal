---
displayed_sidebar: tutorialSidebar
title: Add a directory trigger
---

import Goto from '/src/components/Goto.js';

# How to add a directory trigger to a lattice <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/dir_trigger.ipynb"/>
In this guide we'll illustrate how to use a `DirTrigger` to trigger workflow runs automatically whenever a file in a directory gets modified.

Let's first import the required parts:


```python
import covalent as ct
from covalent.triggers import DirTrigger
from pathlib import Path
```

For our test case, let's create a new file in our current directory named `my_text_file.txt` and have 10 numbers in it.


```python
with open("my_text_file.txt", "w") as f:
    for i in range(10):
        f.write(f"{i}\n")
```

Now, let's create our `DirTrigger` object which performs a trigger action whenever something in the current directory gets modified.


```python
dir_trigger = DirTrigger(dir_path=str(Path(".").resolve()), event_names="modified")
```

Let's create a simple workflow now and assign this trigger to the lattice:


```python
@ct.lattice(triggers=dir_trigger)
@ct.electron
def my_workflow():
    return 42
```

Once we've made sure that the covalent server is running, we can perform the dispatch for `my_workflow` as such:


```python
dispatch_id = ct.dispatch(my_workflow)()
print(dispatch_id)
```

    fb6235ea-248c-46b7-a7b7-76a7f7ad5da3
    

Now, if you check the UI you'll see that a new `my_workflow` gets dispatched whenever we add or remove a number from `my_text_file.txt`.
If we want to stop that after a while, we can use the `ct.stop_triggers` function:


```python
ct.stop_triggers(dispatch_id)
```

    Triggers for following dispatch_ids have stopped observing:
    fb6235ea-248c-46b7-a7b7-76a7f7ad5da3
    

The above will prevent any new dispatches from happening due to the trigger action on `my_workflow` lattice.
