---
displayed_sidebar: tutorialSidebar
title: Add Time Trigger
---

import Goto from '/src/components/Goto.js';

# How to add a time trigger to a lattice <Goto link="https://github.com/AgnostiqHQ/covalent/blob/develop/doc/source/how_to/coding/time_trigger.ipynb" />

In this guide we'll illustrate how to use a `TimeTrigger` to trigger workflow runs automatically every x seconds.

Let's first import the required parts:


```python
import covalent as ct
from covalent.triggers import TimeTrigger
```

Now, let's create our `TimeTrigger` object which performs a trigger action every 5 seconds.


```python
time_trigger = TimeTrigger(time_gap=5)
```

Let's create a simple workflow now:


```python
@ct.lattice
@ct.electron
def my_workflow():
    return 42
```

Once we've made sure that the covalent server is running, we can perform the dispatch for `my_workflow` as such, but this time we will be disabling the execution of this lattice for the first time using `disable_run` parameter in `ct.dispatch`:


```python
dispatch_id = ct.dispatch(my_workflow, disable_run=True)()
print(dispatch_id)
```

    372930b7-f81a-4e91-9302-236de8a0a9c0
    

Now let's attach that trigger to this `dispatch_id` and register it with the triggers server.


```python
time_trigger.lattice_dispatch_id = dispatch_id
time_trigger.register()
```

And that's it, as you can see this was another way of attaching triggers to a workflow, which is slightly different than how we did it in the `DirTrigger` [How To Guide](/docs/user-documentation/how-to/how-to-guide).

Also, now if you check the UI you'll see that a new `my_workflow` gets dispatched every 5 seconds.
If we want to stop that after a while, we can use the `ct.stop_triggers` function:


```python
ct.stop_triggers(dispatch_id)
```

    Triggers for following dispatch_ids have stopped observing:
    372930b7-f81a-4e91-9302-236de8a0a9c0
    

The above will prevent any new dispatches from happening due to the trigger action on `my_workflow` lattice.
