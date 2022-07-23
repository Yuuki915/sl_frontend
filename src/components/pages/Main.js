import React from "react";
import "../../css/App.css";
import "../../css/Buttons.css";
import "../../css/Pages.css";

export default function Main() {
  return (
    <div>
      <div class="siteimg"></div>
      <p class="site-title">ShareLog</p>
      <a href="/auth/logout" class="btn logout-btn">
        Logout
      </a>
      <p class="subtitle">Share the place you like</p>

      <div class="btn-container">
        <button class="btn add-btn">
          <a href="/blogs/new">Add Place</a>
        </button>
      </div>

      {/* <% if(blogs.length < 1) { %>
<p class="nopost">No post yet.</p>
<% } else{ %>

<div class="blogs">
  <% blogs.forEach(blog => {%>
  <a href="blogs/<%= blog.slug %>" class="read-btn">
    <div class="box-img">
      <img src="/uploads/imgs/<%= blog.img %>" alt="" />
    </div>
    <div class="blog-container">
      <div class="blog">
        <div class="box-top">
          <div class="blog-title"><%= blog.title %></div>
        </div>

        <div class="box-bottom">
          <div>
            <div class="blog-author">@<%= blog.author %></div>
            <div class="blog-created-time">
              <%= blog.timeCreated.toLocaleDateString() %>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
  <% }) %>
</div>
<% } %> */}
    </div>
  );
}