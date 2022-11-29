import "../../../css/pages/CategoryPage.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { FiArrowLeftCircle } from "react-icons/fi";

import Card from "../../partials/card/Card";
import Categories from "../../partials/Categories";
import Hamburger from "../../partials/Hamburger";
import Footer from "../../partials/Footer";

export default function CategoryPage() {
  const { blogs } = useBlogsContext();
  const params = useParams();
  const { user } = useAuthContext();

  const searchUsersBlog =
    Array.isArray(blogs) &&
    blogs.filter((item) => user && user.username === item.author);
  // console.log(searchUsersBlog);

  const catBlogs =
    Array.isArray(blogs) &&
    blogs.filter((blog) => {
      return blog.category === params.category;
    });

  return (
    <div className="cat-page-wrapper">
      <Hamburger />
      <div className="category-page">
        <div className="sidebar-container">
          <div className="sidebar">
            <Link to="/" className="to-top">
              Sharelog
            </Link>
            <div className="categories-wrapper">
              <p className="show-current-category">{params.category}</p>
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
              <Link to="/" className="back-link">
                <FiArrowLeftCircle />
                <span>Top page</span>
              </Link>
            </button>
            {user && user ? (
              <button className="addmore-btn">
                <Link to="/new" className="addmore-link">
                  <span>Add Blog</span>
                </Link>
              </button>
            ) : (
              <></>
            )}
          </div>

          {params.category === "YourPosts" ? (
            searchUsersBlog.length < 1 ? (
              <div className="blog-cards">No blogs yet</div>
            ) : (
              <div className="blog-cards">
                {searchUsersBlog &&
                  searchUsersBlog.map((blog) => (
                    <Card key={blog._id} blog={blog} />
                  ))}
              </div>
            )
          ) : catBlogs.length < 1 ? (
            <div className="blog-cards">No blogs yet</div>
          ) : (
            <div className="blog-cards">
              {catBlogs &&
                catBlogs.map((blog) => <Card key={blog._id} blog={blog} />)}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
