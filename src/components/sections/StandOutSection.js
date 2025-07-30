import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import AnimatedText from '../shared/AnimatedText'; // Import the new component

function StandOutSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#121212] py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto flex flex-col justify-center gap-8 md:gap-16 text-white font-black uppercase">
        <ScrollReveal offset={100}>
          <h2 className="text-3xl font-light font-nunito text-left text-white/90 tracking-wider lowercase">
            <AnimatedText text="(An insight,)" />
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.2}>
          <h2 className="text-6xl md:text-8xl lg:text-9xl text-right text-[#A367B1] tracking-wider leading-none">
            <AnimatedText text="born from" />
            <br/>
            <AnimatedText text="data," />
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.4}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-left text-white/90 tracking-[0.2em]">
            <AnimatedText text="comes alive in" />
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.6}>
          <h2 className="text-7xl md:text-9xl lg:text-[160px] text-center text-white tracking-wider">
            <AnimatedText text="the code." />
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default StandOutSection;
