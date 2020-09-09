import React, { useRef } from "react";
// import { useGlobalContext } from "../context/GlobalContext";
// import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const UnauthenticatedApp = () => {
  // const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  );
};

export default UnauthenticatedApp;
