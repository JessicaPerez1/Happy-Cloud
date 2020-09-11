import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalContext } from "./utils/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
// import { LOGIN } from "./utils/actions";
import { useHistory } from "react-router-dom";
// import Profile from "./pages/Profile";
// import History from "./pages/History";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Welcome from "./pages/Welcome";

function App() {
  const [state, dispatch] = useGlobalContext();
  //check if htere is authentiated user
  const history = useHistory();
  //check if there is an authenticated user
  // useEffect(() => {
  //   //GET INFO FROM LOCALSTORAGE
  //   const user = JSON.parse(localStorage.getItem("data")) || {};
  //   if (user.token) {
  //     dispatch({
  //       type: LOGIN,
  //       user: user,
  //     });
  //     history.push("/profile");
  //   }
  // }, []);

  return (
    <div className="App">
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
