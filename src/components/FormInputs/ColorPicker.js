import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import FormInputWraper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/ColorPicker.css";
import Textbox from "./Textbox";

const ColorPicker = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [color, setColor] = useState("");

  const onChangeHandler = (color) => {
    // console.log(color);
    setColor(color);
    props.onChange(color, props.dataType);
  };

  return (
    <>
      <div className="color-picker">
        <div className="color-picker__input">
          <Textbox
            keyName="background"
            label={props.label}
            full
            value={props.value || color}
          />
          <div
            className="hex-color-preview"
            onClick={() => setIsExpanded((s) => !s)}
            style={{
              background: color,
            }}
          ></div>
        </div>
        {isExpanded && (
          <div
            className="color-picker__picker"
            // style={{ height: isExpanded ? "150px" : "0px" }}
          >
            <HexColorPicker color={props.value} onChange={onChangeHandler} />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPicker;
