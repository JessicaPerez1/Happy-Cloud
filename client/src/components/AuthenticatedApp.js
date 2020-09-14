import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import Cloud from "../pages/Cloud";

const AuthenticatedApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/cloud" component={Cloud} />
        </Switch>
      </div>
    </Router>
  );
};

export default AuthenticatedApp;
