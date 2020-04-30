import Axios from "axios";

const ajax = Axios.create({
  baseURL: "http://192.168.2.26:8080",
  withCredentials: true
});

export default {
  $get(url, dataToSend) {
    return ajax.get(url, { params: dataToSend })
      .then(res => res.data)
  },
  $post(url, dataToSend) {
    return ajax.post(url, dataToSend)
      .then(res => res.data)
  }
}
