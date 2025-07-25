import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
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
    return (
        <section
            className="h-screen w-screen relative overflow-hidden cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom"
                style={{
                    backgroundImage: "url('/assets/back.png')",
                    backgroundSize: 'auto 75%',
                }}
            />
            <motion.div
                className="absolute inset-0 bg-no-repeat bg-bottom"
                style={{
                    backgroundImage: "url('/assets/front.png')",
                    backgroundSize: 'auto 75%',
                    maskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle var(--mask-size) at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                }}
                initial={{ '--mask-size': '0px' }}
                animate={{
                    '--mask-size': isHovering
                        ? [`${maskSize * 0.9}px`, `${maskSize * 1.1}px`, `${maskSize * 0.9}px`]
                        : '0px'
                }}
                transition={{
                    '--mask-size': isHovering
                        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        : { type: 'spring', stiffness: 100, damping: 20 }
                }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                        I build intelligent systems,
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mt-4" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
                        where data-driven logic and function meet.
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="mt-8 max-w-2xl text-base md:text-lg text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                        I design and develop apps that do more than look good—they tell stories, evoke emotions, and feel alive.
                    </p>
                </ScrollReveal>
                <div className="absolute bottom-10 flex flex-col items-center">
                    <ScrollReveal delay={0.8}>
                        <button onClick={onExplorePressed} className="text-sm uppercase tracking-widest text-white/80 mb-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                            Scroll to explore
                        </button>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ArrowDown className="text-white/80" />
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
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