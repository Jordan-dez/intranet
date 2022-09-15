import { getAccessTokenFromLocalStorage } from "../userService/localStorage";
import axios from "axios"

const data= getAccessTokenFromLocalStorage("accessToken")? getAccessTokenFromLocalStorage("accessToken"):null
console.log("dataInput",data)
const accessToken =data?.token;
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000/api/',
    timeout: 1000
});


axiosInstance.interceptors.request.use(
    (request) => {
        console.log("request sent");
        request.headers.common['Accept'] = 'application/json';
        request.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return request
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;