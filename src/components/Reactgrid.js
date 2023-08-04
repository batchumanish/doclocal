import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useColorMode } from "@docusaurus/theme-common";
import ReactMarkdown from "react-markdown";

import Cardd from "/src/components/Reactcard";

import { useHistory } from "react-router-dom";

export default function Covalent({
  arr,
  heading,
  headingdesc,
  description,
  display,
  minheight,
  goto,
  cursor,
  isdisabled,
}) {
  const history = useHistory();
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = (newlink) => {
    history.push(newlink);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ cursor: cursor }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <div
              style={{
                fontWeight: "600",
                backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                color: colorMode === "dark" ? "#AEB6FF" : "#10102D",
              }}
              onClick={() => (isdisabled ? null : handleClick(goto))}
              disabled={isdisabled}
            >
              <div
                fontWeight="500"
                style={{
                  fontSize: "18px",
                  backgroundColor: colorMode === "dark" ? "#08081A" : "white",
                }}
              >
                {heading}
              </div>
            </div>
            <ReactMarkdown children={headingdesc}></ReactMarkdown>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, display: { display } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <div
              // variant="outlined"
              style={{
                height: "70px",
                alignItems: "left",
                textAlign: "left",
                verticalAlign: "center",
                backgroundColor: colorMode === "dark" ? "#08081A" : "white",
                color: colorMode === "dark" ? "#ffffffcc" : "black",
                display: "grid",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  paddingTop: "1rem",
                }}
              >
                {description}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div
        // variant="outlined"
        sx={{
          flexGrow: 1,
          backgroundColor: colorMode === "dark" ? "#18181a" : "white",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          padding="2rem"
        >
          {Array.from(arr).map((product) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              onClick={() => handleClick(product.url)}
              sx={{
                cursor: "pointer",
              }}
            >
              <Cardd
                product={product}
                key={product.img}
                minheight={minheight}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
