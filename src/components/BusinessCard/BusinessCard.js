import React, { useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Monitor,
  Twitter,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import "./BusinessCard.css";
import { toggleCardDirection } from "../../redux/actions/cardDirectionActions";
import VCF from "./Components/CardDetailItem/vcf";
const BusinessCard = (props) => {
  const [cardHeight, setCardHeight] = useState(null);
  // const [isFront, setIsFront] = useState(true);
  const [imageWidth, setImageWidth] = useState(null);
  // const [theme, setTheme] = useState("dark");

  //Redux
  const formState = useSelector((state) => state.formState);
  const isFront = useSelector((state) => state.cardDirectionIsForward);
  const showForm = useSelector((state) => state.showForm);
  const isMobile = useSelector((state) => state.isMobile);
  const dispatch = useDispatch();
  const businessCardRef = useRef(null);
  const businessCardFrontImageRef = useRef(null);
  const heightRatio = 1.35;

  const setHeightHandler = () => {
    let h = businessCardRef.current.offsetWidth * heightRatio;
    // setCardHeight(h);
    setCardHeight(h);
  };

  const socialMediaIcons = (
    <div
      style={{ fill: formState.socialMediaIconColor }}
      className="social-media-icons-container"
    >
      <a
        href={formState.socials.facebook}
        target="_blank"
        className={`icon-wrapper ${formState.facebook && "active"}`}
        rel="noreferrer"
      >
        {facebook}
      </a>

      <a
        href={formState.instagram}
        target="_blank"
        className={`icon-wrapper ${formState.instagram && "active"}`}
        rel="noreferrer"
      >
        {instagram}
      </a>

      <a
        href={formState.twitter}
        target="_blank"
        className={`icon-wrapper ${formState.twitter && "active"}`}
        rel="noreferrer"
      >
        {twitter}
      </a>

      <a
        href={formState.linkedIn}
        target="_blank"
        className={`icon-wrapper ${formState.linkedIn && "active"}`}
        rel="noreferrer"
      >
        {linkedIn}
      </a>

      <a
        href={formState.website}
        target="_blank"
        className={`icon-wrapper ${formState.website && "active"}`}
        rel="noreferrer"
      >
        {monitor}
      </a>
    </div>
  );

  const cardFront = (
    <div
      style={formState.themeStyles}
      // style={{ color: formState.themeStyles.color }}
      className="card-item-face card-item-face__front"
    >
      <div className={`card__header ${formState.imagePersonal && "active"}`}>
        <div className="card__header--details">
          <div className={formState.name ? `detail-item` : "empty"} id="name">
            {formState.name}
          </div>
          <div
            className={
              formState.job || formState.company ? `detail-item` : "empty"
            }
            id="title"
          >
            {formState.job}
            {formState.company && ", "}
            {formState.company}
          </div>
        </div>

        <div
          style={{ display: formState.imagePersonal ? "flex" : "none" }}
          className="personal-card-image-wrapper"
        >
          <div
            style={{ height: imageWidth }}
            id="personal"
            className="card-image"
            ref={businessCardFrontImageRef}
          >
            <img src={formState.imagePersonal} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="card__details">
        <a
          href={`tel: ${formState.phone}`}
          targer={"_blank"}
          className={formState.phone ? `detail-item` : "empty"}
          id="phone-number"
        >
          <div className="detail-item__icon">{phoneIcon}</div>
          <div className="detail-item__detail">
            <span>{formState.phone}</span>
          </div>
        </a>
        <a
          href={`mailto: ${formState.email}`}
          target="_blank"
          className={formState.email ? `detail-item` : "empty"}
          id="email"
          rel="noreferrer"
        >
          <div className="detail-item__icon">{emailIcon}</div>
          <div className="detail-item__detail">
            <span>{formState.email}</span>
          </div>
        </a>

        {formState.companyAddress && (
          <div className={`detail-item`} id="address">
            <div className="detail-item__icon">{addressIcon}</div>
            <div className="detail-item__detail">
              <span> {formState.companyAddress}</span>
            </div>
          </div>
        )}
      </div>
      {socialMediaIcons}
    </div>
  );

  const cardBack = (
    <div
      // style={{ color: formState.themeStyles.color }}
      style={formState.themeStyles}
      className=" card-item-face card-item-face__back"
    >
      {formState.imageWork && (
        <div
          id="work"
          className={`card-image ${
            formState.imageWorkColor === "white" && "white"
          }  ${formState.imageWorkColor === "black" && "black"}`}
        >
          <img src={formState.imageWork} alt="" srcset="" />
        </div>
      )}
      {formState.webAddressWork && (
        <div className="work-web-address-container">
          <a
            href={`https://${formState.webAddressWork}`}
            target={"_blank"}
            className="web-address--work"
            rel="noreferrer"
          >
            {formState.webAddressWork}
          </a>
          <div style={{ fill: formState.themeStyles.color }} className="icon">
            {launchIcon}
          </div>
        </div>
      )}
    </div>
  );

  const flipCard = () => {
    dispatch(toggleCardDirection());
  };
  useEffect(() => {
    setImageWidth(businessCardFrontImageRef.current.offsetWidth);
    setHeightHandler();
  }, [isMobile.clientWidth]);
  return (
    <>
      <div
        style={{
          height: cardHeight + 30,
          marginTop: showForm ? "0" : "-100px",
        }}
        className="business-card-container"
      >
        <div
          ref={businessCardRef}
          style={{ height: cardHeight }}
          className={`business-card-item ${formState.themeName} ${
            !isFront && "flipped"
          }`}
        >
          {/* <div className="glass-wrapper"></div> */}

          {/* <div style={formState.themeStyles} className="background-color"></div> */}
          {cardFront}
          {cardBack}
        </div>
        <div className="card-button-container">
          <div role={"button"} onClick={flipCard} className="card-flip-button">
            <div className="icon-wrapper">{switchIcon}</div>
            <span>FLIP CARD</span>
          </div>

          {!showForm && <VCF />}
        </div>
      </div>
    </>
  );
};
export default BusinessCard;

const launchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
  </svg>
);

const phoneIcon = (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const emailIcon = (
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
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);
const addressIcon = (
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
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const switchIcon = (
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
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

const monitor = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
  </svg>
);

const facebook = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
  </svg>
);

const twitter = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
  </svg>
);
const instagram = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
    <circle cx="16.806" cy="7.207" r="1.078"></circle>
    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
  </svg>
);
const linkedIn = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <circle cx="4.983" cy="5.009" r="2.188"></circle>
    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
  </svg>
);
