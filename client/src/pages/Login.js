import React from "react";
import LoginForm from "../components/LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import HomeNav from "../components/HomeNav";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1485199926533-8c38475abf2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0,
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeNav />
      <LoginForm />
    </div>
  );
};
export default Login;
