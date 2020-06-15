import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ title, text, buttonText, showModal, onCloseModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={onCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={onCloseModal}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
