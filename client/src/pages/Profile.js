//user's profile page
import React, { useState, useEffect, Component } from "react";
import Prompt from "../components/Prompt";
import WeekHistory from "../components/WeekHistory";
import GenerateCloud from "../components/GenerateCloud";
import API from "../utils/API";

class Profile extends Component {
  state = {
    posts: [],
  };
  //const userstate, setUserState, useState =
  // const [userState, setUserState] = useState([]);
  //load user's info with useEffect()
  // useEffect(() => {
  //   loadUserInfo();
  // }, []);

  componentDidMount() {
    this.getRecentPosts();
  }

  //Load all user's info from db
  loadUserInfo() {}

  getRecentPosts = () => {
    API.getRecentPosts()
      .then((res) =>
        this.setState({
          posts: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <WeekHistory />
      </div>
    );
  }

  //jumbotron with personalized welcome message "welcome userName" ===> Maybe create seperate component?
  //include Prompt Component
  //include Week history component for user to be able to view
  //include Generate Cloud button when milestone reached == when number of posts >=7
}

export default Profile;
