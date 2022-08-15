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
  console.log(blog);
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

    // const res = await fetch(`/blogs/${blog && blog._id}`, {
    //   method: "DELETE",
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    // const json = await res.json();

    // if (res.ok) {
    //   dispatch({ type: "DELETE_BLOG", payload: json });
    // }
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
            {user ? (
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
            <h1 className="show-title">{blog && blog.title}</h1>
            <h6 className="show-time">
              {format(new Date(blog && blog.createdAt), "MM.dd.yyyy")}
            </h6>
            <div className="author-info">
              <p className="show-auth">@{user.username}</p>
            </div>

            <div className="show-img">
              <img src={`${blog && blog.img}`} alt="show-img" />
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

          {user.username === blog.author ? (
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
