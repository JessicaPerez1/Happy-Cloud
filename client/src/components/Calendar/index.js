import React, { useEffect, useRef, useState } from "react";
import { usePostContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import API from "../../utils/API";
import { Button } from "@material-ui/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { makeStyles } from "@material-ui/core/styles";
// import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
//STYLING
const useStyles = makeStyles({
  button: {
    border: "0px solid rgb(172, 168, 168)",
    boxShadow: "1px 1px 2px 2px rgb(172, 168, 168)",
    borderRadius: "0.2rem",
    fontSize: "1rem",
    marginTop: "1rem",
    fontFamily: "'Nunito', sans-serif",
    color: "rgb(143, 137, 137)",
    marginBottom: 10,
  },
});

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
const newEvents = [];
const postsArray = [];
const postsDate = [];
const allInfo = [];
export default function Calendar() {
  const classes = useStyles();
  const [state, dispatch] = usePostContext();

  const receivePosts = async () => {
    const user = await JSON.parse(localStorage.getItem("data"));

    const userId = user[0].id;


    dispatch({ type: LOADING });
    API.getPosts(userId)
      .then((results) => {
        newEvents.push(results.data);
        const dateInfo = results.data[0].date.slice(0, 10);

        const dataArray = results.data;
        dataArray.forEach((post) => {
          postsArray.push(post.post);
          postsDate.push(post.date.slice(0, 10));
          allInfo.push({
            title: post.post,
            start: post.date.slice(0, 10),
          });

        });

        dispatch({
          type: UPDATE_POSTS,
          posts: results.data,
          user: results.data.userId,
        });
        return results.data;
        // newEvents.push(results.posts);

      })
      .catch((err) => console.log(err));
  };
  const setCalendar = async () => {
    receivePosts();

    const user = await JSON.parse(localStorage.getItem("data"));

    const userId = user[0].id;

    allInfo.splice(0, allInfo.length);

  };


  const eventObject = [];
  allInfo.forEach((post) => {
    eventObject.push({
      title: post.title,
      start: post.start,
    });
  });


  const events = eventObject;


  return (
    <div className="calendar">
      <Button className={classes.button} onClick={setCalendar}>
        Refresh Calendar
      </Button>

      <FullCalendar
        className="cal"
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />

    </div>
  );
}
