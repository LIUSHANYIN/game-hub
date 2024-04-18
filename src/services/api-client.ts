import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a5384bcff47a4477a5292bdcb614e8df",
  },
});
