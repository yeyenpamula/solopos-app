module.exports = {
  siteName: 'Solopos',
  siteDescription: 'Panduan Informasi dan Inspirasi',

  templates: {
    WordPressCategory: '/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:slug-:id', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://www.solopos.com', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
