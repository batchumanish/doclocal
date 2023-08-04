import React from "react";
import clsx from "clsx";
import { Grid, Box } from "@mui/material";
import data from "/src/components/basics.json";
import { useColorMode } from "@docusaurus/theme-common";
import v2 from "@site/static/img/assets/v2-logo-footer.png";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FooterLayout({ style, links, logo, copyright, logoa }) {
  const { colorMode, setColorMode } = useColorMode();
  const mobile = useMediaQuery("(max-width:900px)");
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="footer-main"
        style={{
          display: mobile ? "grid" : null,
          placeItems: mobile ? "center" : null,
        }}
      >
        <Grid item md={2} xs={12}>
          <Box class="covalent-logo">
            <img style={{ height: "40px" }} src={v2} alt="covalentLogo" />
          </Box>
        </Grid>
        <Grid
          item
          md={9}
          xs={12}
          style={{ placeItems: "center", display: "grid" }}
          className="footer-text"
        >
          <Box
            style={{
              height: mobile ? "25px" : "0px",
              width: mobile ? "10px" : "0px",
            }}
          ></Box>
          <Box>
            Created and shared with ♡
            <a
              href="https://agnostiq.ai/"
              target="_blank"
              rel="license noopener noreferrer"
              aria-label="agnostiq"
            >
              {" "}
              agnostiq.ai
            </a>
          </Box>
        </Grid>
        <Grid item md={1} xs={12}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} className="footer_git_logo">
              {/* <a href="https://github.com/AgnostiqHQ/covalent"><img src={git}/></a> */}
              <a
                href="https://github.com/AgnostiqHQ/covalent"
                target="_blank"
                rel="license noopener noreferrer"
                aria-label="github"
              >
                <img
                  src={
                    colorMode === "dark"
                      ? data.git
                      : "https://www.covalent.xyz/wp-content/uploads/2022/04/github.svg"
                  }
                  style={{ height: "29px", width: "29px" }}
                  alt="github"
                />
              </a>
            </Grid>
            <Grid item xs={6} className="footer_slack_logo">
              {/* <a href="https://covalentworkflows.slack.com/join/shared_invite/zt-1ew7f2rfk-dKSXVQmRniu5mQW4Z_eQuw#/shared-invite/email"><img src={slack}  style={{paddingTop:'5px'}}/></a> */}
              <a
                href="https://covalentworkflows.slack.com/join/shared_invite/zt-1ew7f2rfk-dKSXVQmRniu5mQW4Z_eQuw#/shared-invite/email"
                target="_blank"
                rel="license noopener noreferrer"
                aria-label="slack"
              >
                <img
                  src={
                    colorMode === "dark"
                      ? data.slack
                      : "https://www.covalent.xyz/wp-content/uploads/2022/04/slack.svg"
                  }
                  style={{ height: "29px", width: "29px" }}
                  alt="slack"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
