import React from "react";
import { Navigate } from "react-router-dom";
import useToken from "./useToken";

export const ProtectedRoute = ({ children }) => {
  const {token} = useToken();
    console.log(token);
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};


