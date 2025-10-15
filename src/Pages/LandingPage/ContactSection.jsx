import React from "react";

const ContactSection = () => {
  return (
    <section
      id="Contact"
      className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black text-white"
    >
      {/* ✅ قسم التواصل */}
      <div
        className="flex items-center justify-center px-6 sm:px-10 lg:px-20 py-16 bg-gradient-to-br from-black via-gray-900 to-[#111] border-t border-gray-800"
        data-aos="fade-right"
      >
        <form className="max-w-lg w-full space-y-8">
          {/* العنوان */}
          <div>
            <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-semibold uppercase tracking-wide font-bricolage">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-bricolage mt-4 leading-tight">
              Let’s{" "}
              <span className="text-purple-400">Create Together</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md">
              Have a project, event, or portrait idea?  
              Let’s bring your vision to life — I’m available worldwide 
            </p>
          </div>

          {/* الحقول */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 focus:outline-none py-3 text-sm placeholder:text-gray-500 font-bricolage"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 focus:outline-none py-3 text-sm placeholder:text-gray-500 font-bricolage"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Tell me about your project or event"
            className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 focus:outline-none py-3 text-sm placeholder:text-gray-500 font-bricolage resize-none"
          ></textarea>

          {/* الزر والملاحظة */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-4">
            <p className="text-xs text-gray-500 font-light">
              I usually respond within 24 hours 
            </p>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* ✅ خريطة الموقع */}
      <div
        className="w-full h-[50vh] lg:h-full"
        data-aos="fade-left"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.4987316276!2d36.28289545!3d33.50747550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus!5e0!3m2!1sen!2ssy!4v1655116130942!5m2!1sen!2ssy"
          className="w-full h-full grayscale opacity-90 hover:opacity-100 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
