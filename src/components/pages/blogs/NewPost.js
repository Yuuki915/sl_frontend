import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/pages/NewEdit.css";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useBlogsContext } from "../../../hooks/useBlogsContext";

import Footer from "../../partials/Footer";
import Form from "../../partials/Form";
import Header from "../../partials/Header";

export default function NewPost() {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [favorite, setfavorite] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      // console.log(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleAddImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please login.");
      console.log(error);
    }

    const data = {
      title: title,
      author: user && user.username,
      body: body,
      img: img,
      favorite: favorite,
      category: category,
    };

    await axios
      .post("/blogs/new", data)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: "CREATE_BLOG", payload: res.data });
        navigate(`/blogs/${res.data.slug}`);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };
  return (
    <div className="new">
      <Header />
      <h1 className="page-h1">Write Your Blog</h1>

      <Form
        submitHandler={submitHandler}
        title={title}
        author={user && user.username}
        favorite={favorite}
        body={body}
        category={category}
        titleChangeHandler={(e) => setTitle(e.target.value)}
        // authorChangeHandler={(e) => setAuthor(user && user.username)}
        favoriteChangeHandler={(e) => setfavorite(e.target.value)}
        bodyChangeHandler={(e) => setBody(e.target.value)}
        categoryChangeHandler={(e) => setCategory(e.target.value)}
        handleAddImg={handleAddImg}
      />

      <Footer />
    </div>
  );
}
