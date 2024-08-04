import useFetchTrip from "@/hooks/useFetchTrip";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";

function Hotels({ tripId }) {
  const { tripData,  isLoading } = useFetchTrip(tripId);
 console.log(tripData);
  if (isLoading) return <p>Loading...</p>;
   

 

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mt-16">Hotel Recommendations</h1>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  gap-8   ">
        {
          tripData?.tripData?.hotel.map((hotel, index) => (
           <div key={index}>
             <HotelCard  hotel={hotel}/>
           </div>
          ))
        }
      </div>
    </div>
  );
}

export default Hotels;
