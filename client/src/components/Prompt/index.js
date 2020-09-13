import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { usePostContext } from "../../utils/GlobalState";
// import DailyPost from "../DailyPost";
import { ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { TextField } from "@material-ui/core";

//STYLING
const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
});

//functional component
function Prompt() {
  // const [promptState, setPromptState] = useState();
  const postRef = useRef();
  const userRef = useRef();
  const history = useHistory();
  const [state, dispatch] = usePostContext();


  // function getUserId() {
  //   return localStorage.getItem("user.email");
  // }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const info = event.target.value;
    // setPromptState({ ...promptState, info });
    // console.log(promptState);
    console.log(info);
  }

  // const addPost = async () => {
  //   const { data } = await axios.post("/api/posts", {
  //     posts: postRef.current.value,
  //   });
  //   console.log(data);
  // };
  //load question of the day info with useEffect()
  // useEffect(() => {
  //   loadQuestion();
  // }, []);

  // //Load question function
  // function loadQuestion() {}

  // When the form is submitted, use API method to save the users data
  // Then reload info from the database
  function handlePostSubmit(event) {
    event.preventDefault();
    // dispatch({ type: LOADING });
    console.log("This button was clicked");
    // console.log(event.target.value);
    // addPost();
    const user = JSON.parse(localStorage.getItem("data"));
    console.log(user[0].id);
    const userId = user[0].id;
    console.log("postref", postRef.current.value)
    console.log("This is user is ajax call", userId)
    API.createPost(
      userId,
      postRef.current.value
    )
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.data,
          user: result.data,
        });
      })
      .catch((err) => console.log(err));

    postRef.current.value = "";
    // userRef.current.value = "";
  }
  // history.push("/api/posts");
  // setPromptState((promptState = newPost));
  // API.savePost();

  // API.savePost({
  //   post:
  // }
  // if (formObject.title && formObject.author) {
  //   API.saveBook({
  //     title: formObject.title,
  //     author: formObject.author,
  //     synopsis: formObject.synopsis,
  //   })
  //     .then((res) => loadBooks())
  //     .catch((err) => console.log(err));
  // }

  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "10vh" }}
      />
      {/* //question of the day card */}
      <Card className="root">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            Question of the Day
          </Typography>
          <Typography variant="body2" component="p">
            In 1 word - What are you thankful for today?
          </Typography>
        </CardContent>
      </Card>
      {/* Form Submit */}
      <form className="root" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Your WORD here"
          type="text"
          variant="outlined"
          name="post"
          onChange={handleInputChange}
          inputRef={postRef}
        />
        <button onClick={handlePostSubmit}>Submit</button>
      </form>
    </Container>
  );

  //submit button onClick => handleFormSubmit, save info to db
  //include DailyPost component (generated card)
}

export default Prompt;

//include Prompt in the profile page
