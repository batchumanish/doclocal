import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import data from "/src/components/basics.json";
import PluginsCard from "./PluginsCard";
import PluginsCategories from "./PluginsCategories";
import PluginsCategoriesMobile from "./PluginsCategoriesMobile";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputBase from "@mui/material/InputBase";

const PluginsPage = () => {
  const isLessThan900px = useMediaQuery("(max-width: 715px)");

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clearSearch = () => {
    setValue("");
  };
  //////////////
  const [searchFromChild, setSearchFromChild] = useState("All");

  const handleDataFromChild = (data) => {
    setSearchFromChild(data);
  };

  const [acdata, setAcdata] = useState([...data?.pluginsPage]);

  useEffect(() => {
    let finalData = [];
    let pluginsData = [...data?.pluginsPage];

    if (searchFromChild.includes("All")) {
      finalData = [...pluginsData];
    } else {
      finalData = pluginsData.filter((plugin) =>
        plugin?.categories?.some((category) =>
          searchFromChild.includes(category)
        )
      );
    }
    //search
    if (value) {
      finalData = finalData.filter(
        (plugin) =>
          plugin.name.toLowerCase().includes(value.toLowerCase()) ||
          plugin.description.toLowerCase().includes(value.toLowerCase())
      );
    }

    setAcdata(finalData);
  }, [searchFromChild, value]);

  return (
    <>
      <Grid className="pluginImg">
        <img src={data.pluginImg} alt="Plugin Image" />
      </Grid>

      <Box
        className="plugSearch"
        sx={{ margin: "25px 0 25px 0",display:'grid',placeItems:'start' }}
      >
        <InputBase
          data-testid="searchInputBase"
          name="noAutoFill"
          id="search-jha"
          placeholder="Search"
          className="inputSearch"
          // fullWidth
          sx={{
            color: "#CBCBD7",
            border: "1px solid #303067",
            width: isLessThan900px ? "100%" : null,
            height: "40px",
            "&::placeholder": {
              textAlign: "center", // Center the placeholder text
            }
          }}
          value={value || ""}
          inputProps={{
            autoComplete: "off",
          }}
          onChange={onChange}
          startAdornment={
            <Grid sx={{ padding:'2px 0 0 5px' }}>
              <img src={data.search} type="static" alt="searchIcon" />
            </Grid>
          }
          endAdornment={
            <Grid sx={{ paddingRight: "5px" }}>
              {value ? (
                <Box sx={{ cursor: "pointer" }}>
                  <img
                    src={data.closeIcon}
                    type="pointer"
                    alt="closeIcon"
                    onClick={clearSearch}
                  />
                </Box>
              ) : (
                ""
              )}
            </Grid>
          }
        />
      </Box>

      <Grid container className="pluginContainer">
        {isLessThan900px ? (
          <Box sx={{width:'100%'}}>
            <Box marginBottom="15px" sx={{ width: "100%" }}>
              <PluginsCategoriesMobile sendDataToParent={handleDataFromChild} />
            </Box>

            <Grid container spacing={2}>
              {acdata.length == 0 ? (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      height: "161px",
                      width: "100%",
                      padding: "20px",
                      borderRadius: "8px",
                      display: "flex",
                      margin: "16px 0 0 16px",
                    }}
                  >
                    No Records Found
                  </Box>
                </Grid>
              ) : (
                Array.from(acdata).map((exec) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <PluginsCard
                      pluginsImage={exec.img}
                      usersImage={exec.users}
                      githubImage={exec.github}
                      name={exec.name}
                      description={exec.description}
                      goto={exec.goto}
                      git={exec.git}
                      type={exec.type}
                    />
                  </Grid>
                ))
              )}
            </Grid>
            {/* </Grid> */}
          </Box>
        ) : (
          <>
            <Grid item xs={10} sx={{ paddingRight: "8%" }}>
              <Grid container spacing={2}>
                {acdata.length == 0 ? (
                  <Box
                    sx={{
                      height: "161px",
                      width: "100%",
                      padding: "20px",
                      borderRadius: "8px",
                      display: "flex",
                      margin: "16px 0 0 16px",
                    }}
                  >
                    No Records Found
                  </Box>
                ) : (
                  Array.from(acdata).map((exec) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <PluginsCard
                        pluginsImage={exec.img}
                        usersImage={exec.users}
                        githubImage={exec.github}
                        name={exec.name}
                        description={exec.description}
                        goto={exec.goto}
                        git={exec.git}
                        type={exec.type}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <PluginsCategories sendDataToParent={handleDataFromChild} />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default PluginsPage;
