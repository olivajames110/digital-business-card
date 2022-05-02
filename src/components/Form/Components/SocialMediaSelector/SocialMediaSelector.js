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
        keyName="socials"
        label="Facebook Url"
        nestedKey={"facebook"}
      />
      <SocialMediaSelectorRow
        icon={<Twitter style={{ color: "#1c9cea" }} />}
        keyName="socials"
        label="Twitter URL"
        nestedKey={"twitter"}
      />
      <SocialMediaSelectorRow
        icon={<Instagram style={{ color: "#bd299e" }} />}
        keyName="socials"
        label="Instagram URL"
        nestedKey={"instagram"}
      />
      <SocialMediaSelectorRow
        icon={<LinkedIn style={{ color: "#0270ad" }} />}
        keyName="socials"
        label="LinkedIn URL"
        nestedKey={"linkedIn"}
      />
      <SocialMediaSelectorRow
        icon={<Monitor style={{ color: "#" }} />}
        keyName="socials"
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
        keyName="socials"
        nestedKey={props.nestedKey}
      />
    </div>
  );
};
