const Model = require("../db.js")
const moment = require("moment")

exports.insertArt = async ctx => {
    let { content, title,tags,categories,author_id,status } = ctx.request.query;

    let arr = [title, , moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), content, author_id, "post", status, tags, categories, 0, 0, 1, 1, 1];
    let back = await Model.insetArt(arr);
    ctx.state.data = { back: back, sts: 1 };
}