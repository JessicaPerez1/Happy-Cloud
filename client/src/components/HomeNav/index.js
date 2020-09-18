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
        minHeight: 110,
        paddingBottom: theme.spacing(1),
    },
}));

function Nav() {
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
                    <Typography variant="h8" className={classes.title}>
                        <Button onClick={handleHomeClick} id="home">
                            Home
                        </Button>
                        <Button onClick={handleAboutClick} id="about">
                            About
                        </Button>
                        <Button onClick={handleLoginClick} id="login">
                            Login
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
