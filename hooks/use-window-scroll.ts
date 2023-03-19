'use client';

import 'client-only';

import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [windowAtTop, setWindowAtTop] = useState<boolean>(true);
  const [hasScrolledWindow, setHasScrolledWindow] = useState<boolean>(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      if (window.scrollY > 0 && windowAtTop === true) {
        setWindowAtTop(false);
        setHasScrolledWindow(true);
      }

      if (window.scrollY <= 1 && windowAtTop === false) {
        setWindowAtTop(true);
      }
    };

    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [windowAtTop]);

  return { hasScrolledWindow, windowAtTop };
};

export default useWindowScroll;
