let { ApiClient} = require("./sdk-nodejs-24711622");
const client = new ApiClient({
  appkey: 1,
  appsecret: "1",
  REST_URL: "http://gw.api.taobao.com/router/rest"
});

const adzone_id = 158958578;
/**
 * 
 * @param {*} 普通获取商品
 */
exports.ItemGet = async ctx =>{
    let { q, cat, itemloc, sort, is_tmall, is_overseas, start_price, end_price, start_tk_rate, end_tk_rate, platform, page_no, page_size } = ctx.request.query;

    await new Promise((resolve,reject) => {
      client.execute(
        "taobao.tbk.item.get",
        {
          fields: "num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick",
          q: q,
          cat: cat,
          itemloc: itemloc,
          sort: sort,
          is_tmall: is_tmall,
          is_overseas: is_overseas,
          start_price: start_price,
          end_price: end_price,
          start_tk_rate: start_tk_rate,
          end_tk_rate: end_tk_rate,
          platform: platform,
          page_no: page_no,
          page_size: page_size
        },
        function (error, response) {
          if (!error) ctx.state.data = { res: response };
          else ctx.state.data = { code: 1, msg: "请求失败" };
          resolve();
        }
      );

    })
    
}
/**
 * 
 * @param {*} 好券清单 
 */
exports.ItemCouponGet = async ctx => {
    
    let { platform, cat, page_size, q, page_no  } = ctx.request.query;


    await new Promise((resolve,reject) => {

        client.execute(
          "taobao.tbk.dg.item.coupon.get",
          {
            adzone_id: adzone_id,
            platform: platform,
            cat: cat,
            page_size: page_size,
            q: q,
            page_no: page_no
          },
          function (error, response) {
            if (!error) ctx.state.data = { res: response };
            else ctx.state.data = { code: 1, msg: "请求失败" };
            resolve();
          }
        );

    })

    
}