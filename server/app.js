const Koa = require("koa");
const app = new Koa();
const middLog=require("./middlewares/entry_log");
const response = require("./middlewares/response");
const bodyParser = require("koa-bodyparser");
const config = require("./config");
const cors = require("koa-cors");
app.use(cors());
app.use(middLog)
// 使用响应处理中间件
app.use(response);
// 解析请求体
app.use(bodyParser());
// 引入路由分发
const router = require("./routes");
app.use(router.routes());
// 启动程序，监听端口
app.listen(config.port, () => console.info(`listening on port ${config.port}`));
