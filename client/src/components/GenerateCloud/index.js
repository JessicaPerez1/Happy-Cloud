// button to click to generate word cloud
import React from "react";
// import { Link } from "react-router-dom";
import { usePostContext } from "../../utils/GlobalState";
// import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import { Button } from "@material-ui/core";
import API from "../../utils/API";

function generateCloud() {
  const [state, dispatch] = usePostContext();

  function runCloud(posts) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("root").innerHTML = this.responseText;
      }
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    xhttp.open(
      "GET",
      proxyurl + "https://quickchart.io/wordcloud?text=" + posts,
      true
    );
    xhttp.send();
    console.log("https://quickchart.io/wordcloud?text=" + posts);
  }
  function handleCloudGenerator() {
    const user = JSON.parse(localStorage.getItem("data"));
    console.log(user[0].id);
    const userId = user[0].id;
    let generatedWords = [];
    API.getPosts(userId)
      .then((results) => {
        console.log(results);

        results.data.filter((element) => {
          generatedWords.push(element.post);
        });
        console.log(generatedWords);
        const finalWords = generatedWords.join(" ");
        runCloud(finalWords);
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
