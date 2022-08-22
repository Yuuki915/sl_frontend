import React, { createContext, useEffect, useReducer } from "react";

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blogs: action.payload,
      };
    case "CREATE_BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
      };
    case "UPDATE_BLOG":
      return {
        blogs: state.blogs.map((blog) => {
          return blog._id === action.payload._id
            ? { ...state, ...action.payload }
            : blog;
        }),
      };
    default:
      return state;
  }
};

const localState = JSON.parse(localStorage.getItem("blogcontent"));

export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    blogsReducer,
    localState || {
      blogs: null,
    }
  );

  useEffect(() => {
    localStorage.setItem("blogcontent", JSON.stringify(state));
  }, [state]);

  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
