import React, { useEffect } from 'react'; 
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import BrandsSection from './BrandsSection';
import BannerSection from './BannerSection';
import ContactSection from './ContactSection';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Footer from '../../Components/Common/Footer/Footer';
import ThemeToggle from "../../Components/Common/Theme/ThemeToggle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: false,
        delay: 100,
        offset: 100,
      });

      const timeout = setTimeout(() => {
        AOS.refresh();
      }, 500);
    
    return () => clearTimeout(timeout);
  }
}, []);
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            
            <StatsSection />
          
            
            <BrandsSection />
            
            <BannerSection />
            <ContactSection />
            <Footer />

            <ThemeToggle />
        </>
    );
};

export default LandingPage;