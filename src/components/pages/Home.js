import React from "react";

import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <div className="topage">
        <div>
          <p>Welcome</p>
          <p>to</p>
          <Link to="/blogs">Sharelog</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
