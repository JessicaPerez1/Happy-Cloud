import React, { useEffect, useRef, useState } from "react";
import { usePostContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import API from "../../utils/API";
import { Button } from "@material-ui/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calendar.css";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
const newEvents = [];
const postsArray = [];
const postsDate = [];
const allInfo = [];
export default function Calendar() {
  const [state, dispatch] = usePostContext();

  const receivePosts = async () => {
    const user = await JSON.parse(localStorage.getItem("data"));
    console.log(user);
    const userId = user[0].id;
    console.log(userId);

    dispatch({ type: LOADING });
    API.getPosts(userId)
      .then((results) => {
        newEvents.push(results.data);
        const dateInfo = results.data[0].date.slice(0, 10);
        console.log(dateInfo);
        console.log(results.data);
        const dataArray = results.data;
        dataArray.forEach((post) => {
          console.log("The word " + post.post + " was posted on " + post.date);
          postsArray.push(post.post);
          postsDate.push(post.date.slice(0, 10));
          allInfo.push({
            title: post.post,
            start: post.date.slice(0, 10),
          });
          console.log(allInfo);
          // console.log(postsArray);
          // console.log(postsDate);
          // console.log(postsArray[0]);
        });
        // console.log(results.data[0].post);
        // console.log(results.data[0].date.slice(0, 10));
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data,
          user: results.data.userId,
        });
        return results.data;
        // newEvents.push(results.posts);
        // console.log(newEvents);
      })
      .catch((err) => console.log(err));
  };
  const setCalendar = async () => {
    receivePosts();

    const user = await JSON.parse(localStorage.getItem("data"));
    console.log(user);
    const userId = user[0].id;
    console.log(userId);
    console.log(newEvents);
    allInfo.splice(0, allInfo.length);
    // let allInfo = [];
    // const currentPost = await newEvents[0][0].post;
    // console.log(currentPost);
  };

  // postsArray.forEach((post) => console.log(post));
  const eventObject = [];
  allInfo.forEach((post) => {
    eventObject.push({
      title: post.title,
      start: post.start,
    });
  });
  // const allInfo = [];

  // for (var i = 0; i < postsArray.length; i++) {
  //   eventObject.title += postsArray[i];
  // }

  // for (var i = 0; i < postsDate.length; i++) {
  //   eventObject.start += postsDate[i];
  // }
  // postsArray.forEach((post) => {
  //   eventObject.title = post.post;
  // });
  // postsDate.forEach((post) => {
  //   eventObject.start = post.date;
  // });
  // postsArray.map((post) => {
  //   eventObject.title = post.post;
  // });
  // postsDate.map((date) => {
  //   eventObject.start = date.date;
  // });
  // eventObject.title = postsArray.map((post) => post.post);
  // eventObject.start = postsDate.map((post) => post.date);
  // console.log(JSON.stringify(allInfo[0]));

  // const events = allInfo[0];
  const events = eventObject;

  // const events = [{ title: "today's event" , date: new Date() }];
  return (
    <div className="calendar">
      <Button onClick={setCalendar}> Add Post/View Calendar </Button>
      {/* {state.posts.map((post) => ( */}
      <FullCalendar
        className="cal"
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
      {/* ))} */}
    </div>
  );
}
