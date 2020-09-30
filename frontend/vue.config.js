module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "JSONPerf";
          return args;
        })
  },
  transpileDependencies: ["vuetify", "vue-echarts", "resize-detector"],
  configureWebpack: {
    devServer: {
      // disableHostCheck: true,
      proxy: {
        "/": {
          target: "http://localhost:5000",
          // pathRewrite: { "^/api": "" }
        }
      }
    }
  }
};
