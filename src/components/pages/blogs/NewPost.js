import React, { useState } from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Form from "../../partials/Form";
import Header from "../../partials/Header";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  // const [img, setImg] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="new">
      <Header />
      <h1 className="page-h1">Write Your Blog</h1>
      <Form
      // title={title}
      // author={author}
      // placeName={placeName}
      // country={country}
      // body={body}
      // titleChangeHandler={(e) => setTitle(e.target.value)}
      // authorChangeHandler={(e) => setAuthor(e.target.value)}
      // placeNameChangeHandler={(e) => setPlaceName(e.target.value)}
      // countryChangeHandler={(e) => setCountry(e.target.value)}
      // bodyChangeHandler={(e) => setBody(e.target.value)}
      />
      <Footer />
    </div>
  );
}
