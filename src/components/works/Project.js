import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ScrollReveal from '../shared/ScrollReveal';

function Project({ title, description, imagePaths, type }) {
  const isMobileProjectType = type === 'mobile';

  return (
    <div className="w-full flex items-center py-16 px-4 md:px-8 bg-cover bg-center">
      <div className="container mx-auto">
        <div className={`flex flex-col ${isMobileProjectType ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
          <div className="md:w-1/3">
            <ScrollReveal>
              <h3 className="text-2xl md:text-3xl tracking-widest text-[#F5F5F5]">{title}</h3>
              <p className="mt-4 text-[#F5F5F5]/80 tracking-widest leading-relaxed font-nunito font-thin">{description}</p>
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
