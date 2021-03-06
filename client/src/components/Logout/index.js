import React from "react";
import { useGlobalContext } from "../../utils/GlobalContext";
import { LOGOUT } from "../../utils/actions";
import { useHistory } from "react-router-dom";
import "./style.css";

// const myStyle = {
// marginLeft: "20px",
// };
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
    <button onClick={handleLogout} id="button">
      Logout
    </button>
  );
};
export default Logout;
