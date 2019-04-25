import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/diogocezar/repos"
});

export default api;
