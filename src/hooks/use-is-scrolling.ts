import { useEffect, useRef, useState } from 'react';

export const useIsScrolling = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>();

  // Callbacks
  const isSticky = () => {
    const offset = (ref.current?.offsetTop || 0) + (ref.current?.clientHeight || 0);
    setIsScrolling(window.scrollY >= offset);
  };

  // Hooks
  useEffect(() => {
    // First call to match inital render
    isSticky();

    // Event listener
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return { ref, isScrolling };
};
