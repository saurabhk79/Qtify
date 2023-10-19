import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { fetchGenre } from "../../api/api";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ value, handleChange }) {
  const [genresData, setGenresData] = React.useState([]);

  const generateGenres = async () => {
    const data = await fetchGenre();
    setGenresData(data);
  };

  React.useEffect(() => {
    generateGenres();
  }, []);
  return (
    <Box sx={{ width: "100%" }} marginBottom={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="white"
        >
          <Tab label={"All"} {...a11yProps(0)} />
          {genresData.map((item, idx) => (
            <Tab label={item.label} {...a11yProps(idx++)} key={idx} />
          ))}
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}></CustomTabPanel>

      {genresData.map((_, idx) => (
        <CustomTabPanel value={value} index={idx++} key={idx}></CustomTabPanel>
      ))} */}
    </Box>
  );
}
