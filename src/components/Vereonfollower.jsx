// src/components/VereonFollower.jsx
import { useEffect } from 'react';
import './VereonFollower.css';

export default function VereonFollower() {
  useEffect(() => {
    const vereon = document.getElementById('vereon');

    const handleMouseMove = (e) => {
      if (vereon) {
        vereon.style.left = `${e.pageX + 20}px`;
        vereon.style.top = `${e.pageY + 20}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <img
      id="vereon"
      src="/vereon.png"
      alt="Vereon"
    />
  );
}
