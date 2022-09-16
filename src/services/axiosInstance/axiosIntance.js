import { getAccessTokenFromLocalStorage } from "../userService/localStorage";
import axios from "axios"

export const getToken = () => localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))?.token
  : null;

  console.log(getToken());
  export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

// const data = getAccessTokenFromLocalStorage("accessToken") ? getAccessTokenFromLocalStorage("accessToken"):null
// const accessToken =data?.token;
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000/api/',
    timeout: 1000
});


axiosInstance.interceptors.request.use(
    (request) => {
        console.log("request sent");
        request.headers.common['Accept'] = 'application/json';
        request.headers.common['Authorization'] = getAuthorizationHeader();
        return request
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;