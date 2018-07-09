/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/blog'
})
const controllers = require("../controllers/index");
const adminCon = require("../controllers/admin");


router.post("/login", controllers.authLogin)

router.post("/getList", controllers.getArtByPage)

router.post("/selectById",controllers.getDetailById)

router.post("/insetArt", adminCon.insertArt);


module.exports = router
