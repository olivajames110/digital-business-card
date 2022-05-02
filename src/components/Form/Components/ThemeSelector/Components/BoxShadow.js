import React, { useEffect, useState } from "react";
import RangeSlider from "../../../../FormInputs/RangeSlider";

const BoxShadow = (props) => {
  const [x, setX] = useState({ keyName: props.keyName, value: -5 });
  const [y, setY] = useState({ keyName: props.keyName, value: 3 });
  const [blur, setBlur] = useState({ keyName: props.keyName, value: 3 });
  const [size, setSize] = useState({ keyName: props.keyName, value: 3 });
  const [opacity, setOpacity] = useState({ keyName: props.keyName, value: 10 });

  useEffect(() => {
    let boxShadow = `${x.value}px ${y.value}px ${blur.value}px ${
      size.value
    }px  rgba(0,0,0,${(1 * opacity.value) / 100})`;
    props.onChange({ keyName: props.keyName, value: boxShadow });
  }, [x, y, blur, size, opacity]);
  return (
    <>
      <RangeSlider
        onChange={setX}
        value={x.value}
        keyName={"boxShadow"}
        label="X Shadow Value"
        labelPosition="left"
        min={-15}
        max={15}
      />
      <RangeSlider
        onChange={setY}
        value={y.value}
        keyName={"boxShadow"}
        label="Y Shadow Value"
        labelPosition="left"
        min={-15}
        max={15}
      />
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
    </>
  );
};

export default BoxShadow;
