import axios from "axios";
import {baseURL} from "./Env_Config";
// import history from "../history";
// import { AUTH_TOKEN } from "redux/constants/Auth";
import { useNavigate} from 'react-router-dom'
import { notification } from "antd";
// const navigate = useNavigate();

const service = axios.create({
  baseURL: baseURL.API_ENDPOINT_URL,
  timeout: 60000,
});
// const data = axios.post("!23123", data , {hea})
// Config
// const ENTRY_ROUTE = "/auth/login";
const TOKEN_PAYLOAD_KEY = "authorization";
// const PUBLIC_REQUEST_KEY = "public-request";
//Just A TEST
 const nav=<a href="/"/>
// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem('AUTH_TOKEN');

    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;
    }
    if (!jwtToken) {
      // history.push(ENTRY_ROUTE);
      window.location.reload();
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let notificationParam = {
      message: "",
    };

    // Remove token and redirect
    if (
      (error.response.status === 400 || error.response.status === 403,
      error.response.status === 401)
    ) {
      console.log("u have to login")
      notificationParam.message = "Authentication Fail";
      notificationParam.description = "Please login again";
      window.location.assign("/")
  }

    if (error.response.status === 404) {
      notificationParam.message = "Not Found";
    }

    if (error.response.status === 500) {
      notificationParam.message = "Internal Server Error";
    }

    if (error.response.status === 508) {
      notificationParam.message = "Time Out";
    }

    notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;
