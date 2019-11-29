import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Row } from 'react-bootstrap';
import { getTodosAsync } from './redux/todo/todo.action';
import { setSearchKey } from './redux/search/search.action.js';

const Search = ({ onSubmit }) => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch();
  const [newKeyword, setKeyword] = useState("");
  const submit = () => {
    if(search.keyword !== newKeyword) {
      dispatch(getTodosAsync({
        keyword: newKeyword,
      }))
    }
    dispatch(setSearchKey(newKeyword))
  };

  return (
    <>
      <Form.Group controlId="searchForm.ControlKey">
        <Form.Label></Form.Label>
        <Form.Control 
          value = {newKeyword}  
          onChange={e => setKeyword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={submit}>
        Search
      </Button>
    </>
  );
};

export default Search;
