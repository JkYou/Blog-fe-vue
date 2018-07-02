import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Index from '@/pages/Index'
//一级路由
const Login = resolve => require(["@/pages/Login"], resolve)
const Admin = resolve => require(["@/pages/Admin"],resolve)
const NotFund = resolve => require(["@/pages/NotFund"], resolve);
//二级路由
const Borad = resolve => require(["$com/Borad"],resolve)
const Publish = resolve => require(["$com/Publish"], resolve)
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
      },
      redirect:'/admin/publish',
      children:[{
        path:'borad',
        name:'综述',
        component:Borad
      },{
        path:'publish',
        name:'发布',
        component:Publish
      }]
    },{
      path:'/*',
      name:'404',
      component:NotFund
    }
  ]
});
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth===true){
    //权限路由
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
