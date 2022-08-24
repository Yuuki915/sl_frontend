import { useState } from "react";
import axiosBaseURL from "../config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const data = { username, email, password };
    await axiosBaseURL
      .post(`/user/login`, data)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("authcontent", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: res.data });
        setIsLoading(false);
        return res;
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  return { login, isLoading, error };
};
