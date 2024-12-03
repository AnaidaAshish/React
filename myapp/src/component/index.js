import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejs-uqkf.onrender.com/api/v1",
  withCredentials: true,
});

export default api;