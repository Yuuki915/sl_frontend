import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import { useBlogsContext } from "../../../hooks/useBlogsContext";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import axios from "axios";
import Form from "../../partials/Form";

export default function Edit() {
  const { blogs, dispatch } = useBlogsContext();
  const params = useParams();

  const blog = blogs && blogs.find((item) => item._id === params.id);

  const [titleEdited, setTitleEdited] = useState(`${blog && blog.title}`);
  const [authorEdited, setAuthorEdited] = useState(`${blog && blog.author}`);
  const [bodyEdited, setBodyEdited] = useState(`${blog && blog.body}`);
  // const [imgEdited, setImgEdited] = useState(`${blog && blog.img}`);
  const [placeNameEdited, setPlaceNameEdited] = useState(
    `${blog && blog.placeName}`
  );
  const [countryEdited, setCountryEdited] = useState(`${blog && blog.country}`);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    const data = {
      title: titleEdited,
      placeName: placeNameEdited,
      country: countryEdited,
      body: bodyEdited,
    };

    console.log(data);
    const res = await axios
      .put(`/blogs/edit/${blog && blog._id}`, data)
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
      // setTitleEdited("");
      // setAuthorEdited("");
      // setBodyEdited("");
      // // setImgEdited('')
      // setPlaceNameEdited("");
      // setCountryEdited("");
      console.log("new blog edited!", json);
      dispatch({ type: "UPDATE_BLOG", payload: json });
    }
    console.log(json);
  };

  const handleChangeTitle = (e) => {
    setTitleEdited(e.target.value);
  };
  const handleChangeCountry = (e) => {
    setCountryEdited(e.target.value);
  };
  const handleChangePlaceName = (e) => {
    setPlaceNameEdited(e.target.value);
  };
  const handleChangeBody = (e) => {
    setBodyEdited(e.target.value);
  };

  return (
    <div className="edit">
      <Header />

      <h1 className="page-h1">Edit Blog</h1>
      {/* <Form
        title={titleEdited}
        author={authorEdited}
        placeName={placeNameEdited}
        country={countryEdited}
        body={bodyEdited}
        titleChangeHandler={(e) => setTitleEdited(e.target.value)}
        authorChangeHandler={(e) => setAuthorEdited(e.target.value)}
        placeNameChangeHandler={(e) => setPlaceNameEdited(e.target.value)}
        countryChangeHandler={(e) => setCountryEdited(e.target.value)}
        bodyChangeHandler={(e) => setBodyEdited(e.target.value)}
      /> */}
      <form>
        <div className="input-container">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            onChange={handleChangeTitle}
            type="text"
            name="title"
            defaultValue={titleEdited}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="author" className="label">
            Author
          </label>
          <input
            disabled
            type="text"
            name="author"
            defaultValue={authorEdited}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="placeName" className="label">
            Name of the place
          </label>
          <input
            onChange={handleChangePlaceName}
            type="text"
            name="placeName"
            defaultValue={placeNameEdited}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="country" className="label">
            Country
          </label>
          <input
            onChange={handleChangeCountry}
            type="text"
            name="country"
            defaultValue={countryEdited}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="body" className="label">
            Body
          </label>
          <textarea
            onChange={handleChangeBody}
            type="text"
            name="body"
            defaultValue={bodyEdited}
          ></textarea>
        </div>

        <div className="input-container">
          <button className="btn can-btn">
            <a href="/blogs">Cancel</a>
          </button>
          <Link
            to={`/blogs/${blog && blog.slug}`}
            type="submit"
            className="btn save-btn"
            onClick={handleUpdate}
          >
            Save
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}
