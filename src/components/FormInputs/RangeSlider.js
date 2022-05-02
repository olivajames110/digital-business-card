import React, { useEffect, useRef, useState } from "react";
import { Slider, TextField } from "@mui/material";
import FormInputWrapper from "../shared/FormInputWrapper/FormInputWraper";
import "./styles/RangeSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { updateformState } from "../../redux/actions/formStateActions";

const RangeSlider = (props) => {
  const [isFocused, setIsFocused] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    let val = event.target.value;
    props.onChange({ keyName: props.keyName, value: val });
  };
  const handleIncrement = () => {
    let newVal = (props.value || 0) + 1;
    props.onChange({ keyName: props.keyName, value: newVal });
  };
  const handleDecrement = () => {
    if (props.value > 0) {
      let newVal = (props.value || 0) - 1;
      props.onChange({ keyName: props.keyName, value: newVal });
    }
  };
  const buttons = (
    <div
      style={{ opacity: isFocused ? "1" : "0" }}
      className="slider__value_buttons"
    >
      <div className="button-container">
        <button
          onClick={handleIncrement}
          type={"button"}
          className="counter-button"
        >
          {upArrow}
        </button>
        <button
          onClick={handleDecrement}
          type={"button"}
          className="counter-button"
        >
          {downArrow}
        </button>
      </div>
    </div>
  );

  return (
    <FormInputWrapper>
      <div
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className="slider-wrapper"
      >
        <div className="label">{props.label}</div>
        <div className="slider">
          <div className="slider__value">
            <div className="value">
              <span>
                {props.valueLabel ? props.valueLabel : props.value || 0}
              </span>
              <span>{!props.hideSuffix && "px"}</span>
            </div>
            {buttons}
            {/* {isFocused && buttons} */}
          </div>
          <div className="slider_range">
            <Slider
              aria-label="Volume"
              error={!isValid}
              size="small"
              fullWidth
              defaultValue={0}
              valueLabelDisplay="auto"
              required={props.required}
              value={props.value || 0}
              onChange={onChangeHandler}
              min={props.min}
              max={props.max}
            />
          </div>
        </div>
      </div>
    </FormInputWrapper>
  );
};

export default RangeSlider;
const upArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
  </svg>
);
const downArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
  </svg>
);
