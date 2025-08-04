import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ScrollReveal from '../shared/ScrollReveal';

function Project({ title, description, imagePaths, type }) {
  const isMobileProjectType = type === 'mobile';

  return (
    // RESPONSIVE: Adjusted vertical padding for different screen sizes.
    <div className="w-full flex items-center py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-cover bg-center">
      <div className="container mx-auto">
        <div className={`flex flex-col ${isMobileProjectType ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
          
          {/* Text Content Column */}
          {/* RESPONSIVE: On mobile, text is centered. On desktop, it's left-aligned. */}
          <div className="md:w-1/3 text-center md:text-left">
            <ScrollReveal>
              {/* The existing responsive font sizes are great. */}
              <h3 className="text-2xl md:text-3xl tracking-widest text-[#F5F5F5]">{title}</h3>
              {/* RESPONSIVE: Added responsive font size for the description. */}
              <p className="mt-4 text-sm sm:text-base text-[#F5F5F5]/80 tracking-widest leading-relaxed font-nunito font-thin">{description}</p>
            </ScrollReveal>
          </div>

          {/* Image Carousel Column */}
          <div className="w-full md:w-2/3">
            <ScrollReveal delay={0.2}>
              {/* The responsiveness of the carousel itself depends on the ProjectCarousel.js file */}
              <ProjectCarousel imagePaths={imagePaths} isMobileProjectType={isMobileProjectType} />
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Project;