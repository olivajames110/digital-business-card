import * as React from "react";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  const { className, style, onCancel, contentClass, footer, footerClass } =
    props;

  const content = (
    <div className={`modal ${className}`} style={style}>
      <div className="modal__header">
        {" "}
        <button onClick={onCancel} className="cancel">
          {timesIcon}
        </button>
      </div>

      <div className={`modal__content ${contentClass}`}>{props.children}</div>
      {footer && (
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      )}
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <React.Fragment>
      {show && <Backdrop />}
      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade-in"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
const timesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
