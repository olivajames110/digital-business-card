import React from "react";
import Textbox from "../../FormInputs/Textbox";
import FormGroup from "../../shared/FormGroup/FormGroup";
import ImageUpload from "../Components/ImageUpload/ImageUpload";

const WorkInfo = () => {
  return (
    <FormGroup
      title="Company Information"
      description="Tell us about your job."
    >
      <Textbox label="Company Name" keyName="company" />

      <Textbox label="Company Address" keyName="address" nestedKey="street" />

      <Textbox label="Company Website" keyName="webAddressWork" />
      <ImageUpload keyName="imageWork" />
    </FormGroup>
  );
};

export default WorkInfo;
