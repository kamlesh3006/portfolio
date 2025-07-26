import React from 'react';
import { motion } from 'framer-motion';

// Parent container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

// Child (word) variants
const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

function AnimatedText({ text, className }) {
  const words = text.split(" ");

  return (
    <motion.div
      // --- FIX: Use 'inline-flex' to respect parent's text-align property ---
      style={{ overflow: 'hidden', display: 'inline-flex', flexWrap: 'wrap' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={childVariants}
          style={{ marginRight: "0.25em" }} // space between words
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
