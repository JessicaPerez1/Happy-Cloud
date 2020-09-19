import React, { useEffect } from "react";
import { usePostContext } from "../../utils/GlobalState";
import { LOADING, UPDATE_POSTS } from "../../utils/actions";
import API from "../../utils/API";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./style.css";

const MyCard = styled(Card)({
  width: "30%",
  marginTop: "15px",
  marginLeft: "5px",
  float: "left",
  backgroundColor: "#4E598C",
  marginBottom: "15px",
});

const MyContent = styled(CardContent)({
  borderStyle: "2px solid black",
});

function HistoryList() {
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
  // useEffect(() => {
  // getPosts();
  // }, []);

  return (
    <div>
      {state.posts.map((post) => (
        <MyCard>
          <MyContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              id="datetitle"
            ></Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="date"
            >
              {post.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" id="wordtitle">
              Grateful For:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="word"
            >
              {post.post}
            </Typography>
          </MyContent>
        </MyCard>
      ))}
    </div>
  );
}

export default HistoryList;
