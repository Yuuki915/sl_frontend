import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "../../../css/App.css";
import "../../../css/Buttons.css";

export default function Login() {
  return (
    <div class="login">
      <Header />
      <div class="login-container">
        <h1>Login</h1>

        <form action="/auth/login" method="post">
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
              Login
            </button>
          </div>

          <div>
            Go to{" "}
            <a href="/register" class="reg-link">
              Register
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
