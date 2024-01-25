import React from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleClick = () => {
  toast.success('STFU!');
  toast.error(' L!');
  toast.warning('+Ratio');
  toast.info('go outside!');
  toast.dark('no winshs!');

  toast('get a life!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });

}
export default function AboutUsPage() {
  return (
    <div>
      About Us Page
   
      uwu
      <button onClick={() => handleClick()}>Notify !</button>
    </div>
  )
}
