import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonToolbar, ListGroup, Badge } from 'react-bootstrap';
import EditModal from '../edit-modal/edit-modal.component';
import { deleteTodosAsync } from '../../redux/todo/todo.action';

const ListTodoItem = ({item}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleEdit = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDelete = () => {
    dispatch(deleteTodosAsync(item.id));
  }
  const renderItemStatus = () => {
    if(item.status === 'done') {
      return (
        <Badge variant="success">{item.status}</Badge>
      )
    }
    return (
      <Badge variant="secondary">{item.status}</Badge>
    )
  }
  return (
    <>
      <ListGroup.Item>
        <p> {item.title} </p>
        <p> {item.content}</p>
        {renderItemStatus()}
        <hr></hr>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>&nbsp;
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonToolbar>
        <EditModal show={show} item={item} onClose={handleClose}/>
      </ListGroup.Item>
    </>
  );
};


export default ListTodoItem;
