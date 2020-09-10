import React, { useRef } from "react";
// import { useGlobalContext } from "../context/GlobalContext";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";

const UnauthenticatedApp = () => {
  // const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;
