//user's profile page
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Prompt from "../components/Prompt";
import HistoryList from "../components/HistoryList";
import DailyPost from "../components/DailyPost";
import WeekHistory from "../components/WeekHistory";
import GenerateCloud from "../components/GenerateCloud";

function Profile() {
  // const userstate, setUserState, useState =
  // const [userState, setUserState] = useState([]);

  return (
    <div>
      <Nav />
      <Prompt />
      <HistoryList />
      <GenerateCloud />
    </div>
  );
  //jumbotron with personalized welcome message "welcome userName"==NO USERNAME
  //include Prompt Component
  //include Week history component for user to be able to view
  //include Generate Cloud button when milestone reached == when number of posts >=7
}
export default Profile;
