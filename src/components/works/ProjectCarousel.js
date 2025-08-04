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
            <div className="p-4 sm:p-8 md:p-16 overflow-hidden flex justify-center items-center">
              <img 
                src={path} 
                alt={`Project screenshot ${index + 1}`} 
                className={`
                  rounded-lg shadow-lg 
                  ${isMobileProjectType ? 'aspect-[9/19]' : 'aspect-video'} 
                  
                  /* --- FIX 2: Width is now responsive --- */
                  w-full md:w-3/4

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
          /* Hiding buttons on small screens for a cleaner look */
          display: none;
        }
        @media (min-width: 768px) {
          .works-carousel .swiper-button-next,
          .works-carousel .swiper-button-prev {
            display: flex; /* Show buttons on larger screens */
            color: #121212;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            transition: background-color 0.3s;
          }
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
          background: #A367B1; /* Changed to accent color for better visibility */
          opacity: 0.5;
        }
        .works-carousel .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
export default ProjectCarousel;