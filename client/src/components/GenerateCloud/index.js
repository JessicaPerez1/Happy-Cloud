// button to click to generate word cloud
import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import API from "../../utils/API";

function generateCloud() {
  function handleCloudGenerator() {
    const user = JSON.parse(localStorage.getItem("data"));
    console.log(user[0].id);
    const userId = user[0].id;
    let generatedWords = [];
    API.getPosts(userId)
      .then((results) => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data.post,
        });
        console.log(posts);
        generatedWords;
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      {/* <Link to="/editpage"> */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleCloudGenerator}
      >
        Generate Cloud
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default generateCloud;
