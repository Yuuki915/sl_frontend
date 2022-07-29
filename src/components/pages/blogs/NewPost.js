import React from "react";
import "../../../css/App.css";
import "../../../css/Buttons.css";
import "../../../css/Pages.css";
import Footer from "../../partials/Footer";
import Form from "../../partials/Form";
import Header from "../../partials/Header";

export default function NewPost() {
  return (
    <div className="new">
      <Header />
      <h1 className="page-h1">Write Your Blog</h1>
      <Form />
      <Footer />
    </div>
  );
}
