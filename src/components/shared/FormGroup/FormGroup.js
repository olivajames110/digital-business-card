import React from "react";
import { useSelector } from "react-redux";
import "./FormGroup.css";

const FormGroup = (props) => {
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const formState = useSelector((state) => state.formState);

  return (
    <div style={props.style} className={`form-group-outer-wrapper`}>
      <div className="form-group__title">
        {props.title} {props.isRequired && "*"}
      </div>
      {props.children}
    </div>
  );
};
export default FormGroup;
