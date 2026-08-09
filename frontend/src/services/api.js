import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-analyzer-production-0f76.up.railway.app/api",
});

export default api;