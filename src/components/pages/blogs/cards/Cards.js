import React from "react";

export default function Cards(props) {
  return (
    <div className="cards">
      {props.blogsData &&
        props.blogsData.map((blog) => (
          <a key={blog.id} href={`blogs/${blog.slug}`} className="read-btn">
            <div className="box-img">
              {/* <img src={`/uploads/imgs/${blog.img} `} alt="" /> */}
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
                      {/* {blog.createdAt} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
