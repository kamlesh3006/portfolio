import React from 'react';
import TimelineStrip from '../timeline/TimelineStrip';
import ScrollReveal from '../shared/ScrollReveal';

function TimelineSection({ scrollContainerRef }) {
  return (
    <section className="w-full pt-20 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Career Timeline</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            A journey through professional milestones and growth
          </p>
        </ScrollReveal>
      </div>
      <div className="mt-16">
        <TimelineStrip scrollContainerRef={scrollContainerRef} />
      </div>
    </section>
  );
}
export default TimelineSection;