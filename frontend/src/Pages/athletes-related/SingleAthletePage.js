import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';

export default function SingleAthletePage() {

//  const [athlete, setAthlete] = useState(null)
 const id = useParams()
 const [name, setName] = useState('');
 const [specialty, setSpecialty] = useState('');
 const [description, setDescription] = useState('');
 const [insta, setInsta] = useState('');
 const [firstPic, setFirstPic] = useState('');
 const [secondPic, setSecondPic] = useState('');

 useEffect(() => {
    const fetchAthlete = async () => {
      const response = await fetch(`http://localhost:4000/api/athletes/${id && id.id}`)
      const json = await response.json()
     
      if (response.ok) {
        setName(json.name)
        setSpecialty(json.specialty)
        setDescription(json.description)
        setInsta(json.insta)
        setFirstPic(json.images[0])
        setSecondPic(json.images[1])

        // dispatch({type:'SET_WORKOUTS', payload:json})
        // console.log(json)

      } }

      fetchAthlete()
  },[])

  const [isHovered, setIsHovered] = useState(false);

  // Assuming is an array and you want to access the first and second element
  // const firstPic = athlete.images && athlete.images.length > 0 ? athlete.images[0] : null;
  // const secondPic = athlete.images && athlete.images.length > 1 ? athlete.images[1] : null;
  return (
    <div
      className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p><span className="font-bold">Specialty:</span> {specialty}</p>
      <p><span className="font-bold">Description:</span> {description}</p>
      <Link to={insta}>
        <img
          src={process.env.PUBLIC_URL + '/instagram.png'} 
          className="w-10 h-10 object-cover bg-red-500 border-2 hover:bg-red-400 border-red-600 hover:border-red-400 rounded-md mt-4"
      >
        </img></Link>
      {isHovered && secondPic ? (
        <img
          src={secondPic}
          alt={`${name}'s Second element`}
          className="mt-4 w-60 h-80 object-cover "
        />
      ) : (
        <img
          src={firstPic}
          alt={`${name}'s First element`}
          className="mt-4 w-60 h-80 object-cover "
        />
      )}
       {/* <Link to={`/athletes/${athlete._id}`} className="text-red-500 block mt-2">View Details</Link> */}
    </div>
  );
}
