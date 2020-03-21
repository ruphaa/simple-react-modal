import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ contentLabel, children, visible, onCancel }) => {
  return createPortal(
    <React.Fragment>
      {visible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h1>{contentLabel}</h1>
              <div className="close" onClick={onCancel}>
                <i className="fa fa-window-close-o"></i>
              </div>
            </div>
            <div className="modal-body">{children}</div>
            {/* <div className="modal-footer">
              <button onClick={onCancel}>Close</button>
            </div> */}
          </div>
        </div>
      )}
    </React.Fragment>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
