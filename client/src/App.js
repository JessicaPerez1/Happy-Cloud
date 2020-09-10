import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalContext } from "./utils/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
// import { LOGIN } from "./utils/actions";
// import Profile from "./pages/Profile";
// import History from "./pages/History";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Welcome from "./pages/Welcome";

function App() {
  const [state, dispatch] = useGlobalContext();
  //check if htere is authentiated user
  // useEffect(() => {
  //   //GET INFO FROM LOCALSTORAGE
  //   const user = JSON.parse(localStorage.getItem("authuser"));
  //   if (user.token) {
  //     dispatch({
  //       type: LOGIN,
  //       user: user,
  //     });
  //   }
  // }, []);

  return (
    // <Router>
    <div className="App">
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
