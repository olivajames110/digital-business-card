import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

import ProgressBarItem from "./Components/ProgressBarItem";

const ProgressBar = ({ steps, formStep }) => {
  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar__steps">
          {steps &&
            steps.map((p, i) => {
              if (p) {
                return (
                  <ProgressBarItem
                    key={i + 1}
                    label={p}
                    stepNumber={i + 1}
                    currentStep={formStep}
                    isActive={i + 1 === formStep}
                    isCompleted={i + 1 < formStep}
                    isLastChild={i === steps.length - 1}
                  />
                );
              }
            })}
        </div>
      </div>{" "}
    </>
  );
};
export default ProgressBar;
