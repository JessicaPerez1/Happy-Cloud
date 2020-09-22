import React from "react";
import About from "../components/About";
import HomeNav from "../components/HomeNav"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:
          "url(https://i.ibb.co/y6ZfVyc/tree.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "auto",
        height: "auto",
        flexGrow: 1,
        margin: "0",
      },
    div: {
        // height: "600px",
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HomeNav />
            <About />
            {/* <div className={classes.div}></div> */}
        </div>
    );
};
export default Login;
