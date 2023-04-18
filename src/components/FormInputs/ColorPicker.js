import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import FormInputWraper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/ColorPicker.css";
import Textbox from "./Textbox";

const ColorPicker = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [color, setColor] = useState("");

  const onChangeHandler = (color) => {
    console.log("color", color);
    setColor(color);
    props.onChange(color, props.dataType);
  };

  const expandedContent = (
    <div className="expanded-content">
      <FormInputWraper>
        <div className="color-picker__input">
          <span>#</span>
          <TextField
            keyName="background"
            variant="standard"
            placeholder={"Hex Color"}
            fullWidth
            onChange={(e) => onChangeHandler(e.target.value)}
            value={`${props.value.replace(/^#+/i, "") || color}`}
          />
        </div>
      </FormInputWraper>
      <div className="color-picker__picker">
        <HexColorPicker color={props.value} onChange={onChangeHandler} />
      </div>
    </div>
  );

  return (
    <>
      <div className="color-picker">
        <div className={`preview  ${isExpanded && "expanded"}`}>
          <div
            className={`hex-color-preview`}
            onClick={() => setIsExpanded((s) => !s)}
            style={{
              background: color,
            }}
          ></div>
          <div
            onClick={() => setIsExpanded((s) => !s)}
            className={`expand-toggle`}
          >
            {upArrow}
          </div>
        </div>
        {isExpanded && expandedContent}
      </div>
    </>
  );
};

export default ColorPicker;

const upArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
  </svg>
);
