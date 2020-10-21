const pkg = require('./package')

module.exports = {
  mode: 'spa',
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  head: {
    title: pkg.title,
    meta: [{
        charset: 'utf-8'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Raleway:400,900" rel="stylesheet'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous'
      }
    ]
  },
  css: ['@/assets/scss/main.scss', 'aos/dist/aos.css'],
  modules: [
    // Simple usage
    'fullpage-nuxt',
    // ['vue-scrollto/nuxt', { duration: 300 }],
    // 'vue-scrollto/nuxt',

  ],

  vender: [
    'element-ui'
  ],
  babel: {
    "plugins": [
      ["component", [{
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]
    ],
    comments: true
  },

  plugins: [
    '~/plugins/bootstrap-vue',
    {
      src: '~/plugins/aos',
      ssr: false
    },
    {
      src: '~/plugins/vue-carousel-3d',
      ssr: false
    },
    {
      src: '~/plugins/global.js',
      ssr: false
    },
    {
      src: '~plugins/element-ui',
      ssr: true
    },
    // { src:'~plugins/vue-scrollto.js', ssr: true }
    // { src:'~plugins/vue-router.js', ssr: true }
  ],


  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [
              /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
              /^bootstrap-vue/
            ]
          })
        ]
      }
    }
  }
}
