
const URL = process.env.VUE_APP_BASE_API
const api = {
  user:{
    queryPerms:`${URL}/menu/queryPerms`, //查询用户 菜单
    login:`${URL}/login/toLogin`,//用户登录
  },
  home:{
    getList:'tb/getList'
  }
}
export default api;