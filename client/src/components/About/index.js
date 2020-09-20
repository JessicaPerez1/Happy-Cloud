import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const MyCard = styled(Card)({
  margin: "0 auto",
  marginBottom: "2rem",
  marginTop: "2rem",
  background: "transparent",
  width: "50%",
  display: "flex",
  alignItems: "center",

});

const content = {
  height: "auto",
  opacity: "95%",
};


function About() {
  return (
    <div>
      <MyCard >
        <CardContent className="description" style={content}>
          <Typography variant="h5" component="p">
            This positivity share-space is a way to keep track of at least one
            thing you are grateful for every single day and gives you an
            opportunity to reflect on the progress you've made when you hit
            certain milestones. Generate your own <strong>WORD CLOUD</strong> to
            spread and post positive energy on social media.
          </Typography>
        </CardContent>
      </MyCard>
    </div>
  );
}
export default About;
