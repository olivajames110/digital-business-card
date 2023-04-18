import {
  Facebook,
  Instagram,
  LinkedIn,
  Monitor,
  Twitter,
} from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import Textbox from "../../../FormInputs/Textbox";
import FormGroup from "../../../shared/FormGroup/FormGroup";
import "./SocialMediaSelector.css";

const SocialMediaSelector = (props) => {
  return (
    <>
      <SocialMediaSelectorRow
        icon={<Facebook style={{ color: "#1674ea" }} />}
        keyName="facebook"
        label="Facebook Url"
        nestedKey={"facebook"}
      />
      <SocialMediaSelectorRow
        icon={<Twitter style={{ color: "#1c9cea" }} />}
        keyName="twitter"
        label="Twitter URL"
        nestedKey={"twitter"}
      />
      <SocialMediaSelectorRow
        icon={<Instagram style={{ color: "#bd299e" }} />}
        keyName="instagram"
        label="Instagram URL"
        nestedKey={"instagram"}
      />
      <SocialMediaSelectorRow
        icon={<LinkedIn style={{ color: "#0270ad" }} />}
        keyName="linkedIn"
        label="LinkedIn URL"
        nestedKey={"linkedIn"}
      />
      <SocialMediaSelectorRow
        icon={<Monitor style={{ color: "#" }} />}
        keyName="website"
        label="Personal Website URL"
        nestedKey={"website"}
      />
    </>
  );
};

export default SocialMediaSelector;
const SocialMediaSelectorRow = (props) => {
  return (
    <div className="social-media-selector-row">
      <Textbox
        required={false}
        icon={props.icon}
        label={props.label}
        iconColor={props.iconColor}
        keyName={props.keyName}
        nestedKey={props.nestedKey}
      />
    </div>
  );
};
