import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "../../../css/App.css";
import "../../../css/Buttons.css";

export default function Login() {
  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <h1>Login</h1>

        <form action="/auth/login" method="post">
          <div className="input-container">
            <label for="username" className="label">
              Username
            </label>
            <input type="text" name="username" required />
          </div>

          <div className="input-container">
            <label for="password" className="label">
              Password
            </label>
            <input type="password" name="password" required />
          </div>

          <div className="input-container">
            <a href="/" className="btn can-btn">
              Cancel
            </a>
            <button type="submit" className="btn save-btn">
              Login
            </button>
          </div>

          <div>
            Go to{" "}
            <a href="/register" className="reg-link">
              Register
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
