import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  contentLabel,
  children,
  visible,
  onCancel,
  classes,
  cancelText,
  Header: CustomHeader,
  Footer: CustomFooter
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
        <div className="modal-overlay">
          <div className={`modal ${classes || ""}`}>
            <div className="modal-header">
              <Header />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
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
