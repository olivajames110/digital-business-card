import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import FormInputWraper from "../shared/FormInputWrapper/FormInputWraper";
import { updateFormState } from "../../redux/actions/formStateActions";

const PhoneNumberInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep.step);
  const dispatch = useDispatch();
  const phoneNumInputRef = useRef();

  const removeFormatting = (num) => {
    if (num.length > 1) {
      let fs = num
        .replace(/[{()}]/g, "")
        .replaceAll("-", "")
        .replaceAll(" ", "");
      return fs;
    } else {
      return num;
    }
  };

  const formatPhoneNum = (num) => {
    if (!num) {
      setValue("");
      return;
    }

    let formattedNum;

    if (num.length >= 7) {
      const splitNum = num.split("");
      splitNum.splice(0, 0, "(");
      splitNum.splice(4, 0, ")");
      splitNum.splice(5, 0, " ");
      splitNum.splice(9, 0, "-");
      formattedNum = splitNum.join("");
      setValue(formattedNum);

      return formattedNum;
    }

    if (num.length > 3 && num.length <= 6) {
      const splitNum = num.split("");
      splitNum.splice(0, 0, "(");
      splitNum.splice(4, 0, ")");
      splitNum.splice(5, 0, " ");
      formattedNum = splitNum.join("");
      setValue(formattedNum);

      return formattedNum;
    }
    setValue(num);
    return formattedNum;
  };

  const handleChange = (event) => {
    let val = event.target.value;
    let filtered = removeFormatting(val).split("");
    let lastKeyEntered = filtered[filtered.length - 1];
    console.log(val);
    if (!isNaN(lastKeyEntered)) {
      if (val.length < 15) {
        formatPhoneNum(removeFormatting(val));
        dispatch(
          updateFormState({
            key: "phone",
            value: formatPhoneNum(removeFormatting(val)),
          })
        );
      }
    }
    if (filtered.length === 0) {
      setValue("");
    }
  };

  return (
    <div className="text-box-wrapper">
      <FormInputWraper>
        <TextField
          error={!isValid}
          variant="standard"
          size="small"
          fullWidth
          ref={phoneNumInputRef}
          id="outlined-basic"
          label={"Phone Number"}
          onChange={handleChange}
          value={formState.phone}
          required={props.isRequired}
          style={props.style}
          // onKeyDown={handleChange}

          inputProps={props.inputProps}
        />
      </FormInputWraper>
    </div>
  );
};

export default PhoneNumberInput;
