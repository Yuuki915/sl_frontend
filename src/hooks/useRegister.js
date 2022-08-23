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
        console.log(error);
      });
  };

  return { register, isLoading, error };
};
