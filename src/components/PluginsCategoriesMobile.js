import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PluginsCategoriesMobile = ({ sendDataToParent }) => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  // const [searchKey, setSearchKey] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const handleCategoryClick = (category) => {
    setExpanded((prev) => !prev);
    if (selectedCategories.includes("All")) {
      selectedCategories.splice(0, 1);
    }
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const categories = [
    "Classical",
    "Quantum",
    "Cloud Providers",
    "HPC",
    "High Compute",
    "Low Compute",
    "On-Prem",
    "Serverless",
    "Data Storage",
  ];

  useEffect(() => {
    if (selectedCategories.length == 0) {
      setSelectedCategories(["All"]);
    }
    sendDataToParent(selectedCategories);
  }, [selectedCategories]);

  return (
    <Accordion
      sx={{
        background: "transparent",
        // width: "270px",
        width: "100%",
        border: "1px solid #303067",
        borderRadius: "24px !important",
      }}
      expanded={expanded}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="category-content"
        id="category-header"
      >
        <Typography
          sx={{ color: "white", fontFamily: "DM Sans", fontSize: "14px" }}
        >
          Select a Category
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {categories?.map((category) => (
            <Box
              key={category}
              sx={{
                marginBottom: "20px",
                // width: "200px",
                width: "100%",
                backgroundColor: selectedCategories.includes(category)
                  ? "#303067"
                  : null,
                cursor: "pointer",
                borderRadius: "5px",
                color: "#CBCBD7",
                paddingLeft: "7px",
                marginLeft: "-7px",
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default PluginsCategoriesMobile;
