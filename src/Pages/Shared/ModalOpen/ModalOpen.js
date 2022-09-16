import React from "react";
import { Modal } from "react-bootstrap";
import useData from "../../../hooks/useData";

const ModalOpen = () => {
  const {modal:[show, setShow]} = useData();
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Already Added</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please go to cart and purchase</Modal.Body>
    </Modal>
  );
};

export default ModalOpen;
