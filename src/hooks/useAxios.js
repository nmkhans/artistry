import axios from "axios";
import { useAuthContext } from "../context/Auth/AuthContext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_LOCAL_SERVER_URL
    : import.meta.env.VITE_PRODUCTION_SERVER_URL,
});
import { toast } from "react-toastify";

const useAxios = () => {
  const { user, logoutUser } = useAuthContext();

  axiosInstance.interceptors.request.use(
    (config) => {
      if (user) {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        toast.error(err.message);
        logoutUser();
      }
      return Promise.reject(err);
    }
  );

  return { axiosInstance };
};

export default useAxios;
