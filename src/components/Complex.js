import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "./hooks";

const Complex = () => {
  const [modalOpen, setModalOpen, toggleModal] = useModal(false);

  return (
    <React.Fragment>
      <p>Here's another miracle for you</p>
      <button onClick={toggleModal}>Click Me</button>
      {modalOpen && (
        <Modal
          visible={modalOpen}
          contentLabel="New Year 🎉"
          onCancel={toggleModal}
          classes="sideModal"
        >
          Hello World
        </Modal>
      )}
    </React.Fragment>
  );
};
export default Complex;
