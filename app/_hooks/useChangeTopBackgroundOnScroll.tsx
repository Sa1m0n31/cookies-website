import React, { useState, useEffect } from 'react';

export default function useChangeTopBackgroundOnScroll(refElement) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > 50 && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentPosition <= 50 && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (scrollDirection === 'down') {
      refElement.current.style.backgroundColor = 'white';
    } else if (scrollDirection === 'up') {
      refElement.current.style.backgroundColor = 'transparent';
    }
  }, [scrollDirection]);
}
