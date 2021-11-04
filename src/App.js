import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as User from "./views/User";

const NotFound = () => <div>404</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={User.Login} />
        <Route path="/signup" component={User.Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
