import initializeFirebaseAuthentication from "./Firebase.init";
import { useEffect, useState } from "react";
import {
  signOut,
  getAuth,
  getIdToken,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//Initialize Firebase Authentication
initializeFirebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();


  //Google Login System
  const signInUsingGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      setError(error);
    }
  };

  // log Out

  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser({});
      localStorage.removeItem("token");
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  //Observe user state
  useEffect(() => {
    const unsUbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) =>
          localStorage.setItem("token", idToken)
        );
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsUbscribe;
  }, [auth]);

  return {
    user,
    error,
    loading,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;
