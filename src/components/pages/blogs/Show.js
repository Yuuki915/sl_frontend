import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/pages/Show.css";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import format from "date-fns/format";
import { FiArrowLeftCircle } from "react-icons/fi";

import Categories from "../../partials/Categories";
import Footer from "../../partials/Footer";
import Hamburger from "../../partials/Hamburger";
import axios from "axios";

export default function Show() {
  const { blogs, dispatch } = useBlogsContext();
  const params = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const blog = blogs && blogs.find((item) => item.slug === params.slug);

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    await axios
      .delete(`/blogs/${blog && blog._id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "DELETE_BLOG", payload: res.data });
        navigate(`/blogs`);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <>
      <Hamburger />

      <div className="show">
        <div className="sidebar-container">
          <div className="sidebar">
            <Link to="/blogs" className="to-top">
              Sharelog
            </Link>
            <div className="categories-wrapper">
              <p className="show-current-category">{blog && blog.category}</p>
              <div className="cat-options">
                <h4>Categories</h4>
                <Categories />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-wrapper">
          <div className="bb-posi">
            <button className="back-btn">
              <Link to="/blogs" className="back-link">
                <FiArrowLeftCircle />
                <span>Top page</span>
              </Link>
            </button>
            {user && user ? (
              <button className="addmore-btn">
                <Link to="/blogs/new" className="addmore-link">
                  <span>Add Blog</span>
                </Link>
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="blog-detail">
            <h1 className="show-title">
              {blog && blog.title}
              <p className="title-border"></p>
            </h1>
            <div className="show-author-date">
              <p className="show-auth">@{blog && blog.author}</p>
              <h6 className="show-date">
                {format(new Date(blog && blog.createdAt), "MM.dd.yyyy")}
              </h6>
            </div>

            <div className="show-img">
              <img src={`${blog && blog.img}`} alt="show-img" />
            </div>

            <div className="show-texts">
              <div className="show-favorite">
                <p>My favorite is... {blog && blog.favorite}</p>
              </div>
              <p className="show-body">
                {blog &&
                  blog.body
                    .split(/(\n)/g)
                    .map((str, key) => (str === "\n" ? <br key={key} /> : str))}
              </p>
            </div>
          </div>

          {user && user.username === blog.author ? (
            <div className="btns">
              <Link to="/blogs" className="btn del-btn" onClick={handleDelete}>
                Delete
              </Link>
              <Link
                to={`/blogs/edit/${blog && blog._id}`}
                className="btn edit-btn"
              >
                Edit
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
