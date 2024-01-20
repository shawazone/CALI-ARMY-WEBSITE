// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-black ">
            <div className="container flex justify-around items-center">
                <Link to="/" className="text-white text-2xl font-bold flex  ">
                    <img src={process.env.PUBLIC_URL + '/cali-army-logo.png'}  alt="Cali Army Logo" className="w-2/6   h-auto m-2 shadow-violet-50" />
                   
                </Link>

                <div className="flex space-x-4 w-3/6">
                    <Link to="/athletes" className="text-white text-2xl hover:text-red-400 ">Athletes</Link>
                    <Link to="/products" className="text-white text-2xl  hover:text-red-400">Products</Link>
                    <Link to="/programs" className="text-white text-2xl  hover:text-red-400">Programs</Link>
                    <Link to="/aboutus" className="text-white text-2xl  hover:text-red-400">About Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
