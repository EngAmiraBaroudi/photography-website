import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`Navbar flex items-center justify-between px-[8%] lg:px-[12%]
             py-5 z-50 w-full transition-all duration-300 ease-in-out
              ${isSticky ? 'fixed top-0 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 shadow-md translate-y-0 opacity-100' : 'relative'
            }`} data-aos="fade-down">

            <div className='logo text-3xl font-bricolage font-bold'>
                <Link to="/">Name<span>Photographer</span></Link>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-3 text-lg font-medium'>
                <li>
                    <Link to="/#Home" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/service" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Service
                    </Link>
                </li>
                <li>
                    <Link to="/design" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Design
                    </Link>
                </li>
                <li>
                    <Link to="/team" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Team
                    </Link>
                </li>      
            </ul>

            <div className='hidden md:flex items-center space-x-4 text-lg'>
                <Link to="/contact" className='border border-purple-500 shadow-md shadow-red-100/0 transition-all px-5 py-2 rounded-lg'>
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-3xl text-black dark:text-white focus:outline-none'>
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-full left-0 w-full bg-white dark:bg-stone-950 border-t border-gray-200 dark:border-gray-700 shadow-md md:hidden'>
                <ul className='flex flex-col items-center space-y-4 py-6 text-lg font-medium'>
                <li>
                    <Link to="/#Home" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/service" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Service
                    </Link>
                </li>
                <li>
                    <Link to="/design" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Design
                    </Link>
                </li>
                <li>
                    <Link to="/team" className='hover:text-purple-500 hover:bg-white rounded transition-all px-3 py-2'>
                        Team
                    </Link>
                </li> 
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;