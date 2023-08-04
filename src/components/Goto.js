import * as React from "react";

const Goto = ({ link }) => {
  return (
    <a href={link} target="_blank" aria-label="go-to">
      <img
        src="/img/assets/imageGoto.svg"
        alt="GoToimage"
        title="Go to the source"
      />
    </a>
  );
};
export default Goto;
