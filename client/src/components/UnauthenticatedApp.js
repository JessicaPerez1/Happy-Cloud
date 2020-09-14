import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import Profile from "../pages/Profile";

const UnauthenticatedApp = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profiletest" component={Profile} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
