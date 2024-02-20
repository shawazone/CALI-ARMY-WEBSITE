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
    '/homePics/Bars2.webp',
    '/homePics/baki-planche.webp',
    '/homePics/big-team-transformed.webp',
    // Add more image URLs as needed
  ];
  const physiqueData =[
    './About-us-page/bodiesData/karim-body.webp',
    './About-us-page/bodiesData/monty-body.webp',
    // './About-us-page/bodiesData/omar-body.webp',
    './About-us-page/bodiesData/steel-body.webp',
  ]
  
  const eventsData =[
    './About-us-page/eventsData/judges.webp',
    './About-us-page/eventsData/big-team.webp',
    './About-us-page/eventsData/baki-cup.webp',
    './About-us-page/eventsData/cali-battles.webp',
    './About-us-page/eventsData/freddy-cup.webp',
    './About-us-page/eventsData/arena.webp',


  ]
  const skillsData =[
    './About-us-page/skillsData/baki-handstand.webp',
    './About-us-page/skillsData/baki-abboudi.webp',
    // './About-us-page/skillsData/baki-front.png',
    './About-us-page/skillsData/monty.webp',
    './About-us-page/skillsData/omar-d.webp',
    './About-us-page/skillsData/ouss-handstand.webp',
  ]





  return (
<>
  {/* Small Header with Image */}
  <div className="relative w-full overflow-hidden text-center">
    <img
      src="homePics/squad-pic.webp"
      alt="Small Header"
      className="w-full h-full object-cover rounded"
    />
   
    <h1 className="text-3xl mt-4 lg:text-4xl">Who Are We?</h1>
    <p className="text-lg mt-4">
     
As the leading Calisthenics Team in Tripoli, Lebanon, our mission revolves around cultivating a healthier community through the power of bodyweight training. We are dedicated to inspiring individuals to prioritize their well-being, fostering strength, agility, and overall fitness
    </p>
  </div>

  <div className="mx-auto max-w-screen-lg text-center flex flex-col mt-8">
    {/* Big Header */}
    <div className="mt-8">
      <h1 className="text-3xl lg:text-4xl">How it started?</h1>

      {/* Text Content */}
      <p className="text-lg mt-4">
      Our journey commenced with the collaboration of  passionate young athletes, united by a common goal and boundless enthusiasm for calisthenics. As a team, our mission extends beyond personal achievements; we are dedicated to making a lasting impact on the calisthenics community.

      </p>

      {/* Button */}
      {/* <button
        onClick={() => handleClick()}
        className="block mx-auto mt-8 px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Notify!
      </button> */}
    </div>


    {/* Founders Image */}
    <div className="mt-8 ">
      <img
        src="homePics/the-founders-transformed.webp"
        alt="Founders"
        className="w-2/3 max-w-md  mx-auto rounded-md shadow-md"
      />
    </div>

    {/* Additional Text Content */}
    <p className="text-lg mt-4">
     
    </p>
  </div>
  <h1 className="text-3xl mt-8 lg:text-4xl text-center">What we have?</h1>
  <div className="mt-8 w-screen flex justify-center items-center  flex-col ">
      <h2 className="text-xl font-bold mb-4">Great Physiques</h2>
      <ImageSlider images={physiqueData} />
    </div>

    <div className="mt-8 w-screen  flex justify-center items-center  flex-col">
      <h2 className="text-xl font-bold mb-4">Amazing skills</h2>
      <ImageSlider images={skillsData} />
    </div>

    <div className="mt-8 mb-8 w-screen  flex justify-center items-center  flex-col">
      <h2 className="text-xl font-bold mb-4">Competitions and Events</h2>
      <ImageSlider images={eventsData} />
    </div>

  {/* Large Team Image */}
  <img
    src="about-us-page/bars.webp"
    alt="Large Team"
    className="w-full max-w-screen rounded mx-auto mt-8"
  />

  
</>

  )
  }
