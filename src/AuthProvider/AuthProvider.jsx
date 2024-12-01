import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "./../firebase/firebase.config";

export const Authentication = createContext();

export default function AuthProvider({ children }) {
  const [user, setuser] = useState("");
  const [loading, setloading] = useState(true);

  const signup = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    loading,
    signup,
    signIn,
  };
  return (
    <>
      <Authentication.Provider value={userInfo}>
        {children}
      </Authentication.Provider>
    </>
  );
}
