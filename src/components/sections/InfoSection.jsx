import useFetchTrip  from "@/hooks/useFetchTrip";
import { GetPlaceDetails, Photo_Ref_Url } from "@/service/GlobalApi";
import React, { useEffect, useState } from 'react'


function InfoSection({tripId}) {
    const {tripData} = useFetchTrip(tripId);
    const [photoUrl,setPhotoUrl]=useState(null)
    useEffect(()=>{
      tripData && GetPlacePhoto()
        
    },[tripData])
    const GetPlacePhoto=async()=>{
      const data={
         textQuery:tripData?.userChoice?.location?.label
      }
      const result =await GetPlaceDetails(data).then((resp)=>{
       const Photo_Url=Photo_Ref_Url.replace('{NAME}',resp.data.places[0].photos[4].name)
       setPhotoUrl(Photo_Url)
      })
    }
    return(
       <div className="">
        {
         photoUrl?<img src={photoUrl} alt="Banner"  className="h-[300px] w-full rounded-xl object-cover"/>:<p>Loading................</p>
        }
       
        <div className="my-5 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{tripData?.userChoice?.location?.label}</h2>
             <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
                <h2 className="p-1 px-3 bg-slate-200 rounded-md text-slate-600 text-sm   ">📅 {tripData?.userChoice?.days} {tripData?.userChoice?.days>1? 'Days' : 'Day'} </h2>
                <h2 className="p-1 px-3 bg-slate-200 rounded-md text-slate-600 text-sm   ">Budget 💵 : {tripData?.userChoice?.budget} </h2>
                <h2 className="p-1 px-3 bg-slate-200 rounded-md text-slate-600 text-sm  ">No Of Travelers 🗺️ : {tripData?.userChoice?.travelers} </h2>
                
             </div>
        </div>
       </div>
    )
}

export default InfoSection