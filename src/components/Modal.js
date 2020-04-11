import React, { useState } from "react";
import { createPortal } from "react-dom";
import { cx, css, keyframes } from "emotion";

/*
  Emotion Style
  @description: Scoped CSS for Modal specific styles using emotion classes
*/

const flexProps = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const ModalOverlay = css({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
});

const modalAnimation = keyframes`
  from, 0%, to {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ModalStyle = css`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right,
    #e2b8f7,
    #d4bafa,
    #c7bcfb,
    #b9befb,
    #acbff9
  );
  animation: ${modalAnimation} 0.3s linear forwards;
`;

const slideIn = keyframes`
  from, 0%, to {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0)
  }
`;

const sideModal = css`
  height: 100%;
  width: 60rem;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${slideIn} 0.3s linear forwards;
  background: #fff;
`;

const ModalHeader = css`
  position: relative;
  width: 100%;

  h1 {
    font-family: "Pacifico", cursive;
    font-size: 70px;
    text-align: center;
  }

  & .close {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 100%;
    cursor: pointer;

    & i {
      font-size: 30px;
      color: #000;
    }
  }
`;

const fontSize = css`
  font-size: 1.5rem;
`;

const pd15 = css`
  padding: 15px;
`;

const Modal = ({
  contentLabel,
  children,
  visible,
  onCancel,
  classes,
  cancelText,
  Header: CustomHeader,
  Footer: CustomFooter,
}) => {
  const DefaultHeader = () => {
    return (
      <React.Fragment>
        <h1>{contentLabel}</h1>
        <div className="close" onClick={onCancel}>
          <i className="fa fa-window-close-o"></i>
        </div>
      </React.Fragment>
    );
  };

  const DefaultFooter = () => {
    return <button onClick={onCancel}>{cancelText || "Close"}</button>;
  };

  const Header = CustomHeader || DefaultHeader;
  const Footer = CustomFooter || DefaultFooter;

  return createPortal(
    <React.Fragment>
      {visible && (
        <div className={cx(ModalOverlay, flexProps)}>
          <div className={cx(ModalStyle, { [sideModal]: classes })}>
            <div className={ModalHeader}>
              <Header />
            </div>
            <div className={cx(fontSize, pd15)}>{children}</div>
            <div className={fontSize}>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
