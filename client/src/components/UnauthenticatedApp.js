import React, { useRef } from "react";
// import { useGlobalContext } from "../context/GlobalContext";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import Cloud from "../pages/Cloud"

const UnauthenticatedApp = () => {
  // const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cloud" component={Cloud} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
