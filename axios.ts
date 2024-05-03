import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: url,
});
export default instance;
