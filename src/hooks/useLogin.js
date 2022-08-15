// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const data = { username, email, password };
    // console.log(data);
    // await axios
    //   .post(`/user/login`, data)
    //   .then((res) => {
    //     console.log(res.data);
    //     dispatch({ type: "LOGIN", payload: res.data });
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     console.log(err);
    //   });

    const res = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

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
