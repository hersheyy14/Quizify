import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import ButtonComponent from "../basic/button/Button";
import "./answer-options.css";

const AnswerOptions = (props) => {
  const [clicked, setIsClicked] = useState(-1);
  const { options, onSelect } = props;

  const clickHandler = (index, selectedValue) => {
    setIsClicked(index);
    if (onSelect) onSelect(selectedValue);
  };
  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      {options.map((answer, index) => {
        if (index % 2 === 0)
          return (
            <Box
              className={`option-box boxStyles-${index}`}
              key={index}
              sx={{ mt: 2 }}
            >
              <ButtonComponent
                className={`answer-buttons ${
                  clicked !== -1 && clicked === index
                    ? "selected"
                    : "not-selected"
                }`}
                disabled={clicked !== -1}
                onClick={() => clickHandler(index, options[index])}
                variant="outlined"
                title={options[index]}
              />
              <ButtonComponent
                className={`answer-buttons ${
                  clicked !== -1 && clicked === index + 1
                    ? "selected"
                    : "not-selected"
                }`}
                disabled={clicked !== -1}
                onClick={() => clickHandler(index + 1, options[index + 1])}
                variant="outlined"
                title={options[index + 1]}
              />
            </Box>
          );
      })}
    </Box>
  );
};

export default AnswerOptions;
