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




//----------------------------------------------------------------------------------------------------------------------'
/**
 * tbk api 
 */
router.post("/itemGet", tbk.ItemGet);
router.post("/itemCouponGet", tbk.ItemCouponGet);
router.post("/shopGet", tbk.ShopGet);
router.post("/tklCreate", tbk.TpwdCreate);
router.post("/tqgGet", tbk.TqgGet);
router.post("/juhuasuan", tbk.JuSearch);




module.exports = router
