/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/blog'
})
const controllers = require("../controllers/index");

router.post("/login", controllers.authLogin);

router.post("/getList", controllers.getArtByPage)
module.exports = router
