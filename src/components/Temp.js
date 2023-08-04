import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import landing from "@site/static/img/landingV2/landingbg.png";
import data from "/src/components/basics.json";
import Knowmore from "@site/static/img/landingV2/knowmore.svg";
import Mainpagebutton from "/src/components/Mainpagebutton";
import useMediaQuery from "@mui/material/useMediaQuery";
import copy from "copy-to-clipboard";
import GitHubButton from "react-github-btn";

const Temp = () => {
  const history = useHistory();
  const [marginValue, setMarginValue] = useState("");
  const [marginValueBottom, setMarginValueBottom] = useState("");
  const [widthValue, setWidthValue] = useState("");

  const zerotothrethirty = useMediaQuery("(max-width:330px)", { noSsr: true });
  const zeroto480 = useMediaQuery("(max-width:500px)", { noSsr: true });
  const threethirtyandsixxhundred = useMediaQuery(
    "(min-width:330px) and (max-width:600px)",
    { noSsr: true }
  );
  const zerotosixhundred = useMediaQuery("(max-width:600px)", { noSsr: true });
  const sixandine = useMediaQuery("(min-width:600px) and (max-width:900px)", {
    noSsr: true
  });
  const zerotoninehundred = useMediaQuery("(max-width:900px)", { noSsr: true });
  const ninehundredplus = useMediaQuery("(min-width:901px)", { noSsr: true });
  const ninehtoninenintysix = useMediaQuery(
    "(min-width:900px) and (max-width:996px)",
    { noSsr: true }
  );
  const sixhtosixfortyseven = useMediaQuery(
    "(min-width:600px) and (max-width:647px)",
    { noSsr: true }
  );
  const twelvesixtythreeplus = useMediaQuery("(min-width:1281px)", {
    noSsr: true,
  });
  const thousandtwentythree = useMediaQuery(
    "(min-width:1023px) and (max-width:1134px)",
    { noSsr: true }
  );
  const minninehtoninenintysix = useMediaQuery(
    "(min-width:996px) and (max-width:1577px)",
    { noSsr: true }
  );
  const fift = useMediaQuery("(min-width:1577px)", { noSsr: true });
  ///
  const min1398range = useMediaQuery(
    "(min-width:1398px) and (max-width:1403px)",
    { noSsr: true }
  );

  const min1403range = useMediaQuery(
    "(min-width:1403px) and (max-width:1408px)",
    { noSsr: true }
  );

  const min1409range = useMediaQuery(
    "(min-width:1408px) and (max-width:1412px)",
    { noSsr: true }
  );

  const min1413range = useMediaQuery(
    "(min-width:1412px) and (max-width:1420px)",
    { noSsr: true }
  );

  /////
  const min1421range = useMediaQuery(
    "(min-width:1421px) and (max-width:1426px)",
    { noSsr: true }
  );

  const min1428range = useMediaQuery(
    "(min-width:1426px) and (max-width:1431px)",
    { noSsr: true }
  );

  const min1431range = useMediaQuery(
    "(min-width:1431px) and (max-width:1435px)",
    { noSsr: true }
  );

  /////
  const min1436range = useMediaQuery(
    "(min-width:1435px) and (max-width:1439px)",
    { noSsr: true }
  );

  React.useLayoutEffect(() => {
    if (zerotoninehundred) {
      setMarginValue("-29px 0 0 -16px");
      setMarginValueBottom("0 0 0 -16px");
      setWidthValue("calc(100vw - 5px)");
    } else if (ninehtoninenintysix) {
      setMarginValue("-29px 0 0 -16.2px");
      setMarginValueBottom("0 0 0 -16px");
      setWidthValue("calc(100vw - 5px)");
    } else if (min1398range) {
      setMarginValue("-29px 0 0 -48px");
      setMarginValueBottom("0 0 0 -47px");
      setWidthValue("calc(87vw - 79px)");
    } else if (min1403range) {
      setMarginValue("-29px 0 0 -50px");
      setMarginValueBottom("0 0 0 -49px");
      setWidthValue("calc(87vw - 77px)");
    } else if (min1409range) {
      setMarginValue("-29px 0 0 -52px");
      setMarginValueBottom("0 0 0 -51px");
      setWidthValue("calc(87vw - 77px)");
    } else if (min1413range) {
      setMarginValue("-29px 0 0 -55px");
      setMarginValueBottom("0 0 0 -54px");
      setWidthValue("calc(87vw - 77px)");
    }
    else if (min1421range) {
      setMarginValue("-29px 0 0 -58px");
      setMarginValueBottom("0 0 0 -57px");
      setWidthValue("calc(87vw - 75px)");
    }
    else if (min1428range) {
      setMarginValue("-29px 0 0 -60px");

      setMarginValueBottom("0 0 0 -59px");

      setWidthValue("calc(87vw - 74px)");
    }
    else if (min1431range) {
      setMarginValue("-29px 0 0 -63px");

      setMarginValueBottom("0 0 0 -61px");

      setWidthValue("calc(87vw - 74px)");
    }
     else if (min1436range) {
      setMarginValue("-29px 0 0 -65px");
      setMarginValueBottom("0 0 0 -64px");
      setWidthValue("calc(88vw - 88px)");
    } else if (minninehtoninenintysix) {
      setMarginValue("-29px 0 0 -45.7px");
      setMarginValueBottom("0 0 0 -44.8px");
      setWidthValue("calc(100vw - 262px)");
    }
    else if (fift) {
      setMarginValue("-29px 0 0 calc(743.3px - 50vw)");
      setMarginValueBottom("0 0 0 calc(743.5px - 50vw)");
      setWidthValue("calc(100vw - 261.0px)");
    }
    else {
      setMarginValue("-29px 0 0 -16px");
      setMarginValueBottom("0 0 0 0px")
      setWidthValue("100vw");
    }
  });

  const [copied, setCopied] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  });

  const opensourceClick = (newlink) => {
    history.push(newlink);
  };

  const covcloudClick = (newlink) => {
    history.push(newlink);
  };

  return (<>
    {(marginValue && marginValueBottom && widthValue) ? (<Grid>
      <Grid
        container
        spacing={2}
        className="mainimg"
        sx={{
          backgroundImage: `url(${landing})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: "3rem",
          width: widthValue,
          margin: marginValue
        }}

      //sx={style}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            marginTop: "9%",
          }}
        >
          <Box
            style={{
              display: zerotosixhundred ? "grid" : "inline",
              placeItems: zerotosixhundred ? "center" : "none",
              marginLeft: zerotosixhundred ? null : "5%",
            }}
          >
            <img src={data.headingImg} alt="headingImg" rel="preload" />
            <Box
              style={{
                display: zerotosixhundred ? "grid" : "inline",
                placeItems: zerotosixhundred ? "center" : "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  maxWidth: zerotoninehundred ? "280px" : "100vw",
                  marginLeft: zerotosixhundred ? null : "5%",
                }}
              >
                <Grid
                  item
                  style={{
                    marginRight: !zerotosixhundred ? "10px" : "5px",
                  }}
                >
                  <a href="https://pypi.org/project/covalent/" aria-label="downloads">
                    <img
                      alt="Downloads per Month Badge"
                      rel="preload"
                      src="https://img.shields.io/badge/downloads-4.1k%2Fmonth-green"
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  style={{ marginRight: !zerotosixhundred ? "10px" : "0px" }}
                >
                  <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" aria-label="licenses">
                    <img
                      alt="AGPL License Badge"
                      rel="preload"
                      src="https://img.shields.io/badge/License-AGPL%20v3-blue"
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  style={{ marginRight: !zerotosixhundred ? "10px" : "5px" }}
                >
                  <a href="https://github.com/AgnostiqHQ/covalent/releases/latest" aria-label="latest">
                    <img
                      alt="Latest Release Badge"
                      rel="preload"
                      src="https://img.shields.io/github/v/release/AgnostiqHQ/covalent"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <img
                    alt="Supported Platforms Badge"
                    rel="preload"
                    src="https://img.shields.io/badge/python-3.8%20%7C%203.9%20%7C%203.10-blueviolet"
                  />
                </Grid>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#08081A",
                marginTop: "10px",
                height: "46px",
                width: "229px",
                display: "flex",
                py: 1.8,
                borderRadius: "6px",
                justifyContent: "space-between",
                marginLeft: zerotosixhundred ? null : "5%",
              }}
            >
              <Box
                sx={{ paddingLeft: 2, fontStyle: "DM Sans", marginTop: "-5px" }}
              >
                $ pip install covalent
              </Box>
              <img
                style={{
                  paddingRight: "15px",
                  cursor: "pointer",
                }}
                id="image"
                rel="preload"
                alt="copyImage"
                src={!copied ? data.home.copyimg : data.home.gtick}
                // src={require("/static/img/landingV2/copyimg.png").default}
                onClick={() => {
                  copy("pip install covalent");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1200);
                }}
                title={!copied ? "Click to copy" : "Copied!"}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={data.hero} alt="hero" rel="preload" />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        style={{
          width: widthValue,
          backgroundColor: "#302F9C",
          margin: marginValueBottom,
        }}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Grid container spacing={2} >
            <Grid
              item
              xs={9}
              style={{
                display: zerotosixhundred ? "grid" : "inline",
                placeItems: zerotosixhundred ? "end" : "none",
                marginLeft: zeroto480 ? '18px' : null
              }}
            >
              <img
                rel="preload"
                alt="createImage"
                src={data.create}
                style={{
                  margin: "-6px 0 0 0",
                  borderBottom: zerotosixhundred ? "1px solid #6473FF" : "0px",
                }}
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#6473FF",
                display: zerotosixhundred ? "none" : "inline",
              }}
            />
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Grid container spacing={2} >
            <Grid
              item
              xs={9}
              style={{
                display: zerotosixhundred ? "grid" : "inline",
                placeItems: zerotosixhundred ? "end" : "none",
                marginLeft: zeroto480 ? '18px' : null
              }}
            >
              <img
                rel="preload"
                alt="monitorImage"
                src={data.monitor}
                style={{
                  margin: "-6px 0 0 -0px",
                  borderBottom: zerotosixhundred ? "1px solid #6473FF" : "0px",
                }}
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#6473FF",
                display: zerotosixhundred ? "none" : "inline",
              }}
            />
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} md={4} >
          <Grid container spacing={2} >
            <Grid
              item
              xs={9}
              style={{
                display: zerotosixhundred ? "grid" : "inline",
                placeItems: zerotosixhundred ? "end" : "none",
                marginLeft: zeroto480 ? '18px' : null
              }}
            >
              <img rel="preload" alt="iterateImage" src={data.iterate} style={{ margin: "-6px 0 0 -20px" }} />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={3}
        style={{
          margin: marginValueBottom,
          width: widthValue,
        }}
      >
        <Grid item xs={10} md={10} style={{ marginTop: "20px" }}>
          <Grid container spacing={2} style={{ marginLeft: zerotosixhundred ? '2%' : null }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{ display: "grid", placeItems: "start" }}
            >
              <Box>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={12} style={{ marginBottom: "30px" }}>
                    <Box
                      style={{
                        marginBottom: "0px",
                        display: zerotosixhundred ? "grid" : "inline",
                        placeItems: zerotosixhundred ? "center" : "none",
                        fontSize: zerotosixhundred ? "13px" : "14px",
                        // marginBottom: "0px",
                        // display:  "grid",
                        // placeItems:  "center" ,
                        // fontSize:  "13px" ,
                      }}
                    >
                      Plugin Ecosystem
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 2, sm: 1, md: 2 }}
                      
                    >
                      <Grid item xs={2} md={2} lg={3} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.aws} alt="aws" />
                      </Grid>
                      <Grid item xs={6} md={5} lg={3.5} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.gcloud} alt="gcloud" />
                      </Grid>
                      <Grid item xs={4} md={3} lg={4} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.azure} alt="azure" />
                      </Grid>
                      <Grid item xs={3.7} md={4} lg={3} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.slurm} alt="slurm" />
                      </Grid>
                      <Grid item xs={4.5} md={3.5} lg={3.5} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.kuber} alt="kuber" />
                      </Grid>
                      <Grid item xs={3} md={2} lg={4} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.dask} alt="dask" />
                      </Grid>
                      <Grid item xs={6} md={3} lg={4} style={{ placeContent: 'center', display: 'grid' }}>
                        <img src={data.plugins.ibm} alt="quantum" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              {/* <Box sx={{border:'1px solid red',display:'grid',placeItems:'center'}}>
                  <img src="/img/landingV2/create.svg"/>
              </Box> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{
                    display: zerotoninehundred ? "grid" : "inline",
                    placeItems: zerotoninehundred ? "center" : "none",
                  }}
                >
                  <Box
                    style={{
                      marginBottom: "10px",
                      marginLeft: "20px",
                      fontSize: "20px",
                      color: "#AEB6FF",
                    }}
                  >
                    Introduction
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{
                    display: zerotosixhundred ? "grid" : "inline",
                    placeItems: zerotosixhundred ? "center" : "none",
                    marginBottom: zerotosixhundred ? "10px" : "0px",
                  }}
                >
                  <Grid
                    container
                    style={{
                      marginLeft: zerotosixhundred ? "20px" : sixandine ? "0px" : "-5%",
                      display: "grid",
                      placeItems: zerotoninehundred ? "center" : "end",
                    }}
                  >
                    <GitHubButton
                      href="https://github.com/AgnostiqHQ/covalent"
                      data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star AgnostiqHQ/covalent on GitHub"

                    >
                      Star
                    </GitHubButton>
                  </Grid>
                </Grid>
              </Grid>

              <Box
                style={{
                  fontSize: "14px",
                  marginBottom: "10px",
                  marginLeft: "20px",
                }}
              >
                Covalent is a Pythonic workflow tool for computational
                scientists, AI/ML software engineers, and anyone who needs to
                run workloads on limited or expensive computing resources
                including HPC clusters, GPU arrays, quantum computers and cloud
                services. Covalent is ideal for scaling jobs from your laptop /
                Jupyter notebook to any heterogenous combination of hardware
                backends and cloud environments with minimal code changes. This
                documentation will guide you through every aspect of Covalent,
                helping you supercharge your laptop experience today!
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "15px", marginLeft: zerotothrethirty ? 'calc(1% - 10px)' : threethirtyandsixxhundred ? "calc(1% - 5px)" : null }}>
            <Grid item xs={12} sm={6} md={6} >
              <Box
                style={{
                  borderRadius: "7px",
                  border: "1px solid #6473FF",
                  padding: "19px",
                  marginLeft: zerotosixhundred ? "20px" : "0px",
                  cursor: "pointer",
                }}
                onClick={() => opensourceClick("/docs/Overview")}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10} md={10}>
                    <Box
                      style={{
                        fontSize: "20px",
                        color: "#6473FF",
                      }}
                    >
                      OPEN SOURCE
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={2} style={{ display: 'grid', placeItems: 'end' }}>
                    <img style={{ marginBottom: '10px' }} src={data.opensourceCard} alt="openSource" />
                  </Grid>
                </Grid>
                <Box style={{ fontSize: "14px" }}>
                  Discover the inner workings and various components of Covalent
                  by exploring the open-source version and by contributing to the
                  project.
                </Box>

                <Box style={{ fontSize: "16px" }}>
                  <Box style={{ fontSize: "16px" }}>
                    <Grid container>
                      {/* <Grid item xs={4} md={3} lg={3}>
                        Know More
                      </Grid> */}
                      Learn more &nbsp;
                      <Grid item xs={1} md={3} lg={1}>
                        {/* <img src={knowmore} style={{ marginTop: "6px" }} /> */}
                        <Knowmore style={{ marginTop: "7px" }} />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box
                style={{
                  borderRadius: "7px",
                  border: "1px solid #FFC164",
                  padding: "19px",
                  marginLeft: zerotosixhundred ? "20px" : "0px",
                  cursor: "pointer",
                  height: thousandtwentythree ? "190px" : "100%",
                }}
                onClick={() => covcloudClick("/docs/cloud/covalent_cloud_main")}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10} md={10}>
                    <Box style={{ fontSize: "20px", color: "#FFBF00" }}>
                      COVALENT CLOUD
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={2} style={{ display: 'grid', placeItems: 'end' }}>
                    <img style={{ marginBottom: '10px' }} src={data.cloudCard} alt="cloudImage" />
                  </Grid>
                </Grid>
                <Box
                  style={{ fontSize: sixhtosixfortyseven ? "13px" : "14px" }}
                >
                  Learn how to use Covalent Cloud to simplify the management and
                  execution of advanced computing workloads.
                </Box>

                <Box style={{ fontSize: "16px" }}>
                  <Grid container>
                    Learn more &nbsp;
                    <Grid item xs={1}>
                      {/* <img src={knowmore} style={{ marginTop: "6px" }} /> */}
                      <Knowmore style={{ marginTop: "7px" }} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            style={{
              backgroundColor: "#1C1C46",
              padding: "20px",
              borderRadius: "6px",
              marginTop: ninehundredplus ? "50px" : "25px",
              marginLeft: zerotosixhundred ? "-7px" : "0px",
              // fontSize: zerotosixhundred ? "6px" : "14px",
              width: zerotosixhundred ? "90vw" : "100%",
            }}
          >
            <Box style={{ marginBottom: "10px" }}>Overview</Box>

            <Mainpagebutton />
          </Box>
        </Grid>

        <Grid
          item
          xs={2}
          md={2}
          style={{
            marginTop: "10px",
            display: zerotosixhundred ? "none" : "inline",
          }}
        >
          <Box
            style={{ margin: twelvesixtythreeplus ? "0 10px 0 -10px" : "0px" }}
          >
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}></Grid>
    </Grid>) : (<Grid height='100vh' width='70vw' />)}
  </>
  );
};
export default Temp;