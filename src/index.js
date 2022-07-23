import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Main from "./components/pages/Main";
import NewPost from "./components/pages/blogs/NewPost";
import Edit from "./components/pages/blogs/Edit";
import Show from "./components/pages/blogs/Show";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Main />} />
        <Route path="/blogs/new" element={<NewPost />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
