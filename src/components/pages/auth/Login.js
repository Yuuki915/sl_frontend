import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin";
import { useAuthContext } from "../../../hooks/useAuthContext";

import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

import "../../../css/App.css";
import "../../../css/Buttons.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmitAuth = async (e) => {
    e.preventDefault();

    await login(username, email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="login">
      <Header />

      <div className="login-container">
        <h1>Login</h1>

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
            <Link to="/" className="btn can-btn">
              Cancel
            </Link>
            <button type="submit" className="btn save-btn" disabled={isLoading}>
              Login
            </button>
          </div>

          <div>
            Go to{" "}
            <Link to="/user/register" className="reg-link">
              Register
            </Link>
          </div>

          {error && <div className="error">{error}</div>}
        </form>
      </div>

      <Footer />
    </div>
  );
}
