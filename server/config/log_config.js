'use strict';
const path = require('path');
const fs = require('fs');
let isexist = void 0;

let errorLogPath = path.resolve(__dirname, "../logs/error");
isexist = fs.existsSync('../logs');
if(!isexist){
  fs.mkdirSync('../logs','0777');
}
let responseLogPath = path.resolve(__dirname, "../logs/reponse");
module.exports = {
  "appenders":{
    "errorLogger":{
      "type": "dateFile",                   //日志类型
      "filename": errorLogPath,             //日志输出位置
      "alwaysIncludePattern":true,          //是否总是有后缀名
      "pattern": "-yyyy-MM-dd.log"       //后缀，每小时创建一个新的日志文件
    },
    "resLogger":{
      "type": "dateFile",
      "filename": responseLogPath,
      "alwaysIncludePattern":true,
      "pattern": "-yyyy-MM-dd.log"
    }
  },
  categories: { default: { appenders: ['errorLogger',"resLogger"], level: 'error' } }
}
