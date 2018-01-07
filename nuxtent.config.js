module.exports = {
  content: [
    [
      'ideas',
      {
        page: '/ideas/_slug',
        permalink: '/ideas/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ],
    [
      'press',
      {
        page: '/press/_slug',
        permalink: '/press/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ]
}
