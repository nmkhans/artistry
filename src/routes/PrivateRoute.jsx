import React from "react";
import { useAuthContext } from "../context/Auth/AuthContext";
import Spinner from "./../components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading)
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
