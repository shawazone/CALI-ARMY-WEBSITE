// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-950 ">
            <div className="container flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold flex  ">
                    <img src={process.env.PUBLIC_URL + '/cali-army3.png'}  alt="Cali Army Logo" className="w-40 h-10 m-2 shadow-violet-50" />
                   
                </Link>

                <div className="flex space-x-4">
                    <Link to="/athletes" className="text-white hover:underline">Athletes</Link>
                    <Link to="/programs" className="text-white hover:underline">Programs</Link>
                    <Link to="/aboutus" className="text-white hover:underline">About Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
