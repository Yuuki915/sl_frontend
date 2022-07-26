import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BlogsContextProvider } from "./context/BlogsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </React.StrictMode>
);
