// button to click to generate word cloud
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Button } from "@material-ui/core";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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
    fontFamily: "'Baskervville', serif",
  },
  generatedCloud: {
    margin: "auto",
    padding: "0",
    display: "block",
    height: "600px",
    width: "600px",
    border: "2px solid grey",
    borderRadius: "5px",
  },
  pdfBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    padding: "10px",
  },
  pdfBtnLook: {
    border: "none",
    background: "transparent",
    color: "rgb(172, 168, 168)"
  },
  newFile: {
    width: 600,
    height: 600,
  },
  instabutton: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "transparent",
    border: "none",
    color: "rgb(143, 137, 137)",
    fontFamily: "Libre Baskervvile , serif",
  },
}));

// const options = {
//   orientation: 'landscape',
//   unit: 'in',
//   format: [4, 2]
// };

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

  }

  function handleCloudGenerator() {
    const user = JSON.parse(localStorage.getItem("data"));

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
        <Button className={classes.instabutton}>
          <a
            href="https://www.instagram.com/accounts/login/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Share on Instagram!
          </a>
        </Button>
      </Box>
      <div ref={ref} className={classes.generatedCloud}>
        {ReactHtmlParser(svgFile)}
      </div>

      <Box className={classes.pdfBtn}>
        <Pdf targetRef={ref} className={classes.newFile} filename="your-word-cloud.pdf" >
          {({ toPdf }) => (
            <Button onClick={toPdf} className={classes.pdfBtnLook} rel="noopener noreferrer" target="_blank">
              <CloudDownloadIcon />
            </Button>
          )}
        </Pdf>
      </Box>
    </div>
  );
}

export default generateCloud;
