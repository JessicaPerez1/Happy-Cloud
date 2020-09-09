import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
// import NoMatch from "./components/NoMatch";
import Welcome from "./pages/Welcome";
// import CreateProfile from "./pages/CreateProfile";
// import { useGlobalContext } from "./context/GlobalContext";
=======
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import History from "./pages/History";
>>>>>>> master

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/login" component={CreateProfile} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
=======
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path={["/", "/welcome"]} component={Welcome} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/history/:id" component={History} />
          </Switch>
        </StoreProvider>
>>>>>>> master
      </div>
    </Router>
  );
}

export default App;
