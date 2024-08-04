import Loading from "@/components/loading/Loading";
import UserTripsCard from "@/components/sections/UserTripsCard";
import { useAuth } from "@/context/AuthContext";
import useGetAllTrips from "@/hooks/useGetAllTrips";

function SavedTrips() {
  const { user } = useAuth();
  const { trips, loading } = useGetAllTrips();
  console.log(trips);

  if (!user) {
    return <div>Please Login</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <h2 className="text-center font-bold text-2xl ">My Trips</h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  gap-8   ">
        {trips?.map((trip, index) => (
          <div key={index}>
            <UserTripsCard trip={trip} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedTrips;
