// button to click to generate word cloud
import React from "react";
import Nav from "../components/Nav";
import GenerateCloud from "../components/GenerateCloud"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0
  },
}));
function Cloud() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <GenerateCloud />
    </div>
  );
}

export default Cloud;
