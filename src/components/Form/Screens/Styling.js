import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormState } from "../../../redux/actions/formStateActions";
import Textbox from "../../FormInputs/Textbox";
import FormGroup from "../../shared/FormGroup/FormGroup";
import ImageUpload from "../Components/ImageUpload/ImageUpload";
import StylingSelector from "../Components/SocialMediaSelector/SocialMediaSelector";
import ThemeSelector from "../Components/ThemeSelector/ThemeSelector";

const Styling = () => {
  const currentFormStepNumber = useSelector((state) => state.formStep.step);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    let newState = { ...formState };
    dispatch(setFormState(newState));
  };
  return (
    <>
      {/* <FormGroup title="Card Theme" optional></FormGroup> */}
      <ThemeSelector handleInputChange={handleInputChange} />
    </>
  );
};

export default Styling;
