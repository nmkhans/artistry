import axios from "axios";
import { useAuthContext } from "../context/Auth/AuthContext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_LOCAL_SERVER_URL
    : import.meta.env.VITE_PRODUCTION_SERVER_URL,
});

const useAxios = () => {
  const { user } = useAuthContext();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.token = user?.accessToken;

    return config;
  });

  return { axiosInstance };
};

export default useAxios;
