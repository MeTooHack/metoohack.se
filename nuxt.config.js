module.exports = {
  build: {
    vendor: ['vee-validate'],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
  },
  css: [
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    { src: '~/assets/styles/main.scss', lang: 'scss' }
  ],
  modules: [
    'nuxtent',
    ['@nuxtjs/google-analytics', {
      id: 'UA-110410768-2'
    }]
  ],
  head: {
    title: '#MeToo Hack',
    titleTemplate: '%s - #MeToo Hack Göteborg 2017',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'MeToo Hack 2018' },
      { property:'og:type', content:'website' },
      { property:'og:title', content:'#MeToo Hack - Göteborg 3 Feb' },
      { property:'og:description', content:'Shaken (and deeply frustrated) by the #MeToo movement, as digital creators we have decided to join forces and take action. In a one day hack 10 teams will prototype creative solutions to the underlying problems shown by #MeToo.' },
      { property:'og:image', content:'https://metoohack.se/img/og_image_wide.png' },
      { property:'og:url', content:'https://metoohack.se/' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400|Quicksand:400,700' },
      { rel: 'icon', href: '/favicon_16.png?v=1.0', type:'image/png', sizes:'16x16' },
      { rel: 'icon', href: '/favicon_32.png?v=1.0', type:'image/png', sizes:'32x32' },
      { rel: 'icon', href: '/favicon_196.png?v=1.0', type:'image/png', sizes:'196x196' },
      { rel: 'apple-touch-icon-precomposed', href: '/favicon_144.png?v=1.0', type:'image/png', sizes:'144x144' },
      { rel: 'apple-touch-icon-precomposed', href: '/favicon_152.png?v=1.0', type:'image/png', sizes:'152x152' }
    ]
  }
}
