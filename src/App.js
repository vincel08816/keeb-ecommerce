import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/App/RouteTypes";
import Wrapper from "./components/App/Wrapper";
import * as User from "./components/User";
import Home from './components/Home'

const NotFound = () => <div>404</div>;
const Edit = () => <div>Edit</div>;

export default function App() {
  return (
    <Wrapper>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={User.Login} />
      <Route path="/signup" exact component={User.Signup} />
      <PrivateRoute path="/user" exact component={Edit} />
      <Route path="*" component={NotFound} />
    </Wrapper>
  );
}
