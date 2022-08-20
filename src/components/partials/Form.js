import React from "react";
import { Link } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";

export default function Form(props) {
  // const { user } = useAuthContext();

  const options = [
    "Food",
    "Places",
    "Animals",
    "Travel",
    "TV / Movies",
    "Animes",
    "Books",
    "Other",
  ];

  return (
    <form onSubmit={props.submitHandler}>
      <div className="input-container">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          name="title"
          required
          onChange={props.titleChangeHandler}
          value={props.title}
        />
      </div>

      <div className="input-container">
        <label htmlFor="author" className="label">
          Author
        </label>
        <input
          type="text"
          name="author"
          // onChange={props.authorChangeHandler}
          defaultValue={props.author}
          disabled
        />
      </div>

      <div className="input-container">
        <label htmlFor="category" className="label">
          Category
        </label>
        <select
          className="category-select"
          defaultValue={props?.category}
          onChange={props.categoryChangeHandler}
        >
          <option value="">--Choose an option--</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="favorite" className="label">
          Your favorite is ...
        </label>
        <input
          type="text"
          name="favorite"
          required
          onChange={props.favoriteChangeHandler}
          value={props.favorite}
        />
      </div>
      {/* 
      <div className="input-container">
        <label htmlFor="country" className="label">
          Where is it? (country, city or ...?)
        </label>
        <input
          type="text"
          name="country"
          required
          onChange={props.countryChangeHandler}
          value={props.country}
        />
      </div> */}

      <div className="input-container">
        <label htmlFor="body" className="label">
          Body
        </label>
        <textarea
          type="text"
          name="body"
          required
          onChange={props.bodyChangeHandler}
          value={props.body}
        ></textarea>
      </div>

      <div className="input-container">
        <label htmlFor="img">
          Upload Image / <span className="imgsize-info">Size limited: 25MB</span>
        </label>
        <input
          type="file"
          filename="img"
          name="img"
          id="img"
          onChange={props.handleAddImg}
        />
      </div>

      <div className="input-container input-container-btns">
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
