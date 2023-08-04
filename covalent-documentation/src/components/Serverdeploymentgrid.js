import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useColorMode } from "@docusaurus/theme-common";
const useStyles = makeStyles({
  root: {
    "&:hover": {
      border: "0.5px solid #4057FF",
    },
  },
});

export default function Serverdeploymentgrid() {
  const classes = useStyles();
  const { colorMode, setColorMode } = useColorMode();
  const history = useHistory();
  const handleClick = (newlink) => {
    history.push(newlink);
  };

  const arr = [
    {
      img: "/img/assets/server_deployment/docker_deploy.svg",
      at: "**Docker**",
      desc: "Pull the pre-built container image from our public registries and run it in Docker.",
      url: "./sd-docker",
    },
    {
      img: "/img/assets/server_deployment/systemd_deploy.svg",
      at: "**systemd**",
      desc: "Use `systemd` on a Linux host to manage a self-hosted Covalent server.",
      url: "./sd-systemd",
    },
  ];

  const arrtwo = [
    {
      img: "/img/assets/server_deployment/aws_deploy.svg",
      at: "**AWS**",
      desc: "Deploy Covalent in an AWS account with any `x86`-based EC2 instance.",
      url: "./sd-deploying",
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
              <Typography marginTop="23px">On-Premise Deployment</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper
              variant="outlined"
              style={{
                // fontWeight: '200',
                height: "70px",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                verticalAlign: "center",
                backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                color: colorMode === "dark" ? "#ffffffcc" : "black",
              }}
            >
              <Typography paddingLeft={3} paddingTop={3}>
                Install the Covalent server on an on-prem server or virtual
                machine to create a centralized deployment.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          flexGrow: 1,
          marginBottom: "40px",
          maxHeight: 370,
          minHeight: 370,
          backgroundColor: colorMode === "dark" ? "#18181a" : "white",
        }}
      >
        <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          {Array.from(arr).map((product) => (
            <Grid
              item
              xs={6}
              md={6}
              onClick={() => handleClick(product.url)}
              sx={{ cursor: "pointer" }}
              paddingLeft={3}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  marginTop: "10px",
                  backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                }}
                classes={{ root: classes.root }}
              >
                <CardMedia
                  component="img"
                  alt=" "
                  height="180"
                  image={product.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: colorMode === "dark" ? "#ffffffcc" : "black" }}
                  >
                    <div style={{ fontSize: "15px" }}>
                      <ReactMarkdown children={product.at}></ReactMarkdown>
                    </div>
                  </Typography>
                  <Typography
                    variant="h7"
                    sx={{ color: colorMode === "dark" ? "#ffffffcc" : "black" }}
                  >
                    {product.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

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
              <Typography marginTop="23px">Cloud Deployment</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper
              variant="outlined"
              style={{
                // fontWeight: '200',
                height: "70px",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                verticalAlign: "center",
                backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                color: colorMode === "dark" ? "#ffffffcc" : "black",
              }}
            >
              <Typography paddingLeft={3} paddingTop={3}>
                Deploy on any major cloud platform to scale your deployments
                based on compute and memory needs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          flexGrow: 1,
          maxHeight: 340,
          minHeight: 340,
          backgroundColor: colorMode === "dark" ? "#18181a" : "white",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {Array.from(arrtwo).map((product) => (
            <Grid
              item
              xs={6}
              md={6}
              onClick={() => handleClick(product.url)}
              sx={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  marginTop: "10px",
                  marginLeft: 3,
                  backgroundColor: colorMode === "dark" ? "#18181a" : "white",
                }}
                classes={{ root: classes.root }}
              >
                <CardMedia
                  component="img"
                  alt=" "
                  height="180"
                  image={product.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: colorMode === "dark" ? "#ffffffcc" : "black" }}
                  >
                    <div style={{ fontSize: "15px" }}>
                      <ReactMarkdown children={product.at}></ReactMarkdown>
                    </div>
                  </Typography>
                  <Typography
                    variant="h7"
                    sx={{ color: colorMode === "dark" ? "#ffffffcc" : "black" }}
                  >
                    {product.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
