import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <h1>Login</h1>

        <form action="/user/login" method="post">
          <div className="input-container">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input type="text" name="email" required />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="label">
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
            <Link to="/user/register" className="reg-link">
              Register
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
