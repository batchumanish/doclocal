import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Redirect } from "@docusaurus/router";

export default function Home() {
  return <Redirect to="/docs/" />
}
