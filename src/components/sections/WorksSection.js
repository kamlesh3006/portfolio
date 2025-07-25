import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Project from '../works/Project';
import ScrollReveal from '../shared/ScrollReveal';

const projects = [
    {
      title: 'FE Touch',
      description: 'A sleek, tablet-based app made for bank tellers — associated with Collega Inti Pratama. FE Touch brings a fresh, modern interface to everyday banking tasks. something that feels fast, clean, and easy to use.',
      imagePath: '/assets/images/works/project1-1.png',
      type: 'desktop',
    },
    {
      title: 'Panic Button',
      description: 'A simple yet essential SOS app built for Damkar Banten. Designed for quick, real-time emergency reporting and tracking, it helps firefighters receive, manage, and respond to incidents faster. Clean UI meets critical functionality — because in emergencies, every second (and every tap) counts.',
      imagePath: '/assets/images/works/project3-1.png',
      type: 'mobile',
    },
    {
      title: 'Core X',
      description: 'A modern core banking solution built to replace the aging Olibs 724 system. Designed to handle the heart of banking operations with a more scalable, efficient, and user-friendly approach. Core X brings a fresh layer of clarity and performance to complex processes — all while keeping the reliability banks depend on.',
      imagePath: '/assets/images/works/project2-1.png',
      type: 'desktop',
    },
    {
      title: 'Digital Lending',
      description: 'A seamless loan application platform that brings the lending process fully online — from registration to approval. Built to simplify and speed up credit access for users, while giving banks a smarter way to manage risk and workflow. Digital Lending makes borrowing feel less like paperwork and more like progress.',
      imagePath: '/assets/images/works/project4-1.png',
      type: 'mobile',
    },
    {
      title: 'Roast POS',
      description: "An all-in-one restaurant operations app built to handle everything from POS transactions to inventory, stock tracking, staff presence, and real-time dashboards. Designed for smooth day-to-day operations — whether you're managing the floor, the kitchen, or the cash flow. Roast POS brings structure, clarity, and speed to the hustle of running a restaurant.",
      imagePath: '/assets/images/works/project6-1.png',
      type: 'desktop',
    },
    {
      title: 'Lelang Online',
      description: "A digital platform that brings the excitement of live auctions to your screen. Built to simplify the bidding process, manage listings, and ensure a fair, transparent experience for all users. Whether you're buying or selling, Lelang Online makes auctions feel accessible, fast, and just a little more fun.",
      imagePath: '/assets/images/works/project5-1.png',
      type: 'mobile',
    },
];

function WorksSection({ scrollContainerRef }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: scrollContainerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={targetRef} className="relative w-full">
      <div className="sticky top-0 h-auto py-16 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/paper.png')" }}>
        <div className="relative overflow-hidden">
          <motion.h2
            style={{ x }}
            className="text-6xl md:text-9xl lg:text-[180px] font-black text-[#121212] whitespace-nowrap"
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
      </div>
      <div className="relative z-10">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
export default WorksSection;