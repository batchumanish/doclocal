import React from "react";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import Mainpagecard from "/src/components/Mainpagecard";


export default function Mainpagebutton() {
  const history = useHistory();
  const handleClick = (newlink) => {
    history.push(newlink);
  };

  const arr = [
    {
      heading: "Quick Start",
      content:
        "Go from installation/setup to running your first workflow in less than two minutes.",
      img: "/img/landingV2/quickstart.svg",
      imgdark: "/img/sidebarAssets/vector_dark.svg",
      url: "/docs/get-started/quick-start",
      png: "/img/landingV2/quickstart.png",
      alt: "quickstartImage"
    },
    {
      heading: "Concepts",
      content:
        "Learn how to apply Covalent in real-world research applications. The tutorials range in complexity from beginner to advanced and span a variety of topic areas.",
      img: "/img/landingV2/concept.svg",
      imgdark: "/img/sidebarAssets/item6_dark.svg",
      url: "/docs/user-documentation/concepts/concepts-index",
      png: "/img/landingV2/concept.png",
      alt: 'conceptsImage'
    },
    {
      heading: "Tutorials",
      content:
        "Install Covalent, start a local server, and run an example workflow in 10 minutes.",
      img: "/img/landingV2/tutorials.svg",
      imgdark: "/img/sidebarAssets/item7_dark.svg",
      url: "/docs/user-documentation/tutorials",
      png: "/img/landingV2/tutorials.png",
      alt: 'tutorialsImage'
    },
    {
      heading: "API reference",
      content:
        "Covalent's classes, functions, and modules. Parameters and attributes of Workflows, Tasks, and Executors.",
      img: "/img/landingV2/apiref.svg",
      imgdark: "/img/sidebarAssets/item4.svg",
      url: "/docs/user-documentation/api-reference/cov-api",
      png: "/img/landingV2/apiref.png",
      alt: 'apirefImage'
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        {Array.from(arr).map((product) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            onClick={() => handleClick(product.url)}
          >
            <Mainpagecard
              heading={product.heading}
              content={product.content}
              img={product.img}
              imgdark={product.imgdark}
              url={product.url}
              png={product.png}
              alt={product?.alt}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
