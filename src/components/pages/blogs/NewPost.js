import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/pages/NewEdit.css";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import Footer from "../../partials/Footer";
import Form from "../../partials/Form";
import Header from "../../partials/Header";

export default function NewPost() {
  const { dispatch } = useBlogsContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      console.log(file);
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

    const data = {
      title: title,
      author: author,
      body: body,
      img: img,
      placeName: placeName,
      country: country,
      category: category,
    };

    const res = await axios
      .post(`/blogs/new`, data)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      console.log(error);
    }
    if (res.ok) {
      setTitle("");
      setAuthor("");
      setBody("");
      // setImg("");
      setPlaceName("");
      setCountry("");
      // setCategory("");
      setError(null);
      console.log("new blog added!", json);
      dispatch({ type: "CREATE_BLOG", payload: json });
      navigate(`/blogs/${json.slug}`);
    }
  };
  return (
    <div className="new">
      <Header />
      <h1 className="page-h1">Write Your Blog</h1>

      <Form
        submitHandler={submitHandler}
        title={title}
        author={author}
        placeName={placeName}
        country={country}
        body={body}
        category={category}
        titleChangeHandler={(e) => setTitle(e.target.value)}
        authorChangeHandler={(e) => setAuthor(e.target.value)}
        placeNameChangeHandler={(e) => setPlaceName(e.target.value)}
        countryChangeHandler={(e) => setCountry(e.target.value)}
        bodyChangeHandler={(e) => setBody(e.target.value)}
        categoryChangeHandler={(e) => setCategory(e.target.value)}
        handleAddImg={handleAddImg}
      />

      <Footer />
    </div>
  );
}
