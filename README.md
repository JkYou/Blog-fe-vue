# vue-blog

> a blog by vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### tbk接口参数说明
```
/**

taobao.tbk.item.get
名称	类型	必须	示例值	描述
fields	String	true	num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick	需返回的字段列表
q	String	false	女装	查询词
cat	String	false	16,18	后台类目ID，用,分割，最大10个，该ID可以通过taobao.itemcats.get接口获取到
itemloc	String	false	杭州	所在地
sort	String	false	tk_rate_des	排序_des（降序），排序_asc（升序），销量（total_sales），淘客佣金比率（tk_rate）， 累计推广量（tk_total_sales），总支出佣金（tk_total_commi）
is_tmall	Boolean	false	false	是否商城商品，设置为true表示该商品是属于淘宝商城商品，设置为false或不设置表示不判断这个属性
is_overseas	Boolean	false	false	是否海外商品，设置为true表示该商品是属于海外商品，设置为false或不设置表示不判断这个属性
start_price	Number	false	10	折扣价范围下限，单位：元
end_price	Number	false	10	折扣价范围上限，单位：元
start_tk_rate	Number	false	123	淘客佣金比率上限，如：1234表示12.34%
end_tk_rate	Number	false	123	淘客佣金比率下限，如：1234表示12.34%
platform	Number	false	1	链接形式：1：PC，2：无线，默认：１
page_no	Number	false	123	第几页，默认：１
page_size	Number	false	20	页大小，默认20，1~100

*/
```
