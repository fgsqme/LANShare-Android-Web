//通用 工具类
// localStorage存储 用户信息
export function getLocalStorage(k){
 return window.localStorage.getItem(k);
}
// 获取用户本地信息
export function setLocalStorage(k,v){
  window.localStorage.setItem(k,JSON.stringify(v));
 }