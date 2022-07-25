import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function Show() {
  return (
    <div className="show">
      <Header />
      <div className="bb-posi">
        <button>
          <a href="/blogs" className="back-btn">
            Back
          </a>
        </button>
        <button>
          <a href="/blogs/new" className="btn addmore-btn">
            Add more
          </a>
        </button>
      </div>

      <div className="blog-detail">
        {/* <h1 className="show-title"><%= blog.title %></h1> */}
        {/* <h6 className="show-time"><%= blog.timeCreated.toLocaleDateString() %></h6> */}
        <div className="author-info">
          {/* <p className="show-auth">@<%= blog.author %></p> */}
        </div>

        <div className="show-img">
          <img src="/uploads/imgs/<%= blog.img %>" alt="show-img" />
        </div>

        <div className="show-texts">
          <div className="show-place">
            <p>My favorite place is ...</p>
            {/* <p><%- blog.placeName %></p> */}
          </div>
          <div className="show-country">
            <p>In</p>
            {/* <p><%- blog.country %></p> */}
          </div>
          {/* <p className="show-body"><%- blog.body %></p> */}
        </div>
      </div>

      <div className="btns">
        <form action="/blogs/<%= blog.id %>?_method=DELETE" method="POST">
          <button className="btn del-btn">Delete</button>
        </form>

        <a href="edit/<%= blog.id %>" className="btn edit-btn">
          Edit
        </a>
      </div>
      <Footer />
    </div>
  );
}
