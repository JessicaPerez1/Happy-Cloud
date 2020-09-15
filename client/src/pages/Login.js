import React from "react";
import LoginForm from "../components/LoginForm"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://64.media.tumblr.com/0df57f46678a036557271991d71ab362/tumblr_muiqkl73xx1spjf12o1_500.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0
  },
}));


const Login = () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <LoginForm />
  </div>
  )
}
export default Login;
