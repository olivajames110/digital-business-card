import React, { useEffect, useState } from "react";
import RangeSlider from "../../../../FormInputs/RangeSlider";
import Columns from "../../../../shared/Columns/Columns";
import FormGroup from "../../../../shared/FormGroup/FormGroup";
import ThemeSelectorItem from "../ThemeSelectorItem";

const BoxShadow = (props) => {
  const [x, setX] = useState({ keyName: props.keyName, value: -5 });
  const [y, setY] = useState({ keyName: props.keyName, value: 3 });
  const [blur, setBlur] = useState({ keyName: props.keyName, value: 3 });
  const [size, setSize] = useState({ keyName: props.keyName, value: 3 });
  const [opacity, setOpacity] = useState({ keyName: props.keyName, value: 10 });
  const [color, setColor] = useState({ keyName: props.keyName, value: 1 });

  useEffect(() => {
    console.log(color);
    let colorVal = color.keyName === "dark" ? "0,0,0" : "255,255,255";
    let boxShadow = `${x.value}px ${y.value}px ${blur.value}px ${
      size.value
    }px  rgba(${colorVal},${(1 * opacity.value) / 100})`;
    props.onChange({ keyName: props.keyName, value: boxShadow });
  }, [x, y, blur, size, opacity, color]);
  return (
    <>
      <Columns>
        <RangeSlider
          onChange={setX}
          value={x.value}
          keyName={"boxShadow"}
          label="Left & Right"
          labelPosition="left"
          min={-15}
          max={15}
        />
        <RangeSlider
          onChange={setY}
          value={y.value}
          keyName={"boxShadow"}
          label="Up & Down"
          labelPosition="left"
          min={-15}
          max={15}
        />
      </Columns>
      <Columns>
        <RangeSlider
          onChange={setBlur}
          value={blur.value}
          keyName={"boxShadow"}
          label="Shadow Blur"
          labelPosition="left"
          min={0}
          max={30}
        />
        <RangeSlider
          onChange={setSize}
          value={size.value}
          keyName={"boxShadow"}
          label="Shadow Size"
          labelPosition="left"
          min={0}
          max={30}
        />
      </Columns>

      <RangeSlider
        onChange={setOpacity}
        value={opacity.value}
        valueLabel={(1 * opacity.value) / 100}
        keyName={"boxShadow"}
        label="Opacity"
        labelPosition="left"
        min={0}
        hideSuffix
        max={100}
      />

      {/* ---TEXT COLOR--- */}

      <FormGroup title="Drop Shadow Color">
        <div className="theme-selection-wrapper">
          <div className="theme-selector-items-container">
            <ThemeSelectorItem
              label={"Light"}
              value={color.keyName}
              keyName="light"
              style={{
                background: "#ffffff",
              }}
              labelPlacement="bottom"
              onClick={() => setColor({ keyName: "light", value: "#ffffff" })}
            />
            <ThemeSelectorItem
              label={"Dark"}
              value={color.keyName}
              keyName="dark"
              style={{
                background: "#1c1c1d",
              }}
              labelPlacement="bottom"
              onClick={() => setColor({ keyName: "dark", value: "#333333" })}
            />
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default BoxShadow;
