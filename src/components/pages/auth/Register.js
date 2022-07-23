import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "../../../css/App.css";
import "../../../css/Buttons.css";

export default function Register() {
  return (
    <div class="register">
      <Header />
      <div class="resister-container">
        <h1>Register</h1>

        <form action="/auth/register" method="post">
          <div class="input-container">
            <label for="username" class="label">
              Username
            </label>
            <input type="text" name="username" required />
          </div>

          <div class="input-container">
            <label for="password" class="label">
              Password
            </label>
            <input type="password" name="password" required />
          </div>

          <div class="input-container">
            <a href="/" class="btn can-btn">
              Cancel
            </a>
            <button type="submit" class="btn save-btn">
              Submit
            </button>
          </div>

          <div>
            Go to{" "}
            <a href="/login" class="login-link">
              Login
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
