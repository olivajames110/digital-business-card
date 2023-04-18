import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../redux/actions/formStateActions";
import Textbox from "../../FormInputs/Textbox";
import FormGroup from "../../shared/FormGroup/FormGroup";
import ImageUpload from "../Components/ImageUpload/ImageUpload";
import ThemeSelectorItem from "../Components/ThemeSelector/ThemeSelectorItem";
import "../Components/ThemeSelector/ThemeSelector.css";
const WorkInfo = () => {
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const updateRootFormState = (data) => {
    let key = data.keyName;
    let val = data.value;
    console.log(data);
    dispatch(
      updateFormState({
        key: key,
        value: val,
      })
    );
  };
  return (
    <>
      <FormGroup
        title="Company Information"
        description="Tell us about your job."
      >
        <Textbox label="Company Name" keyName="company" />

        <Textbox
          label="Company Address"
          keyName="companyAddress"
          nestedKey="street"
        />

        <Textbox
          label="Company Website"
          cardDirectionBack
          keyName="webAddressWork"
        />
        <ImageUpload
          keyName="imageWork"
          cardDirectionBack
          label="Upload Work Logo"
        />
      </FormGroup>
      {formState.imageWork !== "" && (
        <FormGroup title="Change Logo Color">
          <div className="theme-selection-wrapper">
            <div className="theme-selector-items-container">
              <ThemeSelectorItem
                // onClick={setIsCustom}
                label={"Light"}
                keyName={formState.imageWorkColor}
                value="white"
                style={{ background: "#ffffff" }}
                labelPlacement="bottom"
                onClick={() =>
                  updateRootFormState({
                    keyName: "imageWorkColor",
                    value: "white",
                  })
                }
              />
              <ThemeSelectorItem
                // onClick={setIsCustom}
                label={"Dark"}
                keyName={formState.imageWorkColor}
                value="black"
                style={{ background: "#1c1c1d" }}
                labelPlacement="bottom"
                onClick={() =>
                  updateRootFormState({
                    keyName: "imageWorkColor",
                    value: "black",
                  })
                }
              />
              {formState.imageWorkColor === ("white" || "black") && (
                <ThemeSelectorItem
                  // onClick={setIsCustom}
                  label={"Custom"}
                  keyName={formState.imageWorkColor}
                  value="null"
                  style={{
                    background: [
                      "repeating-conic-gradient(#dbdbdb 0% 25%, transparent 0% 50%) 50% / 15px 15px",
                    ],
                  }}
                  labelPlacement="bottom"
                  onClick={() =>
                    updateRootFormState({
                      keyName: "imageWorkColor",
                      value: "null",
                    })
                  }
                />
              )}
            </div>
          </div>
        </FormGroup>
      )}
    </>
  );
};

export default WorkInfo;
