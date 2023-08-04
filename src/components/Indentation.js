import * as React from "react";
import ReactMarkdown from "react-markdown";

const Indentation = ({ md, color, fs }) => {
  return (
    <div
      style={{
        marginLeft: "42px",
        marginBottom: "7px",
        fontSize: fs || "14px",
        color: color,
      }}
    >
      <ReactMarkdown children={md} style={{ color: { color } }}></ReactMarkdown>
    </div>
  );
};
export default Indentation;
