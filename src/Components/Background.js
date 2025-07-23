// Background.js

import React, { useState, useRef } from 'react';
// Corrected import to use the CSS Module file
import styles from '../Css/Background.module.css'; 

const Background = ({ topImageSrc, bottomImageSrc, alt, revealRadius = 100 }) => {
  // State to hold the clip-path value
  const [clipPath, setClipPath] = useState('circle(0% at 50% 50%)');
  
  // Ref to get the dimensions of the container div
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    // Get the position and size of the container
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update the clip-path state to create the reveal effect
    setClipPath(`circle(${revealRadius}px at ${x}px ${y}px)`);
  };

  const handleMouseLeave = () => {
    // Reset the clip-path when the mouse leaves
    setClipPath('circle(0% at 50% 50%)');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.imageRevealContainer}
    >
      {/* The bottom image (what is revealed) */}
      <img
        src={bottomImageSrc}
        alt={alt}
        className={styles.image}
      />
      {/* The top image (what you see initially) */}
      <img
        src={topImageSrc}
        alt={alt}
        className={styles.topImage}
        style={{ clipPath: clipPath }}
      />
    </div>
  );
};

export default Background;