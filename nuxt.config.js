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
      { property:'og:title', content:'#MeToo Hack - Göteborg 3 Feb' },
      { property:'og:description', content:'Shaken (and deeply frustrated) by the #MeToo movement, as digital creators we have decided to join forces and take action. In a one day hack 10 teams will prototype creative solutions to the underlying problems shown by #MeToo.' },
      { property:'og:image', content:'https://metoohack.se/img/og_image_wide.png' },
      { property:'og:url', content:'https://metoohack.se/' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400|Permanent+Marker' },
      { rel: 'icon', href: '/favicon_16.png', type:'image/png', sizes:'16x16' },
      { rel: 'icon', href: '/favicon_32.png', type:'image/png', sizes:'32x32' },
    ]
  }
}
