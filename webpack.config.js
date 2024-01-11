// const path = require("path");

module.exports = {
  mode: "production", // 使用优化
  entry: "./src/index.js",
  experiments: {
    outputModule: true, // 这样输出可支持es import的库,搭配 library.type='module'
  },
  output: {
    // filename: "library.js",
    filename: "index.js",
    library: {
      type: "module",
      // type: "umd", //打包后可生成支持commonjs AMD 引用的两种js文件
      // name: "library", //通过 script标签引用时，生成全局变量名称
    },
    // clean: true,
  },
  // 排除需要打包的依赖，因为其他人可能在使用我们库时也使用了lodash
  externals: {
    lodash: "lodash",
  },
};
