import { GetPlaceDetails, Photo_Ref_Url } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PlaceCard({ place }) {
  const [photoUrl,setPhotoUrl]=useState(null)
    useEffect(()=>{
      place && GetPlacePhoto()
        
    },[place])
    const GetPlacePhoto=async()=>{
      const data={
         textQuery:place.placeName
      }
      const result =await GetPlaceDetails(data).then((resp)=>{
       const Photo_Url=Photo_Ref_Url.replace('{NAME}',resp.data.places[0].photos[0].name)
       setPhotoUrl(Photo_Url)
      })
    }
  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`} target="_blank">
      <div className='border rounded-xl p-4 mt-4 border-slate-100 shadow-lg flex flex-col md:flex-row gap-6 hover:scale-105 transition-all ease-in-out cursor-pointer w-[300px] h-[400px] md:w-[400px] md:h-[200px]'>
        <img src={photoUrl?photoUrl:"https://unsplash.com/photos/a-tall-white-building-with-a-bunch-of-flowers-on-the-balconies-qjY71x0qA84"}
          className='w-[130px] h-[130px] md:w-[100px] md:h-[100px] rounded-xl self-center md:self-auto'
          alt="image" />
        <div className="flex flex-col justify-center">
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-slate-500 my-2'>{place.placeDetails}</p>
          <p className='text-slate-800 mt-1 mb-4 font-semibold text-sm'>Time To Travel 🕒: {place.TimetoTravel}</p>
        </div>
      </div>
    </Link>
  )
}

export default PlaceCard
