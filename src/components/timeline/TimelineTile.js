import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery'; 
import ScrollReveal from '../shared/ScrollReveal';

function TimelineTile({ event, index, delay }) {
    const isLeft = index % 2 === 0;
    const isMobile = useMediaQuery('(max-width: 767px)');
    const IconComponent = event.icon;
    const illuminatedColor = '#A367B1';

    return (
      <ScrollReveal delay={delay}>
        <div className="md:relative w-full flex justify-center md:justify-start">
            
            <div
                className={`w-full max-w-sm p-6 rounded-lg bg-[#1c1c1c]/50 backdrop-blur-sm 
                            border-t-4 md:border-t-0 md:w-[calc(50%-2.5rem)]
                            ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}
                            ${isLeft ? 'md:border-l-4' : 'md:border-r-4'}`}
                style={{
                    borderTopColor: isMobile ? illuminatedColor : 'transparent',
                    borderLeftColor: !isMobile && isLeft ? illuminatedColor : 'transparent',
                    borderRightColor: !isMobile && !isLeft ? illuminatedColor : 'transparent',
                }}
            >
                <div className={`text-center md:text-inherit`}>
                    <div className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-3 gap-y-1 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <h3 className="font-bold text-lg text-white">{event.title}</h3>
                        <p className="text-sm font-semibold text-[#A367B1]">({event.year})</p>
                    </div>
                    <p className="text-xs text-white/70 mt-1">{event.company} - {event.location}</p>
                    <p className="text-sm text-white/60 mt-3 leading-snug font-nunito">{event.description}</p>
                </div>
            </div>
            <div 
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center
                          w-12 h-12 rounded-full border-2 bg-[#121212] z-10"
              style={{ borderColor: illuminatedColor }}
            >
                {IconComponent && <IconComponent size={24} className="text-[#A367B1]" />}
            </div>
        </div>
      </ScrollReveal>
    );
}

export default TimelineTile;