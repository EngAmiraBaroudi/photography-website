import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Navbar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";

import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";

const blogs = [
  {
    image: blog1,
    title: "Capturing Golden Hour Portraits",
    category: "Photography Tips",
    date: "02 Oct 2025",
  },
  {
    image: blog2,
    title: "Behind the Lens: Street Life Stories",
    category: "Behind the Scenes",
    date: "18 Sep 2025",
  },
  {
    image: blog3,
    title: "How I Edit My RAW Photos for Natural Light",
    category: "Editing",
    date: "09 Aug 2025",
  },
  {
    image: blog4,
    title: "The Power of Minimal Composition",
    category: "Creative Vision",
    date: "27 Jul 2025",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* Navbar دائم بالأعلى */}
      <Navbar />

      <main
        className="px-6 md:px-12 lg:px-[12%] py-20 w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 min-h-screen"
        id="Blog"
        data-aos="fade-up"
      >
        {/* العنوان */}
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
          <div className="mb-10">
            <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-semibold font-bricolage tracking-wide uppercase">
              Blog
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-bricolage mt-3">
              Latest <span className="text-purple-400">Stories</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg">
              Discover photography insights, behind-the-scenes looks, and
              creative inspiration from my latest shoots and travels.
            </p>
          </div>

          <button className="uppercase text-sm border border-purple-500 text-purple-400 px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-all">
            View All <i className="bi bi-arrow-right ml-2"></i>
          </button>
        </div>

        {/* ✅ سلايدر المقالات */}
        <Swiper
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group rounded-xl shadow-lg hover:shadow-purple-400/10 transition duration-300">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl transition duration-500 group-hover:scale-110"
                />

                {/* طبقة شفافة عند الهوفر */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* المحتوى فوق الصورة */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase bg-purple-500/80 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold">{blog.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{blog.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      {/* ✅ Footer دائم بالأسفل */}
      <Footer />
    </>
  );
};

export default BlogSection;
