import React, { useEffect, useState } from "react";
import "../../css/App.css";
import "../../css/Buttons.css";
import "../../css/Pages.css";
import Cards from "./blogs/cards/Cards";

export default function Main() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/blogs`);
      const json = await res.json();
      if (res.ok) {
        setBlogs(json);
      }
    };
    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <div className="main">
      <div className="siteimg"></div>
      <p className="site-title">ShareLog</p>
      <a href="/auth/logout" className="btn logout-btn">
        Logout
      </a>
      <p className="subtitle">Share the place you like</p>

      <div className="btn-container">
        <button className="btn add-btn">
          <a href="/blogs/new">Add Place</a>
        </button>
      </div>

      {blogs && blogs.length < 1 ? (
        <p className="nopost">No post yet.</p>
      ) : (
        <div className="blogs">
          <Cards blogsData={blogs} />
        </div>
      )}
    </div>
  );
}
