import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <div className="min-h-[calc(100vh-293px)] flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold">Please Login</h1>
  </div>
};

export default PrivateRoute;