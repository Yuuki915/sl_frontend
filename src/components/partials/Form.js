import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../hooks/useBlogsContext";

export default function Form(props) {
  const { dispatch } = useBlogsContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  // const handleAddImg = (e) => {
  //   setImg(e.target.files[0]);
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("author", author);
    // formData.append("body", body);
    // formData.append("img", img);
    // formData.append("placeName", placeName);
    // formData.append("country", country);

    const blog = {
      title,
      author,
      body,
      placeName,
      country,
    };

    // const blog = {
    //   title: props.title,
    //   author: props.author,
    //   body: props.body,
    //   placeName: props.placeName,
    //   country: props.country,
    // };

    const res = await fetch("/blogs/new", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
        // encType: "multipart/form-data",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      console.log(error);
    }
    if (res.ok) {
      // setTitle("");
      // setAuthor("");
      // setBody("");
      // setImg("");
      // setPlaceName("");
      // setCountry("");
      setError(null);
      console.log("new blog added!", json);
      dispatch({ type: "CREATE_BLOG", payload: json });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="input-container">
        <label htmlFor="author" className="label">
          Author
        </label>
        <input
          type="text"
          name="author"
          required
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>

      <div className="input-container">
        <label htmlFor="placeName" className="label">
          Name of the place
        </label>
        <input
          type="text"
          name="placeName"
          required
          onChange={(e) => setPlaceName(e.target.value)}
          value={placeName}
        />
      </div>

      <div className="input-container">
        <label htmlFor="country" className="label">
          Country
        </label>
        <input
          type="text"
          name="country"
          required
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </div>

      <div className="input-container">
        <label htmlFor="body" className="label">
          Body
        </label>
        <textarea
          type="text"
          name="body"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
      </div>

      {/* ??? イメージはどう貼るのだ？？ */}
      {/* <div className="input-container">
        <label htmlFor="img">Upload Image</label>
        <input type="file" filename="img" id="img" onChange={handleAddImg} />
      </div> */}

      <div className="input-container">
        <Link to="/blogs" className="btn can-btn">
          Cancel
        </Link>
        <button type="submit" className="btn save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
