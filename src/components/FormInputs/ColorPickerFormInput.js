import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorPicker from "./ColorPicker";
import FormInputWraper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/ColorPickerFormInput.css";
import Textbox from "./Textbox";
import Columns from "../shared/Columns/Columns";

const ColorPickerFormInput = (props) => {
  const [backgroundColorType, setBackgroundColorType] = React.useState("solid");
  const [backgroundColorDirection, setBackgroundColorDirection] =
    React.useState("to right");
  const [toColor, setToColor] = useState("");
  const [fromColor, setFromColor] = useState("");

  //Functions
  const onSolidChange = (color) => {
    console.log("Solid Change", color);
    props.onChange({ keyName: props.keyName, value: color });
  };

  const handleGradientChange = (value, dataType) => {
    console.log("Gradient Change");
    let gradient = `linear-gradient(${backgroundColorDirection}, ${toColor}, ${fromColor})`;
    if (dataType === "toColor") {
      gradient = `linear-gradient(${backgroundColorDirection}, ${value}, ${fromColor})`;
      setToColor(value);
    }
    if (dataType === "fromColor") {
      gradient = `linear-gradient(${backgroundColorDirection}, ${toColor}, ${value})`;
      setFromColor(value);
    }
    if (dataType === "direction") {
      gradient = `linear-gradient(${value}, ${toColor}, ${fromColor})`;
      setBackgroundColorDirection(value);
    }
    props.onChange({ keyName: props.keyName, value: gradient });
  };

  //Components
  const gradientColorTypeOptions = (
    <Columns>
      <div className="color-type-options-container">
        <FormInputWraper className="color-picker-input__dropdown">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={backgroundColorType}
            size="small"
            fullWidth
            onChange={(e) => setBackgroundColorType(e.target.value)}
            sx={{ fontSize: ".8rem" }}
          >
            <MenuItem sx={{ fontSize: ".8rem" }} value={"solid"}>
              Solid Background
            </MenuItem>
            <MenuItem sx={{ fontSize: ".8rem" }} value={"Gradient"}>
              Gradient Background
            </MenuItem>
          </Select>
        </FormInputWraper>
      </div>

      <FormInputWraper className="color-picker-input__dropdown">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={backgroundColorDirection}
          size="small"
          fullWidth
          onChange={(e) => handleGradientChange(e.target.value, "direction")}
          sx={{ fontSize: ".8rem" }}
        >
          <MenuItem sx={{ fontSize: ".8rem" }} value={"to bottom"}>
            Top to Bottom
          </MenuItem>
          <MenuItem sx={{ fontSize: ".8rem" }} value={"to right"}>
            Left to Right
          </MenuItem>
          <MenuItem sx={{ fontSize: ".8rem" }} value={"to left top"}>
            Top Left to Bottom Right
          </MenuItem>
        </Select>
      </FormInputWraper>
    </Columns>
  );
  const solidColorTypeOptions = (
    <FormInputWraper className="color-picker-input__dropdown">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={backgroundColorType}
        size="small"
        fullWidth
        onChange={(e) => setBackgroundColorType(e.target.value)}
        sx={{ fontSize: ".8rem" }}
      >
        <MenuItem sx={{ fontSize: ".8rem" }} value={"solid"}>
          Solid Background
        </MenuItem>
        <MenuItem sx={{ fontSize: ".8rem" }} value={"Gradient"}>
          Gradient Background
        </MenuItem>
      </Select>
    </FormInputWraper>
  );

  const solidInput = (
    <ColorPicker
      onChange={onSolidChange}
      label="Color Hex Code"
      value={props.value}
    />
  );
  const gradientInput = (
    <>
      <ColorPicker
        value={toColor}
        onChange={handleGradientChange}
        dataType="toColor"
        label="To Color Hex Code"
      />
      <FormInputWraper className="span">
        <span>to</span>
      </FormInputWraper>

      <ColorPicker
        value={fromColor}
        onChange={handleGradientChange}
        dataType="fromColor"
        label="From Color Hex Code"
      />
    </>
  );
  return (
    <div className="color-picker-form-field">
      {backgroundColorType === "solid"
        ? solidColorTypeOptions
        : gradientColorTypeOptions}
      <div
        className={`inputs-container ${
          backgroundColorType !== "solid" && "grid"
        }`}
      >
        {backgroundColorType === "solid" ? solidInput : gradientInput}
      </div>
    </div>
  );
};

export default ColorPickerFormInput;
