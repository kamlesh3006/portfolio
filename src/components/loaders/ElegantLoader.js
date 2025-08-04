import React, { useState, useEffect } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import logo from '../../logo/logo.png';

function ElegantLoader() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Booting up visual core...');
  
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("logoVisible");
      
      const progressAnimation = animate(0, 1, {
        duration: 2,
        onUpdate: (latest) => setProgress(latest),
      });
      await progressAnimation;

      setMessage("Ready.");
    };

    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 150, damping: 15, duration: 1.2 } 
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.div variants={logoVariants} initial="hidden" animate="visible" className="mb-8">
          <div className="flex items-center justify-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-1/4 object-contain"
            />
          </div>
        </motion.div>

        <div className="w-52 h-1 bg-white/10 -mt-32 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-[#A367B1] to-[#6A5ACD] rounded-full shadow-[0_0_8px_1px_rgba(163,103,177,0.4)]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <p className="text-white/70 tracking-[1.2px] font-light">{message}</p>
      </div>
    </motion.div>
  );
}

export default ElegantLoader;
