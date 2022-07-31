import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar:{
      opened:true //菜单隐藏显示开关
    },
    visitedViews: [], //tag List
    userInfo:{}
  },
  mutations: {
    //左边菜单 收缩
    TOGGLE_SIDEBAR(state, val) {
      state.sidebar.opened = !state.sidebar.opened
    },
    //增加 tag 数据
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
    //保存用户信息
    ADD_USER_INFO(state,val){
      state.userInfo = val
    }
  },
  actions: {
    TOGGLE_SIDEBAR(context, val) {
      context.commit('TOGGLE_SIDEBAR', val);
    },

    ADD_VISITED_VIEW(context, view) {
      context.commit('ADD_VISITED_VIEW', view)
    },
    ADD_USER_INFO(context,val){
      context.commit('ADD_USER_INFO', val)
    }
  },
  getters: {
    sidebar: state => {
      return state.sidebar;
    }
  }
})
