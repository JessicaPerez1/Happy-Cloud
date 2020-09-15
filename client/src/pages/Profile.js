//user's profile page
import React from "react";
import Nav from "../components/Nav";
import Prompt from "../components/Prompt";
import HistoryList from "../components/HistoryList";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Profile() {
  const history = useHistory();
  const handleCloudPage = () => {
    history.push("/cloud");
  };

  return (
    <div>
      <Nav />
      <Prompt />
      <HistoryList />
      <Button variant="contained" color="primary" onClick={handleCloudPage}>
        <Link> Generate your Cloud Page </Link>
      </Button>
    </div>
  );
}
export default Profile;
