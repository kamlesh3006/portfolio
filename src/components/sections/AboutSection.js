import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const StatItem = ({ number, label, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-[#A367B1]">{number}</p>
      <p className="text-xs text-white/70 mt-1 whitespace-pre-line font-nunito">{label}</p>
    </div>
  </ScrollReveal>
);

function AboutSection() {
  const stats = [
    { number: '1+', label: 'Years\nExperience', delay: 0.5 },
    { number: '10+', label: 'Projects\nCompleted', delay: 0.6 },
    { number: 'Thousands', label: 'of Codes\nWritten', delay: 0.7 },
    { number: 'Hundreds', label: 'of Problems\nSolved', delay: 0.8 },
    { number: '∞', label: 'Coffee\nConsumed', delay: 0.9 },
  ];

  return (
    // Make the section a full-height flex column
    <section className="min-h-screen w-full flex flex-col py-20 px-4 md:px-8 bg-[#1a1a1a]">
      {/* This container will grow to push the stats to the bottom */}
      <div className="container mx-auto flex flex-col flex-grow justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-48">
          <ScrollReveal>
            <h2 className="text-sm font-bold text-white/80 md:w-1/4 text-center md:text-right font-nunito">(About.)</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-3xl font-bold max-w-2xl md:w-5/6 text-center md:text-left leading-tight">
              I thrive on transforming real-world challenges into elegant solutions through scalable architecture and machine learning, driven by a passion for exploring new and emerging technologies.
            </p>
          </ScrollReveal>
        </div>
      </div>
      
      {/* This container will now be at the bottom of the section */}
      <div className="container mx-auto pt-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;