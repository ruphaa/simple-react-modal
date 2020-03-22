import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  contentLabel,
  children,
  visible,
  onCancel,
  footer,
  header,
  classes,
  afterClose,
  cancelText
}) => {
  return createPortal(
    <React.Fragment>
      {visible && (
        <div className="modal-overlay">
          <div className={`modal ${classes || ""}`}>
            <div className="modal-header">
              {header ? (
                header()
              ) : (
                <React.Fragment>
                  <h1>{contentLabel}</h1>
                  <div className="close" onClick={onCancel}>
                    <i className="fa fa-window-close-o"></i>
                  </div>
                </React.Fragment>
              )}
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {footer ? (
                footer()
              ) : (
                <button onClick={onCancel}>{cancelText || "Close"}</button>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
