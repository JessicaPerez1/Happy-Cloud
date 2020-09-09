//user's profile page
import React, { useState, useEffect } from "react";

function Profile() {
  //const userstate, setUserState, useState =
  const [userState, setUserState] = useState([]);
  //load user's info with useEffect()
  useEffect(() => {
    loadUserInfo();
  }, []);

  //Load all user's info from db
  function loadUserInfo() {}

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    // const info = event.target;
    // setUserState({ ...userState, info});
  }

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
  //jumbotron with personalized welcome message "welcome userName" ===> Maybe create seperate component?
  //include Prompt Component
  //Input area for user's daily word
  //Submit button===> add onClick (handleformsubmit)
}
