import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@mui/styles";
import { useColorMode } from "@docusaurus/theme-common";
const useStyles = makeStyles({
  root: {
    border: "0.5px solid #ffffff",
    "&:hover": {
      border: "0.5px solid #4057FF",
    },
  },
});
const Cardd = ({ product, minheight }) => {
  const { colorMode, setColorMode } = useColorMode();
  return (

    <div>
      <Grid container spacing={2} style={{ marginLeft: '-72px' }} className="seconditem">
        <Grid item xs={12} sm={6} md={6} sx={{ display: "grid", placeItems: 'center' }} >
          <img src={product.img} width='80%' className="pic" />
        </Grid>

        <Grid item xs={12} sm={6} md={6}   >
          <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }} >
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '14px', color: colorMode === "dark" ? "#ffffffcc" : "#6D7CFF", fontFamily: 'DM Sans', fontWeight: '500' }}>
              <div style={{ fontSize: "16px" }}>
                <ReactMarkdown children={product.at} className="text"></ReactMarkdown>
              </div>
            </Typography>
            <Typography variant="h7" sx={{ fontSize: '14px', color: colorMode === "dark" ? "#ffffffcc" : "black" }}>
              <div style={{ color: colorMode === "dark" ? "#AEB6FF" : "#10102D" }} ><ReactMarkdown children={product.desc} className="text" /></div>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cardd;
