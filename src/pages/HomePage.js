import React, { useRef, createRef } from 'react';
import GlassNavbar from '../components/shared/GlassNavbar';
import CursorRevealHeroSection from '../components/sections/CursorRevealHeroSection';
import AboutSection from '../components/sections/AboutSection';
import TimelineSection from '../components/sections/TimelineSection';
import WorksSection from '../components/sections/WorksSection';
import StandOutSection from '../components/sections/StandOutSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/shared/Footer';
import { Toaster } from 'react-hot-toast';

const sections = ['Hero', 'About', 'Timeline', 'Works', 'Stand Out', 'Contact'];

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

const customScrollTo = (target, container, duration) => {
    const start = container.scrollTop;
    const change = target.offsetTop - start;
    let startTime = null;

    const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        container.scrollTop = easeInOutQuad(elapsed, start, change, duration);
        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};


function HomePage() {
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(sections.map(() => createRef()));

  const scrollToSection = (index) => {
    if (sectionRefs.current[index] && sectionRefs.current[index].current && scrollContainerRef.current) {
      customScrollTo(sectionRefs.current[index].current, scrollContainerRef.current, 1500);
    }
  };

  return (
    <div className="bg-[#121212] text-gray-50 font-sans">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#A367B1',
            color: 'white',
          },
        }}
      />
      <GlassNavbar onNavigationTap={scrollToSection} />
      
      <main ref={scrollContainerRef} className="h-screen w-screen overflow-y-auto overflow-x-hidden">
        <div ref={sectionRefs.current[0]}>
          <CursorRevealHeroSection onExplorePressed={() => scrollToSection(3)} />
        </div>
        <div ref={sectionRefs.current[1]}>
          <AboutSection />
        </div>
        <div ref={sectionRefs.current[2]}>
          <TimelineSection scrollContainerRef={scrollContainerRef} />
        </div>
        <div ref={sectionRefs.current[3]}>
          <WorksSection scrollContainerRef={scrollContainerRef} />
        </div>
        <div ref={sectionRefs.current[4]}>
          <StandOutSection />
        </div>
        <div ref={sectionRefs.current[5]}>
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default HomePage;