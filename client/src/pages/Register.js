import React from "react";
import Signup from "../components/Signup";
import HomeNav from "../components/HomeNav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
    backgroundSize: "110%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0,
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeNav />
      <Signup />
    </div>
  );
};
export default Register;
