import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import quotes from "../../quotes.json";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  body: {
    color: "#20B2AA",
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
        <Typography className={classes.body} variant="h5" component="h2">
          {quoteState.quotes.quote}
        </Typography>
        <Typography variant="body2" component="p">
          {quoteState.quotes.source}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
