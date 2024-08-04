import { GetPlaceDetails, Photo_Ref_Url } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTripsCard({trip}) {
    const [photoUrl,setPhotoUrl]=useState(null)
    useEffect(()=>{
      trip && GetPlacePhoto()
        
    },[trip])
    const GetPlacePhoto=async()=>{
      const data={
         textQuery:trip.userChoice.location.label
      }
       const result =await GetPlaceDetails(data).then((resp)=>{
       const Photo_Url=Photo_Ref_Url.replace('{NAME}',resp.data.places[0].photos[0].name)
       console.log(Photo_Url)
       setPhotoUrl(Photo_Url)
      })
    }
  return (
    <Link to={`/viewtrip/${trip?.id}`} target="_blank">

    <div className='bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-all ease-in-out cursor-pointer'>
              <img
                src={photoUrl?photoUrl:'/src/assets/dummy.jpeg'}
                alt="Hotel Image"
                className="w-full h-48 object-cover"
              />
        <div className="mt-2">
            <h2 className='font-bold'>{trip?.userChoice.location.label}</h2>
            <h3 className='text-slate-700'>  {trip?.userChoice.days} {trip?.userChoice.days > 1 ? 'Days' : 'Day'} trip with {trip?.userChoice.budget} Budget </h3>
        </div>
    </div>
    </Link>
  )
}

export default UserTripsCard