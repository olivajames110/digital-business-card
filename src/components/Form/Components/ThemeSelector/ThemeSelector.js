import { InputLabel, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  updateFormState,
  updateFormStateStyles,
} from "../../../../redux/actions/formStateActions";
import Textbox from "../../../FormInputs/Textbox";
import FormGroup from "../../../shared/FormGroup/FormGroup";
import RangeSlider from "../../../FormInputs/RangeSlider";
import "./ThemeSelector.css";
import ThemeSelectorItem from "./ThemeSelectorItem";
import Columns from "../../../shared/Columns/Columns";
import ColorPickerFormInput from "../../../FormInputs/ColorPickerFormInput";
import BoxShadow from "./Components/BoxShadow";
import {
  brightStyles,
  cleanStyles,
  darkStyles,
  lightStyles,
} from "./themeStyles";

const ThemeSelector = (props) => {
  const [isCustom, setIsCustom] = useState(null);

  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();

  const themeStyles = (data) => {
    let styles = {};
    let solidStyles = {
      // border: "none",
      opacity: "0.8",
      textShadow: "1px 1px 3px #00000047",
      background: data.background[0],
    };

    styles = { ...solidStyles };

    if (data.background.length > 1) {
      let gradientStyles = {
        background: ` -webkit-linear-gradient(top left, ${data.background[0]}, ${data.background[1]})`,
        background: `-moz-linear-gradient(top left, ${data.background[0]}, ${data.background[1]})`,
        background: `linear-gradient(to bottom right, ${data.background[0]}, ${data.background[1]})`,
      };
      styles = { ...styles, ...gradientStyles };
    }
    return styles;
  };

  const updateThemePreset = (theme) => {
    setIsCustom(false);
    let oldState = { ...formState };
    let updatedTheme = { themeName: theme, themeStyles: {} };
    let newThemeState = { ...oldState, ...updatedTheme };
    if (theme === "custom") {
      setIsCustom(true);
    } else {
      setIsCustom(false);
    }
    dispatch(
      updateFormState({
        key: "themeName",
        value: theme,
      })
    );
  };

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

  const updateCustomThemeStyle = (data) => {
    console.log("color change", data);
    let key = data.keyName;
    let val = data.value;

    dispatch(
      updateFormStateStyles({
        keyName: key,
        value: val,
      })
    );
  };

  return (
    <>
      {/* ---PRE SETS--- */}
      <FormGroup
        title="Card Theme Presets"
        description="Select which theme best fits you."
      >
        <div className="theme-selection-wrapper">
          <div className="theme-selector-items-container">
            <ThemeSelectorItem
              onClick={() =>
                updateRootFormState({
                  keyName: "themeStyles",
                  value: lightStyles,
                })
              }
              label={"Light"}
              keyName={formState.themeName}
              value="light"
              style={themeStyles({
                background: ["#ffffff", "#ffefba"],
              })}
              labelPlacement="bottom"
            />
            <ThemeSelectorItem
              onClick={() =>
                updateRootFormState({
                  keyName: "themeStyles",
                  value: darkStyles,
                })
              }
              label={"Dark"}
              keyName={formState.themeName}
              value="dark"
              style={themeStyles({
                background: ["#1a0d6dd8", "#300437dc"],
              })}
              labelPlacement="bottom"
            />
            <ThemeSelectorItem
              onClick={() =>
                updateRootFormState({
                  keyName: "themeStyles",
                  value: brightStyles,
                })
              }
              label={"Bright"}
              keyName={formState.themeName}
              value="bright"
              style={themeStyles({
                background: ["#e36486e7", "#bf12c2ec"],
              })}
              labelPlacement="bottom"
            />
            <ThemeSelectorItem
              onClick={() =>
                updateRootFormState({
                  keyName: "themeStyles",
                  value: cleanStyles,
                })
              }
              label={"Clean"}
              keyName={formState.themeName}
              value="clean"
              style={themeStyles({
                background: ["#006BA6", "#0496FF"],
              })}
              labelPlacement="bottom"
            />
            <ThemeSelectorItem
              onClick={() => updateThemePreset("custom")}
              label={"Custom"}
              keyName={formState.themeName}
              value="custom"
              style={themeStyles({
                background: [
                  "repeating-conic-gradient(#dbdbdb 0% 25%, transparent 0% 50%) 50% / 15px 15px",
                ],
              })}
              labelPlacement="bottom"
            />
          </div>
        </div>
      </FormGroup>

      {/* ---PAGE BG COLOR--- */}
      <FormGroup id="page-backgound-color" title="Page Background Color">
        <ColorPickerFormInput
          keyName="pageBackgroundColor"
          value={formState.pageBackgroundColor}
          onChange={updateRootFormState}
        />
      </FormGroup>

      {/* ---CARD BG COLOR--- */}
      <FormGroup id="backgound-color" title="Card Background Color">
        <ColorPickerFormInput
          keyName="background"
          value={formState.themeStyles["background"]}
          onChange={updateCustomThemeStyle}
        />
      </FormGroup>

      {/* ---TEXT COLOR--- */}
      <FormGroup
        title="Text Color"
        description="Select which theme best fits you."
      >
        <div className="theme-selection-wrapper">
          <div className="theme-selector-items-container">
            <ThemeSelectorItem
              // onClick={setIsCustom}
              label={"Light"}
              keyName={formState.themeStyles.color}
              value="#ffffff"
              themeName="light"
              style={themeStyles({
                background: ["#ffffff"],
              })}
              labelPlacement="bottom"
              onClick={() =>
                updateCustomThemeStyle({ keyName: "color", value: "#ffffff" })
              }
            />
            <ThemeSelectorItem
              // onClick={setIsCustom}
              label={"Dark"}
              keyName={formState.themeStyles.color}
              value="#333333"
              themeName="dark"
              style={themeStyles({
                background: ["#1c1c1d"],
              })}
              labelPlacement="bottom"
              onClick={() =>
                updateCustomThemeStyle({ keyName: "color", value: "#333333" })
              }
            />
          </div>
        </div>
      </FormGroup>

      {/* ---SOCIAL MEDIA COLOR--- */}
      {(formState.facebook ||
        formState.instagram ||
        formState.twitter ||
        formState.linkedIn ||
        formState.website) && (
        <FormGroup title="Social Media Icon Color">
          <div className="theme-selection-wrapper">
            <div className="theme-selector-items-container">
              <ThemeSelectorItem
                keyName={formState.socialMediaIconColor}
                label={"Light"}
                value="#ffffff"
                // themeName="light"
                style={themeStyles({
                  background: ["#ffffff"],
                })}
                labelPlacement="bottom"
                onClick={() =>
                  updateRootFormState({
                    keyName: "socialMediaIconColor",
                    value: "#ffffff",
                  })
                }
              />
              <ThemeSelectorItem
                keyName={formState.socialMediaIconColor}
                label={"Dark"}
                value="#333333"
                // themeName="dark"
                style={themeStyles({
                  background: ["#333333"],
                })}
                labelPlacement="bottom"
                onClick={() =>
                  updateRootFormState({
                    keyName: "socialMediaIconColor",
                    value: "#333333",
                  })
                }
              />
            </div>
          </div>
        </FormGroup>
      )}

      {/* ---BORDER RADIUS--- */}
      <FormGroup
        title="Rounded Corners"
        description="Select which theme best fits you."
      >
        <Columns>
          <RangeSlider
            onChange={updateCustomThemeStyle}
            value={formState.themeStyles.borderTopLeftRadius}
            keyName={"borderTopLeftRadius"}
            min={0}
            max={50}
            label="Top Left"
          />
          <RangeSlider
            onChange={updateCustomThemeStyle}
            value={formState.themeStyles.borderTopRightRadius}
            keyName={"borderTopRightRadius"}
            min={0}
            max={50}
            label="Top Right"
          />
        </Columns>
        <Columns>
          <RangeSlider
            onChange={updateCustomThemeStyle}
            value={formState.themeStyles.borderBottomLeftRadius}
            keyName={"borderBottomLeftRadius"}
            min={0}
            max={50}
            label="Bottom Left"
          />
          <RangeSlider
            onChange={updateCustomThemeStyle}
            value={formState.themeStyles.borderBottomRightRadius}
            keyName={"borderBottomRightRadius"}
            min={0}
            max={50}
            label="Bottom Right"
          />
        </Columns>
      </FormGroup>

      {/* ---DROP SHADOW--- */}
      <FormGroup
        title="Drop Shadow"
        description="Select which theme best fits you."
      >
        <BoxShadow
          onChange={updateCustomThemeStyle}
          keyName="boxShadow"
          value={formState.themeStyles.BoxShadow}
        />
      </FormGroup>
    </>
  );
};
export default ThemeSelector;
