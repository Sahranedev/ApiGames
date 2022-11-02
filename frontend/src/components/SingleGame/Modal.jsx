/* import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SingleGame from "./SingleGame";

function Modale() {
  const values = ["xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button key={id} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Game selected
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Affichage d'un jeu</Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal">
          <SingleGame />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modale;
 */
