import { getAccessTokenFromLocalStorage } from "../userService/localStorage";
import axios from "axios"

const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJnZW5kZXIiOiJtYWxlIiwiZmlyc3RuYW1lIjoiT3dlbiIsImxhc3RuYW1lIjoiTG9wZXoiLCJlbWFpbCI6Im93ZW4ubG9wZXpAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRJRXhRQlhFWlZpZnZmRU9XdldzbU8uNC5Pb2NOYjd6UXp1clFlcndPUWgxdFp4LzNva1NwLiIsInBob25lIjoiMDItMzctNzktNzgtMzkiLCJiaXJ0aGRhdGUiOiIxOTkyLTEyLTI2IiwiY2l0eSI6IlZpbGxldXJiYW5uZSIsImNvdW50cnkiOiJGcmFuY2UiLCJwaG90byI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi80MC5qcGciLCJzZXJ2aWNlIjoiTWFya2V0aW5nIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY2Mjk5MTY5OX0.dUrlumzoIdzidWZi0zY7DF30FSR5RNqvbb8I97yN3Zc";
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