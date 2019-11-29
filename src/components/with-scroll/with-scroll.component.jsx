import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

const WithScroll = WrappedComponent => {
  const Scroll = ({ ...props }) => {
    const { scroll } = props;
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    useEffect(() => {
      checkForScrollToTop();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.addEventListener("scroll", handleScroll);
      };
    }, []);

    const checkForScrollToTop = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    const handleScroll = () => {
      checkForScrollToTop();
    };

    const scrollUp = () => {
      window.scrollTo(scroll.x, scroll.y);
    };
    return (
      <>
        <WrappedComponent {...props} />
        {showScrollToTop && (
          <ScrollToTopButton onClick={scrollUp}> Back to top</ScrollToTopButton>
        )}
      </>
    );
  };
  return Scroll;
};

export default WithScroll;
