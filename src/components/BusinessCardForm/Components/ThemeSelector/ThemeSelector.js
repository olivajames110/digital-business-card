import { InputLabel, RadioGroup } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FormGroup from "../../../shared/FormGroup/FormGroup";

import "./ThemeSelector.css";
import ThemeSelectorItem from "./ThemeSelectorItem";
const ThemeSelector = (props) => {
  const cardPreviewState = useSelector((state) => state.cardPreviewState);
  return (
    <div className="theme-selection-wrapper">
      <RadioGroup
        aria-labelledby="theme-selection-buttons-group-label"
        defaultValue={cardPreviewState.theme.themeName}
        name="radio-buttons-group"
        className="theme-selector-items-container"
      >
        <ThemeSelectorItem
          label={"Light"}
          themeName="light"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        />
        <ThemeSelectorItem
          label={"Dark"}
          themeName="dark"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        />
        {/* <ThemeSelectorItem
          label={"Dark Alt"}
          themeName="dark-alt"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        /> */}
        <ThemeSelectorItem
          label={"Bright"}
          themeName="bright"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        />
        <ThemeSelectorItem
          label={"Clean"}
          themeName="clean"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        />
        {/* <ThemeSelectorItem
          label={"Modern"}
          themeName="modern"
          labelPlacement="bottom"
          onChange={props.handleInputChange}
        /> */}
      </RadioGroup>
    </div>
  );
};
export default ThemeSelector;
