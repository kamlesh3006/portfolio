import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectCarousel({ imagePaths, isMobileProjectType }) {
  if (!imagePaths || imagePaths.length === 0) {
    return null;
  }

  return (
    // --- CHANGE: Added the `group` class to this container ---
    // This allows child elements to react to the hover state of this parent div.
    <div className={`relative group ${isMobileProjectType ? 'max-w-sm mx-auto' : ''}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="works-carousel"
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <div className="p-16 overflow-hidden flex justify-center items-center">
              <img 
                src={path} 
                alt={`Project screenshot ${index + 1}`} 
                // --- CHANGE: Replaced `hover:` with `group-hover:` ---
                // Now, hovering anywhere on the parent `group` will trigger these effects.
                // Added a custom drop-shadow for the white glow effect.
                className={`
                  rounded-lg shadow-lg 
                  ${isMobileProjectType ? 'aspect-[9/19]' : 'aspect-video'} w-3/4
                  transition-all duration-300 ease-in-out 
                  group-hover:scale-110 
                  group-hover:filter group-hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.3)]
                `}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .works-carousel .swiper-button-next,
        .works-carousel .swiper-button-prev {
          color: #121212;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          transition: background-color 0.3s;
        }
        .works-carousel .swiper-button-next:hover,
        .works-carousel .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
        .works-carousel .swiper-button-next::after,
        .works-carousel .swiper-button-prev::after {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .works-carousel .swiper-pagination-bullet {
          background: #121212;
          opacity: 0.6;
        }
        .works-carousel .swiper-pagination-bullet-active {
          background: #A367B1;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
export default ProjectCarousel;
