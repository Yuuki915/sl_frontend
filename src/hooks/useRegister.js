// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const data = { username, email, password };
    await axios
      .post(`/user/register`, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("authcontent", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: res.data });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });

    // const res = await fetch("/user/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, email, password }),
    // });

    // const json = await res.json();

    // if (!res.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }
    // if (res.ok) {
    //   // save user
    //   localStorage.setItem("user", JSON.stringify(json));
    //   dispatch({ type: "LOGIN", payload: json });

    //   setIsLoading(false);
    // }
  };

  return { register, isLoading, error };
};
