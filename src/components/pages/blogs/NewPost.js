import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function NewPost() {
  return (
    <div className="new-page">
      <Header />
      <h1 className="page-h1">Write Your Blog</h1>

      <form action="/blogs" method="POST" enctype="multipart/form-data">
        <div className="input-container">
          <label for="title" className="label">
            Title
          </label>
          <input type="text" name="title" required />
        </div>

        <div className="input-container">
          <label for="author" className="label">
            Author
          </label>
          <input type="text" name="author" required />
        </div>

        <div className="input-container">
          <label for="placeName" className="label">
            Name of the place
          </label>
          <input type="text" name="placeName" required />
        </div>

        <div className="input-container">
          <label for="country" className="label">
            Country
          </label>
          <input type="text" name="country" required />
        </div>

        <div className="input-container">
          <label for="body" className="label">
            Body
          </label>
          <textarea type="text" name="body"></textarea>
        </div>

        <div className="input-container">
          <label for="img">Upload Image</label>
          <input type="file" name="img" id="img" />
        </div>

        <div className="input-container">
          <a href="/blogs" className="btn can-btn">
            Cancel
          </a>
          <button type="submit" className="btn save-btn">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
