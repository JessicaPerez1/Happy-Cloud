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
  createPost: function (postData) {
    return axios.post("/api/posts", postData);
  },
  // Saves/edit a post to the database
  savePost: function (postData) {
    return axios.put("/api/posts", postData);
  },
};
