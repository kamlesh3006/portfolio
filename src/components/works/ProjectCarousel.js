import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectCarousel({ imagePaths, isMobileProjectType }) {
  return (
    <div className={`relative ${isMobileProjectType ? 'max-w-sm mx-auto' : ''}`}>
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
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" scale={1.02}>
              <img 
                src={path} 
                alt={`Project screenshot ${index + 1}`} 
                className={`rounded-lg shadow-2xl ${isMobileProjectType ? 'aspect-[9/19]' : 'aspect-video'} object-contain`}
              />
            </Tilt>
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