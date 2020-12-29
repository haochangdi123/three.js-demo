
import webpack from 'webpack';
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui' },
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'referrer', content: 'never' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      { innerHTML: `var ua=window.navigator.userAgent.toLowerCase();var url=window.location.href;if(ua.indexOf("msie")>=0 && url.indexOf('low-version')<0){window.location.replace(window.location.protocol+"//"+window.location.hostname+(window.location.port?':'+window.location.port:'')+'/low-version')}` }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.less',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vue-inject', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  loading: false,
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  server: {
    port: 3022,
    host: '0.0.0.0'
  },
  router: {
    // 错误路由重定向到首页
    extendRoutes (routes, resolve) {
      routes.push({
        path: '*',
        redirect: '/'
      })
    },
    fallback: true
  },
  build: {
    extractCSS: true,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash:7].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash:7].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash:7].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[hash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[hash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[hash:7].[ext]'
    },
    extend(config) {
      config.plugins.push(new webpack.ProvidePlugin({
        THREE: 'three'
      }));
    },
    // 解决ie11及以下 引用插件不编译问题
    transpile: [
      'swiper',
      'dom7',
      'vue-baidu-map',
      'three'
    ],
  },
  vue: {}
}
