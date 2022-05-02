import React from "react";
import Textbox from "../../FormInputs/Textbox";
import FormGroup from "../../shared/FormGroup/FormGroup";
import ImageUpload from "../Components/ImageUpload/ImageUpload";
import SocialMediaSelector from "../Components/SocialMediaSelector/SocialMediaSelector";

const SocialMedia = () => {
  return (
    <FormGroup title="Social Media" optional>
      <SocialMediaSelector />
    </FormGroup>
  );
};

export default SocialMedia;
