import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    const header = { headers: { "Authorization": "Bearer " + JSON.parse(localStorage.getItem("data"))[0].token } }
    return axios.get("/api/posts", header);
  },
  // Gets the post with the given id
  getSavedPosts: function (id) {
    const header = { headers: { "Authorization": "Bearer " + JSON.parse(localStorage.getItem("data"))[0].token } }
    return axios.get("/api/posts/" + id, header);
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
    const header = { headers: { "Authorization": "Bearer " + JSON.parse(localStorage.getItem("data"))[0].token } }
    return axios.put("/api/posts", postData, header);
  },
};
