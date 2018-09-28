'use strict';
const logUtil = require('../config/log_utils');
let middleLog = async (ctx,next) => {
  const start = new Date();
  let ms;
  try {
    await next();
    ms = new Date() - start;
    logUtil.logResponse(ctx, ms);
  } catch (e) {
    ms = new Date() - start;
    logUtil.logError(ctx, e, ms);
  }
}

module.exports = middleLog;
