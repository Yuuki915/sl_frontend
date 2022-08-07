import "../../css/Hamburger.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

import { IoMdClose } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";

import Categories from "./Categories";

export default function Hamburger() {
  const [hamClass, setHamClass] = useState(false);
  const [logoutClass, setLogoutClass] = useState(false);

  const { logout } = useLogout();

  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  const openHandler = () => {
    setHamClass(true);
  };
  const closeHandler = () => {
    setHamClass(false);
    setLogoutClass(false);
  };

  const [count, setCount] = useState(1);
  const showLogout = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setLogoutClass(false);
      return setCount(1);
    } else {
      setLogoutClass(true);
    }
  };

  return (
    <div className="hamburger-wrapper">
      <div className="user-lines">
        {user && user ? (
          <div className="user-loggedin">
            <div className="user-icon-name" onClick={showLogout}>
              <BiUserCircle className="user-icon" />
              <p>{user && user.username}</p>
            </div>

            <div className={`${logoutClass ? "" : "logput-btn-none"}`}>
              <div className="logout-btn-arrow"></div>
              <Link to="/blogs" className="logout-btn" onClick={handleLogout}>
                <p className="logout-text">Logout</p>
              </Link>
              <p
                className={`${logoutClass ? "logout-clear-bg" : ""}`}
                onClick={closeHandler}
              ></p>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="lines" onClick={openHandler}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      <div
        className={`${hamClass ? "ham-dark" : ""}`}
        onClick={closeHandler}
      ></div>
      <div className={`${hamClass ? "hamburger" : "hamburger ham-toggle"}`}>
        <div className="icon">
          <IoMdClose className="close-icon" onClick={closeHandler} />
        </div>

        {user && <h2 className="ham-username">Hi, {user && user.username}</h2>}

        <div className="cats">
          <h4>Categories</h4>
          <Categories />
        </div>
        <div className="ham-user">
          {user && (
            <div className="ham-user">
              <Link
                to="/blogs"
                className="ham-auth-link ham-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
          {!user && (
            <div className="ham-user">
              <Link to="/user/login" className="ham-auth-link">
                Login
              </Link>
              <Link to="/user/register" className="ham-auth-link">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
