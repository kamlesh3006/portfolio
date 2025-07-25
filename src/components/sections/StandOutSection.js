import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

function StandOutSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#121212] py-20 px-4 md:px-8">
      <div className="container mx-auto flex flex-col justify-center gap-8 md:gap-16 text-white font-black uppercase">
        <ScrollReveal offset={100}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-left text-white/90 tracking-tighter">
            (A promise,)
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.2}>
          <h2 className="text-6xl md:text-8xl lg:text-9xl text-right text-[#A367B1] tracking-tighter leading-none">
            made of<br/>pixels,
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.4}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-left text-white/90 tracking-[0.2em]">
            blossoms in
          </h2>
        </ScrollReveal>
        <ScrollReveal offset={100} delay={0.6}>
          <h2 className="text-7xl md:text-9xl lg:text-[160px] text-center text-white tracking-tight">
            the dart.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default StandOutSection;