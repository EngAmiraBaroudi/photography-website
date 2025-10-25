import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import About from './Pages/LandingPage/AboutSection';
import Contact from './Pages/LandingPage/ContactSection';
import Service from './Pages/LandingPage/ServicesSection';
import Blog from './Pages/LandingPage/BlogSection';
import Team from './Pages/LandingPage/TeamSection';
import Design from './Pages/LandingPage/DesignSection';
import Book from './Pages/LandingPage/BookingSection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/team' element={<Team />} />
        <Route path='/design' element={<Design />} />
        <Route path="/booking" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;