export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Meallie.',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/buefy',
    '~/plugins/vue-chimera',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/router',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-material-design-icons'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: [
      '/'
    ]
  },
  chimera: {
    // Server side prefetch will only be available for resources that has `prefetch` and `ssrPrefetch`
    prefetch: 'get',

    // Enables server side prefetch on resources
    // true: fetched on server
    // false: fetched on client
    // 'override': fetched on server and client (overrided by client)
    ssrPrefetch: true,

    ssrPrefetchTimeout: 2000 // Server side timeout for prefetch
  }

}
