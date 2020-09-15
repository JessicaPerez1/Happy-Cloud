import React from "react"
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
    backgroundImage:
        "url(https://64.media.tumblr.com/d54a9d32332efba6014646d1320e941f/tumblr_ovzced70jc1t5wz6ro1_1280.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    flexGrow: 1,
    margin: 0,
});

const content = {
    width: "100%",
    height: "200px",
    backgroundColor: "transparent",
    color: "#044572",
    fontFamily: `"Ranchers", "cursive"`,
    opacity: "95%",
    display: "flex",
    alignItems: "center",
}
const welcomeButton = {
    color: "#044572",
}

function About() {
    return (
        <div>
            <Link className="home" to="/" style={welcomeButton}>
                Home Page
          </Link>
            <MyCard>
                <CardContent className="description" style={content}>
                    <Typography variant="h5" component="p">
                        This positivity share-space is a way to keep track of at least one
                        thing you are grateful for every single day and gives you an
                        opportunity to reflect on the progress you've made when you hit certain milestones. Generate your own <strong>WORD CLOUD</strong> to spread and post positive energy on social media.
                    </Typography>
                </CardContent>
            </MyCard>
        </div >
    )
}
export default About
