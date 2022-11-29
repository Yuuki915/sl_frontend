import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Categories() {
  const { user } = useAuthContext();

  return (
    <div className="categories">
      <Link to="/category/Food" className="cat">
        Food
      </Link>
      <Link to="/category/Places" className="cat">
        Cafes
      </Link>
      <Link to="/category/Animals" className="cat">
        Animals
      </Link>
      <Link to="/category/Travel" className="cat">
        Travel
      </Link>
      <Link to="/category/Movies" className="cat">
        TV / Movies
      </Link>
      <Link to="/category/Animes" className="cat">
        Animes
      </Link>
      <Link to="/category/Books" className="cat">
        Books
      </Link>
      <Link to="/category/Other" className="cat">
        Other
      </Link>
      {user && (
        <Link to="/category/YourPosts" className="cat">
          Your Posts
        </Link>
      )}
    </div>
  );
}
