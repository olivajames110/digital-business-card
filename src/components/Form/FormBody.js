import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormState } from "../../redux/actions/formStateActions";
import Textbox from "../FormInputs/Textbox";
import FormGroup from "../shared/FormGroup/FormGroup";
import ImageUpload from "./Components/ImageUpload/ImageUpload";
import SocialMediaSelector from "./Components/SocialMediaSelector/SocialMediaSelector";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
import SocialMedia from "./Screens/SocialMedia";
import Styling from "./Screens/Styling";
import Success from "./Screens/Success";
import WorkInfo from "./Screens/WorkInfo";
import YourInfo from "./Screens/YourInfo";
import "./styles/FormBody.css";

const FormBody = (props) => {
  //Steps
  const currentFormStepNumber = useSelector((state) => state.formStep.step);
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    let newState = { ...formState };
    dispatch(setFormState(newState));
  };
  const screens = [
    <YourInfo />,
    <WorkInfo />,
    <SocialMedia />,
    <Styling />,
    <Success />,
  ];
  return (
    <div className="form__body">
      {screens.map((screen, i) => currentFormStepNumber === i + 1 && screen)}
    </div>
  );
};

export default FormBody;
