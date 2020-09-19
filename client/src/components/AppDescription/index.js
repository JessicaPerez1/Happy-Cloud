//include a brief description of our app, how to use, etc
//include this in the Welcome page
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MyContainer from "@material-ui/core/Container";
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
});

const fontStyle = {
  color: "#0767A8",
  fontSize: "2.7rem",
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
};

const about = {
  color: "#0767A8",
};

function AppDescription() {
  return (
    <MyContainer>
      <div className="happycloud">
        {/* <Typography gutterBottom style={fontStyle}>
          Happy Cloud
        </Typography> */}
      </div>
    </MyContainer>
  );
}

export default AppDescription;
