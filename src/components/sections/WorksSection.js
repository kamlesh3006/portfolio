import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Project from '../works/Project';
import ScrollReveal from '../shared/ScrollReveal';
import anviksa1 from '../../assets/works/anviksa-1.png';
import anviksa2 from '../../assets/works/anviksa-2.png';
import anviksa3 from '../../assets/works/anviksa-3.png';
import codearena1 from '../../assets/works/codearena-1.png';
import codearena2 from '../../assets/works/codearena-2.png';
import codearena3 from '../../assets/works/codearena-3.png';
import musewords1 from '../../assets/works/musewords-1.jpeg';
import musewords2 from '../../assets/works/musewords-2.png';
import musewords3 from '../../assets/works/musewords-3.png';

const projects = [
    {
      title: 'Anviksa: ML-Based CAPTCHA',
      description: 'A novel CAPTCHA system that passively detects bots by capturing and analyzing user behavior (mouse movements, keypresses) with machine learning models like Random Forest and XGBoost, eliminating traditional puzzles.',
      imagePaths: [anviksa1, anviksa2, anviksa3],
      type: 'desktop',
      githubUrl: 'https://github.com/kshitijm310/Anviksa',
    },
    {
      title: 'CodeArena - Coding Platform',
      description: 'A web app for users to practice coding skills in OOP, DSA, and SQL. Features a secure session timeout, a code editor, and a compiler that validates solutions against predefined test cases.',
      imagePaths: [codearena1, codearena2, codearena3],
      type: 'desktop',
      githubUrl: 'https://github.com/kamlesh3006/CodeArena',
    },
    {
      title: 'MuseWords - Social Media Platform',
      description: 'A social media platform for sharing quotes anonymously, providing a secure space for free expression. It features user authentication and robust admin/super-user roles for content moderation.',
      imagePaths: [musewords1, musewords2, musewords3],
      type: 'desktop',
      githubUrl: 'https://github.com/kamlesh3006/social',
    },
];

function WorksSection() {
    const targetRef = useRef(null);
    const { scrollYProgress: horizontalScrollProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const { scrollYProgress: headerVisibilityProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start']
    });

    const x = useTransform(horizontalScrollProgress, [0, 1], ['0%', '-50%']);
    const headerY = useTransform(headerVisibilityProgress, [0, 0.05], ['0%', '-100%']);

    return (
        <section ref={targetRef} className="relative w-full bg-[#121212]">

            {/* Sticky Header with Background Text */}
            <motion.div
                style={{ y: headerY }}
                className="sticky top-0 h-[50vh] md:h-auto py-24 md:py-32 flex items-center bg-[#121212] z-0"
            >
                <div className="relative overflow-hidden">
                    <motion.h2
                        style={{ x }}
                        className="text-6xl md:text-9xl lg:text-[180px] font-black text-[#1f1f1f] whitespace-nowrap"
                    >
                        DESIGNED WITH LOGIC DESIGNED WITH LOGIC
                    </motion.h2>
                </div>
            </motion.div>

            {/* This container holds both the title and the project list, managing the overlap */}
            <div className="relative z-10 -mt-[40vh] md:-mt-64">
                {/* "(Works.)" Title Overlay */}
                <div className="container mx-auto px-4 md:px-8">
                    <ScrollReveal>
                        <div className="flex justify-between items-center text-[#F5F5F5] py-12 font-nunito text-sm">
                            <span className="font-thin">(Works.)</span>
                            <span className="w-0 border-b border-white/20"></span>
                        </div>
                    </ScrollReveal>
                </div>
                
                {/* Container for the list of projects */}
                <div className="relative bg-[#1A1A1A] z-10 -mt-24">
                {projects.map((project, index) => (
                    <Project 
                    key={index} 
                    {...project} 
                    githubUrl={project.githubUrl} // Add this line
                    />
                ))}
                </div>
            </div>
        </section>
    );
}

export default WorksSection;