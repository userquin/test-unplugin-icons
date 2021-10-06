// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-icons/webpack")({
        compiler: "vue2",
      }),
    ],
  },
};
