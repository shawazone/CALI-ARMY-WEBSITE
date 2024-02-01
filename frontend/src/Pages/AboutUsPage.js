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
<h1 className="text-3xl mt-4 lg:text-4xl">Who Are We ?</h1>
<p className="text-lg mt-4">We are the first Calisthenics Team in Tripoli lebenon dedicated to spread the culture of bodyweight triaining </p>


  <img
    src="homePics/squad-pic.png" // Replace with the actual path to your image
    alt="Small Header"
    className="w-full h-full object-cover rounded"
  />
  {/* <div className="absolute  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black p-8 border-4 border-red-500 opacity-80 w-full"> */}
    {/* <h2 className="text-4xl font-bold">ABOUT US</h2> */}
    {/* Add any additional text or styling as needed */}
  </div>
{/* </div> */}


<div className="mx-auto max-w-screen-lg text-center flex flex-col">
{/* Big Header */}

  <div>
<h1 className="text-3xl mt-4 lg:text-4xl">How it started ?</h1>

{/* Text Content */}
<p className="text-lg mt-4">
 4 inspired athletes SHAWA, YAHYA, GHASSAN and KARIM started training togther and decided to create a team to spread the culture of bodyweight training in Tripoli and Lebanon.
</p>

{/* Button */}
<button
  onClick={() => handleClick()}
  className="block mx-auto mt-8 px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
>
  Notify!
</button>
</div>
<div >
<img
    src="homePics/the-founders.jpg" // Replace with the actual path to your image
    alt="Small Header"
    className="w-full max-w-md rounded mx-auto"
  />
  </div>

  <p className="text-lg mt-4">
 4 inspired athletes SHAWA, YAHYA, GHASSAN and KARIM started training togther and decided to create a team to spread the culture of bodyweight training in Tripoli and Lebanon.
</p>
</div>

<img
    src="homePics/big-team-transformed.jpeg" // Replace with the actual path to your image
    alt="Small Header"
    className="w-screen max-w-screen rounded mx-auto"
  />
</>

  )
  }
