export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fresh meals | Meallie',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Fresh meals everyday.'}
    ],
    link: []
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
    '~/plugins/vue-debounce',
    '~/plugins/vue-youtube',
    '~/plugins/font-awesome',
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
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
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

    ssrPrefetchTimeout: 2000, // Server side timeout for prefetch,
    // Integrate with @nuxt/axios
    axios() {
      return this.$axios
    }
  }

}
