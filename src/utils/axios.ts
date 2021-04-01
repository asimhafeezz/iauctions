import axios from "axios";

const instance = axios.create();
const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : "";

if (!instance.defaults.headers.common["authorization"])
  instance.defaults.headers.common["authorization"] = `Bearer ${token}`;

const getInstance = () => {
  return instance;
};

export default getInstance();
