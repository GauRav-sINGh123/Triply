import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../context/AuthContext";

const useCreateTrip = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTrip = async (formData, tripData, docId) => {
    setLoading(true);
    try {
      if (!user) {
        throw new Error("User is not authenticated");
      }
      const tripsCollection = collection(db, `users/${user.uid}/Trips`);
      const tripDoc = doc(tripsCollection, docId);
      await setDoc(tripDoc, {
        userChoice: formData,
        tripData: JSON.parse(tripData),
        email: user.email,
        id: docId,
      });
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return false;
    }
  };

  return { addTrip, loading, error };
};

export default useCreateTrip;
