import React from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageSlider from '../Components/ImageSlider';

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

  const images = [
    '/homePics/Bars2.png',
    '/homePics/baki-planche.jpg',
    '/homePics/big-team-transformed.jpeg',
    // Add more image URLs as needed
  ];
  const physiqueData =[
    './About-us-page/bodiesData/karim-body.jpg',
    './About-us-page/bodiesData/monty-body.jpg',
    // './About-us-page/bodiesData/omar-body.jpg',
    './About-us-page/bodiesData/steel-body.jpg',
  ]
  
  const eventsData =[
    './About-us-page/eventsData/judges.jpg',
    './About-us-page/eventsData/big-team.jpg',
    './About-us-page/eventsData/baki-cup.jpg',
    './About-us-page/eventsData/cali-battles.jpg',
    './About-us-page/eventsData/freddy-cup.jpg',

  ]
  const skillsData =[
    './About-us-page/skillsData/baki-abboudi.jpg',
    './About-us-page/skillsData/baki-front.png',
    './About-us-page/skillsData/baki-handstand.jpg',
    './About-us-page/skillsData/monty.jpg',
    './About-us-page/skillsData/omar-d.jpg',
    './About-us-page/skillsData/ouss-handstand.jpg',
  ]





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
  <div className="mt-8 w-full flex justify-center items-center  flex-col ">
      <h2 className="text-2xl font-bold mb-4">Image Slider</h2>
      <ImageSlider images={physiqueData} />
    </div>

    <div className="mt-8 w-full flex justify-center items-center  flex-col">
      <h2 className="text-2xl font-bold mb-4">Image Slider</h2>
      <ImageSlider images={skillsData} />
    </div>

    <div className="mt-8 w-full flex justify-center items-center  flex-col">
      <h2 className="text-2xl font-bold mb-4">Image Slider</h2>
      <ImageSlider images={eventsData} />
    </div>

  {/* Large Team Image */}
  {/* <img
    src="homePics/big-team-transformed.jpeg"
    alt="Large Team"
    className="w-full max-w-screen rounded mx-auto mt-8"
  /> */}

  
</>

  )
  }
