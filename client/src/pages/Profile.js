//user's profile page
import React from "react";
import Nav from "../components/Nav";
import Prompt from "../components/Prompt";
import Calendar from "../components/Calendar";
// import HistoryList from "../components/HistoryList";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Profile() {
  const history = useHistory();
  const handleCloudPage = () => {
    history.push("/cloud");
  };

  const linkStyle = {
    color: "black",
  };

  const buttonStyle = {
    clear: "both",
    color: "black",
    backgroundColor: "white",
    display: "block",
    margin: "0 auto",
    border: "2px solid transparent",
    borderImage:
      "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
    borderImageSlice: "1",
    fontFamily: "'Libre Baskervville', serif",
  };

  return (
    <div>
      <Nav />
      <Prompt />
      
      {/* <HistoryList /> */}
      <Calendar />
      <Button onClick={handleCloudPage} style={buttonStyle}>
        <Link to="/cloud" stlye={linkStyle}>
          Click Here for your WordCloud
        </Link>
      </Button>
    </div>
  );
}
export default Profile;
