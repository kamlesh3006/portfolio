
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltableImage({ src, alt, className }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [0, 1], ["16deg", "-16deg"]);
  const rotateY = useTransform(springX, [0, 1], ["-16deg", "16deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Define animation variants for the image
  const imageVariants = {
    initial: {
      boxShadow: "0px 5px 15px -5px rgba(0, 0, 0, 0.1)",
      transform: "translateZ(20px)" // Start slightly lifted
    },
    hover: {
      boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.3)",
      transform: "translateZ(50px)" // Lift higher on hover
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative w-full h-full rounded-2xl"
      // Control the hover state from the parent container
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring" }}
    >
      <motion.img
        src={src}
        alt={alt}
        // Apply the className for rounded corners
        className={className}
        // Use the variants defined above for a reliable animation
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </motion.div>
  );
}

export default TiltableImage;
