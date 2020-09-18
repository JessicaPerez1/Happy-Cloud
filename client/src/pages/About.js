import React from "react";
import About from "../components/About";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:
            "url(https://64.media.tumblr.com/d54a9d32332efba6014646d1320e941f/tumblr_ovzced70jc1t5wz6ro1_1280.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "auto",
        // flexGrow: 1,
        // margin: 0,
    },
    div: {
        height: "600px",
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <About />
            <div className={classes.div}></div>
        </div>
    );
};
export default Login;
