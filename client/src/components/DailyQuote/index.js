import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import quotes from "../../quotes.json";

const useStyles = makeStyles({
  root: {
    maxWidth: "85%",
    background: "transparent",
    margin: "0 auto",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: 300,
    flexGrow: 1,
  },
  title: {
    fontSize: 21,
  },
  body: {
    color: "#463f3a",
    textAlign: "left",
    fontSize: "calc(25px + 1.2vw)",
    fontFamily: "'Parisienne', cursive",
  },
  name: {
    fontFamily: "'Nunito', sans-serif",
  }
});

export default function DailyPost() {
  const classes = useStyles();
  const [quoteState, setQuoteState] = useState({
    quotes: quotes,
  });
  console.log("Current state", quoteState);
  const getQuotes = () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
    setQuoteState({
      quotes: randomQuote,
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.body} component="h2">
            <em>{quoteState.quotes.quote}</em>
          </Typography>
          <Typography className={classes.name} variant="body2" component="p" color="textSecondary">
            - {quoteState.quotes.source}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
