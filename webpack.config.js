// const path = require("path");

module.exports = {
  mode: "production", // 使用优化
  entry: "./src/index.js",
  output: {
    filename: "library.js",
    library: {
      type: "umd", //打包后可生成支持import和require() 引用的两种js文件
      name: "library", //通过 script标签引用时，生成全局变量名称
    },
  },

  externals: {
    lodash: "lodash",
  },
};
