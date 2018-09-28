let { ApiClient} = require("./sdk-nodejs-24711622");
const client = new ApiClient({
  appkey: 24711622,
  appsecret: "351c55c6b58f79360948333e84ad7b1f",
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
          // cat: cat,
          itemloc: itemloc,
          // sort: sort,
          // is_tmall: is_tmall,
          // is_overseas: is_overseas,
          // start_price: start_price,
          // end_price: end_price,
          // start_tk_rate: start_tk_rate,
          // end_tk_rate: end_tk_rate,
          // platform: platform,
          page_no: page_no,
          page_size: page_size
        },
        function (error, response) {
          if (!error) ctx.state.data = { res: response };
          else ctx.state.data = { code: 0, msg: "请求失败", data: error };
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
            else ctx.state.data = { code: 0, msg: "请求失败" };
            resolve();
          }
        );

    })

    
}
exports.JuSearch = async ctx => {
  console.info(ctx.request.query)
  let { current_page, page_size, status, word } = ctx.request.query;
  await new Promise((resolve, reject) => {
    client.execute(
      "taobao.ju.items.search",
      {
        param_top_item_query: {
          current_page: current_page,
          page_size: page_size,
          // pid: pid,
          status: status, //状态，预热：1，正在进行中：2,可不传
          word: word
        }
      },
      function(error, response) {
        if (!error) ctx.state.data = { res: response };
        else ctx.state.data = { code: 0, msg: "请求失败" };
        resolve();
      }
    );
  })
}
/**
 * 获取店铺信息
 * @param {*} ctx 
 */
exports.ShopGet = async ctx => {
  let { q, sort, is_tmall, start_credit, end_credit, start_commission_rate, end_commission_rate, start_total_action, end_total_action, platform, page_no, page_size} = ctx.request.query

  await new Promise((resolve,reject) => {

    client.execute(
      "taobao.tbk.shop.get",
      {
        fields:
          "user_id,shop_title,shop_type,seller_nick,pict_url,shop_url",
        q: q,
        sort: sort,
        is_tmall: is_tmall,
        start_credit: start_credit,
        end_credit: end_credit,
        start_commission_rate: start_commission_rate,
        end_commission_rate: end_commission_rate,
        start_total_action: start_total_action,
        end_total_action: end_total_action,
        platform: platform,
        page_no: page_no,
        page_size: page_size
      },
      function(error, response) {
        if (!error) ctx.state.data = { res: response };
        else ctx.state.data = { code: 0, msg: "请求失败" };
        resolve();
      }
    );

  })
}

/**
 * 淘口令转换
 * @param {*} ctx 
 */
exports.TpwdCreate = async ctx => {
  let { text, url, logo} = ctx.request.query
  await new Promise( (resolve, reject) => {
    client.execute(
      "taobao.tbk.tpwd.create",
      {
        text: text,
        url: url,
        logo: logo,
      },
      function(error, response) {
        if (!error) ctx.state.data = { res: response };
        else ctx.state.data = { code: 0, msg: "请求失败" };
        resolve();
      }
    );
  })


}

/**
 * 淘抢购api
 * 时间格式 2016-08-09 09:00:00
 * @param {*} ctx 
 */
exports.TqgGet = async ctx => {
  let { start_time, end_time, page_no, page_size} = ctx.request.query;

  await new Promise((resolve,reject) => {
      client.execute(
        "taobao.tbk.ju.tqg.get",
        {
          adzone_id: adzone_id,
          fields:
            "click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time",
          start_time: start_time,
          end_time: end_time,
          page_no: page_no,
          page_size: page_size
        },
        function(error, response) {
          if (!error) ctx.state.data = { res: response };
          else ctx.state.data = { code: 0, msg: "请求失败" };
          resolve();
        }
      );
  })
}
