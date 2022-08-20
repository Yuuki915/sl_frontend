import React from "react";

import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="home">
        Welcome
        <Link to="/blogs">Sharelog</Link>
      </div>

      <Footer />
    </div>
  );
}
