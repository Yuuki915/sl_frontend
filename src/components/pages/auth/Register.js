import "../../../css/App.css";
import "../../../css/Buttons.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useRegister";
import { useAuthContext } from "../../../hooks/useAuthContext";

import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, error } = useRegister();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmitAuth = async (e) => {
    e.preventDefault();

    await register(username, email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="register">
      <Header />
      <div className="resister-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmitAuth}>
          <div className="input-container">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="input-container">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="input-container">
            <Link href="/" className="btn can-btn">
              Cancel
            </Link>
            <button type="submit" className="btn save-btn" disabled={isLoading}>
              Submit
            </button>
          </div>

          <div>
            Go to{" "}
            <Link to="/user/login" className="login-link">
              Login
            </Link>
          </div>

          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
