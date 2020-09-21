import React, { useEffect, useRef, useState } from "react";
import { usePostContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import API from "../../utils/API";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

function Calendar() {
  const [state, dispatch] = usePostContext();

  const getPosts = async () => {
    const user = await JSON.parse(localStorage.getItem("data"));
    console.log(user);
    const userId = user[0].id;
    console.log(userId);
    dispatch({ type: LOADING });

    API.getPosts(userId)
      .then((results) => {
        console.log(results.data);
        const dateInfo = results.data[0].date.slice(0, 10);
        console.log(dateInfo);
        // console.log(results.data[0].date.slice(0, 10));

        dispatch({
          type: UPDATE_POSTS,
          posts: results.data,
          user: results.data.userId,
        });
      })
      .catch((err) => console.log(err));
  };
  state.posts.map((post) => {
    const events = [{ title: post.post, date: new Date() }];
    //   }
    //   const events = async (posts) => {
    //     const EventText = await [{ title: posts, date: new Date() }];
    //   };
    //const events = [{ title: "today's event", date: new Date() }];

    return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    );
  });
}

export default Calendar;
