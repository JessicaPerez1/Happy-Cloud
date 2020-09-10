import React, { useRef } from "react";
import { Link, Router, Route, useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../utils/actions";
import { useGlobalContext } from "../utils/GlobalContext";

const Login = () => {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

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
  //set item to LOCALSTORAGE
  //function setLocalStorage (event) {
  //localStorage.setItem({"User email": emailRef, "User token": token});
  //setValue(event.target);
  //}

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
    console.log("you've logged in");
    history.push("/profile");
  };

  return (
    <div>
      <p>Please enter your information to login:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="text" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
      <p>
        link to signup<Link to="/register">here</Link>.
      </p>
    </div>
  );
};
export default Login;
