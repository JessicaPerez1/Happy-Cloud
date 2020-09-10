import React, { createContext, useReducer, useContext } from "react";
import { SET_CURRENT_POST, UPDATE_POSTS, ADD_POST } from "./actions";

const PostContext = createContext();
const { Provider } = PostContext;

const reducer = (state, action) => {
  switch (action.type) {
    // case SET_CURRENT_POST:
    //   return {
    //     ...state,
    //     currentPost: action.post,
    //   };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };

    // case REMOVE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter((post) => {
    //       return post._id !== action._id;
    //     }),
    //   };

    default:
      return state;
  }
};

const PostProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: "",
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePostContext = () => {
  return useContext(PostContext);
};

export { PostProvider, usePostContext };
