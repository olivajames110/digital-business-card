import React from "react";
import "./ProgressBar.css";
const ProgressBar = (props) => {
  const step = (
    <div className="progress-bar-step active">
      <div className="progress-bar-step__graphic">
        <div className="progress-bar-step-graphic__circle"></div>
        <div className="progress-bar-step__label">Your Info</div>
      </div>
      <div className="progress-bar__line"></div>
    </div>
  );
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-step active">
        <div className="progress-bar-step__graphic">
          <div className="progress-bar-step-graphic__circle">
            <div className="icon-wrapper">{checkmark}</div>
          </div>
          <div className="progress-bar-step__label">
            <span className="label-text">Your Info</span>
          </div>
        </div>
        <div className="progress-bar__line"></div>
      </div>
      <div className="progress-bar-step ">
        <div className="progress-bar-step__graphic">
          <div className="progress-bar-step-graphic__circle"></div>
          <div className="progress-bar-step__label">
            <span className="label-text">Social Media</span>
          </div>
        </div>
        <div className="progress-bar__line"></div>
      </div>
      <div className="progress-bar-step ">
        <div className="progress-bar-step__graphic">
          <div className="progress-bar-step-graphic__circle"></div>
          <div className="progress-bar-step__label">
            <span className="label-text">Work Details</span>
          </div>
        </div>
        <div className="progress-bar__line"></div>
      </div>

      <div className="progress-bar-step last-child">
        <div className="progress-bar-step__graphic">
          <div className="progress-bar-step-graphic__circle"></div>
          <div className="progress-bar-step__label">
            <span className="label-text">Card Styles</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;

const checkmark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
