import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import "../../css/Buttons.css";
import "../../css/pages/Main.css";

import Categories from "../partials/Categories";
import Footer from "../partials/Footer";
import Blogs from "./blogs/Blogs";

export default function Main({ blogs }) {
  return (
    <div className="main">
      <div className="siteimg"></div>
      <p className="site-title">ShareLog</p>
      <Link to="/auth/logout" className="btn logout-btn">
        Logout
      </Link>
      <p className="subtitle">Share your favorite</p>
      <div className="btn-container">
        <button className="add-btn">
          <Link to="/blogs/new">Add Blog</Link>
        </button>
      </div>

      <Categories />

      {blogs && blogs.length < 1 ? (
        <p className="nopost">No post yet.</p>
      ) : (
        <Blogs blogs={blogs} />
      )}
      <Footer />
    </div>
  );
}
