import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./select-component.css";

const SelectComponent = (props) => {
  const { options, label, onChange, defaultValue } = props;
  const [val, setVal] = useState(defaultValue);

  const handleChange = (event) => {
    setVal(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <TextField
      select
      value={val}
      label={label}
      defaultValue={defaultValue || ""}
      onChange={handleChange}
    >
      {options.map((value) => {
        return (
          <MenuItem key={value.id} value={value.name}>
            {value.name}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectComponent;
