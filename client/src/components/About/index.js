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
  width: "75%",
  display: "flex",
  alignItems: "center",
});

const content = {
  height: "auto",
  opacity: "95%",
};

const useStyles = makeStyles({
  title: {
    fontSize: "3rem",
    fontFamily: "'Parisienne', cursive",
    color: "#465e52",
  },
  paragraph: {
    fontSize: "calc(11px + 1vw)",
    fontFamily: "'Libre Baskervville', serif",
    color: "#463f3a",
  },
});

function About() {
  const classes = useStyles();
  return (
    <div>
      <MyCard>
        <CardContent className="description" style={content}>
          <Typography className={classes.title} gutterBottom>
            Why Gratitude?
          </Typography>
          <br />
          <Typography variant="h5" component="p" className={classes.paragraph}>
            Studies show, actively considering what you are grateful for and
            writing it down leads to a more fullfilling and happy life. We
            created a space for you to track your daily gratitude where you can
            easily reflect on past gratefulness.
          </Typography>
          <br />
          <Typography variant="h5" component="p" className={classes.paragraph}>
            Use this journal to spend time on yourself daily and donate as
            little as 30 seconds to self-reflect on a word or short phrase
            regarding what is bringing you gratitude that day. Once you have a
            week or a month of daily posts, you can generate your own{" "}
            <strong>WORD CLOUD</strong> to reflect on all the amazing elements
            you have in your life. Use the word cloud as a reminder or spread
            the positivity by sharing your amazing energy on social media.
          </Typography>
          <br />
          <Typography variant="h5" component="p" className={classes.paragraph}>
            Happy journaling!
          </Typography>
        </CardContent>
      </MyCard>
    </div>
  );
}
export default About;
