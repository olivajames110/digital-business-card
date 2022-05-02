import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInputWrapper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/Textbox.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../redux/actions/formStateActions";
const UrlField = (props) => {
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
        updateFormState({
          key: props.keyName,
          nestedKey: props.nestedKey,
          value: val,
        })
      );
    } else {
      dispatch(
        updateFormState({
          key: props.keyName,
          value: val,
        })
      );
    }
  };

  const [urlName, setUrlName] = useState(null);
  useEffect(() => {
    const url = window.location.host;
    setUrlName(url);
  }, []);
  return (
    <FormInputWrapper>
      <div className="text-box-wrapper">
        <div
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          className="url-example-container"
        >
          <span>oakcreatives.com</span>
          <span style={{ margin: "0 5px" }}>/</span>

          <TextField
            helperText={props.helperText}
            required={props.isRequired}
            variant="outlined"
            size="small"
            fullWidth
            datatype={props.keyName}
            name={props.keyName}
            id="outlined-basic"
            label={props.label}
            onChange={handleChange}
            value={props.value}
            style={props.style}
            InputLabelProps={{ shrink: props.value ? props.value : value }}
            inputProps={props.inputProps}
          />
        </div>
      </div>
    </FormInputWrapper>
  );
};

export default UrlField;
