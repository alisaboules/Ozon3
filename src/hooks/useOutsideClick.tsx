'use client';

import { useEffect, useRef, useState } from 'react';

export function useOutsideClick<T extends HTMLElement = HTMLEmbedElement>(initialState = false) {
  const ref = useRef<T>(null);
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
}
