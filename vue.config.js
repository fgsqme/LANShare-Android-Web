const path= require("path");
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: '80',
    open: true,
    host: '0.0.0.0',
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://localhost:8080`,
				target: `http://47.99.247.6:8080/ssm3`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // sass 全局变量自动导入
        prependData: `
          @import "@/assets/css/common.scss";
        `,
      },
      less: {
        lessOptions: {
          // 定制主题 -- 变量覆盖
          modifyVars: {
            "primary-color": "#3B82FE", // 基础色
            "link-color": "#3B82FE",
            "border-radius-base": "6px",
            // 'success-color': '#3995ff', // 成功色
            "warning-color": "#f26b24", // 警告色
            "error-color": "#FE4128", // 错误色
            "font-size-base": "14px", // 主字号
            "heading-color": "#333333", // 标题色
            "text-color": "#333333", // 主文本色
            "text-color-secondary": "#999999", // 次文本色
            "disabled-color": "#999999", // 失效色
            "border-radius-base": "5px", // 组件/浮层圆角
            "border-color-base": "#B3B3B3", // 边框色
            // 'box-shadow-base': 'none', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  productionSourceMap: false, // 关闭sourcemap
};
