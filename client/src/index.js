import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./utils/GlobalContext";
import { PostProvider } from "./utils/GlobalState";

ReactDOM.render(
  <GlobalProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </GlobalProvider>,
  document.getElementById("root")
);
