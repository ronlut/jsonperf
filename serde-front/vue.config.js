module.exports = {
  transpileDependencies: ["vuetify", "vue-echarts", "resize-detector"],
  configureWebpack: {
    devServer: {
      proxy: {
        "/": {
          target: "http://localhost:5000",
          // pathRewrite: { "^/api": "" }
        }
      }
    }
  }
};
