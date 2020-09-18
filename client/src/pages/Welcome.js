import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppDescription from "../components/AppDescription";
import DailyQuote from "../components/DailyQuote";
import HomeNav from "../components/HomeNav"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://64.media.tumblr.com/d54a9d32332efba6014646d1320e941f/tumblr_ovzced70jc1t5wz6ro1_1280.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "auto",
    // flexGrow: 1,
  },
  div: {
    height: "600px",
  },
}));
function Welcome() {
  const [welcomeState, setWelcomeState] = useState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeNav />
      <AppDescription />
      <DailyQuote />
      <div className={classes.div}></div>
    </div>
  );
}
export default Welcome;
