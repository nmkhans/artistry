import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "./../../../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (data) => {
    return updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: data.photo,
    });
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const contextValue = {
    user,
    loading,
    setLoading,
    loginUser,
    registerUser,
    updateUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
