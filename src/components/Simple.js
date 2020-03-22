import React, { useState } from "react";
import Modal from "./Modal";

const Simple = () => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => setVisible(false);
  return (
    <React.Fragment>
      <button onClick={() => setVisible(true)}>Click Me</button>
      <Modal
        visible={visible}
        contentLabel="Happy Birthday 🎉"
        onCancel={onCancel}
        // classes="sideModal"
        header={() => (
          <React.Fragment>
            <h1>This is the header I want</h1>
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
