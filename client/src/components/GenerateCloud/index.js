// button to click to generate word cloud
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Button } from "@material-ui/core";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./style.css";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    height: "100px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Nunito', sans-serif",
  },
  generatedCloud: {
    margin: "auto",
    display: "block",
    height: "600px",
    width: "600px",
    border: "2px solid grey",
    borderRadius: "5px",
  },
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
        results.data.filter((element) => {
          generatedWords.push(element.post);
        });
        const finalWords = generatedWords.join(" ");
        runCloud(finalWords);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Box className={classes.buttonBox}>
        <Button
          onClick={handleCloudGenerator}
          className={classes.button}
          className="btn btn-two"
        >
          Generate
          <br />
          Cloud
        </Button>
      </Box>
      <div ref={ref} className={classes.generatedCloud}>
        {ReactHtmlParser(svgFile)}
      </div>
      <Pdf
        targetRef={ref}
        style={{ width: 400, height: 400 }}
        filename="your-word-cloud.pdf"
      >
        {({ toPdf }) => (
          <button onClick={toPdf} rel="noopener noreferrer" target="_blank">
            Generate Pdf
          </button>
        )}
      </Pdf>
    </div>
  );
}

export default generateCloud;
