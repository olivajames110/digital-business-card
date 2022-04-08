import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInputWrapper from "../../shared/FormInputWrapper/FormInputWraper";
import "./Textbox.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCardPreviewState } from "../../../redux/actions/cardPreviewStateActions";
const Textbox = (props) => {
  const [value, setValue] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let val = event.target.value;
    if (val === "") {
      console.log("Not Valid");
      setIsValid(false);
    } else {
      console.log("Valid");
      setIsValid(true);
      setValue(val);
    }
    if (props.nestedKey) {
      dispatch(
        updateCardPreviewState({
          key: props.keyName,
          nestedKey: props.nestedKey,
          value: val,
        })
      );
    } else {
      dispatch(
        updateCardPreviewState({
          key: props.keyName,
          value: val,
        })
      );
    }
  };
  const icon = <div className="icon-wrapper">{props.icon}</div>;

  return (
    <FormInputWrapper>
      <div className="text-box-wrapper">
        {props.icon && icon}
        <TextField
          error={!isValid}
          variant="outlined"
          size="small"
          fullWidth
          // focused={props.value ? props.value : value}
          // onBlur={checkIfValid}
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          value={props.value}
          required={props.required}
          InputLabelProps={{ shrink: props.value ? props.value : value }}
          InputProps={props.InputProps}
        />
      </div>
    </FormInputWrapper>
  );
};

export default Textbox;
