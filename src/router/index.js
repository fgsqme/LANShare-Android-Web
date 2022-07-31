import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Layout from "@/layout";
import {getLocalStorage} from "@/utils/index.js";

Vue.use(VueRouter);
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};


const routes = [
  {
    path: '/',
    name: 'app',
    component: Layout,
    redirect: '/apk',
    children: [
      {
        path: 'apk',
        name: 'apk',
        component: () => import('@/views/apk/index.vue'),
        meta: {title: 'apk', icon: 'apk', affix: true}
      }
    ]
  }, {
    path: '/file',
    name: 'app',
    component: Layout,
    redirect: '/file',
    children: [
      {
        path: 'file',
        name: 'file',
        component: () => import('@/views/file/index.vue'),
        meta: {title: 'file', icon: 'file', affix: true}
      }
    ]
  },
  {
    path: "*", // 404
    name: "notfount",
    component: () => import('@/components/404'),
    meta: {title: '404', icon: '404', affix: true}
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// 路由拦截前置
router.beforeEach((to, from, next) => {
  next();
});
export default router;
