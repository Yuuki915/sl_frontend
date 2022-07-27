// import React from "react";
import React from "react";

import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home">
        <div className="home-container">
          <h1>Home</h1>
          <div className="input-container">
            <Link to="/user/login" className="btn can-btn login-btn">
              Login
            </Link>
            <Link to="/user/register" className="btn save-btn register-btn">
              Register
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
