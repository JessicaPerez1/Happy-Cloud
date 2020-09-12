import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import SharedPost from "../components/SharedPost";
import UnauthenticatedApp from "../components/UnauthenticatedApp";
import "./welcome.css";

function Welcome() {
  const [welcomeState, setWelcomeState] = useState();

  return (
    <div>
      <AppDescription />
      <button className="button">
        <Link className="loginbutton" to="/login">
          LOGIN HERE
        </Link>
      </button>
      {/* <SharedPost /> */}
    </div>
  );
  //include AppDescription component
  //include SharedPost component
  //good vibes only image
  //https://images.unsplash.com/photo-1522120691812-dcdfb625f397?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
}
export default Welcome;
