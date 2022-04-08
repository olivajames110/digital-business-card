import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateCardPreviewState } from "../../../../redux/actions/cardPreviewStateActions";

// import './ThemeSelectorItem.css'
const ThemeSelectorItem = (props) => {
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    console.log("change");
    dispatch(
      updateCardPreviewState({
        key: "theme",
        nestedKey: "themeName",
        value: props.themeName,
      })
    );
  };
  return (
    <div className="theme-selector-item-wrapper">
      <FormControlLabel
        value={props.themeName}
        control={<Radio onChange={onChangeHandler} />}
        label={`${props.label} `}
        labelPlacement={props.labelPlacement || "bottom"}
      />
    </div>
  );
};
export default ThemeSelectorItem;
