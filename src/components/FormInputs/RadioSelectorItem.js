import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

// import './RadioSelectorItem.css'
const RadioSelectorItem = (props) => {
  return (
    <div className="radio-selector-item-wrapper">
      <FormControlLabel
        value={props.value}
        control={<Radio />}
        label={`${props.label} `}
        labelPlacement={props.labelPlacement || "bottom"}
      />
    </div>
  );
};
export default RadioSelectorItem;
