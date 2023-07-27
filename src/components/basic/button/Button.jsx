import React from "react";
import { Button } from "@mui/material";
import "./button.css";
import { htmlDecode } from "../../../utils";

const ButtonComponent = (props) => {
  const { title, onClick, variant = "contained", className, disabled } = props;
  return (
    <Button
      className={className}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {htmlDecode(title)}
    </Button>
  );
};

export default ButtonComponent;
