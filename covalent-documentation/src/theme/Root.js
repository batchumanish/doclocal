import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import "../css/login.css";
import { useHistory } from "react-router-dom";

const configData = {
  aws_project_region: "us-east-1",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_frRIwv4ak",
  aws_user_pools_web_client_id: "4fmchutfqmcjn78gj760oubgln",
  oauth: {
    domain: "auth.covalent.xyz",
    scope: ["aws.cognito.signin.user.admin", "email", "openid", "profile"],
    redirectSignIn: "https://docs.covalent.xyz/docs/cloud/covalent_cloud_main/",
    redirectSignOut: "https://docs.covalent.xyz/docs/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: ["GOOGLE"],
  aws_cognito_signup_attributes: ["GIVEN_NAME", "FAMILY_NAME", "EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 6,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
};

configData.oauth.domain = "auth.covalent.xyz";
Amplify.configure(configData);
Auth.configure(configData);

export default function Root({ children }) {
  const [path, setPath] = useState("");
  const [overallcheck, setOverallcheck] = useState(true);

  const checktokenexists = () => {
    if (!path.includes("cloud")) {
      setOverallcheck(true);
    } else {
      localStorage.setItem("redirect", path);
      if (localStorage["AUTH_TOKEN"]) {
        setOverallcheck(true);
        var now = new Date().getTime();
        var logintime = parseInt(
          localStorage.getItem("logintime", new Date().getTime())
        );
        if (now - logintime > 900000) {
          localStorage.clear();
        }
      } else {
        setOverallcheck(false);
      }
    }
  };

  const history = useHistory();

  useEffect(() => {
    setPath(location?.pathname);
    checktokenexists();
  });

  return (
    <div>
      {overallcheck ? (
        <div>{children}</div>
      ) : (
        <>
          {history.replace("/docs/login")}
        </>
      )}
    </div>
  );
}
