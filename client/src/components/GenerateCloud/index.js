// button to click to generate word cloud
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Button } from "@material-ui/core";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    height: "70px"
  },
  button: {
    background: "#20B2AA"

  },
  generatedCloud: {
    margin: "auto",
    display: "block",
    height: "400px",
    width: "400px",
    border: "2px solid grey",
    borderRadius: "16px"
  },
  cloudDiv: {

  }
}));

function generateCloud() {
  const classes = useStyles();
  const [svgFile, setSvgFile] = useState();

  function runCloud(posts) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        return this.response;
      }
      setSvgFile(this.response);

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
      <Box className={classes.buttonBox}>
        <Button
          variant="contained"
          onClick={handleCloudGenerator}
        >
          Generate Cloud
      </Button>
      </Box>

      <div className={classes.cloudDiv}><Box className={classes.generatedCloud}> {ReactHtmlParser(svgFile)} </Box></div>


    </div>
  );
}

export default generateCloud;
