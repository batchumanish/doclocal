import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { useColorMode } from "@docusaurus/theme-common";
export default function Buttons({ h1, d1, h2, d2, url1, url2 }) {
  const history = useHistory();
  const { colorMode, setColorMode } = useColorMode();
  const handleClick = (newlink) => {
    history.push(newlink);
  };

  const Custombutton = styled(Button)({
    color: "white",
    backgroundColor: "#737CC3",
    marginTop: "12px",
    "&:hover": {
      backgroundColor: "rgb(56,159,251)",
      borderColor: "rgb(56,159,251)",
      color: "white",
    },
    width: "55%",
  });
  return (
    <div>
      <Grid container row spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              height: "60px",
              textAlign: "center",
              backgroundColor: colorMode === "dark" ? "#18181a" : "#eeebee",
            }}
          >
            <Custombutton variant="outlined" onClick={() => handleClick(url1)}>
              {h1}
            </Custombutton>
          </Box>

          <Box
            sx={{
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              height: "180px",
              padding: "20px 0 0 15px",
              backgroundColor: colorMode === "dark" ? "#18181a" : "#f8f9fb",
            }}
          >
            {d1}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              height: "60px",
              textAlign: "center",
              backgroundColor: colorMode === "dark" ? "#18181a" : "#eeebee",
            }}
          >
            <Custombutton variant="outlined" onClick={() => handleClick(url2)}>
              {h2}
            </Custombutton>
          </Box>

          <Box
            sx={{
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              height: "180px",
              padding: "20px 0 0 15px",
              backgroundColor: colorMode === "dark" ? "#18181a" : "#f8f9fb",
            }}
          >
            {d2}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
