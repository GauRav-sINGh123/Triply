import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../context/AuthContext";

const useFetchTrip = (tripId) => {
  const { user } = useAuth();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        if (!user) {
          throw new Error("User is not authenticated");
        }
        const docRef = doc(db, `users/${user.uid}/Trips`, tripId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTripData(docSnap.data());
        } else {
          throw new Error("Trip not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [user, tripId]);

  return { tripData, loading, error };
};

export default useFetchTrip;
