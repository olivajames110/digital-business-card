import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./assets/styles/global.css";

import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import { setIsMobile } from "./redux/actions/isMobileActions";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let checkMobileHandler = () => {
      let clientWidth = document.body.clientWidth;
      console.log("clientWidth: ", clientWidth);
      if (clientWidth <= 768) {
        console.log("Make Mobile: ", clientWidth);
        dispatch(setIsMobile({ bool: true, clientWidth }));
      } else {
        console.log("Make Desktop: ", clientWidth);
        dispatch(setIsMobile({ bool: false, clientWidth }));
      }
    };
    checkMobileHandler();
    window.addEventListener("resize", checkMobileHandler);

    return () => window.removeEventListener("resize", checkMobileHandler);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Main />
    </>
  );
};

export default App;
