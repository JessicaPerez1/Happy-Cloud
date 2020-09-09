import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Login from "./pages/Login";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/welcome"]} component={Welcome} />
        <Login>
          <div className="App">
            {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </div>
        </Login>
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/history/:id" component={History} />
      </Switch>
    </Router>
  );
}

export default App;
