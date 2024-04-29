import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle, BsX } from 'react-icons/bs'; //


const NotificationModal2 = ({ show, handleClose, requester, payscale,
timeDuration, additionalInfo }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="modal-custom">
      <Modal.Header closeButton>
        <BsX onClick={handleClose} style={{ position: 'absolute', top:
'10px', right: '10px', cursor: 'pointer' }} />
      </Modal.Header>
      <Modal.Body className="text-center">
        <Modal.Title className="modal-heading"> Great News!You have a
request from <strong>{requester}</strong> for Renting.</Modal.Title>
        <p>Renting  you as: {additionalInfo}</p>

        <p>The payscale for this request is: {payscale}</p>
        <p>The time duration for this request is: {timeDuration}</p>
        <p>He is a : {additionalInfo}</p>
        <p>He can work for this days : {additionalInfo}</p>
        <p>- Additional information goes here -</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <p className="mr-3">Do you want to accept and start the chat?</p>
        <button className="btn btn-success rounded-circle mr-2 btn-icon">
          <BsCheckCircle /> <span className="button-text">Accept</span>
        </button>
        <button className="btn btn-danger rounded-circle btn-icon">
          <BsXCircle /> <span className="button-text">Decline</span>
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal2;