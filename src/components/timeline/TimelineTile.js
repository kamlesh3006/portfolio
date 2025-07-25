// src/components/timeline/TimelineTile.js
// THIS FILE HAS BEEN MODIFIED TO ADD A GLOW EFFECT
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function TimelineTile({ event, index, scrollContainerRef }) {
    const isLeft = index % 2 === 0;
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        container: scrollContainerRef,
        // CHANGED: Track progress from when the element enters the screen until its top is centered.
        offset: ['start end', 'start center'],
    });

    // CHANGED: Define a slower animation that starts when the element is 20% from the bottom.
    const animationRange = [0.4, 0.8];

    // Animate card properties based on scroll progress
    const scale = useTransform(scrollYProgress, animationRange, [0.8, 1]);
    const opacity = useTransform(scrollYProgress, animationRange, [0.5, 1]);
    const x = useTransform(scrollYProgress, animationRange, [isLeft ? -50 : 50, 0]);

    // Animate the active color from grey to the accent color
    const activeColor = useTransform(
        scrollYProgress,
        animationRange,
        ["#404040", "#A367B1"] // From neutral grey to accent purple
    );

    // Animate the circle's background color from dark to white for a glowy look
    const circleBgColor = useTransform(
        scrollYProgress,
        animationRange,
        ["#121212", "#FFFFFF"] // From dark background to bright white
    );

    // Animate the glow effect for the circle
    const boxShadow = useTransform(
        scrollYProgress,
        animationRange,
        [
            "0 0 0px 0px rgba(163, 103, 177, 0)",
            "0 0 15px 4px rgba(163, 103, 177, 0.5)"
        ]
    );

    return (
        <div ref={targetRef} className="relative flex items-center justify-center">
            <motion.div
                style={{ scale, opacity, x }}
                className={`w-[calc(50%-2rem)] ${isLeft ? 'mr-auto' : 'ml-auto'}`}
            >
                <motion.div 
                    // Apply animated border color to the correct side
                    style={isLeft ? { borderLeftColor: activeColor } : { borderRightColor: activeColor }}
                    // Set base border to transparent to maintain layout
                    className={`p-4 md:p-6 rounded-lg border-2 bg-[#1c1c1c]/50 backdrop-blur-sm
                    ${isLeft ? 'text-right border-l-4' : 'text-left border-r-4'} border-transparent`}
                >
                    <div className={`flex items-center gap-3 ${isLeft ? 'flex-row-reverse' : ''}`}>
                        <event.icon className="text-[#A367B1]" size={20} />
                        <h3 className="font-bold text-base md:text-lg text-white">{event.title}</h3>
                    </div>
                    <p className="text-xs text-white/70 mt-1">{event.company} - {event.location}</p>
                    <p className="text-xs text-white/60 mt-3 font-nunito">{event.description}</p>
                </motion.div>
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <motion.div
                    // Apply all animated styles to the circle
                    style={{ scale, boxShadow, backgroundColor: circleBgColor, borderColor: activeColor }}
                    className="w-5 h-5 rounded-full border-2 z-10"
                />
                <p className="mt-2 text-sm font-semibold text-[#A367B1]">{event.year}</p>
            </div>
        </div>
    );
}

export default TimelineTile;
