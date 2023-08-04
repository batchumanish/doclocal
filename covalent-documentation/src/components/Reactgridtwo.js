import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Cardd from "/src/components/Reactcard";
import { useHistory } from "react-router-dom";
import { useColorMode } from "@docusaurus/theme-common";

export default function Gridtwo() {
  const history = useHistory();
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = (newlink) => {
    history.push(newlink);
  };
  const arr = [
    {
      img: "/img/assets/images/electron.png",
      at: "**Covalent SDK**",
      desc: "Describes the workflow model embodied in Covalent's API, including the Python code elements introduced in Basics.",
      url: "/docs/user-documentation/concepts/covalent-arch/covalent-architecture#the-covalent-sdk",
    },
    {
      img: "/img/assets/images/lattice.png",
      at: "**Covalent Server**",
      desc: "Describes in detail how the Covalent server handles workflows and dispatches tasks for execution.",
      url: "/docs/user-documentation/concepts/covalent-arch/covalent-architecture#covalent-services",
    },
    {
      img: "/img/assets/images/dispatch.png",
      at: "**Covalent GUI**",
      desc: "Shows how the Covalent GUI displays dispatched workflows in summary and detail forms,and how it saves and retrieves results",
      url: "/docs/user-documentation/concepts/covalent-arch/covalent-architecture#the-covalent-gui",
    },
  ];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper
              variant="outlined"
              style={{
                fontWeight: "600",
                height: "70px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "center",
                backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                color: colorMode === "dark" ? "#ffffffcc" : "black",
              }}
            >
              <Typography marginTop="23px">Covalent Architecture</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          flexGrow: 1,
          backgroundColor: colorMode === "dark" ? "#18181a" : "white",
        }}
      >
        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 4, sm: 4, md: 4 }}
          paddingLeft="3rem"
        >
          {Array.from(arr).map((product) => (
            <Grid
              item
              xs={6}
              md={4}
              onClick={() => handleClick(product.url)}
              sx={{ cursor: "pointer" }}
            >
              <Cardd product={product} key={product.img} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
