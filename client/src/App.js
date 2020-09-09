import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path={["/", "/welcome"]} component={Welcome} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/history/:id" component={History} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
