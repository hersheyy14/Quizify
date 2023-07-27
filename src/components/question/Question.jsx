import { Box, Typography } from "@mui/material";
import React from "react";
import { htmlDecode } from "../../utils";
import "./question.css";
const Question = (props) => {
  const { questionNumber, question } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" component={"h5"}>
        <Typography variant="span" component={"span"}>
          Q.{questionNumber}
        </Typography>
        &nbsp;
        <Typography variant="span" component={"span"}>
          {htmlDecode(question)}
        </Typography>
      </Typography>
    </Box>
  );
};

export default Question;
