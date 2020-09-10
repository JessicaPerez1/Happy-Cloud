import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Signup from "../components/Signup";

const Register = () => {
  const regEmailRef = useRef();
  const regPasswordRef = useRef();
  const history = useHistory();

  const doSignup = async () => {
    const { data } = await axios.post("/auth/register", {
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value,
    });

    console.log(data);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("you've signed up");
    doSignup();
    history.push("/login");
  };
  return (
    <div>
      <Signup />
    </div>
  );
};
export default Register;
