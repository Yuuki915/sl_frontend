import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function NewPost() {
  return (
    <div class="new-page">
      <Header />
      <h1 class="page-h1">Write Your Blog</h1>

      <form action="/blogs" method="POST" enctype="multipart/form-data">
        <div class="input-container">
          <label for="title" class="label">
            Title
          </label>
          <input type="text" name="title" required />
        </div>

        <div class="input-container">
          <label for="author" class="label">
            Author
          </label>
          <input type="text" name="author" required />
        </div>

        <div class="input-container">
          <label for="placeName" class="label">
            Name of the place
          </label>
          <input type="text" name="placeName" required />
        </div>

        <div class="input-container">
          <label for="country" class="label">
            Country
          </label>
          <input type="text" name="country" required />
        </div>

        <div class="input-container">
          <label for="body" class="label">
            Body
          </label>
          <textarea type="text" name="body"></textarea>
        </div>

        <div class="input-container">
          <label for="img">Upload Image</label>
          <input type="file" name="img" id="img" />
        </div>

        <div class="input-container">
          <a href="/blogs" class="btn can-btn">
            Cancel
          </a>
          <button type="submit" class="btn save-btn">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}