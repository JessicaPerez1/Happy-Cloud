// button to click to generate word cloud
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../components/Nav";
import GenerateCloud from "../components/GenerateCloud"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#EAEAF8",
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
