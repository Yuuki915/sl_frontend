import React from "react";
import Card from "./card/Card";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs">
      {blogs && blogs.map((blog) => <Card key={blog._id} blog={blog} />)}
    </div>
  );
}
