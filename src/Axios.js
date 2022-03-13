import axios from "axios";

const Axios = axios.create({
  baseURL : "https://api.hatchways.io/assessment/",
})

export default Axios;