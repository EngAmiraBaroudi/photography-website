import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";

const clients = [
  { image: brand1, name: "Canon" },
  { image: brand2, name: "National" },
  { image: brand3, name: "Sony Alpha" },
  { image: brand4, name: "Vogue" },
  { image: brand1, name: "Canon" },
  { image: brand2, name: "National" },
]; // كرر الصور قليلاً لتكون الحركة مستمرة بدون توقف

const BrandsSection = () => {
  return (
    <section
      id="clients"
      className="px-6 md:px-12 lg:px-[12%] py-20 bg-black text-white overflow-hidden"
      data-aos="fade-up"
    >
      {/* العنوان */}
      <div className="mb-12 text-center">
        <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-semibold uppercase tracking-wide">
          Clients
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-bricolage mt-4">
          Brands I’ve <span className="text-purple-400">Collaborated</span> With
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Trusted by global brands and creative studios to capture unforgettable moments.
        </p>
      </div>

      {/* سلايدر دائم الحركة */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={5}
        spaceBetween={60}
        speed={3000} 
        autoplay={{
          delay: 0, // بدون توقف بين الحركات
          disableOnInteraction: false,
        }}
        allowTouchMove={true} // ما في تحكم يدوي
        freeMode={true} // انسيابية بالحركة
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl w-full flex flex-col items-center group">
              <img
                src={client.image}
                alt={client.name}
                className="h-16 md:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <p className="mt-3 text-gray-300 text-sm uppercase tracking-wide">
                {client.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandsSection;
