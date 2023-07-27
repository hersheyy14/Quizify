import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

const Result = () => {
  const { score, questionsCount, setScore } = useContext(DataContext);
  useEffect(() => {
    return () => setScore(0);
  }, []);
  return (
    <Box className="boxStyles result-container">
      <Typography variant="h3">
        Your Score is {score} / {questionsCount}
      </Typography>
      <Box mt={3}>
        <Link to={"/"}>
          <Typography variant="p">Play Again</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Result;
