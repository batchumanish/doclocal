import React, { useState, useEffect, use } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useHistory } from "react-router-dom";

const PluginsCard = ({
  pluginsImage,
  usersImage,
  githubImage,
  name,
  description,
  goto,
  git,
  type,
}) => {
  const history = useHistory();
  const handleClick = (newlink) => {
    history.push(newlink);
  };

  const handleIconClick = (e, link) => {
    e.stopPropagation();
    // window.location.replace(link); // Replace with the path to the different page you want to redirect to
    window.open(link, "_blank");
  };
  return (
    <>
      {type == "make" ? (
        <Box
          sx={{
            height: "100%",
            border: "1px solid #303067",
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            "&:hover": {
              backgroundColor: "rgba(48, 48, 103, 0.60)",
            },
          }}
          onClick={() => handleClick(goto)}
        >
          <Box sx={{ width: "35%", display: "grid", placeItems: "center" }}>
            <img src="/img/assets/plugins/api-ref.svg" />
          </Box>
          <Box
            sx={{
              width: "65%",
              left: "0",
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "AEB6FF",
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "DM Sans",
                }}
              >
                Make your own Plugin
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  placeItems: "end",
                  marginBottom: "2px",
                }}
              >
                <img src="/img/assets/plugins/makeplugin-arrow.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100%",
            border: "1px solid #303067",
            padding: "20px",
            borderRadius: "8px",
            background:
              "linear-gradient(128deg, rgba(0, 0, 0, 0.20), rgba(48, 47, 156, 0.20))",
            "&:hover": {
              backgroundColor: "rgba(48, 48, 103, 0.60)",
            },
          }}
          onClick={() => handleClick(goto)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={pluginsImage} />
            </Box>

            <Box sx={{ display: "flex" }}>
              {/* <Box>
                <img src={usersImage} />
              </Box> */}
              <Box>
                <img
                  src={githubImage}
                  target="_blank"
                  onClick={(e) => handleIconClick(e, git)}
                  style={{
                    padding: "3px",
                    borderRadius: "15px",
                    border: "1px solid transparent",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "10px", display: "flex" }}>
            <Typography
              sx={{
                color: " #AEB6FF",
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {name}
            </Typography>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <img src="/img/assets/plugins/right-arrow.svg" />
            </Box>
          </Box>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.91)",
              fontFamily: "DM Sans",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
        </Box>
      )}
    </>
  );
};
export default PluginsCard;
