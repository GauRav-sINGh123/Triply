import useFetchTrip from "@/hooks/useFetchTrip";
import PlaceCard from "./PlaceCard";

function Itinerary({ tripId }) {
  const { tripData, isLoading } = useFetchTrip(tripId);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mt-16">Places To Visit</h1>
      <div className="mt-12 flex flex-col gap-12   ">
        {tripData?.tripData?.itinerary.map((items, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold ml-2 ">{items.day}</h2>
             <div className="grid md:grid-cols-2 gap-6  ">
              
             {
                items?.plan.map((place, index) => (
                  
                    <div key={index} >
                       
                      < PlaceCard place={place}/>
                    </div>
                 
                ))
              }
             </div>
            </div>
           
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
