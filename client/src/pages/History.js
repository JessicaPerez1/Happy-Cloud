//user can check the full list of posts
import React from "react";
import API from "../utils/API";
import Card from "../components/DailyPost";

class History extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getSavedPosts();
  }

  getSavedPosts = () => {
    API.getPosts()
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
        <h1 className="text-center">
          <strong>What have you been thankful for??</strong>
        </h1>
        <h2 className="text-center">Posting history for your HappyCloud</h2>
        <Card title="Saved Posts" icon="download">
          {this.state.posts.length ? (
            <List>
              {this.state.posts.map((post) => (
                <Post
                  key={post._id}
                  word={post.word}
                  date={post.date}
                  owner={post.owner}
                />
              ))}
            </List>
          ) : (
            <h2 className="text-center">No Saved Posts</h2>
          )}
        </Card>
      </div>
    );
  }
}

export default History;
