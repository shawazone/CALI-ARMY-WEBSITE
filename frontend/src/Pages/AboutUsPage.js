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
<>
  {/* Small Header with Image */}
  <div className="relative w-full overflow-hidden text-center">
    <h1 className="text-3xl mt-4 lg:text-4xl">Who Are We?</h1>
    <p className="text-lg mt-4">
      We are the first Calisthenics Team in Tripoli Lebanon dedicated to spreading the culture of bodyweight training.
    </p>

    <img
      src="homePics/squad-pic.png"
      alt="Small Header"
      className="w-full h-full object-cover rounded"
    />
  </div>

  <div className="mx-auto max-w-screen-lg text-center flex flex-col mt-8">
    {/* Big Header */}
    <div className="mt-8">
      <h1 className="text-3xl lg:text-4xl">How it started?</h1>

      {/* Text Content */}
      <p className="text-lg mt-4">
        4 inspired athletes SHAWA, YAHYA, GHASSAN, and KARIM started training together and decided to create a team to spread the culture of bodyweight training in Tripoli and Lebanon.
      </p>

      {/* Button */}
      <button
        onClick={() => handleClick()}
        className="block mx-auto mt-8 px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Notify!
      </button>
    </div>


    {/* Founders Image */}
    <div className="mt-8">
      <img
        src="homePics/the-founders-transformed.png"
        alt="Founders"
        className="w-full max-w-md rounded mx-auto"
      />
    </div>

    {/* Additional Text Content */}
    <p className="text-lg mt-4">
      4 inspired athletes SHAWA, YAHYA, GHASSAN, and KARIM started training together and decided to create a team to spread the culture of bodyweight training in Tripoli and Lebanon.
    </p>
  </div>

  {/* Large Team Image */}
  <img
    src="homePics/big-team-transformed.jpeg"
    alt="Large Team"
    className="w-full max-w-screen rounded mx-auto mt-8"
  />

  
</>

  )
  }
