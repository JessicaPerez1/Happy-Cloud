//user's profile page
import React, { useState, useEffect } from "react";
import Prompt from "../components/Prompt";
import WeekHistory from "../components/WeekHistory";
import GenerateCloud from "../components/GenerateCloud";
import Logout from "../components/Logout";
import Nav from "../components/Nav";

function Profile() {
  // const userstate, setUserState, useState =
  // const [userState, setUserState] = useState([]);

  // //load user's info with useEffect()
  // useEffect(() => {
  //   loadUserInfo();
  // }, []);

  // //Load all user's info from db
  // function loadUserInfo() {}

  return (
    <div>
      <Nav />
      <p>Congrats! You're logged in.</p>
      <Logout />
    </div>
  );
  //jumbotron with personalized welcome message "welcome userName" ===> Maybe create seperate component?
  //include Prompt Component
  //include Week history component for user to be able to view
  //include Generate Cloud button when milestone reached == when number of posts >=7
}
//jumbotron with personalized welcome message "welcome userName" ===> Maybe create seperate component?
//include Prompt Component
//include Week history component for user to be able to view
//include Generate Cloud button when milestone reached == when number of posts >=7
export default Profile;
