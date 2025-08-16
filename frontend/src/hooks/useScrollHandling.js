import { useEffect, useState, useRef } from 'react';

const useScrollHandling = () => {
  const [scroll, setScroll] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const previousScrollPosison = useRef(0); // <-- thiếu dòng này

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosison.current) {
      setScroll('down');
    } else if (currentScrollPosition < previousScrollPosison.current) {
      setScroll('up');
    }

    previousScrollPosison.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  return {
    scroll,
    scrollPosition,
  };
};

export default useScrollHandling;
