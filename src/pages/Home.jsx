import { Box, FormControl, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../components/basic/button/Button";
import Loader from "../components/basic/loader/Loader";
import SelectComponent from "../components/basic/select-component/SelectComponent";
import { DIFFICULTY, QUESTION_COUNT, TYPE } from "../constants";
import useAxios from "../customHooks/useAxios";
import "./home.css";
import { DataContext } from "../App";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowMessageComponent from "../components/message-component/ShowMessageComponent";
const getId = (arr, selected) => {
  for (let ele of arr) {
    if (ele.name === selected) {
      return ele.id;
    }
  }
};
const Home = () => {
  const { setUrl } = useContext(DataContext);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(10);
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const { data, error, loading } = useAxios("/api_category.php");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const id = getId(data["trivia_categories"], category);
    let url = `/api.php?amount=${count}&category=${id}&difficulty=${difficulty.toLowerCase()}&type=${type
      .split(" ")[0]
      .toLowerCase()}`;
    setUrl(url);
    navigate("/quiz");
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ShowMessageComponent />;
  }

  return (
    <Box className="boxStyles" mt={5}>
      <FormControl className="form-container" fullWidth>
        <Typography variant="h5" component={"h5"}>
          Select options
        </Typography>
        <SelectComponent
          label="Category"
          options={data["trivia_categories"] || []}
          onChange={(value) => setCategory(value)}
        />
        <SelectComponent
          onChange={(value) => setDifficulty(value)}
          label="Difficulty"
          options={DIFFICULTY}
        />
        <SelectComponent
          onChange={(value) => setType(value)}
          label="Type"
          options={TYPE}
        />
        <SelectComponent
          onChange={(value) => setCount(value)}
          label="Question Count"
          options={QUESTION_COUNT}
        />
        <ButtonComponent onClick={onSubmit} title={"Start Quiz"} />
      </FormControl>
    </Box>
  );
};

export default Home;
