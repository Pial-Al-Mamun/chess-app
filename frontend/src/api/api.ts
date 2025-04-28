import EnvVariables from "@/env";
import axios from "axios";

const api = axios.create({
  baseURL: EnvVariables.backendURL,
});

export default api;
