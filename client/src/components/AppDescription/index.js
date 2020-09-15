//include a brief description of our app, how to use, etc
//include this in the Welcome page
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "./style.css";

const MyContainer = styled(Container)({
  color: "#20B2AA",
  margin: "0",
});
const MyCard = styled(Card)({
  width: "100%",
  height: "350px",
  color: "black",
  backgroundColor: "transparent",
  opacity: "0.6",
});

const fontStyle = {
  fontFamily: "Ranchers",
};

function AppDescription() {
  return (
    <MyContainer>
      <div className="happycloud">
        <Typography gutterBottom variant="h2" component="h2" style={fontStyle}>
          HAPPY CLOUD
        </Typography>
        <button className="button">
          <Link className="loginbutton" to="/login">
            LOGIN HERE
          </Link>
        </button>
      </div>

      <MyCard>
        <CardActionArea>
          <CardMedia title="Positive message" />
          <CardContent>
            <Typography variant="h5" component="p" className="description">
              This positivity share-space is a way to keep track of at least one
              thing you are grateful for every single day and gives you an
              opportunity to reflect on the progress you've made when you hit
              certain milestones. Generate your own word cloud to spread and
              post positive energy on social media.
            </Typography>
          </CardContent>
        </CardActionArea>
      </MyCard>
    </MyContainer>
  );
}

export default AppDescription;
