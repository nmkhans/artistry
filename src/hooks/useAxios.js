import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_LOCAL_SERVER_URL
    : import.meta.env.VITE_PRODUCTION_SERVER_URL,
});

const useAxios = () => {
  axiosInstance.interceptors.request.use((config) => {
    return config;
  });

  return { axiosInstance };
};

export default useAxios;
