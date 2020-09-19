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
import Box from "@material-ui/core/Box";
import "./style.css";
import images from "../../images/happy-cloud-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    alignContent: "flex-end",
    marginBottom: 50,
  },
  logo: {
    width: 220,
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 50,
    // paddingBottom: theme.spacing(1),
  },
}));

function HomeNav() {
  const classes = useStyles();
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleAboutClick = () => {
    history.push("/about");
  };
  const handleLoginClick = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} id="navbar">
          <img src={images} className={classes.logo} />
          <Box
            variant="h6"
            className={classes.title}
            display="flex"
            justifyContent="flex-end"
          >
            <Button onClick={handleHomeClick} id="home">
              Home
            </Button>
            <Button onClick={handleAboutClick} id="about">
              About
            </Button>
            <Button onClick={handleLoginClick} id="login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HomeNav;
