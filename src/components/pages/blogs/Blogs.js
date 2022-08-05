import React from "react";
import Card from "../../partials/card/Card";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs-wrapper">
      <p className="all-blogs">All Blogs</p>
      <div className="blogs">
        {blogs && blogs.map((blog) => <Card key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
