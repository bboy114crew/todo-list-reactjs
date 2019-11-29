import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { getTodosAsync } from './redux/todo/todo.action';

const StatusSelect = ({ value }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");

  const onChange = e => {
    setStatus(e.target.value);
    dispatch(getTodosAsync({
      status: e.target.value,
    }))
  };

  return (
    <Form.Group>
      <Form.Control as="select" value={value} onChange={onChange}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </Form.Control>
    </Form.Group>
  );
}


export default StatusSelect;
