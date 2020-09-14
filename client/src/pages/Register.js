import React from "react";
import Signup from "../components/Signup";

const styles = {
  container: {
    backgroundImage: "url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)"
  }
}
const Register = () => {

  return (
    <div className={styles.container}>
      <Signup />
    </div>
  );
};
export default Register;
