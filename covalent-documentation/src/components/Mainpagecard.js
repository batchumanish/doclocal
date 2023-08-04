import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useColorMode } from "@docusaurus/theme-common";
import useMediaQuery from "@mui/material/useMediaQuery";

const getBackground = (colorMode, hover) => {
  if (colorMode === "dark") {
    if (hover) {
      return "#5552FF";
    }
    return "linear-gradient(269.68deg, rgba(134, 134, 154, 0) 0.27%, rgba(134, 134, 154, 0.24) 99.79%)";
  } else {
    if (hover) {
      return "#CED3FF";
    }
    return "linear-gradient(269.68deg, rgba(109, 124, 255, 0.12) 0.27%, rgba(174, 182, 255, 0.04) 99.79%)";
  }
};
export default function Mainpagecard({
  heading,
  content,
  img,
  imgdark,
  url,
  png,
  alt
}) {
  const { colorMode, setColorMode } = useColorMode();
  const [back, setBack] = useState(getBackground(colorMode, false));
  const [item1width, setItem1width] = useState(5);
  const [item2width, setItem2width] = useState(7);
  const zerotothreeeightyfive = useMediaQuery("(max-width:480px) ");
  const ninehtonineseventythree = useMediaQuery(
    "(min-width:900px) and (max-width:973px) "
  );
  const midd = useMediaQuery(" (min-width:997px) and (max-width:1226px) ");
  const setitem1width = () => {
    if (size.width < 1650) {
      setItem1width(5);
    }
    else if (size.width > 1650 && size.width < 2250) {
      setItem1width(4);
    }
    else if (size.width > 2250 && size.width < 3100) {
      setItem1width(2.7);
    }
    else {
      setItem1width(2.1);
    }
  }

  const setitem2width = () => {
    if (size.width < 1650) {
      setItem2width(7);
    }
    else if (size.width > 1650 && size.width < 2250) {
      setItem2width(8);
    }
    else if (size.width > 2250 && size.width < 3100) {
      setItem2width(9.3);
    }
    else {
      setItem2width(9.9);
    }
  }

  const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  };
  const size = useWindowSize();

  useEffect(() => {
    setitem1width();
    setitem2width();
  }, [size.width]);

  const changetopng = () => {
    return (
      <img
        src={img}
        rel="preload"
        alt={alt}
        style={{
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
          height: "100%",
          width: "110%"
        }}
        onMouseOver={() => setBack(getBackground(colorMode, true))}
        onMouseOut={() => setBack(getBackground(colorMode, false))}
      />
    );
    // }
  };
  return (
    <div>
      <div
        // onMouseOver={() => setBack(getBackground(colorMode, true))}
        // onMouseOut={() => setBack(getBackground(colorMode, false))}
        style={{
          // display: "grid",
          // placeItems: "start",
          //  height: "183px",
          background: back,
          cursor: "pointer",
          border:
            colorMode === "dark" ? "1px solid #AEB6FF" : "1px solid #5552FF",
          borderRadius: "15px",
        }}
        elevation={0}
      >
        <Box style={{ padding: "0px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={item1width}
            // sx={{
            //   display: "grid",
            //   placeItems: "start",
            // }}
            >
              {changetopng()}
            </Grid>
            <Grid item xs={item2width}
              onMouseOver={() => setBack(getBackground(colorMode, true))}
              onMouseOut={() => setBack(getBackground(colorMode, false))}
            >
              <Box
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div
                  style={{
                    color: colorMode === "dark" ? "#E5E7F3" : "#5552FF",
                    fontWeight: "500",
                    fontSize: zerotothreeeightyfive ? "10px" : midd
                      ? "13px" : "16px",
                    fontFamily: "DM Sans",
                  }}
                >
                  {heading}
                </div>
                <div
                  style={{
                    color: colorMode === "dark" ? "#AEB6FF" : "#10102D",
                    fontWeight: "400",
                    fontFamily: "DM Sans",
                    fontSize: zerotothreeeightyfive
                      ? "8px"
                      : midd
                        ? "9px"
                        : ninehtonineseventythree
                          ? "12px"
                          : '13px'
                  }}
                >
                  {content}{" "}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
