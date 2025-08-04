import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import fgImg from '../../assets/final-fg.png';
import bgImg from '../../assets/final-bg.png';

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
            <div className="absolute inset-0 bg-[#121212] md:hidden" />
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${fgImg})` }}
            />
            
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImg})`,
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
            
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4">
                <Headings shadowStyle={{ textShadow: '2px 2px 8px rgba(255,255,255,0.5)' }} />

                <div className="absolute bottom-10 text-right right-4">
                     <ScrollReveal delay={0.2}>
                        <p className="max-w-2xl text-base md:text-lg text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                            Passionate about learning new tech to <br/>build  solutions that address <br/> real-world problems.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

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
