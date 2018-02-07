module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'amma-nk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      /*{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }*/
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /* babel: {
      presets: ['vue-app'] // by default
      presets: ['es2015', 'stage-0']
    } */
  },

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    // '@/assets/css/global.css',
    // SCSS file in the project
    '@/assets/css/global.scss'
  ]
}
