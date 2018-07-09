import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Index from '@/pages/Index'
//一级路由
const Login = resolve => require(["@/pages/Login"], resolve)
const Admin = resolve => require(["@/pages/Admin"],resolve)
const NotFund = resolve => require(["@/pages/NotFund"], resolve);
const ArtDetail = resolve => require(["@/pages/ArtDetail"],resolve);
//二级路由
const Borad = resolve => require(["$com/Borad"],resolve)
const Publish = resolve => require(["$com/Publish"], resolve)
const Setting = resolve => require(["$com/Setting"], resolve);
const ArtMana = resolve => require(["$com/ArtMana"], resolve);
Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },{
      path:'/art/:id',
      name:"art",
      component:ArtDetail
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
      redirect: "/admin/borad",
      children: [
        {
          path: "borad",
          name: "综述",
          component: Borad,
          meta: {
            requireAuth: true
          },
        },
        {
          path: "publish",
          name: "发布",
          component: Publish,
          meta: {
            requireAuth: true
          },
        },{
          path:'list',
          name:'管理',
          component:ArtMana,
          meta: {
            requireAuth: true
          },
        },{
          path: 'setting',
          name: '设置',
          component: Setting,
          meta: {
            requireAuth: true
          },
        }
      ]
    },
    {
      path: "/*",
      name: "404",
      component: NotFund
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
