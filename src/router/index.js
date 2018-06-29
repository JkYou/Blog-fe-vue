import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Index from '@/pages/Index'
const Login = resolve => require(["@/pages/Login"], resolve)
const Admin = resolve => require(["@/pages/Admin"],resolve)
Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        requireAuth: true
      }
    }
  ]
});
router.beforeEach((to,from,next)=>{
  console.info(to);
  console.info(from);
  if(to.meta.requireAuth===true){
    //权限路由
    console.info(store.state.oauth_token);
      if (store.state.oauth_token){
        next();
      }else{
        next({
          path: '/login',
          query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
  }else{
    next();
  }
  next();
})
export default router
