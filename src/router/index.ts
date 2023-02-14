import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
// 定义路由
const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "关于" },
    component: AboutPage,
  },
];

// 创建路由
const router = createRouter({
  // 这里使用History模式，如需使用hash模式，改为createWebHashHistory()
  history: createWebHistory(),
  routes,
});

// 获取系统标题
const title = import.meta.env.VITE_APP_TITLE;

// 进度条配置
NProgress.configure({ showSpinner: false });

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // 动态修改title
  document.title = to.meta.title + "｜" + title;
  // 开启进度条
  NProgress.start();
  next();
});

// 后置路由守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

// 导出路由
export default router;
