//include a brief description of our app, how to use, etc
//include this in the Welcome page
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "./style.css";

// const MyContainer = styled(Container)({
//   color: "#0767A8",
//   margin: "0 auto",
//   paddingTop: "10px",
// });
const MyCard = styled(Card)({
  width: "100%",
  height: "6rems",
  backgroundColor: "transparent",
  opacity: "95%",
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  color: "#044572",
  fontFamily: `"Ranchers", "cursive"`,
});

const fontStyle = {
  fontFamily: "Ranchers",
  color: "#0767A8",
  fontSize: "100px",
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)"
};

// const about = {
//   color: "#0767A8"
// }

function AppDescription() {
  return (
    <MyContainer>
      {/* <div className="happycloud"> */}
      <Typography gutterBottom variant="h2" component="h3" style={fontStyle}>
        Happy Cloud
      </Typography>
      <button className="button">
        <Link className="loginbutton" to="/login">
          LOGIN HERE
        </Link>
      </button>
      {/* </div> */}

      <MyCard>
        <CardContent className="description">
          <Typography variant="h5" component="p">
            This positivity share-space is a way to keep track of at least one
            thing you are grateful for every single day and gives you an
            opportunity to reflect on the progress you've made when you hit
            certain milestones. Generate your own <strong>WORD CLOUD</strong> to
            spread and post positive energy on social media.
          </Typography>
        </CardContent>
      </MyCard>
    </MyContainer>
  );
}

export default AppDescription;
