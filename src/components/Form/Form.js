import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Form.css";
import Textbox from "../FormInputs/Textbox";

import {
  clearFormState,
  setFormState,
  updateFormState,
} from "../../redux/actions/formStateActions";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";

import { Grid } from "@mui/material";
import FormGroup from "../shared/FormGroup/FormGroup";
import ProgressBar from "./ProgressBar/ProgressBar";
import ImageUpload from "./Components/ImageUpload/ImageUpload";
import SocialMediaSelector from "./Components/SocialMediaSelector/SocialMediaSelector";
import { isMobile } from "react-device-detect";
import { setMobilePreview } from "../../redux/actions/mobilePreviewActions";
import {
  decreaseFormStep,
  increaseFormStep,
} from "../../redux/actions/formStepActions";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const BusinessCardForm = (props) => {
  // const [currentFormStep, setCurrentFormStep] = useState(1);
  const formState = useSelector((state) => state.formState);
  const mobilePreviewActive = useSelector((state) => state.mobilePreviewActive);
  const formStep = useSelector((state) => state.formStep);
  const currentFormStepNumber = useSelector((state) => state.formStep.step);
  const dispatch = useDispatch();
  const handleReset = (theme) => {
    dispatch(clearFormState());
  };

  //Commponents to seperate later

  return (
    <section id="card-form-section" className={`${!isMobile && "desktop"}`}>
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
