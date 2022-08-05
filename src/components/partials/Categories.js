import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <Link to="/blogs/category/Food" className="cat">
        Food
      </Link>
      <Link to="/blogs/category/Places" className="cat">
        Places
      </Link>
      <Link to="/blogs/category/Animals" className="cat">
        Animals
      </Link>
      <Link to="/blogs/category/Travel" className="cat">
        Travel
      </Link>
      <Link to="/blogs/category/Movies" className="cat">
        TV / Movies
      </Link>
      <Link to="/blogs/category/Animes" className="cat">
        Animes
      </Link>
      <Link to="/blogs/category/Books" className="cat">
        Books
      </Link>
      <Link to="/blogs/category/Other" className="cat">
        Other
      </Link>
    </div>
  );
}
