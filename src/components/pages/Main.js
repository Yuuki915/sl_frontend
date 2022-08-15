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

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const res = await fetch("/blogs");
  //     const json = await res.json();
  //     if (res.ok) {
  //       dispatch({ type: "SET_BLOGS", payload: json });
  //     }
  //   };
  //   fetchBlogs();
  // }, [dispatch]);

  useEffect(() => {
    const getBlogs = async () => {
      await axios.get("/blogs").then((res) => {
        console.log(res.data);
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

      {/* <div className="header">
        {user && (
          <div>
            <span>{user.username}</span>
            <Link to="/blogs" className="btn logout-btn" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/user/login" className="auth-link">
              Login
            </Link>
            <Link to="/user/register" className="auth-link">
              Register
            </Link>
          </div>
        )}
      </div> */}

      <p className="subtitle">Share your favorite</p>

      {user ? (
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
