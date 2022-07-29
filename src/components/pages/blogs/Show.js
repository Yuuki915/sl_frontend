import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

import format from "date-fns/format";

export default function Show() {
  const { blogs, dispatch } = useBlogsContext();
  const params = useParams();

  const blog = blogs && blogs.find((item) => item.slug === params.slug);

  const handleDelete = async () => {
    const res = await fetch(`/blogs/${blog && blog._id}`, {
      method: "DELETE",
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="show">
      <Header />

      <div className="bb-posi">
        <button>
          <Link to="/blogs" className="back-btn">
            Back
          </Link>
        </button>
        <button>
          <Link to="/blogs/new" className="btn addmore-btn">
            Add more
          </Link>
        </button>
      </div>

      <div className="blog-detail">
        <h1 className="show-title">{blog && blog.title}</h1>
        <h6 className="show-time">
          {format(new Date(blog && blog.createdAt), "MM.dd.yyyy")}
        </h6>
        <div className="author-info">
          <p className="show-auth">@{blog && blog.author}</p>
        </div>

        <div className="show-img">
          <img src="/uploads/imgs/<%= blog.img %>" alt="show-img" />
        </div>

        <div className="show-texts">
          <div className="show-place">
            <p>My favorite place is ...</p>
            <p>{blog && blog.placeName}</p>
          </div>
          <div className="show-country">
            <p>In</p>
            <p>{blog && blog.country}</p>
          </div>
          <p className="show-body">{blog && blog.body}</p>
        </div>
      </div>

      <div className="btns">
        <Link to="/blogs" className="btn del-btn" onClick={handleDelete}>
          Delete
        </Link>
        <Link to={`/blogs/edit/${blog && blog._id}`} className="btn edit-btn">
          Edit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
