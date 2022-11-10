import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SingleGame from "../components/SingleGame";

function Modale({ show, setShow, id }) {
  const values = ["xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(false);
  }

  return (
    <div className="modal">
      {values.map((v, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button key={index} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Game selected
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal
        className="bg-dar close-btn"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header className="bg-dark close-btn" closeButton />
        <SingleGame id={id} />
      </Modal>
    </div>
  );
}

export default Modale;
