import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="Home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-[12%] overflow-hidden transition-colors duration-500"
    >
      {/* Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[400px] h-[250px] 
        bg-purple-600/60 dark:bg-purple-800/70 
        blur-[270px] -z-10 transition-colors duration-500"></div>

      <div className="absolute bottom-0 left-1/3 w-[400px] h-[250px] 
        bg-purple-400/70 dark:bg-purple-700/70 
        blur-[300px] -z-10 transition-colors duration-500"></div>

      <div className="absolute top-0 right-0 w-[150px] h-[150px] 
        bg-purple-300/60 dark:bg-purple-600/70 
        blur-[130px] -z-10 transition-colors duration-500"></div>


      {/* Content */}
      <div
        className="max-w-xl text-center md:text-left space-y-6"
        data-aos="fade-right"
      >
        <span className="block text-lg font-medium text-gray-600 dark:text-gray-300">
          Welcome My friend !
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-bricolage leading-tight text-gray-900 dark:text-white">
          I am <span className="text-purple-500">Alex Carter</span> <br />
          Professional Photographer
        </h1>

        <div className="pt-4">
          <button
            onClick={() => navigate("/booking")}
            className="px-6 py-3 bg-purple-500 text-lg md:text-xl text-white rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hero Image / Elements */}
      <div className="relative mt-10 lg:mt-0 flex items-center justify-center">
        <div className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-square rounded-3xl overflow-hidden bg-purple-500/10 border border-purple-700/20 shadow-lg flex items-center justify-center">
          <p className="text-purple-400 text-xl font-light">Your photo here </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
