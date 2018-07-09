const Model=require("../db.js")
const moment = require("moment")
const md5 =require('md5')
/**
 * desc: 注册
 * @params:{
 * name
 * password
 * }
 * 
*/
exports.authReg = async ctx =>{
    let { name, password } = ctx.request.query;
    //查询用户是否已注册
    await Model.findDataByName(name).then( async res=> {
        if(res.length && res.length>0){
            //用户已存在 ，提示已存在
            try {
                throw Error('用户已经存在');
            } catch (error) {
                //处理err
                console.log(error)
            }
            // 用户存在
            ctx.state.data = {
                    sts: 0,
                    msg: "用户已存在"
            };
        }else{
            //不存在， 注册
            if(!password){
                await Model.insertData([
                    name,
                    md5(password),
                    "jk.png",
                    moment().format("YYYY-MM-DD HH:mm:ss")
                ]).then(res => {
                    ctx.session = {
                        user: name,
                    }
                    ctx.state.data = {sts:1,msg:"注册成功"};
                });
            }else{
                ctx.state.data = {
                        sts: 0,
                        msg: "请输入密码"
                };
            }
        }
    })   
}
/**
 * desc: 登录
 * @params:{
 * name
 * password
 * }
 * 
*/
exports.authLogin = async ctx => {
    let { name, password } = ctx.request.query;
    console.info(name,password);
    //查询用户是否已注册
    await Model.findDataByName(name).then(res => {
        if (res.length && res.length >= 0) {
            //用户已存在 
            if (password && md5(password) === res[0].pass) {
                const token =Math.random().toString(36).substr(2);
                ctx.session = { token: token };
                ctx.state.data = { sts: 1, msg: "登录成功", token: token};
            } else {
                ctx.state.data = {
                        sts: 0,
                        msg: "密码错误"
                };
            }
        } else {
            try {
                throw Error('用户不存在');
            } catch (error) {
                //处理err
                console.log(error)
            }
            // 用户存在
            ctx.state.data = {
                    sts: 0,
                    msg: "用户不存在"
            };
            
        }
    })  
}
/**
 * desc: 根据起始和结束页码获取文章列表
 * @params:{
 * start:从0开始
 * end : max: total
 * }
 * 
*/
exports.getArtByPage = async ctx => {
    let { start,end } = ctx.request.query;
    //获取总数
    let total = await Model.getArtCount();
    //获取列表
    await Model.getArtListByPage(start,end).then(async res => {
        ctx.state.data = { total: total[0]["count(*)"], list: res };
    })
};
/**
 * desc: 根据id获取文章详情
 * @params:{
 * id:int
 * }
*/
exports.getDetailById = async ctx => {
    let {id} =ctx.request.query;
    let content = await Model.getDetail(id);
    ctx.state.data = { detail: content ,sts:1 };
}