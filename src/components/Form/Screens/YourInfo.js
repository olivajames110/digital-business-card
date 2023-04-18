import React, { useEffect, useState } from "react";
import PhoneNumberInput from "../../FormInputs/PhoneNumberInput";
import Textbox from "../../FormInputs/Textbox";
import UrlField from "../../FormInputs/UrlField";
import FormGroup from "../../shared/FormGroup/FormGroup";
import ImageUpload from "../Components/ImageUpload/ImageUpload";

const YourInfo = () => {
  return (
    <>
      <FormGroup
        isRequired
        title="VBC Website Address"
        description="Tell us about yourself."
      >
        <UrlField label="URL Name" keyName="url" />
      </FormGroup>
      <FormGroup title="Your Information" description="Tell us about yourself.">
        <Textbox isRequired label="Name" keyName="name" />
        <Textbox label="Job Role" keyName="job" />
        <PhoneNumberInput />
        {/* <Textbox label="Phone" keyName="phone" /> */}
        <Textbox label="Email" keyName="email" />
        <ImageUpload keyName="imagePersonal" label="Upload Image of Yourself" />
      </FormGroup>
    </>
  );
};

export default YourInfo;
