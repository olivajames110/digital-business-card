import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "../../firebase";
import { checkInvalidInputs } from "../../helpers/checkInvalidInputs";
import { setFormState } from "../../redux/actions/formStateActions";
import {
  decreaseFormStep,
  increaseFormStep,
  setFormStepInvalid,
  setFormStepValid,
} from "../../redux/actions/formStepActions";
import { setMobilePreview } from "../../redux/actions/mobilePreviewActions";

import "./styles/FormFooter.css";

const FormFooter = (props) => {
  //Database

  const [invalidQuestions, setInvalidQuestions] = useState([]);
  const { isLoading, createNewUser, getUser } = useFirebase();

  //Steps
  const formState = useSelector((state) => state.formState);
  const isMobile = useSelector((state) => state.isMobile);
  const currentFormStepNumber = useSelector((state) => state.formStep.step);
  const formStep = useSelector((state) => state.formStep);
  const dispatch = useDispatch();

  const handleNextStep = (e) => {
    e.currentTarget.blur();
    let invalidQs = [];
    const requiredInputs = document.querySelectorAll("input[required]");
    requiredInputs.forEach((i) => {
      if (i.value === "") {
        console.log("EMPTY", i);
        invalidQs.push(i);
      }
    });

    let iv = checkInvalidInputs();
    ////
    console.log("invalidQuestions", iv);
    if (iv.length === 0) {
      document.querySelector("#root").scrollTo(0, 0);
      setInvalidQuestions([]);
      setTimeout(() => {
        if (formStep.step === formStep.stepTitles.length) {
          console.log("Submit");

          createNewUser();
        }
        dispatch(increaseFormStep());
      }, 200);
    } else {
      dispatch(setFormStepInvalid());
    }
  };

  const handlePreviousStep = (e) => {
    e.currentTarget.blur();
    document.querySelector("#root").scrollTo(0, 0);
    // dispatch(setFormStepValid());

    dispatch(decreaseFormStep());

    // window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Back");
  };

  const backButton = (
    <button
      style={{ visibility: currentFormStepNumber !== 1 ? "visible" : "hidden" }}
      onClick={handlePreviousStep}
      className="ghost"
    >
      <span>Back</span>
    </button>
  );

  const nextButton = (
    <button onClick={handleNextStep} className="gradient">
      <span>
        {formStep.step === formStep.stepTitles.length
          ? "Generate Card"
          : "Next"}
      </span>
      {formStep.step !== formStep.stepTitles.length && (
        <div className="icon-wrapper">{rightArrow}</div>
      )}
    </button>
  );

  return (
    <div className="form__footer">
      {backButton}
      <div className="next-button-wrapper">
        {isMobile.bool && (
          <button
            onClick={() => dispatch(setMobilePreview(true))}
            className="preview-button-container"
          >
            <div className="preview-icon-wrapper">{eye}</div>
            <span>{"Preview"}</span>
          </button>
        )}
        {nextButton}
      </div>
    </div>
  );
};

export default FormFooter;
const rightArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
  </svg>
);
const eye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
