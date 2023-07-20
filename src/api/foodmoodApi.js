import axios from "axios";
const api = axios.create({
  proxy: true,
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: false,
  timeout: 6000000,
});
api.interceptors.response.use(
  function (response) {
    console.log("success");
    return response;
  },
  function (error) {
    console.log("error");
    if (error.response?.status === 401) {
      localStorage.removeItem("jwtToken");
    }
    return Promise.reject(error);
  }
);
export default api;
