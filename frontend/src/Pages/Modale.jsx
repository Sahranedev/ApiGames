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
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        onClick={() => setShow(false)}
      >
        <SingleGame id={id} handleShow={handleShow} />
      </Modal>
    </div>
  );
}

export default Modale;
