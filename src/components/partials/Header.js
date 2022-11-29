import "../../css/Partials.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">ShareLog</Link>
    </div>
  );
}
