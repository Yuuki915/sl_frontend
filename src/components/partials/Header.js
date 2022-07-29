import React from "react";
import { Link } from "react-router-dom";
import "../../css/Partials.css";

export default function Header() {
  return (
    <div className="header">
      <p>ShareLog</p>
      <div>
        <Link to="/user/login" className="auth-link">
          Login
        </Link>
        <Link to="/user/register" className="auth-link">
          Register
        </Link>
      </div>
    </div>
  );
}
