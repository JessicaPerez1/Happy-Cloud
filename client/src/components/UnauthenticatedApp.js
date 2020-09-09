import React, { useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGIN } from "../context/actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "../pages/Register";

const UnauthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const doLogin = async () => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    console.log(data);
    dispatch({
      type: LOGIN,
      user: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you've logged in");
    doLogin();
  };

  return (
    <Router>
      <Route exact path="/">
        <p>Please enter your information to login:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" ref={emailRef} />
          <input type="text" placeholder="password" ref={passwordRef} />
          <button type="submit">Submit</button>
        </form>
        <p>
          link to signup<Link to="/register">here</Link>.
        </p>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  );
};

export default UnauthenticatedApp;
