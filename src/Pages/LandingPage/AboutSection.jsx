import React from "react";

const AboutSection = () => {
  return (
    <section
      id="About"
      className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 px-6 md:px-12 lg:px-[12%] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16 md:py-24 lg:py-[100px]"
    >
      {/* العمود الأول - العنوان */}
      <div
        className="about-content max-w-xl space-y-4"
        data-aos="fade-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-bricolage leading-tight">
          Story<br />About <span className="text-purple-600">Me</span>
        </h2>
      </div>

      {/* العمود الثاني - النصوص */}
      <div className="space-y-6" data-aos="fade-left">
        <p className="relative pl-3 border-l-4 border-purple-600 text-gray-400 font-normal">
          Welcome to{" "}
          <span className="text-purple-600 font-semibold">Photographer</span>{" "}
          where your ideas come to life.
        </p>
        <p className="text-gray-400 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vitae libero nec leo luctus fringilla.
        </p>
        <p className="text-gray-400 font-normal">
          Donec non urna in sapien iaculis ultrices. Mauris fermentum, erat
          sit amet vehicula dignissim, justo orci dignissim arcu.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
