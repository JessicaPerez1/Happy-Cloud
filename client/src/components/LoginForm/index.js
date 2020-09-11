import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../../utils/actions";
import { useGlobalContext } from "../../utils/GlobalContext";
import Register from "../../pages/Register";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  //SET USER LOGIN INFO TO LOCALSTORAGE
  const setLocalStorage = (user) => {
    console.log(user);
    const storageInfo = [];
    let userInfo = { email: user.email, token: user.token };
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
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailRef === "") {
      alert("Message can not be blank");
    } else if (passwordRef === "") {
      alert("Password can not be blank");
      //add and else if statement if the user email and info dont exist in the database
      // } else if (emailRef || passwordRef !== userInfo) {
      //   alert("Please signup to join Happy Cloud!");
    } else {
      alert("success");
    }
    doLogin();
    console.log("you've logged in");
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
        <form className={classes.form} onSubmit={handleSubmit}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
                <Button color="primary">Register now</Button>.
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
