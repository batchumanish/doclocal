import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PluginsCategories = ({ sendDataToParent }) => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleCategoryClick = (category) => {
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
    <>
      <Box sx={{ width: "130px" }}>
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: "400",
            marginBottom: "20px",
          }}
        >
          CATEGORIES
        </Typography>

        {categories.map((category) => (
          <Box
            key={category}
            sx={{
              fontFamily: "DM Sans",
              color: "#CBCBD7",
              backgroundColor: selectedCategories.includes(category)
                ? "#303067"
                : null,
              fontWeight: "400",
              fontSize: "14px",
              marginBottom: "20px",
              cursor: "pointer",
              borderRadius: "3px",
              paddingLeft: "7px",
              marginLeft: "-7px",
            }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PluginsCategories;
