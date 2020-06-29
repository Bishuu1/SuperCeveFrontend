import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({
  title,
  children,
  buttonText,
  showModal,
  onCloseModal,
  onSaveModal,
  buttonSubmit,
}) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={onCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Cerrar
          </Button>
          {onSaveModal && (
            <Button
              variant="primary"
              type={onSaveModal ? 'button' : 'submit'}
              onClick={onSaveModal}
            >
              {buttonText}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
