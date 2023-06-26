import axios from "redaxios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
});
