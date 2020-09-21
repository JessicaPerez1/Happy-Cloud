import React from 'react';
import { useHistory } from "react-router-dom";
import images from "../../images/happy-cloud-logo.png";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
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
    // paddingBottom: theme.spacing(1),
  },
  menuIcon: {
    backgroundColor: "lightGrey"
  }
}));

function HomeNav() {
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
                <Button onClick={handleHomeClick} id="home">
                  Home
                                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button onClick={handleAboutClick} id="about">
                  About
                                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button onClick={handleLoginClick} id="login">
                  Login
                                </Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default HomeNav;