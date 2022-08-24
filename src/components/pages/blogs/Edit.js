import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/pages/NewEdit.css";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import axios from "axios";
import BACKEND_URL from "../../../config";

import Form from "../../partials/Form";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function Edit() {
  const { user } = useAuthContext();
  const { blogs, dispatch } = useBlogsContext();
  const navigate = useNavigate();
  const params = useParams();

  const blog = blogs && blogs.find((item) => item._id === params.id);

  const [titleEdited, setTitleEdited] = useState(`${blog && blog.title}`);
  // const [authorEdited, setAuthorEdited] = useState(`${blog && blog.author}`);
  const [bodyEdited, setBodyEdited] = useState(`${blog && blog.body}`);
  const [imgEdited, setImgEdited] = useState(`${blog && blog.img}`);
  const [favoriteEdited, setfavoriteEdited] = useState(
    `${blog && blog.favorite}`
  );
  // const [countryEdited, setCountryEdited] = useState(`${blog && blog.country}`);
  const [categoryEdited, setCategoryEdited] = useState(
    `${blog && blog.category}`
  );

  const [error, setError] = useState(null);

  // img
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
  const handleEditImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImgEdited(base64);
  };

  // update
  const updateHandler = async (e) => {
    e.preventDefault();

    const data = {
      title: titleEdited,
      author: user && user.username,
      body: bodyEdited,
      img: imgEdited,
      favorite: favoriteEdited,
      category: categoryEdited,
      slug: titleEdited,
    };

    await axios
      .put(`${BACKEND_URL}/blogs/edit/${blog && blog._id}`, data)
      .then(async (res) => {
        // console.log("update return: ", res.data);
        await dispatch({ type: "UPDATE_BLOG", payload: res.data });
        navigate(`/blogs/${res.data.slug}`);
        return res;
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  return (
    <div className="edit">
      <Header />

      <h1 className="page-h1">Edit Blog</h1>
      <Form
        submitHandler={updateHandler}
        title={titleEdited}
        author={user && user.username}
        favorite={favoriteEdited}
        body={bodyEdited}
        category={categoryEdited}
        titleChangeHandler={(e) => setTitleEdited(e.target.value)}
        // authorChangeHandler={(e) => setAuthorEdited(e.target.value)}
        favoriteChangeHandler={(e) => setfavoriteEdited(e.target.value)}
        bodyChangeHandler={(e) => setBodyEdited(e.target.value)}
        categoryChangeHandler={(e) => setCategoryEdited(e.target.value)}
        handleAddImg={handleEditImg}
      />

      <Footer />
    </div>
  );
}
