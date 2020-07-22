import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
  private route rules:
  1. it has the same API as <Route /> (same props)
  2. it renders a <Route /> and passes all the props through to it
  3. it checks if the user is authenticated, if they are, it render the "component" prop. if not it redirects the user to /login
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => {
        if (token === "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ") {
          return <Component />; //compoenent that was passed in
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;