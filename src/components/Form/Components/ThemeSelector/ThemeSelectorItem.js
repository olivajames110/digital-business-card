import { FormControlLabel, Radio } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

// import './ThemeSelectorItem.css'
const ThemeSelectorItem = (props) => {
  const formState = useSelector((state) => state.formState);

  const onClickHandler = () => {
    console.log("change");
    // let oldState = { ...formState };
    // let updatedTheme = { themeName: props.themeName };
    // let newThemeState = { ...oldState, ...updatedTheme };
    props.onClick();
  };
  return (
    <div
      onClick={onClickHandler}
      className={`theme-selector-item-wrapper ${
        props.keyName === props.value && "active"
      }`}
    >
      <div style={props.style} className="theme-selector-item__circle"></div>
      <div className="theme-selector-item__label">{props.label}</div>
    </div>
  );
};
export default ThemeSelectorItem;
