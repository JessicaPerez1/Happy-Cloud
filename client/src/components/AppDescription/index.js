//include a brief description of our app, how to use, etc
//include this in the Welcome page
import React from "react";
import { styled } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const MyCard = styled(Card)({
  width: "100%",
  height: "300px",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60)",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  color: "white",
  marginBottom: "20px",
});

function AppDescription() {
  return (
    <MyCard>
      <CardActionArea>
        <CardMedia title="Positive message" />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            HAPPY CLOUD
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            This positivity share-space is a way to keep track of at least one
            thing you are grateful for every single day and gives you an
            opportunity to reflect on the progress you've made when you hit
            certain milestones. Generate your own word cloud to spread and post
            positive energy on social media.
          </Typography>
        </CardContent>
      </CardActionArea>
    </MyCard>
  );
}

export default AppDescription;
