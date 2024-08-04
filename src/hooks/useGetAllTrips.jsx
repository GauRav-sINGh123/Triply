import { db } from "@/config/firebase";
import { useAuth } from "@/context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function useGetAllTrips() {
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTrips = async () => {
      try {
        const tripsCollection = collection(db, "users", user.uid, "Trips");
        const querySnapshot = await getDocs(tripsCollection);
        const tripsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [user]);

  return { trips, loading };
}

export default useGetAllTrips;
