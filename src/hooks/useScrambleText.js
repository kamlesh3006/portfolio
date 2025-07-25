import { useState, useEffect, useRef } from 'react';

function useScrambleText({ originalText, isHovering }) {
  const [scrambledText, setScrambledText] = useState(originalText);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const scramble = () => {
      let newText = '';
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
          newText += ' ';
        } else {
          if (Math.random() > 0.3) {
            newText += originalText[i];
          } else {
            newText += letters[Math.floor(Math.random() * letters.length)];
          }
        }
      }
      setScrambledText(newText);
    };

    if (isHovering) {
      intervalRef.current = setInterval(scramble, 80);
      timeoutRef.current = setTimeout(() => {
        clearInterval(intervalRef.current);
        setScrambledText(originalText);
      }, 600);
    } else {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      setScrambledText(originalText);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [isHovering, originalText]);

  return { scrambledText };
}
export default useScrambleText;