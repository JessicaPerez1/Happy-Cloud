import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalContext } from "./utils/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Router>
  );
}

export default App;
