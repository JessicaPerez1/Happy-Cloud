import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../utils/actions";
import { useGlobalContext } from "../utils/GlobalContext";

const Login = () => {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  //SET USER LOGIN INFO TO LOCALSTORAGE
  const setLocalStorage = (user) => {
    console.log(user);
    const storageInfo = [];
    let userInfo = { email: user.email, token: user.token, id: user._id };
    storageInfo.push(userInfo);
    localStorage.setItem("data", JSON.stringify(storageInfo));
  };
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
    setLocalStorage(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    doLogin();
    console.log("you’ve logged in");
    history.push("/profile");
  };
  return (
    <div>
      <p>Please enter your information to Login:</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} required />
        <input type="password" placeholder="password" ref={passwordRef} required />
        <button type="submit">Submit</button>
      </form>
      <p>
        Not registered yet?<Link to="/register"> Register now </Link>.
      </p>
    </div>
  );
};
export default Login;
