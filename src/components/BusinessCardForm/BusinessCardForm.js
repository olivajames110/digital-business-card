import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BusinessCardForm.css";
import Textbox from "../FormInputs/Textbox/Textbox";

import {
  clearCardPreviewState,
  setCardPreviewState,
  updateCardPreviewState,
} from "../../redux/actions/cardPreviewStateActions";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
import TwoColumn from "../shared/TwoColumn/TwoColumn";
import { Grid } from "@mui/material";
import FormGroup from "../shared/FormGroup/FormGroup";
import ProgressBar from "./ProgressBar/ProgressBar";
import ImageUpload from "./Components/ImageUpload/ImageUpload";
import SocialMediaSelector from "./Components/SocialMediaSelector/SocialMediaSelector";
import { isMobile } from "react-device-detect";
import { setMobilePreview } from "../../redux/actions/mobilePreviewActions";

const BusinessCardForm = (props) => {
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const cardPreviewState = useSelector((state) => state.cardPreviewState);
  const mobilePreviewActive = useSelector((state) => state.mobilePreviewActive);

  const dispatch = useDispatch();
  const handleReset = (theme) => {
    dispatch(clearCardPreviewState());
  };

  const handleNextStep = () => {
    setCurrentFormStep((s) => s + 1);
  };
  const handlePreviousStep = () => {
    setCurrentFormStep((s) => s - 1);
  };

  const handleInputChange = (key, value) => {
    let newState = { ...cardPreviewState };
    dispatch(setCardPreviewState(newState));
  };

  //Commponents to seperate later
  const backButton = (
    <button
      style={{ visibility: currentFormStep !== 1 ? "visible" : "hidden" }}
      onClick={handlePreviousStep}
      className="ghost"
    >
      Back
    </button>
  );

  const nextButton = (
    <button onClick={handleNextStep} className="gradient">
      <span>Next</span>
      <div className="icon-wrapper">{rightArrow}</div>{" "}
    </button>
  );

  //Steps
  const step1 = (
    <>
      <div className="form__body">
        <FormGroup
          title="Your Information"
          description="Tell us about yourself."
        >
          <Textbox label="Name" keyName="name" />
          <Textbox label="Job Role" keyName="job" />
          <Textbox label="Phone" keyName="phone" />
          <Textbox label="Email" keyName="email" />
          {/* <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" />
          <Textbox label="Email" keyName="email" /> */}
          <ImageUpload keyName="imagePersonal" />
        </FormGroup>
      </div>
    </>
  );
  const step2 = (
    <>
      <SocialMediaSelector />
    </>
  );
  const step3 = (
    <>
      <FormGroup
        title="Company Information"
        description="Tell us about your job."
      >
        <Textbox label="Company Name" keyName="company" />

        <Textbox label="Company Address" keyName="address" nestedKey="street" />

        <Textbox label="Company Website" keyName="webAddressWork" />
        <ImageUpload keyName="imageWork" />
      </FormGroup>
    </>
  );
  const step4 = (
    <FormGroup
      title="Card Theme"
      description="Select which theme best fits you."
    >
      <ThemeSelector handleInputChange={handleInputChange} />
    </FormGroup>
  );
  return (
    <section id="card-form-sectiom">
      <div className="card-form-section-inner-wrapper">
        <div className="form__header">
          <h1>Card Editor</h1>
        </div>
        <div className="form-outer-wrapper">
          <ProgressBar />
          <div className="form">
            <div className="upper-form">
              <div className="form__body">
                {currentFormStep === 1 && step1}
                {currentFormStep === 2 && step2}
                {currentFormStep === 3 && step3}
                {currentFormStep === 4 && step4}
              </div>
            </div>
            <div className="form__footer">
              {backButton}
              <div className="next-button-wrapper">
                {isMobile && (
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessCardForm;

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
