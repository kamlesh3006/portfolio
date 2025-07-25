import React, { useState, useEffect } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import { Code } from 'lucide-react';
// (Code for ElegantLoader is unchanged and remains the same as previous versions)
function ElegantLoader() {
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('Booting up visual core...');
    const [isVisible, setIsVisible] = useState(true);
    const controls = useAnimation();
    useEffect(() => {
        const sequence = async () => {
            await controls.start({ opacity: 1, transition: { duration: 0.8 } });
            await controls.start("logoVisible");
            const progressAnimation = animate(0, 1, {
                duration: 2,
                onUpdate: (latest) => setProgress(latest),
            });
            await progressAnimation;
            setMessage("Ready.");
            await new Promise(res => setTimeout(res, 500));
            await controls.start("exit");
            setIsVisible(false);
        };
        sequence();
    }, [controls]);
    if (!isVisible) return null;
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6 } }
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
            animate={controls}
            variants={containerVariants}
        >
            <div className="flex flex-col items-center justify-center flex-grow">
                <motion.div variants={logoVariants} initial="hidden" animate="visible" className="mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#A367B1] to-[#6A5ACD] flex items-center justify-center shadow-[0_0_20px_2px_rgba(163,103,177,0.3)]">
                        <Code className="text-white" size={36} />
                    </div>
                </motion.div>
                <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden mb-6">
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