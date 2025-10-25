import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section
      className="px-6 md:px-12 lg:px-[12%] py-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
      data-aos="fade-up"
    >
      {/* عدد الجلسات */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl font-bricolage font-bold">
          <CountUp end={320} duration={6} />
          <span className="text-purple-500">+</span>
        </h1>
        <p className="uppercase tracking-wider text-sm sm:text-base text-gray-400 mt-2">
          Photo Sessions
        </p>
      </div>

      {/* عدد العملاء */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl font-bricolage font-bold">
          <CountUp end={180} duration={6} />
          <span className="text-purple-500">+</span>
        </h1>
        <p className="uppercase tracking-wider text-sm sm:text-base text-gray-400 mt-2">
          Clients
        </p>
      </div>

      {/* عدد الصور المنشورة */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl font-bricolage font-bold">
          <CountUp end={1200} duration={6} />
          <span className="text-purple-500">+</span>
        </h1>
        <p className="uppercase tracking-wider text-sm sm:text-base text-gray-400 mt-2">
          Published Photos
        </p>
      </div>

      {/* عدد الجوائز */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl font-bricolage font-bold">
          <CountUp end={8} duration={6} />
          <span className="text-purple-500">+</span>
        </h1>
        <p className="uppercase tracking-wider text-sm sm:text-base text-gray-400 mt-2">
          Cources
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
