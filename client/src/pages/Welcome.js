import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppDescription from "../components/AppDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
}));
function Welcome() {
  const [welcomeState, setWelcomeState] = useState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppDescription />
    </div>
  );
}
export default Welcome;
