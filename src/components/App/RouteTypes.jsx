import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../contexts-hooks/UserContext";

export const PrivateRoute = (props) => {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
