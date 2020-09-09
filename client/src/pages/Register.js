import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

    // dispatch({
    //   type: LOGIN,
    //   user: data,
    // });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("you've signed up");
    doSignup();
    history.push("/profile");
  };
  return (
    <div>
      <p>Please enter your information to signup:</p>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="email" ref={regEmailRef} />
        <input type="text" placeholder="password" ref={regPasswordRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Register;
