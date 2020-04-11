import React, { useState, useEffect } from "react";
import { cx, css, keyframes } from "emotion";
import success from "../images/success.svg";
import error from "../images/error.svg";
import info from "../images/info.svg";
import warning from "../images/warning.svg";
import close from "../images/close.svg";

const defaultBanner = css({
  height: "35px",
  color: "#12344d",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "margin-bottom": "10px",
});

const Banner = ({ children, type, canClose, delay }) => {
  const [showBanner, setShowBanner] = useState(true);

  const closeDelay = delay || 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      canClose && setShowBanner(false);
    }, closeDelay);
    return () => clearTimeout(timer);
  }, []);

  const iconType = {
    success,
    error,
    warning,
    info,
  };
  const bannerType = type || "info";

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <React.Fragment>
      {showBanner && (
        <div className={`banner ${bannerType}`}>
          <div className="icon">
            <img src={iconType[type]} alt={type} />
          </div>
          <div className="content">{children}</div>
          {canClose && (
            <div className="close" onClick={closeBanner}>
              <img src={close} alt={type} />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default Banner;
