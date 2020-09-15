import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import quotes from "../../quotes.json";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "85%",
    margin: "0 auto",
    borderRadius: "0.4",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 16,
  },
  body: {
    color: "#044572",
    textAlign: "left",
    fontSize: "2rem",
  },
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
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Grateful Post of the Day:
        </Typography>
        <Typography className={classes.body} component="h2">
          <em>{quoteState.quotes.quote}</em>
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {quoteState.quotes.source}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
