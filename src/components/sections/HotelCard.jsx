import { GetPlaceDetails, Photo_Ref_Url } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCard({hotel}) {
    const [photoUrl,setPhotoUrl]=useState(null)
    useEffect(()=>{
      hotel && GetPlacePhoto()
        
    },[hotel])
    const GetPlacePhoto=async()=>{
      const data={
         textQuery:hotel.hotelName
      }
      const result =await GetPlaceDetails(data).then((resp)=>{
       const Photo_Url=Photo_Ref_Url.replace('{NAME}',resp.data.places[0].photos[0].name)
       setPhotoUrl(Photo_Url)
      })
    }
  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}+${hotel?.hotelAddress}`} target="_blank">
            <div
              className="bg-white rounded-lg shadow-md  hover:scale-105 transition-all ease-in-out cursor-pointer"
              
            >
              <img
                src={photoUrl?photoUrl:'/dummy.jpg ' }
                alt="Hotel Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 mt-5 flex flex-col gap-2"> 
                <h2 className="text-lg font-bold mt-1">{hotel.hotelName}</h2>
                <p className="text-gray-400 text-sm">📍  {hotel.hotelAddress}</p>
                <p className="text-gray-500 text-md">{hotel.description}</p>
                <p className="text-gray-600 font-bold">${hotel.price}</p>
                <p className="font-semibold">Rating : <span className="text-yellow-600">{hotel.rating}</span></p>
              </div>
            </div>
            </Link>
  )
}

export default HotelCard