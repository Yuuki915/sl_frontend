import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function Edit() {
  return (
    <div class="edit-page">
      <Header />
      <h1 class="page-h1">Edit Blog</h1>

      <form action="/blogs/<%= blog.id %>?_method=PUT" method="POST">
        <div class="input-container">
          <label for="title" class="label">
            Title
          </label>
          <input type="text" name="title" value="<%= blog.title %>" required />
        </div>

        <div class="input-container">
          <label for="author" class="label">
            Author
          </label>
          <input
            type="text"
            name="author"
            value="<%= blog.author %>"
            required
          />
        </div>

        <div class="input-container">
          <label for="placeName" class="label">
            Name of the place
          </label>
          <input
            type="text"
            name="placeName"
            value="<%= blog.placeName %>"
            required
          />
        </div>

        <div class="input-container">
          <label for="country" class="label">
            Country
          </label>
          <input
            type="text"
            name="country"
            value="<%= blog.country %>"
            required
          />
        </div>

        <div class="input-container">
          <label for="body" class="label">
            Body
          </label>
          <textarea type="text" name="body">
            {/* <%= blog.body %> */}
          </textarea>
        </div>

        <div class="input-container">
          <button class="btn can-btn">
            <a href="/blogs">Cancel</a>
          </button>
          <button type="submit" class="btn save-btn">
            Edit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
