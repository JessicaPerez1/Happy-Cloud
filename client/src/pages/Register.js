import React from "react";
import Signup from "../components/Signup";
import HomeNav from "../components/HomeNav"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://64.media.tumblr.com/d54a9d32332efba6014646d1320e941f/tumblr_ovzced70jc1t5wz6ro1_1280.jpg)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0
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
