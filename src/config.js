import axios from "axios";

const axiosBaseURL = axios.create({
  base_URL: "https://mern-sharelog-backend.herokuapp.com/",
});

export default axiosBaseURL;
