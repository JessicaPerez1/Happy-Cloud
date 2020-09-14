import React from "react";
import LoginForm from "../components/LoginForm"

const styles = {
  backgroundImage: "url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
  height: "100%",
  width: "100%"
}


const Login = () => {
  return (<div className={styles}>
    <LoginForm />
  </div>
  )
}
export default Login;
