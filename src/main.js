// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import axios from "axios";
import store from "./store";
import Highlight from "@/assets/Highlight";
import '@/assets/reset.css'
// simplemde css
import 'simplemde/dist/simplemde.min.css'
import "@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css";
// markdown主题
import 'github-markdown-css'
// $(".editor-preview-side").addClass("markdown-body");
// 字体图标
import "@/assets/font/iconfont.css";
import "@/assets/font/iconfont.js";

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://localhost:8088/";
Vue.use(ElementUI);
Vue.use(Highlight);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
