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
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    height: 100,
    paddingBottom: theme.spacing(1),
  },
}));

function Nav() {
  const classes = useStyles();
  const history = useHistory();

  const handleProfileClick = () => {
    history.push("/profile");
    console.log("you've been redirected to Profile page");
  };

  const handleCloudClick = () => {
    history.push("/cloud");
    console.log("you've been redirected to history page");
  };
  const handleResourcesClick = () => {
    history.push("/resources");
    console.log("you've been redirected to resources page");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} id="navbar">
          <Typography variant="h5" className={classes.title} id="cloud">
            Happy Cloud
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button onClick={handleProfileClick} id="profile">
              Profile
            </Button>
            <Button onClick={handleCloudClick} id="cloud-button">
              Cloud
            </Button>
            <Button onClick={handleResourcesClick} id="resources">
              Resources
            </Button>
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
