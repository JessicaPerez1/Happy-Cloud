//card generated with the user's word of the day
//include in profile page
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DailyPost() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Sample Card - Grateful Post of the Day:
        </Typography>
        <Typography variant="h5" component="h2">
          Word1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date
        </Typography>
        <Typography variant="body2" component="p">
          -Owner
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
