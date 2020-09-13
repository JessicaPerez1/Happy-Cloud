import React from "react";
import { useGlobalContext } from "../../utils/GlobalContext";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logout from "../Logout";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey[800],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 110,
    paddingBottom: theme.spacing(1),
  },
}));

function Nav() {
  const classes = useStyles();
  const history = useHistory();

  const handleHistoryClick = () => {
    history.push("/history");
    console.log("you've been redirected to history page");
  };
  const handleProfileClick = () => {
    history.push("/profile");
    console.log("you've been redirected to Profile page");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Happy Cloud
          </Typography>
          <Typography variant="h8" className={classes.title}>
            <Button onClick={handleHistoryClick}>History</Button>
            <Button onClick={handleProfileClick}>Profile</Button>
          </Typography>
          <Button color="inherit">
            <Logout />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
