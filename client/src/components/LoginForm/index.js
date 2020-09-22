import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../../utils/actions";
import { useGlobalContext } from "../../utils/GlobalContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#6e6c6a",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#f4f4f4",
    color: "#6e6c6a",
  },
  reg: {
    color: "#2883C2",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const setLocalStorage = (user) => {
    console.log("setLocalStorage", user);
    const storageInfo = [];
    let userInfo = { email: user.email, token: user.token, id: user._id };
    storageInfo.push(userInfo);
    localStorage.setItem("data", JSON.stringify(storageInfo));
  };

  const doLogin = async () => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(data);
    dispatch({
      type: LOGIN,
      user: data,
    });
    setLocalStorage(data);
    console.log(setLocalStorage(data));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    doLogin();
    console.log("you’ve logged in");
    history.push("/profile");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <p>
                Not registered yet?
                <Button>
                  <Link className={classes.reg} to="/register">
                    Register now
                  </Link>
                </Button>
                .
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
