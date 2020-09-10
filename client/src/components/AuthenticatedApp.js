import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import History from "../pages/History";

const AuthenticatedApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/history" component={History} />
        </Switch>
      </div>
    </Router>
  );
};

export default AuthenticatedApp;
