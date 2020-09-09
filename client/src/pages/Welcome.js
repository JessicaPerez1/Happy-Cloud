import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import AuthenticatedApp from "../components/AuthenticatedApp";
import UnauthenticatedApp from "../components/UnauthenticatedApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./components/NoMatch";
// import CreateProfile from "./pages/CreateProfile";
// import { useGlobalContext } from "./context/GlobalContext";
// import { StoreProvider } from "./utils/GlobalState";
// import Nav from "./components/Nav";
// import Profile from "./pages/Profile";
// import History from "./pages/History";

function Welcome() {
  return <div>welcome page</div>;
}

export default Welcome;
