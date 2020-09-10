import React from "react";
import { useGlobalContext } from "../../utils/GlobalContext";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logout from "../Logout";

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
}));

function Nav() {
  const classes = useStyles();
  return (
    // <nav>
    //   <div>Hello</div>
    // </nav>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Happy CLoud
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
