import axios from 'axios';

// const BASE_URL = "http://localhost:4000/"
const BASE_URL = 'https://chatroomapp-o0er.onrender.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;