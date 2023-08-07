import axios from '../utils/axios'; // 二次封装的 axios

// 获取用户信息
export function getUserInfo() {
  return axios.get('/user/info',);
}
// export function getUserInfo(params) {
//   return axios.get('/user/info',params);
// }

//编辑用户信息
export function EditUserInfo(params) {
  return axios.put('/user/info', params);
}

// 登录
export function login(params) {
  return axios.post('/user/login', params);
}

// 登出
export function logout() {
  return axios.post('/user/logout');
}
// export function logout(params) {
//   return axios.post('/user/logout',params);
// }

// 注册
export function register(params) {
  return axios.post('/user/register', params);
}
