import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import { usePostContext } from "../../utils/GlobalState";
import { ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { TextField } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

//STYLING
const longText = `
We recommend 1 WORD A DAY, but you are able to add up to 15 characters maximum in the input field.
`;
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: "1rem",
    padding: "1rem",
    fontFamily: "'Baskervville', serif",
  },
  title: {
    margin: 0,
    fontSize: 9,
    color: "darkgray",
    float: "right",
  },
  question: {
    fontSize: "calc(18px + 1vw)",
    fontWeight: "bold",
    color: "#3B3C3C",
    fontFamily: "'Baskervville', serif",
    textAlign: "center",
  },
  textfield: {
    margin: "0 auto",
    width: "75%",
    color: "#017778",
    border: "0.3px solid lightgrey",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    background: "transparent",
    border: "0px solid rgb(172, 168, 168)",
    boxShadow: "2px 2px 2px 2px rgb(172, 168, 168)",
    borderRadius: "0.4rem",
    fontSize: "1rem",
    marginTop: "1rem",
    fontFamily: "'Baskervville', serif",
    color: "rgb(143, 137, 137)",
  },
});

//functional component
function Prompt() {
  const classes = useStyles();
  // const [promptState, setPromptState] = useState();
  const postRef = useRef();
  const userRef = useRef();
  const history = useHistory();
  const [state, dispatch] = usePostContext();
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const info = event.target.value;
  }
  // When the form is submitted, use API method to save the users data
  // Then reload info from the database
  function handlePostSubmit(event) {
    const getPosts = () => {
      const user = JSON.parse(localStorage.getItem("data"));
      const userId = user[0].id;
      dispatch({ type: LOADING });

      API.getPosts(userId)
        .then((results) => {
          dispatch({
            type: UPDATE_POSTS,
            posts: results.data,
            user: results.data.userId,
          });
        })
        .catch((err) => console.log(err));
    };

    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("data"));

    const userId = user[0].id;

    const inputLowerCase = postRef.current.value.toLowerCase();

    API.createPost(userId, inputLowerCase)
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
          user: result.data,
        });
      })
      .catch((err) => console.log(err));

    postRef.current.value = "";
    getPosts();
  }
  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.question}
            variant="body2"
            component="p"
          >
            What are you thankful for today?
          </Typography>
        </CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Your WORD here"
              type="text"
              variant="outlined"
              name="post"
              onChange={handleInputChange}
              inputRef={postRef}
            />
            <Tooltip title={longText}>
              <Button className={classes.title}>
                <InfoIcon />
              </Button>
            </Tooltip>
          </div>
          <button className={classes.button} onClick={handlePostSubmit}>
            Submit
          </button>
        </form>
      </Card>
    </Container>
  );
}

export default Prompt;
