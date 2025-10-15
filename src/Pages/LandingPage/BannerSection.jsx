import React from 'react';
import bannere from '../../assets/bannere.jpg';

const BannerSection = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* الصورة */}
      <div className="w-full h-full" data-aos="fade-right">
        <img
          src={bannere}
          alt="office scene"
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى */}
      <div className="flex flex-col justify-center py-12 lg:py-16" data-aos="fade-left">
        <div className="pl-6 md:pl-12 lg:pl-20">
          {/* العنوان */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-bold text-white leading-tight md:leading-none mb-6">
            Let's <span className="text-purple-500">make an impact</span> together.
          </h2>

          {/* الوصف */}
          <div className="border-l-4 border-purple-500 pl-4 text-base sm:text-lg text-gray-400 leading-relaxed font-bricolage w-full lg:w-[80%]">
            Welcome to <span className="text-purple-400">Photographer</span> Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
