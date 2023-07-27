import { Box, Typography } from "@mui/material";
import React from "react";
import AnswerOptions from "../components/answer-options/AnswerOptions";
import Question from "../components/question/Question";
import useAxios from "../customHooks/useAxios";
import { DataContext } from "../App";
import { useContext } from "react";
import Loader from "../components/basic/loader/Loader";
import ShowMessageComponent from "../components/message-component/ShowMessageComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Quiz = () => {
  const { url, score, setScore, setQuestionsCount } = useContext(DataContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { data, error, loading } = useAxios(url);
  const navigate = useNavigate();
  useEffect(() => {
    setQuestionsCount(data?.results.length);
  }, [data?.results]);
  const onAnswerSelect = (selectedValue) => {
    if (selectedValue === data?.results[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (data?.results.length === currentQuestion + 1) {
        navigate("/result");
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ShowMessageComponent />;
  }

  if (data?.results?.length === 0) {
    return (
      <ShowMessageComponent
        title="Sorry, No questions available for the selected options."
        message="Please select a different set."
      />
    );
  }
  return (
    <Box className="boxStyles">
      <Typography>
        {currentQuestion + 1}/{data?.results.length}
      </Typography>
      <Question
        questionNumber={currentQuestion + 1}
        question={data?.results[currentQuestion].question.toString()}
      />
      <AnswerOptions
        key={currentQuestion}
        onSelect={onAnswerSelect}
        options={[
          data?.results[currentQuestion].correct_answer,
          ...data?.results[currentQuestion].incorrect_answers,
        ]}
      />
    </Box>
  );
};

export default Quiz;
