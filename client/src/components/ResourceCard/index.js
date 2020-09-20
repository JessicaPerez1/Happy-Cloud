import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.2rem",
    padding: "1rem",
    minWidth: 300,
    flexGrow: 1,
  },
  title: {
    fontSize: 21,
    color: "darkGray",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3B3C3C",
  },
  media: {
    height: 400,
  },
}));

function ResourceCard() {
  const classes = useStyles();
  return (
    
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1581333100576-b73befd79a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            title="How are you image"
          />
          <CardContent>
            <Typography className={classes.title}>
              Mental Health Experts and Resources
            </Typography>

            <Typography className={classes.subtitle}>
              Access resources and get in touch with mental health experts for
              more support.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.mentalhealth.org/talk/community-conversation/services"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </Container>

  );
}

export default ResourceCard;
