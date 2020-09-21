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
            image="data:image/jpeg;base64,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"
            title="Anxiety Journal"
          />
          <CardContent>
            <Typography className={classes.title}>
              How does journaling encourage positive reflection?
            </Typography>

            <Typography className={classes.subtitle}>
              83 Benefits of Journaling for people who suffer from depression,
              stress, and anxiety.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://positivepsychology.com/benefits-of-journaling/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJqpghK-QPpQWfoZOMansV6Ld6SppB80yF1g&usqp=CAU"
            title="Today I Am Grateful"
          />
          <CardContent>
            <Typography className={classes.title}>
              How does gratitude affect your mental health?
            </Typography>

            <Typography className={classes.subtitle}>
              Evidence that being grateful can increase mental balance and
              stability.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.nationwidechildrens.org/family-resources-education/700childrens/2020/05/gratitude#:~:text=Showing%20gratitude%20has%20the%20following,can%20make%20you%20more%20optimistic."
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="data:image/jpeg;base64,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"
            title="Anxiety Journal"
          />
          <CardContent>
            <Typography className={classes.title}>
              Hold yourself accountable every day.
            </Typography>

            <Typography className={classes.subtitle}>
              Why making gratitude a routine has proven successful.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.forbes.com/sites/nomanazish/2018/11/21/five-science-backed-ways-to-practice-gratitude-every-day/#788bf0931e67"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
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
