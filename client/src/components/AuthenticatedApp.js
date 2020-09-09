import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGOUT } from "../context/actions";

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <div>
      <p>Congrats! You're logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthenticatedApp;
