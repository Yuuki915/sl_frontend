import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function Show() {
  return (
    <div class="show">
      <Header />
      <div class="bb-posi">
        <button>
          <a href="/blogs" class="back-btn">
            Back
          </a>
        </button>
        <button>
          <a href="/blogs/new" class="btn addmore-btn">
            Add more
          </a>
        </button>
      </div>

      <div class="blog-detail">
        {/* <h1 class="show-title"><%= blog.title %></h1> */}
        {/* <h6 class="show-time"><%= blog.timeCreated.toLocaleDateString() %></h6> */}
        <div class="author-info">
          {/* <p class="show-auth">@<%= blog.author %></p> */}
        </div>

        <div class="show-img">
          <img src="/uploads/imgs/<%= blog.img %>" alt="show-img" />
        </div>

        <div class="show-texts">
          <div class="show-place">
            <p>My favorite place is ...</p>
            {/* <p><%- blog.placeName %></p> */}
          </div>
          <div class="show-country">
            <p>In</p>
            {/* <p><%- blog.country %></p> */}
          </div>
          {/* <p class="show-body"><%- blog.body %></p> */}
        </div>
      </div>

      <div class="btns">
        <form action="/blogs/<%= blog.id %>?_method=DELETE" method="POST">
          <button class="btn del-btn">Delete</button>
        </form>

        <a href="edit/<%= blog.id %>" class="btn edit-btn">
          Edit
        </a>
      </div>
      <Footer />
    </div>
  );
}
