import React from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import Card from "../../partials/card/Card";
import Categories from "../../partials/Categories";
import Footer from "../../partials/Footer";

import "../../../css/pages/CategoryPage.css";

export default function CategoryPage() {
  const { blogs } = useBlogsContext();
  const params = useParams();

  const catBlogs =
    blogs &&
    blogs.filter((blog) => {
      return blog.category === params.category;
    });

  return (
    <div className="category-page">
      <div className="sidebar">
        <Link to="/blogs" className="to-top">
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

      <div className="blog-wrapper">
        <div className="bb-posi">
          <button>
            <Link to="/blogs/new" className="btn addmore-btn">
              Add Blog
            </Link>
          </button>
        </div>
        <div className="blog-cards">
          {catBlogs &&
            catBlogs.map((blog) => <Card key={blog._id} blog={blog} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
