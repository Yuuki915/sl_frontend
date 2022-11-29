import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

export default function Card({ blog }) {
  return (
    <div className="card">
      <Link key={blog._id} to={`/${blog.slug}`} className="read-btn">
        <div className="box-img">
          <img src={`${blog && blog.img}`} alt="img" />
        </div>
        <div className="blog-container">
          <div className="blog">
            <div className="box-top">
              <div className="blog-title">{blog.title}</div>
            </div>

            <div className="box-bottom">
              <div>
                <div className="blog-author">@{blog.author}</div>
                <div className="blog-created-time">
                  {format(new Date(blog && blog.createdAt), "MM.dd.yyyy")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
