import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalContext } from "./utils/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      <div className="App">
        {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </Router>
  );
}

export default App;
