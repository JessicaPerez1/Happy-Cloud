import axios from "axios";

export default {
  // Gets all posts
  getPosts: function (id) {
    return axios.get("/api/" + id + "posts");
  },
  // Gets the post with the given id
  getSavedPosts: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  createPost: function (userId, post) {
    const params = { userId, post }
    const header = { headers: { "Authorization": "Bearer " + JSON.parse(localStorage.getItem("data"))[0].token } }
    console.log("id", userId)
    console.log("postdata", post)
    console.log("token", header)
    return axios.post("/api/posts", params, header);
  },
  // Saves/edit a post to the database
  savePost: function (postData) {
    return axios.put("/api/posts", postData);
  },
};
