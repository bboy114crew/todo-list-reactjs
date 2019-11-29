import React, { useRef, useEffect, useState } from 'react';
import { ListGroup }  from 'react-bootstrap';
import styled from "styled-components";
import ListTodoItem from '../list-todo-item/list-todo-item.component'

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 10%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ListTodo = ({todos}) => {

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    checkForScrollToTop();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [showScrollToTop]);

  const checkForScrollToTop = () => {
      if (window.pageYOffset > 300) {
       setShowScrollToTop(true)
     } else {
       setShowScrollToTop(false)
     }
  }

  const handleScroll = () => {
    checkForScrollToTop();
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <ListGroup>
        {todos.map(item => (
            <ListTodoItem key={item.id} item={item}/>
          )
        )}
        { showScrollToTop && <ScrollToTopButton onClick={scrollUp}> Back to top</ScrollToTopButton>}
      </ListGroup>
    </>
  );
};


export default ListTodo;