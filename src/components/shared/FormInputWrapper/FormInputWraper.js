import React from "react";
import "./FormInputWraper.css";
const FormInputWraper = (props) => {
  const title = <div className="form-title">{props.title}</div>;
  return (
    <div className="form-input-wrapper">
      {props.title && title}
      {props.children}
    </div>
  );
};
export default FormInputWraper;
