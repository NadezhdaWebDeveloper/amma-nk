module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Amma-NK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jcf/1.2.3/js/jcf.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jcf/1.2.3/js/jcf.select.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jcf/1.2.3/js/jcf.checkbox.js' }
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
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // For Vue Slick
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
      // End For Vue Slick
    },

    /* babel: {
      presets: ['vue-app'] // by default
      presets: ['es2015', 'stage-0']
    } */
  },

  css: [
    '@/assets/css/global.scss'
  ],

  // modules: [
  //   'nuxt-google-maps-module',
  // ],
  // google: {
  //   key: "AIzaSyBL9AMx-tXllSKsq6mP7Hemvk7BCk5tLUI",
  //   libraries: [
  //     'places',
  //   ],
  // },

  plugins: [
    {src: '~/plugins/check-mobile.js', ssr: false}
  ],

  router: {
    linkActiveClass: 'current-menu-item'
  },
}
