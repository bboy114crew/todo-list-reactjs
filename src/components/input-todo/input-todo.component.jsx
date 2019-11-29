import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodosAsync } from '../../redux/todo/todo.action';

const InputTodo = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = () => {
    if(title !== "") {
      dispatch(addTodosAsync({
        title: title,
        content: content,
        createdAt: new Date().getTime(),
        status: 'pending',
      }))
    }
  };

  return (
    <>
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
      </Form>  
      <Button variant="primary" onClick={submit}>
        Add
      </Button>
    </>
  );
};

export default InputTodo;
