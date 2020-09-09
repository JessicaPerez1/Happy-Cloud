import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./components/NoMatch";
import Welcome from "./pages/Welcome";
// import CreateProfile from "./pages/CreateProfile";
// import { useGlobalContext } from "./context/GlobalContext";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/login" component={CreateProfile} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
