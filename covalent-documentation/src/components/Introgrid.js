import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import filter from "@site/static/img/assets/create_coord_comp.png";
import { Typography } from "@mui/material";
import { useColorMode } from "@docusaurus/theme-common";
import copy from "copy-to-clipboard";

export default function Introgrid() {
  const { colorMode, setColorMode } = useColorMode();
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ paddingTop: "2rem" }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontSize: "24px",
              color: colorMode === "dark" ? "#AEB6FF" : "#10102D",
            }}
          >
            Welcome to Covalent
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: colorMode === "dark" ? "#E5E7F3" : "#1c1e21",
              fontWeight: 500,
            }}
          >
            Elevate Your Advanced Computing Experience
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              marginTop: "7px",
              color: colorMode === "dark" ? "#E5E7F3" : "#1c1e21",
            }}
          >
            Introducing Covalent, the advanced computing orchestration platform
            that simplifies complex tasks, optimizes workflows, and drives
            innovation. Covalent is specifically designed for managing diverse
            systems like quantum, HPC, and AI/ML workloads. This documentation
            will guide you through every aspect of Covalent, empowering you to
            focus on your research and development while efficiently handling
            advanced computing tasks. Get started immediately and experience the
            power of Covalent with a simple installation:
          </Typography>
          <Box
            sx={{
              backgroundColor: colorMode === "dark" ? "#333345" : "#CBCBD7",
              marginTop: "15px",
              height: "57px",
              width: "90%",
              display: "flex",
              py: 1.8,
              borderRadius: "6px",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ paddingLeft: 2, fontStyle: "DM Sans" }}>
              $ pip install covalent
            </Typography>
            <img
              style={{
                width: "33px",
                height: "25px",
                paddingRight: "15px",
                cursor: "pointer",
              }}
              id="image"
              src={require("/static/img/assets/Group 30.png").default}
              onClick={() => {
                copy("pip install covalent");
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
              }}
              title={!copied ? "Click to copy" : "Copied!"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} pt={5}>
          <img src={filter} />
        </Grid>
      </Grid>
    </div>
  );
}
