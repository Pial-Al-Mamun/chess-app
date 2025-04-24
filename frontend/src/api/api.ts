import env from "@/env";
import axios from "axios";

const api = axios.create({
  baseURL: env.BACKEND_BASE_URL,
});

export default api;
