// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import {Loading,Menu,Submenu,MenuItem,Input,Select,Option,Button, Form,FormItem,Popover,Tag,Alert,Slider,Icon,Row,Col,Container, Header,Aside,Main,Footer,MessageBox,
  Message,
  Notification,
  Table,
  TableColumn
} from "element-ui";
import axios from "axios";
import store from "./store";
import Highlight from "@/assets/Highlight";
import '@/assets/reset.css'
// simplemde css
import 'simplemde/dist/simplemde.min.css'
import "@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css";
// markdown主题
import 'github-markdown-css'
// 字体图标
import "@/assets/font/iconfont.css";
import "@/assets/font/iconfont.js";

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://localhost:5757/blog/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

Vue.use(Table);
Vue.use(Popover);
Vue.use(TableColumn);
Vue.use(Loading);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Input)
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Loading.directive);
Vue.use(Highlight);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
