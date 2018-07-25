const CONF = {
  serverHost: "localhost",
  networkTimeout: 30000,
  port: "8090",
  rootPathname: "",

  /**
   * MySQL 配置，用来存储 session 和用户信息
   */
  // create database cAuth
  SQL: {
    host: "47.98.120.163",
    port: 3306,
    user: "root",
    db: "blog",
    pass: "admin"
    // char: 'utf8mb4'
  }
};

module.exports = CONF
