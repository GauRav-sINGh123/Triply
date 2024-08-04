import InfoSection from "@/components/sections/InfoSection";
import { useParams } from "react-router-dom";
import useFetchTrip from "@/hooks/useFetchTrip";
import Hotels from "@/components/sections/Hotels";
import Itinerary from "@/components/sections/Itinerary";
import Loading from "@/components/loading/Loading";

function ViewTrip() {
  const { tripId } = useParams();
  const { tripData, loading, error } = useFetchTrip(tripId);
  console.log(tripData)
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tripData ? (
        <div className="p-10 md:px-20 lg:px-44 xl:px-56">
          <InfoSection tripId={tripId} />

          <Hotels tripId={tripId} />

          <Itinerary tripId={tripId} />
        </div>
      ) : (
        <p>No trip data found</p>
      )}
    </div>
  );
}

export default ViewTrip;
