import axios from "axios";

const API = axios.create({
  //This will need to be changed for deployment
  baseURL: "http://localhost:3001",
});

export default API;