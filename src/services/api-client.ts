import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1014f97c85f9459cbc5b5fa24908e497",
  },
});
// 1014f97c85f9459cbc5b5fa24908e497
