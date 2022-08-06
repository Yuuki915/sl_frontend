// import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    // const data = {  email, password };
    const res = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    // axios
    //   .post(`/blogs/new`, data)
    //   .then((res) => {
    //     console.log(res);
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (res.ok) {
      // save user
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
