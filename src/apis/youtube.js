import axios from "axios";
const KEY = "AIzaSyD5vbBC8ERx_w2zPhEK5ZrzilCbo5vmDTg";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});