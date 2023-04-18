import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Form.css";

import { clearFormState } from "../../redux/actions/formStateActions";

import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const BusinessCardForm = (props) => {
  // const [currentFormStep, setCurrentFormStep] = useState(1);
  const formState = useSelector((state) => state.formState);
  const mobilePreviewActive = useSelector((state) => state.mobilePreviewActive);
  const isMobile = useSelector((state) => state.isMobile);
  const formStep = useSelector((state) => state.formStep);
  const currentFormStepNumber = useSelector((state) => state.formStep.step);
  const dispatch = useDispatch();
  const handleReset = (theme) => {
    dispatch(clearFormState());
  };

  //Commponents to seperate later

  return (
    <section
      id="card-form-section"
      style={{ justifyContent: isMobile.bool ? "center" : "initial" }}
      className={`${!isMobile.bool && "desktop"}`}
    >
      <div className="card-form-section-inner-wrapper">
        <div id="form-card" className="form-card-outer-wrapper">
          <FormHeader />
          <div className="form-card-content">
            <FormBody />
            {formStep.step <= formStep.stepTitles.length && <FormFooter />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessCardForm;
