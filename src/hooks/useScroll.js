import { useEffect, useState } from "react";

function useScroll(scroll) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    checkForScrollToTop();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  function checkForScrollToTop() {
    if (window.pageYOffset > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  }

  function handleScroll() {
    checkForScrollToTop();
  }

  function scrollUp() {
    window.scrollTo(scroll.x, scroll.y);
  }

  return {
    showScrollToTop,
    scrollUp
  };
}

export default useScroll;
