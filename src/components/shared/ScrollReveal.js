import React from 'react';
import { motion,  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ScrollReveal({ children, delay = 0, duration = 0.8, offset = 50 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
      {children}
    </motion.div>
  );
}
export default ScrollReveal;