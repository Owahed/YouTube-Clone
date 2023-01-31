import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD6_l6U6hWfTEozsuh38FSe2uWBy54Asd0",
  },
});

export default request;
