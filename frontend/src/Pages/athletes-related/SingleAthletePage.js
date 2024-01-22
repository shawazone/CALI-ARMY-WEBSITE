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
 const [image, setImage] = useState('');

 useEffect(() => {
    const fetchAthlete = async () => {
      const response = await fetch(`http://localhost:4000/api/athletes/${id && id.id}`)
      const json = await response.json()
     
      if (response.ok) {
        setName(json.name)
        setSpecialty(json.specialty)
        setDescription(json.description)
        setInsta(json.insta)
        setImage(json.image)

        // dispatch({type:'SET_WORKOUTS', payload:json})
        // console.log(json)

      } }

      fetchAthlete()
  },[])


return (
<div className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
  <p>uwu</p>
  <h2 className="text-xl font-bold mb-2">{name}</h2>
  <p><span className="font-bold">Specialty:</span> {specialty}</p>
  <p><span className="font-bold">Description:</span> {description}</p>
  <Link to={insta}><span className="font-bold">Instagram:</span> </Link>
  <img
    src={image}
    alt={`${name}'s Image`}
    className="mt-4 w-60 h-80 object-cover"
  />
</div>
  )
}
