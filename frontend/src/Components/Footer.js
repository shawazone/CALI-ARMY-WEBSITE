// YourFooterComponent.js

import React from 'react';
import { Link } from 'react-router-dom';

const YourFooterComponent = () => {
  return (
    <footer className="bg-black text-white text-center py-4  bottom-0 w-full">
      <div className="container flex justify-center flex-col items-center ">
        <p>&copy; 2024 Cali Army. All rights reserved.</p>
        {/* <Link to="https://www.instagram.com/cali.army.lb/?ref=sTZh6&hl=da"> */}
        <img src={process.env.PUBLIC_URL + '/instagram.png'} alt="Instagram" className="w-8 h-8  bg-white object-cover rounded-lg mt-4 transition-transform transform hover:scale-125" >
        </img>
        {/* </Link>  */}
        
      </div>
    </footer>
  );
};

export default YourFooterComponent;
