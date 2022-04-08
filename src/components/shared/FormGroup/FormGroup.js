import React from "react";
import "./FormGroup.css";
const FormGroup = (props) => {
  return (
    <div className="form-group-wrapper">
      <div className="form-group__header">
        <h2 className={props.optional && "optional"}>{props.title}</h2>
      </div>
      {props.description && (
        <div className="form-group__description">{props.description}</div>
      )}
      {props.children}
    </div>
  );
};
export default FormGroup;
