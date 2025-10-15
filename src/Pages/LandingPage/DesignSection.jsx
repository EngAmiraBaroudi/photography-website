import React from "react";
import design1 from "../../assets/design-1.jpg";
import design2 from "../../assets/design-2.jpg";
import design3 from "../../assets/design-3.jpg";
import design4 from "../../assets/design-4.jpg";
import design5 from "../../assets/design-5.jpg";
import design6 from "../../assets/design-6.jpg";
import Footer from "../../Components/Common/Footer/Footer";
import Navbar from "../../Components/Common/Navbar/Navbar";

const designs = [
  { image: design1, title: "Cyberfeature" },
  { image: design2, title: "Modern Studio" },
  { image: design3, title: "Creative Hub" },
  { image: design4, title: "Urban Vision" },
  { image: design5, title: "Nature Style" },
  { image: design6, title: "Abstract Art" },
];

const DesignSection = () => {
  return (
    <>
    <Navbar />
    <section
      id="Design"
      className="px-6 md:px-12 lg:px-[12%] py-16 md:py-24 bg-black text-white"
    >
      {/* Header */}
      <div
        className="flex justify-between items-start md:items-center flex-col md:flex-row"
        data-aos="fade-up"
      >
        <div className="mb-10">
          <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-bold font-bricolage text-sm md:text-base">
            Design
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold font-bricolage leading-snug">
            Designing <span className="text-purple-600">Better</span> World Today
          </h2>
        </div>
        <button className="uppercase hover:tracking-wider transition-all hover:text-purple-500 flex items-center gap-2">
          View All
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      {/* Design Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            data-aos="fade-up"
          >
            {/* Image */}
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl md:text-2xl font-bold uppercase">
                  {design.title}
                </h2>
                <div className="flex flex-col items-center bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition">
                  <i className="bi bi-arrow-up-right text-2xl text-white"></i>
                  <span className="text-xs uppercase mt-1">Read More</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default DesignSection;
