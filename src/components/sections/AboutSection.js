import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

const StatItem = ({ number, label, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="flex flex-col items-center text-center w-full">
      <p className="text-2xl md:text-3xl font-bold text-[#A367B1]">{number}</p>
      <p className="text-[10px] md:text-xs text-white/70 mt-1 whitespace-pre-line font-nunito">{label}</p>
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
    <section className="min-h-screen w-full flex flex-col justify-center py-20 px-4 md:px-8 bg-[#1a1a1a]">
      
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
      
      <div className="container mx-auto pt-10 mt-10 border-t border-white/10">

        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-x-4">
            {stats.slice(0, 3).map(stat => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-x-4">
            {stats.slice(3, 5).map(stat => (
              <div key={stat.label} className="w-1/3">
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-5 md:gap-4">
          {stats.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;