import React from "react";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceType = params.get("service");

  console.log("Selected service:", serviceType);
};

const BookingPage = () => {
  return (
    <>
      <Navbar />

      <section
        id="Booking"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-[12%] py-16 bg-black text-white relative overflow-hidden"
      >
        {/* خلفية ضبابية */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-700 blur-[250px] opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-700 blur-[250px] opacity-40 -z-10"></div>

        {/* العنوان */}
        <div className="text-center mb-12" data-aos="fade-down">
          <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-semibold uppercase tracking-widest">
            Booking
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-bricolage mt-4">
            Book Your <span className="text-purple-500">Photo Session</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Fill in your details and let’s capture your best moments.
          </p>
        </div>

        {/* فورم الحجز */}
        <form
          className="w-full max-w-3xl bg-zinc-900/70 backdrop-blur-md border border-zinc-700 rounded-2xl p-8 md:p-12 space-y-6 shadow-xl"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm placeholder:text-gray-500 uppercase tracking-wider"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm placeholder:text-gray-500 uppercase tracking-wider"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm placeholder:text-gray-500 uppercase tracking-wider"
            />
            <select
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm text-gray-400 uppercase tracking-wider"
              required
            >
              <option value="">Select Session Type</option>
              <option>Portrait Session</option>
              <option>Wedding Photography</option>
              <option>Product Shoot</option>
              <option>Outdoor Session</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm text-gray-400 uppercase tracking-wider"
              required
            />
            <input
              type="time"
              className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm text-gray-400 uppercase tracking-wider"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Additional Notes"
            className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-sm placeholder:text-gray-500 uppercase tracking-wider"
          ></textarea>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white text-base font-semibold shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default BookingPage;
