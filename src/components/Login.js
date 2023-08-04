import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import "../css/login.css";
import { Grid, Box, Button } from "@mui/material";
import covicon from "@site/static/img/assets/fullcovalent.png";
import { useHistory, useLocation } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import covLoader from "@site/static/img/assets/covLoader.png";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import Alert from "@mui/material/Alert";

const configData = {
  aws_project_region: "us-east-1",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_frRIwv4ak",
  aws_user_pools_web_client_id: "4fmchutfqmcjn78gj760oubgln",
};
// awsconfig.oauth.domain = "auth.int.covalent.xyz";
Amplify.configure(configData);
Auth.configure(configData);

const login = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [path, setPath] = useState("");
  const [isuser, setIsuser] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [errormessageclassname, setErrormessageclassname] = useState("trans");
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [severity, setSeverity] = React.useState("");
  const location = useLocation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (location?.pathname?.includes("/login")) {
          const usernameplusnumber = localStorage.getItem(
            "CognitoIdentityServiceProvider.4fmchutfqmcjn78gj760oubgln.LastAuthUser"
          );
          const cognitogentoken = localStorage.getItem(
            "CognitoIdentityServiceProvider.4fmchutfqmcjn78gj760oubgln." +
            usernameplusnumber +
            ".accessToken"
          );
          localStorage.setItem("AUTH_TOKEN", cognitogentoken);
          window.location.replace(localStorage.getItem("redirect"));
        }
      })
      .catch((error) => {
        if (
          location?.pathname !== "/docs/login" &&
          location?.pathname !== "/docs/" &&
          location?.pathname !== "/docs/login/"
        ) {
          setSnackbar(true);
          setErrormessage("User is not Enabled");
        }
      });
  }, [path]);

  const checktokenexists = () => {
    if (localStorage["AUTH_TOKEN"]) {
      var now = new Date().getTime();
      var logintime = parseInt(
        localStorage.getItem("logintime", new Date().getTime())
      );
      if (now - logintime > 900000) {
        localStorage.clear();
      }
    }
  };

  async function googleLoginCode() {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  const history = useHistory();
  const cancel = () => {
    history.push("/docs");
  };

  const action = () => {
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="red"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>;
  };

  const clearerrormessage = () => {
    setErrormessageclassname("trans");
  };

  useEffect(() => {
    setPath(location?.pathname);
    checktokenexists();
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  function handleSubmit(event) {
    setOpen(true);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    Auth.signIn(email, password)
      .then((user) => {
        setAuthLoading(false);
        setIsuser(true);
        setOpen(false);
        localStorage.setItem("logintime", new Date().getTime());

        const usernameplusnumber = localStorage.getItem(
          "CognitoIdentityServiceProvider.4fmchutfqmcjn78gj760oubgln.LastAuthUser"
        );
        const cognitogentoken = localStorage.getItem(
          "CognitoIdentityServiceProvider.4fmchutfqmcjn78gj760oubgln." +
          usernameplusnumber +
          ".accessToken"
        );
        localStorage.setItem("AUTH_TOKEN", cognitogentoken);
        window.location.replace(localStorage.getItem("redirect"));
      })
      .catch((error) => {
        setOpen(false);
        setSnackbar(true);
        setErrormessageclassname("nontrans");
        if (error.message == "Username cannot be empty") {
          setErrormessage("Username can not be empty");
          setSeverity("error");
        } else if (
          error.message == "CUSTOM_AUTH is not enabled for the client."
        ) {
          setErrormessage("User is not authorised");
        } else if (error.message == "Incorrect username or password.") {
          setErrormessage("Invalid Credentials");
          setSeverity("error");
        } else {
          setErrormessage("");
          setSeverity("error");
        }
      });

    if (isuser) {
      window.location.replace(path);
    }

    return;
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div
        style={{
          display: "grid",
          height: "100vh",
          backgroundColor: "rgb(8,8,26)",
          // width:'70vh',
          marginLeft: "10%",
          // marginTop:'-3rem',
        }}
      >
        <Grid
          container
          sx={{
            width: "350px",
            height: "500px",
            border: "1px solid #5552FF",
            borderRadius: "10px",
          }}
          className="login-grid"
        >
          <Grid item xs={12} sx={{ display: "grid", placeItems: "center" }}>
            <img src={covicon} style={{ height: "50%" }} />
          </Grid>
          <Grid item xs={12}>
            <Grid container rowSpacing={1}>
              <Grid container sx={{ marginLeft: "5.9rem" }}>
                <Box sx={{ fontSize: "medium", marginBottom: "1rem" }}>
                  Login to view this page
                </Box>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5552FF",
                    width: "19.3rem",
                    borderRadius: "70px",
                    textTransform: "none",
                  }}
                  className="google-logo"
                  onClick={googleLoginCode}
                >
                  Google
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="line"
            sx={{
              fontSize: "10px",
              padding: "1rem 0 1rem 4rem ",
              color: "#86869A",
            }}
          >
            or continue with email
          </Grid>
          <Grid
            container
            rowSpacing={2}
            sx={{ justifySelf: "center", paddingLeft: "1rem" }}
          >
            <Grid item xs={12}>
              <Grid container rowSpacing={1} sx={{ marginTop: "-15px" }}>
                <Grid item xs={12} onClick={clearerrormessage}>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Email"
                    style={{
                      border: "1px solid rgb(40,40,87)",
                      borderRadius: "40px",
                      height: "40px",
                      width: "320px",
                      color: "white",
                      backgroundColor: "rgb(8,8,26)",
                      position: "relative",
                      marginBottom: "32px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "-50px" }}>
              <Grid container rowSpacing={1}>
                <Grid item xs={12} style={{ color: "white" }}></Grid>
                <Grid item xs={12} onClick={clearerrormessage}>
                  <Input
                    disableUnderline
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{
                      border: "1px solid rgb(40,40,87)",
                      borderRadius: "40px",
                      height: "40px",
                      width: "320px",
                      color: "white",
                      backgroundColor: "rgb(8,8,26)",
                      marginBottom: "22px",
                      fontSize: "13px",
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ color: "#86869A", size: "small" }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <div
                    className={errormessageclassname}
                    style={{
                      fontSize: "13px",
                      marginLeft: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    {errormessage}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "-1.2rem" }}>
            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5552FF",
                    width: "9.3rem",
                    borderRadius: "70px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Login
                </Button>
                <Backdrop
                  sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    color: "#fff",
                  }}
                  open={open}
                >
                  <img src={covLoader} />
                </Backdrop>
                <Snackbar
                  open={snackbar}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  // message={errormessage}
                  action={action}
                  style={{ color: "red" }}
                >
                  <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ backgroundColor: "#302F9C", color: "#E5E7F3" }}
                  >
                    {errormessage}
                  </Alert>
                </Snackbar>
              </Grid>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#08081A",
                  width: "9.3rem",
                  borderRadius: "70px",
                  textTransform: "none",
                  borderColor: "#6473FF",
                  color: "#CBCBD7",
                }}
                onClick={cancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
          <Grid
            className="line"
            sx={{
              fontSize: "10px",
              color: "#86869A",
              marginLeft: "1rem",
              padding: "1rem 0 4rem 0",
            }}
          >
            Registrations for new users will open soon
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default login;
