import React from "react";
import { Redirect } from "react-router-dom";
import history from "../history";

const ProtectedRoute = ({ component: Component, ...props }) => {
  if (props.isAuthenticated) return <Component {...props} />;
  else {
    history.push(props.path);
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
