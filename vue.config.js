module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  lintOnSave: false,
};
