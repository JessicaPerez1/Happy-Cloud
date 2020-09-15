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

const MyContainer = styled(Container)({
  color: "#0767A8",
  margin: "0",
  marginBottom: "100px"
});

const fontStyle = {
  fontFamily: "Ranchers",
  color: "#0767A8",
  fontSize: "100px",
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)"
};

const about = {
  color: "#0767A8"
}

function AppDescription() {
  return (
    <MyContainer>
      <div className="happycloud">
        <button className="button">
          <Link className="loginbutton" to="/login">
            LOGIN HERE
          </Link>
        </button>
        <Typography gutterBottom variant="h3" component="h3" style={fontStyle}>
          Happy Cloud
        </Typography>
        <Link className="about" style={about} to="/about">
          about
          </Link>
      </div>
    </MyContainer>
  );
}

export default AppDescription;
