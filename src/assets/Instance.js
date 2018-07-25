/*
 * @Author: youjunkang@hqblicai.com 
 * @Date: 2018-07-23 11:05:07 
 * @Last Modified by: youjunkang@hqblicai.com
 * @Last Modified time: 2018-07-23 11:29:51
 */

import axios from 'axios'
import router from '@/router/index'
import store from '@/store/index'
//截取URL的传参并生成signa
const instance = axios.create({
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  baseURL: "http://47.98.120.163:8090/blog/",
  timeout: 50000
});
// http请求拦截器
instance.interceptors.request.use(config => {

    //只有在已经登录的情况下才设置请求头
    if (store.state.oauth_token) {
        let ts = parseInt(new Date().getTime() / 1000);
        let paramsObj = config.params ? Object.assign({}, config.params) : {};
        paramsObj.appkey = 'A17E6270B7D358DA4B75E67F71949472';
        paramsObj.oauth_token = `${store.state.user.oauth_token}`;
        paramsObj.ts = ts;
        paramsObj.version = '2.6';
        config.headers.Authorization = JSON.stringify({
            "oauth_token": `${store.state.user.oauth_token}`,
            "appkey": 'A17E6270B7D358DA4B75E67F71949472',
            "ts": ts
        });
    }
    return config
}, error => {
    this.$message.error({
        message: '请求超时'
    })
    return Promise.reject(error)
})
// http响应拦截器
instance.interceptors.response.use(res => {// 响应成功关闭loading
    if (res.data.hasOwnProperty("code") && res.data.code != 0) {
        this.$message.error({
            message: res.data.res_msg
        })
        return Promise.reject(res);
    }
    return res
}, error => {
    this.$message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})
export default instance;
