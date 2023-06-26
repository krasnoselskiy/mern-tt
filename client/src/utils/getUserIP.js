import axios from "redaxios";

export const getUserIP = async () => {
  try {
    const isLocalhost =
      location.hostname === "localhost" || location.hostname === "127.0.0.1";

    if (isLocalhost) {
      return window.location.hostname;
    }

    const userIP = axios.get("https://api.db-ip.com/v2/free/self");

    return userIP;
  } catch (error) {
    console.log(error);
  }
};
