import { axiosInstance } from "./axiosInstance";

export const handleReset = () => {
  axiosInstance({
    method: "delete",
    url: "users",
  });
};

export const handleUserAdd = (ip, client) => {
  axiosInstance({
    method: "post",
    url: "/users",
    data: {
      ip,
      client,
    },
  });
};
