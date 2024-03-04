// src/components/MouseTracker.js
import React, { useState, useEffect } from 'react';
import '../styles/MouseTracker.css';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <div className="small" style={{ left: position.x, top: position.y }}></div>
      <div className="big" style={{ left: position.x, top: position.y }}></div>
    </>
  );
};

export default MouseTracker;
