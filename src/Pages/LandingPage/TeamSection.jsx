import React from 'react';
import team1 from '../../assets/team-1.jpg';
import team2 from '../../assets/team-2.jpg';
import team3 from '../../assets/team-3.jpg';
import team4 from '../../assets/team-4.jpg';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Footer from '../../Components/Common/Footer/Footer';

const TeamSection = () => {
  return (
    <>
    <Navbar />
    <main className="py-16 bg-black" id="Teams">
      <div className="px-6 md:px-12 lg:px-[12%] flex justify-between items-start md:items-center flex-col md:flex-row" data-aos="fade-up">
        <div className="title mb-10">
          <span className="text-purple-500 border border-purple-500 rounded px-3 py-1 font-bold font-bricolage">
            Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-bricolage mt-3 text-white">
            Meet Our <span className="text-purple-500">Photographers</span>
          </h2>
        </div>
        <button className="uppercase hover:tracking-wider transition-all hover:text-purple-400 text-white">
          View All <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-[12%]" data-aos="fade-up">
        {/* Photographer 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={team1} alt="photographer" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
            <h4 className="text-2xl font-bold uppercase text-white">Sophia Lee</h4>
            <p className="uppercase text-sm font-semibold tracking-widest text-purple-400">Wedding Photographer</p>
            <ul className="flex gap-4 mt-4 text-white">
              <li><i className="bi bi-instagram text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-facebook text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-pinterest text-xl hover:text-purple-400"></i></li>
            </ul>
          </div>
        </div>

        {/* Photographer 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={team2} alt="photographer" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
            <h4 className="text-2xl font-bold uppercase text-white">Daniel Cruz</h4>
            <p className="uppercase text-sm font-semibold tracking-widest text-purple-400">Portrait Expert</p>
            <ul className="flex gap-4 mt-4 text-white">
              <li><i className="bi bi-instagram text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-behance text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-facebook text-xl hover:text-purple-400"></i></li>
            </ul>
          </div>
        </div>

        {/* Photographer 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={team3} alt="photographer" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
            <h4 className="text-2xl font-bold uppercase text-white">Aisha Karim</h4>
            <p className="uppercase text-sm font-semibold tracking-widest text-purple-400">Event Photographer</p>
            <ul className="flex gap-4 mt-4 text-white">
              <li><i className="bi bi-instagram text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-dribbble text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-facebook text-xl hover:text-purple-400"></i></li>
            </ul>
          </div>
        </div>

        {/* Photographer 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={team4} alt="photographer" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
            <h4 className="text-2xl font-bold uppercase text-white">Omar Haddad</h4>
            <p className="uppercase text-sm font-semibold tracking-widest text-purple-400">Commercial Photographer</p>
            <ul className="flex gap-4 mt-4 text-white">
              <li><i className="bi bi-instagram text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-linkedin text-xl hover:text-purple-400"></i></li>
              <li><i className="bi bi-facebook text-xl hover:text-purple-400"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default TeamSection;
