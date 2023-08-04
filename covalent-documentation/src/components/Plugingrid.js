import React from "react";
import Grid from "@mui/material/Grid";
import { useColorMode } from "@docusaurus/theme-common";

export default function Plugingrid({ code }) {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Grid
      container
      direction="row"
      sx={{ backgroundColor: colorMode === "dark" ? "#08081A" : "#f8f8f8" }}
    >
      <Grid item xs={12} md={12} lg={5} sm={12} padding={2}>
        Covalent AWS Plugins installs a set of executor plugins that allow tasks
        to be run in an EC2 instance, AWS Lambda, AWS ECS Cluster, AWS Batch
        Compute Environment, and as an AWS Braket Job for tasks requiring
        Quantum devices.
      </Grid>
      <Grid item xs={12} md={12} lg={7} sm={12}>
        <img width="1960px" src={code} />
      </Grid>
    </Grid>
  );
}
