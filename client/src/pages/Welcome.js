import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import SharedPost from "../components/SharedPost";
import UnauthenticatedApp from "../components/UnauthenticatedApp";
import "./welcome.css";

function Welcome() {
  const [welcomeState, setWelcomeState] = useState();

  return (
    <>
      <AppDescription />
      <div>
        <button className="button">
          <Link className="loginbutton" to="/login">
            LOGIN HERE
          </Link>
        </button>
        {/* <SharedPost /> */}
      </div>
    </>
  );
}
export default Welcome;
