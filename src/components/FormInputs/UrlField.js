import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInputWrapper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/Textbox.css";
import "./styles/urlField.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../redux/actions/formStateActions";
import { useFirebase } from "../../firebase";
import {
  setFormStepInvalid,
  setFormStepValid,
} from "../../redux/actions/formStepActions";
const UrlField = (props) => {
  const [value, setValue] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [urlName, setUrlName] = useState(null);
  const [nameIsValid, setNameIsValid] = useState(false);
  const formState = useSelector((state) => state.formState);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const formStep = useSelector((state) => state.formStep.step);
  const { isLoading, data, checkUser } = useFirebase();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let val = event.target.value.replace(/\s+/g, "-").toLowerCase();

    dispatch(
      updateFormState({
        key: props.keyName,
        value: val,
      })
    );
    setNameIsValid(true);
    // setNameIsValid(true);

    // checkUser(val);
  };

  useEffect(() => {
    if (formState.url !== "") {
      checkUser(formState.url);
      console.log("CHECKING", data);
      if (data) {
        console.log("EXISTS-------", data);
        dispatch(setFormStepInvalid());
        setNameIsValid(false);
      } else {
        console.log("DOES NOT EXIST-------", data);
        dispatch(setFormStepValid());
        setNameIsValid(true);
      }
    }
  }, [formStep, formState.url]);
  return (
    <FormInputWrapper isRequired className="url-field">
      <div className="text-box-wrapper">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
          className="url-example-container"
        >
          <span style={{ marginTop: "10px" }}>oakcreatives.com</span>
          <span style={{ margin: "10px 4px 0px" }}>/</span>

          <TextField
            sx={{ marginTop: "-16px" }}
            helperText={
              (!formStepIsValid &&
                formState.url === "" &&
                "Please choose a url name") ||
              (formState.url !== "" &&
                data &&
                !isLoading &&
                "Sorry this name is already taken.")
            }
            required={true}
            variant="standard"
            size="small"
            fullWidth
            datatype={props.keyName}
            name={props.keyName}
            id="outlined-basic"
            label={"Url Name"}
            onChange={handleChange}
            value={formState.url}
            style={props.style}
            InputLabelProps={{ shrink: formState.url ? formState.url : value }}
            inputProps={props.inputProps}
            error={!formStepIsValid && formState.url === ""}
          />
        </div>
        {formState.url.length > 0 && (
          <div className={`validation-icon ${!data ? "valid" : "invalid"}`}>
            {!data ? check : cross}
          </div>
        )}
      </div>
    </FormInputWrapper>
  );
};

export default UrlField;
const check = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
  </svg>
);
const cross = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
