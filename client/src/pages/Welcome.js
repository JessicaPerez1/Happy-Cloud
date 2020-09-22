import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppDescription from "../components/AppDescription";
import DailyQuote from "../components/DailyQuote";
import HomeNav from "../components/HomeNav";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "auto",
    flexGrow: 1,
    margin: "0",
  },
  div: {
    // height: "300px",
  },
}));
function Welcome() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeNav />
      <AppDescription />
      <DailyQuote />
      {/* <div className={classes.div}></div> */}
    </div>
  );
}
export default Welcome;
