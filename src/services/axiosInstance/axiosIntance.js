import { getAccessTokenFromLocalStorage } from "../userService/localStorage";
import axios from "axios"

const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyIiwiZ2VuZGVyIjoibWFsZSIsImZpcnN0bmFtZSI6IkFkbWluIiwibGFzdG5hbWUiOiIiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDMxLlQubG04Umt0SEVlYVU4OXNoRC5Ud0xpMFZDSDl0N1Z3MlA0ZHE0ZVowdlFpQktaMlp5IiwicGhvbmUiOiIwNy0zOS04MS0xOC0yNyIsImJpcnRoZGF0ZSI6IjE5ODgtMTEtMDQiLCJjaXR5IjoiUGFyaXMiLCJjb3VudHJ5IjoiRnJhbmNlIiwicGhvdG8iOiJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNDIuanBnIiwic2VydmljZSI6IkNsaWVudCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE2NDU0Mn0.2Cv1DOaroOKxA2Qv6EKrnC8cSvQ9WNd34EECJZ1jNQA";
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