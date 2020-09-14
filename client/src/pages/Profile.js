//user's profile page
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Prompt from "../components/Prompt";
import HistoryList from "../components/HistoryList";
import GenerateCloud from "../components/GenerateCloud";

function Profile() {
  return (
    <div>
      <Nav />
      <Prompt />
      <HistoryList />
      <GenerateCloud />
    </div>
  );
}
export default Profile;
