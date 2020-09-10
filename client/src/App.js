import React from "react";
import { useGlobalContext } from "./utils/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [state, dispatch] = useGlobalContext();
  //check if htere is authentiated user
  // useEffect(() => {
  //   //GET INFO FROM LOCALSTORAGE
  //   // const user = JSON.parse(localStorage.getItem("authuser"));
  //   // if (user.token) {
  //   //   dispatch ({
  //   //     type: LOGIN,
  //   //     user: user,
  //   //   })
  //   // }
  // }, []);

  return (
    <div className="App">
      {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
