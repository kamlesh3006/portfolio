
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import TiltableImage from './TiltableImage'; // Import the new component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectCarousel({ imagePaths, isMobileProjectType }) {
  if (!imagePaths || imagePaths.length === 0) {
    return null; // or a placeholder
  }

  return (
    // --- CHANGE: Added padding (p-8) to the container to give the tilting image space ---
    <div className={`relative p-8 ${isMobileProjectType ? 'max-w-sm mx-auto' : ''}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="works-carousel"
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <TiltableImage 
              src={path} 
              alt={`Project screenshot ${index + 1}`} 
              className={`rounded-2xl ${isMobileProjectType ? 'aspect-[9/19]' : 'aspect-video'} object-contain w-full h-full`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Swiper styles would be in your global CSS file */}
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