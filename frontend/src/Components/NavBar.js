// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="bg-black relative">
        <div className="container flex justify-between items-center p-4 md:p-6">
          <Link to="/" className="text-white text-2xl md:text-3xl font-bold flex items-center">
            <img
              src={process.env.PUBLIC_URL + '/cali-army-logo.png'}
              alt="Cali Army Logo"
              className="max-w-40 min-w-10 w-8/12 h-auto md:max-w-60 mr-2 md:mr-4 my-1 shadow-violet-50"
            />
          </Link>
            <div className="hidden md:flex">  
          <Link to="/athletes" className="block text-xl text-white hover:text-red-400 p-4 ">
            Athletes
          </Link>   
          <Link to="/events" className="block text-xl text-white hover:text-red-400 p-4">
            Events
          </Link>
          <Link to="/products" className="block text-xl text-white hover:text-red-400 p-4">
            Products
          </Link>

          <Link to="/blogs" className="block text-xl text-white hover:text-red-400 p-4">
            Blog
          </Link>
        
          {/* <Link to="/programs" className="block text-xl text-white hover:text-red-400 p-4">
            Programs
          </Link> */}
          <Link to="/aboutus" className="block text-xl text-white hover:text-red-400 p-4">
            About Us
          </Link>
            </div>
             
  
          {/* Button to toggle the menu on small screens */}
          <button
            className="md:hidden text-white text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
  
        {/* Links in a responsive menu */}
        <div
          className={`md:hidden text-white text-xl space-y-4 absolute top-full left-0 right-0 bg-black z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <Link to="/athletes" className="block hover:text-red-400 p-4">
            Athletes
          </Link>
          <Link to="/products" className="block hover:text-red-400 p-4">
            Products
          </Link>
          <Link to="/events" className="block text-xl text-white hover:text-red-400 p-4">
            Events
          </Link>
          
          <Link to="/blogs" className="block text-xl text-white hover:text-red-400 p-4">
            Blog
          </Link>

          {/* <Link to="/programs" className="block hover:text-red-400 p-4">
            Programs
          </Link> */}
          <Link to="/aboutus" className="block hover:text-red-400 p-4">
            About Us
          </Link>
        </div>
      </nav>
    );
  
    
};

export default NavBar;
