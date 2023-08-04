import React from 'react';
import Admonition from '@theme/Admonition';


export default function Adom({icon,title,description}) {
  return (
    <div>
      <Admonition  icon={icon} title={title} >
        <p>{description}</p>
      </Admonition>
    </div>
  );
}
