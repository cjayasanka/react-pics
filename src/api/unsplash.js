import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b12a371bc24d3a07d9a181e2ed16023b23dd9c63ec38ea8c4958f5fd7c4f06a7"
  }
});
