import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function Edit() {
  return (
    <div className="edit-page">
      <Header />
      <h1 className="page-h1">Edit Blog</h1>

      <form action="/blogs/<%= blog.id %>?_method=PUT" method="POST">
        <div className="input-container">
          <label for="title" className="label">
            Title
          </label>
          <input type="text" name="title" value="<%= blog.title %>" required />
        </div>

        <div className="input-container">
          <label for="author" className="label">
            Author
          </label>
          <input
            type="text"
            name="author"
            value="<%= blog.author %>"
            required
          />
        </div>

        <div className="input-container">
          <label for="placeName" className="label">
            Name of the place
          </label>
          <input
            type="text"
            name="placeName"
            value="<%= blog.placeName %>"
            required
          />
        </div>

        <div className="input-container">
          <label for="country" className="label">
            Country
          </label>
          <input
            type="text"
            name="country"
            value="<%= blog.country %>"
            required
          />
        </div>

        <div className="input-container">
          <label for="body" className="label">
            Body
          </label>
          <textarea type="text" name="body">
            {/* <%= blog.body %> */}
          </textarea>
        </div>

        <div className="input-container">
          <button className="btn can-btn">
            <a href="/blogs">Cancel</a>
          </button>
          <button type="submit" className="btn save-btn">
            Edit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
