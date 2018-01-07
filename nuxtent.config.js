module.exports = {
  content: [
    // [
    //   'pages',
    //   {
    //     page: '/_slug',
    //     permalink: '/pages/:slug',
    //     isPost: false,
    //     generate: ['get', 'getAll']
    //   }
    // ],
    [
      'ideas',
      {
        page: '/ideas/_slug',
        permalink: '/ideas/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ]
}
