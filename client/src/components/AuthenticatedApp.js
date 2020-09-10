import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGOUT } from "../context/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import History from "../pages/History";

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <Router>
      <div>
        <p>Congrats! You're logged in.</p>
        <button onClick={handleLogout}>Logout</button>

        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/history" component={History} />
        </Switch>
      </div>
    </Router>
  );
};

export default AuthenticatedApp;
