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
    let userInfo = { email: user.email, token: user.token };
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
    if (emailRef === "") {
      alert("Message can not be blank");
    } else if (passwordRef === "") {
      alert("Password can not be blank");
    } else {
      alert("success");
    }
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
