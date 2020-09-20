import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppDescription from "../components/AppDescription";
import DailyQuote from "../components/DailyQuote";
import HomeNav from "../components/HomeNav";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
    // backgroundSize: "cover",
    // backgroundRepeat: "repeat",
    width: "100%",
    height: "auto",
    // flexGrow: 1,
    margin: 0,
  },
  div: {
    height: "600px",
  },
}));
function Welcome() {
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
