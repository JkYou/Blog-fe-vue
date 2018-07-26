/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/blog'
})
const controllers = require("../controllers/index");
const adminCon = require("../controllers/admin");
const tbk = require("../tbk/tbkImpl")


router.post("/login", controllers.authLogin)

router.post("/getList", controllers.getArtByPage)

router.post("/selectById",controllers.getDetailById)

router.post("/insetArt", adminCon.insertArt);

router.post("/itemGet", tbk.ItemGet);
router.post("/ItemCouponGet", tbk.ItemCouponGet);


//----------------------------------------------------------------------------------------------------------------------'
/**
 * tbk api 
 */



module.exports = router
