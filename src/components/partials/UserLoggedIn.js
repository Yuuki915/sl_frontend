import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { BiUserCircle } from "react-icons/bi";

export default function UserLoggedIn() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [logoutClass, setLogoutClass] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const closeHandler = () => {
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
    <>
      {user && user ? (
        <div className="user-loggedin">
          <div className="user-icon-name" onClick={showLogout}>
            <BiUserCircle className="user-icon" />
            <p>{user && user.username}</p>
          </div>

          <div className={`${logoutClass ? "" : "logput-btn-none"}`}>
            <div className="logout-btn-arrow"></div>
            <Link to="/" className="logout-btn" onClick={handleLogout}>
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
    </>
  );
}
