import React, { useState, useEffect } from "react";
import DailyPost from "../DailyPost";

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
  const [promptState, setPromptState] = useState();

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    // const info = event.target;
    // setUserState({ ...userState, info});
  }
  //load question of the day info with useEffect()
  useEffect(() => {
    loadQuestion();
  }, []);

  //Load question function
  function loadQuestion() {}

  // When the form is submitted, use API method to save the users data
  // Then reload info from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    // if (formObject.title && formObject.author) {
    //   API.saveBook({
    //     title: formObject.title,
    //     author: formObject.author,
    //     synopsis: formObject.synopsis,
    //   })
    //     .then((res) => loadBooks())
    //     .catch((err) => console.log(err));
    // }
  }

  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
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
      {/* //input area */}
      <form className="root" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Your WORD here"
          variant="outlined"
        />
      </form>
    </Container>
  );

  //submit button onClick => handleFormSubmit, save info to db
  //include DailyPost component (generated card)
}

export default Prompt;

//include Prompt in the profile page
