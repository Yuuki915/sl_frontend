import "./css/App.css";
import "./css/Buttons.css";
// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useBlogsContext } from "./hooks/useBlogsContext";

import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/pages/Home";
import Main from "./components/pages/Main";
import NewPost from "./components/pages/blogs/NewPost";
import Edit from "./components/pages/blogs/Edit";
import Show from "./components/pages/blogs/Show";
import CategoryPage from "./components/pages/blogs/CategoryPage";

function App() {
  // const { blogs, dispatch } = useBlogsContext();

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const res = await fetch(`/blogs`);
  //     const json = await res.json();
  //     if (res.ok) {
  //       dispatch({ type: "SET_BLOGS", payload: json });
  //     }
  //   };
  //   fetchBlogs();
  // }, [dispatch]);
  // console.log(blogs);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />

          <Route path="/blogs" element={<Main />} />
          <Route path="/blogs/category/:category" element={<CategoryPage />} />
          <Route path="/blogs/new" element={<NewPost />} />
          <Route path="/blogs/:slug" element={<Show />} />
          <Route path="/blogs/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
