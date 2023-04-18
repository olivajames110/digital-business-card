import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInputWrapper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/Textbox.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../redux/actions/formStateActions";
import {
  setCardDirectionBackward,
  setCardDirectionForward,
} from "../../redux/actions/cardDirectionActions";
const Textbox = (props) => {
  const [value, setValue] = useState("");
  const formState = useSelector((state) => state.formState);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let val = event.target.value;
    setValue(val);
    if (props.cardDirectionBack) {
      dispatch(setCardDirectionBackward());
    } else {
      dispatch(setCardDirectionForward());
    }
    dispatch(
      updateFormState({
        key: props.keyName,
        value: val,
      })
    );
  };
  const icon = <div className="icon-wrapper">{props.icon}</div>;

  return (
    <FormInputWrapper>
      <div className="text-box-wrapper">
        {props.icon && icon}
        <TextField
          helperText={props.helperText}
          error={
            !formStepIsValid &&
            props.isRequired &&
            formState[props.keyName] === ""
          }
          required={props.isRequired}
          variant="standard"
          size="small"
          fullWidth
          datatype={props.keyName}
          name={props.keyName}
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          value={formState[props.keyName]}
          style={props.style}
          InputLabelProps={{
            shrink: formState[props.keyName] ? formState[props.keyName] : value,
          }}
          inputProps={props.inputProps}
        />
      </div>
    </FormInputWrapper>
  );
};

export default Textbox;
