import "../../css/App.css";
import "../../css/Buttons.css";
import "../../css/pages/Main.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

import Categories from "../partials/Categories";
import Footer from "../partials/Footer";
import Blogs from "./blogs/Blogs";
import Hamburger from "../partials/Hamburger";
import axios from "axios";

export default function Main() {
  const { user } = useAuthContext();
  const { blogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const getBlogs = async () => {
      await axios.get("/blogs").then((res) => {
        // console.log(res.data);
        dispatch({ type: "SET_BLOGS", payload: res.data });
      });
    };
    getBlogs();
  }, [dispatch]);

  return (
    <div className="main">
      <div className="siteimg"></div>
      <p className="site-title">ShareLog</p>

      <Hamburger />

      <p className="subtitle">Share your favorite</p>

      {user && user ? (
        <div className="btn-container">
          <button className="add-btn">
            <Link to="/blogs/new">Post a Blog</Link>
          </button>
        </div>
      ) : (
        <div className="comment-login">
          <Link to="/user/login">Login</Link> /{" "}
          <Link to="/user/register">Register</Link> to post your blog
        </div>
      )}
      <div className="main-cat">
        <Categories />
      </div>

      {blogs && blogs.length < 1 ? (
        <p className="nopost">No post yet.</p>
      ) : (
        <Blogs blogs={blogs} />
      )}
      <Footer />
    </div>
  );
}
