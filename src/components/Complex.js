import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "./hooks";
import Banner from "./Banner";

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
          <div>
            <div className="banner-parent">
              <Banner type="success" canClose={true}>
                This is a sample success banner
              </Banner>
              <Banner type="warning" canClose={true} delay={10000}>
                This is a sample warning banner
              </Banner>
              <Banner type="error">This is a sample error banner</Banner>
              <Banner type="info">This is a sample info banner</Banner>
            </div>
            <p>Hello World</p>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};
export default Complex;
