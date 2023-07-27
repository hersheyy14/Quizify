import { Box, Typography } from "@mui/material";
import React from "react";

const ShowMessage = (props) => {
  const { title = "Something went wrong!", message = "Try again" } = props;
  return (
    <Box className="boxStyles">
      <Typography variant="p">{title}</Typography>
      <Typography variant="p">
        <a href="/">{message}</a>
      </Typography>
    </Box>
  );
};

export default ShowMessage;
