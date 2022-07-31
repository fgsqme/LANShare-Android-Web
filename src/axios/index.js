import axios from "axios";
import { Message } from "element-ui";

axios.defaults.baseURL = ""; // 请求地址
axios.defaults.timeout = 60000; // 请求超时限制
axios.defaults.withCredentials = true;

const publicParams = {
  version:'1.0.0'
};
// 请求设置，发起请求拦截
axios.interceptors.request.use(
  (config) => {
    console.log(config)
    config.params = {
      ...config.params,
      // ...publicParams,
      // token: 'xxx',
    }

    return config;
  },
  (error) => {
    // 请求 错误处理
    return Promise.reject(error);
  }
);

// respone 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    //这里根据后台返回来设置
    if (res.code === 0) {
      // 响应成功
      return response.data;
    }else {
      // 响应的信息为 error
      return response.data;
    }
  },
  (error) => {
    Message.error("网络故障");
    return Promise.reject(error);
  }
);

export default axios;