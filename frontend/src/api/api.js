import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // 🔥 REQUIRED FOR SESSIONS
});

export default api;
