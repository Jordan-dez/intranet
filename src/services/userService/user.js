import axios from "axios";

export async function loginUser(user) {
  const  data  = axios.post("http://localhost:7000/api/login",{ email: user.email, password: user.password });
  return data;
}