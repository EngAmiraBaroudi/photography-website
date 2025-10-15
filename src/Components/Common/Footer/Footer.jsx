import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-[12%] pt-16 pb-6">
      {/* ✅ قسم الروابط */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700/50 py-8 gap-8 text-center md:text-left">
        {/* روابط التنقل */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-medium">
          <li>
            <Link to="/" className="hover:text-purple-400 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-purple-400 transition-colors duration-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-purple-400 transition-colors duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* وسائل التواصل الاجتماعي */}
        <ul className="flex items-center justify-center gap-6 text-2xl">
          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            <i className="bi bi-instagram"></i>
          </li>
          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            <i className="bi bi-facebook"></i>
          </li>
          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            <i className="bi bi-pinterest"></i>
          </li>
          <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            <i className="bi bi-envelope"></i>
          </li>
        </ul>
      </div>

      {/* ✅ حقوق الملكية */}
      <div className="border-t border-gray-700/50 mt-6 pt-6 text-center text-gray-400 text-sm md:text-base">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-semibold">LensCraft Photography</span> — Capturing your moments with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
