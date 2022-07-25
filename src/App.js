// import { useEffect, useState } from "react";
import "./css/App.css";
import "./css/Buttons.css";

import { Link } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
// import BlogDetails from "./components/BlogDetails";

function App() {
  // const [blogs, setBlogs] = useState(null);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const res = await fetch("http://localhost:4003/blogs");
  //     const json = await res.json();
  //     console.log(res.json());

  //     if (res.ok) {
  //       console.log("hi");
  //       setBlogs(json);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div className="App">
      <Header />

      <div className="home">
        <div className="home-container">
          <h1>Home</h1>
          <div className="input-container">
            <Link to="/login" className="btn can-btn login-btn">
              Login
            </Link>
            <Link to="/register" className="btn save-btn register-btn">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog.key} blog={blog} />)}
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
