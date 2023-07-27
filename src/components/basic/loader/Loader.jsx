import { Box, CircularProgress } from "@mui/material";
import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <Box className="boxStyles">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
