import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../config/firebase";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (email, password, username, image) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `users/${user.uid}/profile.jpg`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await setDoc(doc(db, "users", user.uid, "userData", user.uid), {
        email: user.email,
        username: username,
        imageUrl: imageUrl,
      });

      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { signUp, loading, error };
};

export default useSignUp;
