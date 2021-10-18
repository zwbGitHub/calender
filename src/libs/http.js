import axios from "axios";
import qs from "qs";
import { JUHE_KEY } from "@/configs/keys.js";
function postHttp(options) {
  return  axios({
    url: options.url,
    method: "post",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      ...options.date,
      key: JUHE_KEY,
    }),
  })
}
function getHttp(options) {
  return axios({
    url: options.url,
    method: "get",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      key: JUHE_KEY,
      ...options.date,
    },
  });
}

export { postHttp, getHttp };
