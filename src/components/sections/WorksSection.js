import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Project from '../works/Project';
import ScrollReveal from '../shared/ScrollReveal';

const projects = [
    {
      title: 'Anviksa: ML-Based CAPTCHA',
      description: 'A novel CAPTCHA system that passively detects bots by capturing and analyzing user behavior (mouse movements, keypresses) with machine learning models like Random Forest and XGBoost, eliminating traditional puzzles.',
      imagePaths: [
        '/assets/works/anviksa-1.png', 
        '/assets/works/anviksa-2.png',
        '/assets/works/anviksa-3.png',
      ],
      type: 'desktop',
    },
    {
      title: 'CodeArena - Coding Platform',
      description: 'A web app for users to practice coding skills in OOP, DSA, and SQL. Features a secure session timeout, a code editor, and a compiler that validates solutions against predefined test cases.',
      imagePaths: [
        '/assets/works/codearena-1.png',
        '/assets/works/codearena-2.png',
        '/assets/works/codearena-3.png',
      ],
      type: 'desktop',
    },
    {
      title: 'MuseWords - Social Media Platform',
      description: 'A social media platform for sharing quotes anonymously, providing a secure space for free expression. It features user authentication and robust admin/super-user roles for content moderation.',
      imagePaths: [
        '/assets/works/musewords-1.jpeg',
        '/assets/works/musewords-2.png',
        '/assets/works/musewords-3.png',
      ],
      type: 'desktop',
    },
];

function WorksSection({ scrollContainerRef }) {
  const targetRef = useRef(null);

  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: targetRef,
    container: scrollContainerRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: headerVisibilityProgress } = useScroll({
      target: targetRef,
      container: scrollContainerRef,
      offset: ['start start', 'end start']
  });

  const x = useTransform(horizontalScrollProgress, [0, 1], ['0%', '-50%']);
  const headerY = useTransform(headerVisibilityProgress, [0, 0.05], ['0%', '-100%']);

  return (
    <section ref={targetRef} className="relative w-full">
      <motion.div
        style={{ y: headerY }}
        className="sticky top-0 h-auto py-16 md:py-32 bg-cover bg-center z-0"
      >
        <div className="relative overflow-hidden">
          <motion.h2
            style={{ x }}
            className="text-6xl md:text-9xl lg:text-[180px] font-black text-[#F5F5F5] whitespace-nowrap mix-blend-difference"
          >
            DESIGNED WITH LOGIC DESIGNED WITH LOGIC
          </motion.h2>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-8 md:mt-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center text-[#121212] font-bold">
              <span className="text-lg">(Works.)</span>
              <p className="text-center text-base md:text-lg my-4 md:my-0">This creation is a confession, written in dark and dart.</p>
              <span className="w-24"></span>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>
      
      <div className="relative z-10 -mt-[35vh] md:-mt-[45vh]">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default WorksSection;