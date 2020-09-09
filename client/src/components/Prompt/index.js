import React, { useState, useEffect } from "react";
import DailyPost from "../DailyPost";

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

  return;
  //question of the day card
  //input area
  //submit button onClick => handleFormSubmit
  //include DailyPost component (generated card)
}

export default Prompt;

//include Prompt in the profile page
