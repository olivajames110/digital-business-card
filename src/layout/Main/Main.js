import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";

import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Form from "../../components/Form/Form";
import Modal from "../../components/shared/Modal/Modal";
import { useFirebase } from "../../firebase";
import { setMobilePreview } from "../../redux/actions/mobilePreviewActions";

import "./Main.css";
const Main = (props) => {
  const [showCard, setShowCard] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const formState = useSelector((state) => state.formState);
  const { isLoading, createNewUser, getUser } = useFirebase();
  const mobilePreviewActive = useSelector((state) => state.mobilePreviewActive);
  const cardPreviewSection = (
    <section
      className={`${isMobile && showCard && "preview-active"} ${
        !isMobile && "desktop"
      }`}
      style={{ width: showForm ? "50%" : "100%" }}
      id="card-preview-section"
    >
      {isLoading ? (
        <SpinnerDotted
          size={150}
          thickness={100}
          speed={100}
          color="var(--primary)"
        />
      ) : (
        <BusinessCard />
      )}
    </section>
  );

  const getLastLetter = (url) => {
    let lastLetter = url.charAt(url.length - 1);
    let lastWord = url.split("/");
    if (lastLetter === "/") {
      return lastWord[lastWord.length - 2];
    } else {
      return lastWord[lastWord.length - 1];
    }
  };

  useEffect(() => {
    if (isMobile) {
      setShowCard(false);
    }

    let slug =
      window.location.host === "oakcreatives.com"
        ? "/digital-business-card/"
        : "/";
    if (window.location.pathname === slug) {
      console.log("Show Form", window.location.pathname, slug);
      setShowForm(true);
    } else {
      setShowForm(false);
      setMobilePreview(true);
      let user = getLastLetter(window.location.href);
      console.log("Find if exists", window.location.pathname, user);
      getUser(user);
    }
  }, []);
  return (
    <main
      style={{ background: formState.pageBackgroundColor }}
      className={`gradient`}
    >
      <Modal
        className={"card-preview-modal"}
        show={mobilePreviewActive}
        onCancel={() => dispatch(setMobilePreview(false))}
      >
        <BusinessCard />
      </Modal>
      <div className="main-inner-wrapper">
        {/* {!showForm && cardPreviewSection} */}
        {((showForm && !isMobile) || !showForm) && cardPreviewSection}
        {showForm && <Form />}
      </div>
      {/* {!isMobile && <div className="main-logo-wrapper">{logo}</div>} */}
    </main>
  );
};
export default Main;
const logo = (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 539.64 539.55">
    <path
      d="M424.59,303.39c-2.48,0-4.65,1.69-5.23,4.11-1.91,7.84-4.45,15.51-7.61,22.99-3.81,9.01-8.54,17.72-14.04,25.86-5.47,8.1-11.76,15.73-18.7,22.66-6.93,6.93-14.55,13.22-22.66,18.7-8.15,5.5-16.85,10.23-25.87,14.04-7.27,3.07-14.73,5.56-22.34,7.45-2.4,.6-4.09,2.75-4.09,5.23v109.73c0,3.28,2.91,5.81,6.15,5.34,118.71-17.13,212.54-111.16,229.38-229.96,.46-3.24-2.07-6.14-5.34-6.14h-109.66ZM144.58,185.94c5.47-8.1,11.77-15.73,18.7-22.66,6.93-6.93,14.56-13.22,22.66-18.7,8.15-5.51,16.85-10.23,25.86-14.04,18.73-7.92,38.69-11.94,59.34-11.94s40.61,4.02,59.34,11.94c9.01,3.81,17.72,8.54,25.87,14.04,8.1,5.47,15.73,11.76,22.66,18.7,6.93,6.93,13.22,14.55,18.7,22.66,5.51,8.15,10.23,16.85,14.04,25.87,2.87,6.78,5.22,13.72,7.06,20.8,.62,2.38,2.76,4.04,5.22,4.04h109.9c3.29,0,5.82-2.93,5.33-6.18C519.62,100.01,407.06,0,271.14,0,121.38,0-.12,121.59,0,271.36c.11,136.06,100.43,248.66,231.14,267.99,3.25,.48,6.17-2.05,6.17-5.34v-109.82c0-2.46-1.67-4.61-4.06-5.22-7.3-1.86-14.46-4.27-21.45-7.23-9.01-3.81-17.72-8.54-25.86-14.04-8.1-5.47-15.73-11.76-22.66-18.7-6.93-6.93-13.22-14.56-18.7-22.66-5.5-8.15-10.23-16.85-14.04-25.86-7.92-18.73-11.94-38.69-11.94-59.34s4.02-40.61,11.94-59.34c3.81-9.01,8.54-17.72,14.04-25.87Z"
      style={{ fill: "#fff" }}
    />
  </svg>
);
