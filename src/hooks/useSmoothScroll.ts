'use client';

import { useEffect } from 'react';

const useSmoothScroll = (): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const targetId = href?.replace('#', '');
        const targetElement = targetId ? document.getElementById(targetId) : null;

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL tanpa reload
          window.history.pushState({}, '', href);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;