import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "./hooks";

const Simple = () => {
  const [modalOpen, setModalOpen, toggleModal] = useModal(false);

  const Header = () => (
    <React.Fragment>
      <h1>This is the header I want</h1>
      <div className="close" onClick={toggleModal}>
        <i className="fa fa-window-close-o"></i>
      </div>
    </React.Fragment>
  );

  const Footer = () => (
    <React.Fragment>
      This is a custom footer.
      <br />
      <button onClick={toggleModal}>Close</button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <button onClick={toggleModal}>Click Me</button>
      {modalOpen && (
        <Modal
          visible={modalOpen}
          contentLabel="Happy Birthday 🎉"
          onCancel={toggleModal}
          // classes="sideModal"
          Header={Header}
          Footer={Footer}
        >
          Hello World
        </Modal>
      )}
    </React.Fragment>
  );
};
export default Simple;
