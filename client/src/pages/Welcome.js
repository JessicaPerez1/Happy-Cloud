import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import SharedPost from "../components/SharedPost";
import UnauthenticatedApp from "../components/UnauthenticatedApp";

function Welcome() {
  const [welcomeState, setWelcomeState] = useState();

  return (
    <div>
      <h1>Happy Cloud - welcome message</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>

      <div>This is where the scrolling shares.</div>
    </div>
  );
  //include AppDescription component
  //include SharedPost component
}
export default Welcome;
