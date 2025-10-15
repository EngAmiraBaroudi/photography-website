import React from "react";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";

const services = [
  {
    title: "Wedding Photography",
    description: "Full-day wedding coverage with professional editing.",
    features: [
      "Pre-wedding shoot",
      "Full event coverage",
      "Edited album",
      "Highlight reel",
    ],
  },
  {
    title: "Birthday Shoot",
    description: "Fun and vibrant photoshoot for your special day.",
    features: [
      "1.5 hours session",
      "Unlimited photos",
      "Edited highlights",
      "Social media reel",
    ],
  },
  {
    title: "Portrait Session",
    description: "Professional portraits for personal or business use.",
    features: [
      "1 hour session",
      "Studio/Outdoor options",
      "10 edited photos",
      "Retouching included",
    ],
  },
  {
    title: "Product Photography",
    description:
      "Showcase your products with high-quality, creative, and detail-rich photos.",
    features: [
      "Studio lighting setup",
      "Multiple product angles",
      "Color correction",
      "Background cleanup",
    ],
  },
  {
    title: "Graduation Session",
    description:
      "Celebrate your achievements with a stylish and timeless graduation shoot.",
    features: [
      "Outdoor or campus setting",
      "Cap & gown poses",
      "Group photos",
      "Edited highlight gallery",
    ],
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleBook = (serviceTitle) => {
    navigate(`/booking?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <>
      <Navbar />
      <section
        id="Services"
        className="px-6 md:px-12 lg:px-[12%] py-16 md:py-24 bg-black text-white overflow-hidden"
      >
        {/* Header */}
        <div className="pb-10 text-center" data-aos="fade-up">
          <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-bold font-bricolage text-sm md:text-base">
            Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore a range of professional photography services designed to
            capture your most important moments beautifully.
          </p>
        </div>

        {/* Services Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full p-6 bg-neutral-900/40 rounded-2xl shadow hover:shadow-lg transition border border-purple-500/10 flex flex-col justify-between min-h-[500px]"
                data-aos="fade-up"
              >
                {/* Title */}
                <h3 className="pb-4 text-2xl md:text-3xl font-bold font-bricolage uppercase hover:text-purple-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="pb-4 text-base md:text-lg text-gray-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex-1 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="uppercase font-medium border-t border-b border-gray-200/10 py-3 text-gray-400 hover:text-gray-200 transition cursor-pointer font-bricolage"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-6 flex justify-between items-center">
                  <button
                    className="group flex flex-col justify-between items-end bg-neutral-800 py-5 px-4 min-w-[140px] text-xs font-semibold tracking-widest text-gray-300 hover:bg-purple-600 hover:text-white transition duration-300 rounded-xl"
                    style={{ fontFamily: "var(--Bricolage-font)" }}
                  >
                    <i className="bi bi-arrow-up-right text-3xl group-hover:text-white"></i>
                    Read More
                  </button>

                  <button
                    onClick={() => handleBook(service.title)}
                    className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Book this service
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default ServicesSection;
