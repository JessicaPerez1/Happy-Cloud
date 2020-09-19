import React from "react";
import { useGlobalContext } from "../../utils/GlobalContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logout from "../Logout";
import "./style.css";
import images from "../../images/happy-cloud-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: "10px",
    flexGrow: 1,
  },
  logo: {
    width: 220,
  },
  toolbar: {
    minHeight: 50,
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
          <img src={images} className={classes.logo} />
          <Box display="flex" justifyContent="flex-end">
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
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
