module.exports = async ctx => {
  console.info(ctx.request);
  ctx.state.data = {
    msg: "hello"
  };
};