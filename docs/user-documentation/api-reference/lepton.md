---
title: Lepton
displayed_sidebar: tutorialSidebar
---

import Indentation from '/src/components/Indentation';
import Doubleind from '/src/components/Doubleind';
import ReactMarkdown from 'react-markdown';

## Language Decorators

Decorator definition of languages other than python. Useful for scripting languages.

Lepton wrappers.

**Functions:**

<table>
  <tr>
    <td><div style={{marginBottom:'-20px'}}><ReactMarkdown children='[`bash`](#covalentleptonsbash_funcnone--display_name-executordask-files-deps_bash-deps_pipnone-call_before-call_after-source)([_func, display_name, executor, files, …]) '></ReactMarkdown></div></td>
    <td>Bash decorator which wraps a Python function as a Bash Lepton.</td>
  </tr>
</table>

#### <span class="highlight">covalent.leptons.</span><span class="bold">bash</span>(\_func=None, \*, display_name='', executor='dask', files=[], deps_bash=[], deps_pip=None, call_before=[], call_after=[]) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[source]](./scode-lepton)

<Indentation md='Bash decorator which wraps a Python function as a Bash Lepton.'/>
<Indentation md='RETURN TYPE'/>
<Doubleind md='`Callable`'/>

## Language Classes

More robust definition of languages other than python.
