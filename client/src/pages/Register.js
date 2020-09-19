import React from "react";
import Signup from "../components/Signup";
import HomeNav from "../components/HomeNav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1508843731797-991810e0b977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    backgroundSize: "100%",
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
