import "./css/App.css";
import "./css/Buttons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/pages/Home";
import Main from "./components/pages/Main";
import NewPost from "./components/pages/blogs/NewPost";
import Edit from "./components/pages/blogs/Edit";
import Show from "./components/pages/blogs/Show";
import CategoryPage from "./components/pages/blogs/CategoryPage";
import ScrollTop from "./components/partials/ScrollTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />

          <Route path="/" element={<Main />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/:slug" element={<Show />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
