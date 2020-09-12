//card for post == user input
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { TextField } from "@material-ui/core";

function Post() {
  // Handles updating component state when the user types into the input field
  //   function handleInputChange(event) {}
  //     // const info = event.target;
  //     // setUserState({ ...userState, info});

  //       // When the form is submitted, use API method to save the users data
  //   // Then reload info from the database
  //   function handlePostSubmit(event) {
  //     event.preventDefault();
  //     // if (formObject.title && formObject.author) {
  //     //   API.saveBook({
  //     //     title: formObject.title,
  //     //     author: formObject.author,
  //     //     synopsis: formObject.synopsis,
  //     //   })
  //     //     .then((res) => loadBooks())
  //     //     .catch((err) => console.log(err));
  //     // }
  //   }

  return (
    <form className="root" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Your WORD here"
        variant="outlined"
      />
      <button>Submit</button>
    </form>
  );
}

export default Post;
