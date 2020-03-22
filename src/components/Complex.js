import React, { useState } from "react";
import Modal from "./Modal";

const Simple = () => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => setVisible(false);

  const printValuesAfterModal = () =>
    console.log("Modal is closed successfully");

  return (
    <React.Fragment>
      <p>Here's another miracle for you</p>
      <button onClick={() => setVisible(true)}>Click Me</button>
      <Modal
        visible={visible}
        contentLabel="New Year 🎉"
        onCancel={onCancel}
        classes="sideModal"
        header={() => (
          <React.Fragment>
            <h1>This is the second header I want</h1>
            <div className="close" onClick={onCancel}>
              <i className="fa fa-window-close-o"></i>
            </div>
          </React.Fragment>
        )}
        footer={() => (
          <React.Fragment>
            This is a custom footer.
            <br />
            <button onClick={onCancel}>Close</button>
          </React.Fragment>
        )}
      >
        Hello World
      </Modal>
    </React.Fragment>
  );
};
export default Simple;
