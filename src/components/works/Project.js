import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ScrollReveal from '../shared/ScrollReveal';

function Project({ title, description, imagePaths, type }) {
  const isMobileProjectType = type === 'mobile';

  return (
    <div className="w-full min-h-screen flex items-center py-16 px-4 md:px-8 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/workBg.png')" }}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${isMobileProjectType ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
          <div className="md:w-1/3">
            <ScrollReveal>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">{title}</h3>
              <p className="mt-4 text-base md:text-lg text-[#F5F5F5]/80 leading-relaxed">{description}</p>
            </ScrollReveal>
          </div>
          <div className="md:w-2/3">
            <ScrollReveal delay={0.2}>
              <ProjectCarousel imagePaths={imagePaths} isMobileProjectType={isMobileProjectType} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
