import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import "../../css/Buttons.css";
import "../../css/Pages.css";

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
      <p className="subtitle">Share the place you like</p>
      <div className="btn-container">
        <button className="btn add-btn">
          <Link to="/blogs/new">Add Place</Link>
        </button>
      </div>
      {blogs && blogs.length < 1 ? (
        <p className="nopost">No post yet.</p>
      ) : (
        <div className="blogs">
          <Blogs blogs={blogs} />
        </div>
      )}
      <Footer />
    </div>
  );
}
