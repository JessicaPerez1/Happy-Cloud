import React from "react";
import images from "../../images/happy-cloud-logo.png";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logout from "../Logout";
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
  logo: {
    width: 220,
  },
  toolbar: {
    minHeight: 50,
    paddingBottom: theme.spacing(1),
  },
  menuIcon: {
    backgroundColor: "lightGrey"
  }
}));

function Nav() {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    history.push("/profile");
  };
  const handleCloudClick = () => {
    history.push("/cloud");
  };
  const handleResourcesClick = () => {
    history.push("/resources");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} id="navbar">
          <Typography variant="h6" className={classes.title}>
            <img src={images} className={classes.logo} />
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Button onClick={handleProfileClick} id="profile">
                  Profile
              </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button onClick={handleCloudClick} id="cloud-button">
                  Cloud
              </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button onClick={handleResourcesClick} id="resources">
                  Resources
              </Button>
              </MenuItem>

            </Menu>
            <Button color="inherit">
              <Logout />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}

export default Nav;
