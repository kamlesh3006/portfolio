import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

function CursorRevealHeroSection({ onExplorePressed }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        if (isHovering) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    useEffect(() => {
        if (isHovering) {
            controls.start({
                scale: 1,
                opacity: 1,
                transition: { type: 'spring', stiffness: 200, damping: 20 },
            });
        } else {
            controls.start({
                scale: 0,
                opacity: 0,
                transition: { duration: 0.3 },
            });
        }
    }, [isHovering, controls]);
    
    const maskSize = 150;

    // A single component to render the headings, ensuring they are always identical.
    const Headings = ({ shadowStyle }) => (
        <div style={shadowStyle}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider uppercase text-white">
                I build intelligent<br />systems,
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mt-4 text-white">
                where data-driven logic and<br />function meet.
            </h2>
        </div>
    );

    return (
        <section
            className="h-screen w-screen relative overflow-hidden cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Layer 1: Base Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/final-fg.png')" }}
            />
            
            {/* Layer 2: Revealed Background Image (masked) */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/final-bg.png')",
                    maskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                }}
                initial={{ '--mask-size': '0px' }}
                animate={{
                    '--mask-size': isHovering ? [`${maskSize * 0.9}px`, `${maskSize * 1.1}px`, `${maskSize * 0.9}px`] : '0px'
                }}
                transition={{
                    '--mask-size': isHovering ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { type: 'spring', stiffness: 100, damping: 20 }
                }}
            />
            
            {/* Layer 3: Main Content Container */}
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4">
                {/* Base text with WHITE shadow */}
                <Headings shadowStyle={{ textShadow: '2px 2px 8px rgba(255,255,255,0.5)' }} />

                <div className="absolute bottom-10 text-right right-4">
                     <ScrollReveal delay={0.2}>
                        <p className="max-w-2xl text-base md:text-lg text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                            Passionate about learning new tech to <br/>build  solutions that address <br/> real-world problems.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Layer 4: Masked Text Overlay with BLACK shadow */}
            <motion.div
                className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4 pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                }}
                initial={{ '--mask-size': '0px' }}
                animate={{
                    '--mask-size': isHovering ? [`${maskSize * 0.9}px`, `${maskSize * 1.1}px`, `${maskSize * 0.9}px`] : '0px'
                }}
                transition={{
                    '--mask-size': isHovering ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { type: 'spring', stiffness: 100, damping: 20 }
                }}
            >
                <Headings shadowStyle={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }} />
            </motion.div>
            
            {/* Custom Cursor */}
            <motion.div
                className="absolute w-10 h-10 rounded-full border-2 border-[#A367B1] pointer-events-none"
                style={{
                    left: mousePosition.x - 20,
                    top: mousePosition.y - 20,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={controls}
            />
        </section>
    );
}
export default CursorRevealHeroSection;
