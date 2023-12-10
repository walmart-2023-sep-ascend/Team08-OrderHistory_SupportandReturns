import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function ErrorModal() {
    const [show,setShow] = useState(false);
    const handleShow = () => setShow(true);
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={handleShow}>
        <Modal.Header >
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Oops!! Something went wrong. Please try again later...</p>
          <br/>
          <br/>
          <Link to='/'> Back to Home</Link>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ErrorModal;