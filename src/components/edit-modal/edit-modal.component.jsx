import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { updateTodosAsync } from '../../redux/todo/todo.action';

const EditModal = ({ show, item, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [status, setStatus] = useState(item.status);
  const handleClose = () => onClose();
  const handleUpdate = () => {
    dispatch(updateTodosAsync(item.id, {
      title: title,
      content: content,
      createdAt: new Date().getTime(),
      status: status,
    }))
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editForm.ControlTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                value = {title}  
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="editForm.ControlContent">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows="3" 
                value = {content}  
                onChange={e => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="editForm.ControlStatus">
              <Form.Label as="legend">
                Status
              </Form.Label>
                <Form.Check
                  type="radio"
                  label="Done"
                  value="done"
                  checked={status === "done"} 
                  onChange={e => setStatus(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Pending"
                  value="pending"
                  checked={status === "pending"} 
                  onChange={e => setStatus(e.target.value)}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;