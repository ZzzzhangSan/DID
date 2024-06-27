
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/web/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/web/news.vue')
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 1 }
  },
});
// 全局路由：拦住未登录就访问简历
// router.beforeEach(async (to, from) => {
//   if (!getToken() && to.name == 'resume' && from.name !== 'email_login') {
//     return { name: 'index'};
//   }
// })
// const getToken = () => {
//   return localStorage.getItem('user')
// }
export default router;