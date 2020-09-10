import React from "react";
import { useGlobalContext } from "../../utils/GlobalContext";
import { LOGOUT } from "../../utils/actions";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const [state, dispatch] = useGlobalContext();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("data");
    dispatch({
      type: LOGOUT,
    });
    history.push("/");
    console.log("you've been logged out");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Logout;
